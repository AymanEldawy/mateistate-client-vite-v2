import { FLAT_PROPERTY_TABS, FLATS, refetchBuildingAssets } from "@/helpers/building/buildingHelpers";
import useFlatColoring from "@/hook/useFlatColoring";
import { generateBuildingUnits, getBuildingDetails, getSingleBuilding } from "@/services/buildingService";
import { useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import Loading from "../shared/Loading";
import Btn from "../shared/Btn";
import { ToolsTabsTable } from "./ToolsTabsTable";
import { Link, useParams } from "react-router-dom";
import { ToolsContentBar } from "./ToolsContentBar";
import { ToolsColorsBar } from "./ToolsColorsBar";
import { ToolsTabsTableForm } from "./ToolsTabsTableForm";
import { useQuery } from "@tanstack/react-query";


const calculateFlats = (building) => {
  FLATS.apartment_count = building?.apartment_count * building?.apartment_floor;
  FLATS.penthouse_count = building?.penthouse_count * building?.penthouse_floor;
  FLATS.parking_count = building?.parking_count * building?.parking_floor;
  FLATS.mezzanine_count = building?.mezzanine_count * building?.mezzanine_floor;
  FLATS.office_count = building?.office_count * building?.office_floor;
  FLATS.store_count = building?.store_count || 0;
  FLATS.warehouse_count = building?.warehouse_count || 0;
  FLATS.underground_parking = building?.underground_parking || 0;
};

const ToolsWarper = () => {
  const { id } = useParams();
  const {
    flatsDetails,
    setFlatsDetails,
    COLLECTION_COUNTS,
    UPDATES_ROWS,
    setUPDATES_ROWS,
    UNITS_COLORED_COUNT,
    setUNITS_COLORED_COUNT,
  } = useFlatColoring();
  const [row, setRow] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    watch,
    handleSubmit,
    formState: { errors },
    reset
  } = useFormContext();
  const [selectedTab, setSelectedTab] = useState(
    Object.values(FLAT_PROPERTY_TABS)?.[0]
  );
  const getBuildingOwning = async (building) => {};

  const { refetch } = useQuery({
    queryKey: ["property_values"],
    queryFn: async () => {
      const response = await getBuildingDetails(row?.id);
      reset({
        grid: response?.result?.sort((a, b) => a?.row_index - b?.row_index),
      });
    },
    enabled: !!row?.id
  });
  useQuery({
    queryKey: ["building", id],
    queryFn: async () => {
      const res = await getSingleBuilding({ id });
      setRow(res.result.at(0));
    },
  });

  useEffect(() => {
    if (!row?.id) return;
  }, [row?.id]);

  useEffect(() => {
    calculateFlats(row);
    getBuildingOwning(row);
    refetchBuildingAssets(
      row?.id,
      setFlatsDetails,
      COLLECTION_COUNTS,
      setUNITS_COLORED_COUNT
    );
  }, [row?.id]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => { });
  }, [watch]);

  console.log(watch(), 'watch');

  const onSubmit = async (value) => {
    console.log("🚀 ~ onSubmit ~ value:", value)

    let grid = watch("grid");
    setIsLoading(true);
    const response = await generateBuildingUnits(
      grid,
      flatsDetails,
      row,
      UPDATES_ROWS
    );

    if (response?.isCompleted) {
      setUPDATES_ROWS({});
      refetch();
      refetchBuildingAssets(
        row?.id,
        setFlatsDetails,
        COLLECTION_COUNTS,
        setUNITS_COLORED_COUNT
      );
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? <Loading /> : null}
      <div
        className={`p-4 shadow bg-white dark:bg-dark-bg rounded-md container`}
      >
        <ToolsContentBar
          title="Flat Building Details"
          description={
            <Link
              to={`/building/${row?.number}`}
              state={{ row, table: "building" }}
              className="text-blue-500 dark:text-white hover:underline text-sm"
            >
              Edit Building: {row?.name}
            </Link>
          }
        >
          <ToolsColorsBar />
        </ToolsContentBar>
        <div className="flex flex-wrap gap-2 items-center pb-2 border-b dark:border-dark-border">
          {Object.entries(FLATS)?.map(([key, val]) => {
            let assets = key
              ?.replace(/_count/g, "")
              ?.replace(/_/g, " ")
              ?.toLowerCase();

            let assetsColoringCount = Object.keys(
              UNITS_COLORED_COUNT?.[assets] || {}
            )?.length;

            if (val)
              return (
                <span
                  key={key}
                  className={`rounded-md py-1 px-2 ${val - assetsColoringCount
                    ? "text-red-500 bg-red-50 font-normal border-red-500"
                    : "text-gray-400"
                    } border text-center capitalize`}
                >
                  {key?.replace("_", " ")} : {val - assetsColoringCount}
                </span>
              );
          })}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="overflow-auto max-h-96">
            <ToolsTabsTableForm errors={errors} row={row} />
          </div>
          <div className="mt-9 shadow border border-gray-300 dark:border-dark-border overflow-hidden">
            <div className="flex items-center overflow-auto text-left bg-gray-100 dark:bg-dark-bg ">
              {Object.values(FLAT_PROPERTY_TABS)?.map((tab, index) => {
                if (row?.[tab?.x])
                  return (
                    <button
                      type="button"
                      onClick={() => setSelectedTab(tab)}
                      key={`${index}-${tab?.tabName}`}
                      className={`${selectedTab?.tabName === tab?.tabName
                        ? "!text-black !font-medium dark:bg-dark-border dark:!text-white bg-white"
                        : ""
                        } border dark:border-dark-border p-2 px-4 text-sm text-gray-500 font-normal min-w-[120px] w-fit capitalize whitespace-nowrap`}
                    >
                      {tab?.tabName}
                    </button>
                  );
              })}
            </div>
            <div key={selectedTab}>
              <ToolsTabsTable
                flatsDetails={flatsDetails}
                setFlatsDetails={setFlatsDetails}
                selectedTab={selectedTab}
                row={row}
                tab={FLAT_PROPERTY_TABS}
              />
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <Btn kind="primary" type="submit" >Submit</Btn>
          </div>
        </form>
      </div>


    </>
  );
};

export default ToolsWarper;
