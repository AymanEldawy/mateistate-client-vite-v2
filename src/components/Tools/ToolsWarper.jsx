import { FLAT_PROPERTY_TABS, FLATS, refetchBuildingAssets } from "@/helpers/building/buildingHelpers";
import useFlatColoring from "@/hook/useFlatColoring";
import { generateBuildingDetailsAndUnits, getBuildingDetailsAndUnits, getSingleBuilding } from "@/services/buildingService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Btn from "../shared/Btn";
import Loading from "../shared/Loading";
import { ToolsColorsBar } from "./ToolsColorsBar";
import { ToolsContentBar } from "./ToolsContentBar";
import { ToolsTabsTable } from "./ToolsTabsTable";
import { ToolsTabsTableForm } from "./ToolsTabsTableForm";


const calculateFlats = (building) => {
  FLATS.apartmentCount = building?.apartmentCount * building?.apartmentFloor;
  FLATS.penthouseCount = building?.penthouseCount * building?.penthouseFloor;
  FLATS.parkingCount = building?.parkingCount * building?.parkingFloor;
  FLATS.mezzanineCount = building?.mezzanineCount * building?.mezzanineFloor;
  FLATS.officeCount = building?.officeCount * building?.officeFloor;
  FLATS.storeCount = building?.storeCount || 0;
  FLATS.warehouseCount = building?.warehouseCount || 0;
  FLATS.undergroundParking = building?.undergroundParking || 0;
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

  const { data: building } = useQuery({
    queryKey: ["building", id],
    queryFn: async () => {
      const res = await getSingleBuilding(id);
      return res
    },
    enabled: !!id
  });


  const { refetch } = useQuery({
    queryKey: ["property_values", building?.id],
    queryFn: async () => {
      const data = await getBuildingDetailsAndUnits(building?.id);
      if (data?.success) {
        if (data?.propertyValues?.length)
          reset({
            grid: data?.propertyValues,
          });
        calculateFlats(building);
        refetchBuildingAssets(
          {
            parking: data?.parkings,
            shop: data?.shops,
            apartment: data?.apartments,
          },
          setFlatsDetails,
          COLLECTION_COUNTS,
          setUNITS_COLORED_COUNT
        );
      }
    },
    enabled: !!building?.id
  });

  const onSubmit = async (value) => {
    let grid = watch("grid");

    if (!grid?.length || Object.keys(flatsDetails)?.length === 0) {
      toast.error("Please fill the grid and flats details before submitting.");
      return;
    }

    const collectFlats = (keys) =>
      keys.flatMap(key => flatsDetails?.[key] ? Object.values(flatsDetails[key]) : []);

    const apartments = collectFlats(['apartment', 'mezzanine', 'office', 'penthouse', 'warehouse']);
    const shops = collectFlats(['store', 'shop']);
    const parkings = collectFlats(['parking', 'underground']);

    setIsLoading(true);

    const response = await generateBuildingDetailsAndUnits({
      propertyValues: grid,
      mainBuildingId: building?.id,
      units: {
        apartments,
        shops,
        parkings,
      }
    });

    if (response?.isCompleted) {
      setUPDATES_ROWS({});
      refetch();
      refetchBuildingAssets(
        building?.id,
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
              to={`/buildings?number=${building?.number}`}
              state={{ row: building, table: "building" }}
              className="text-blue-500 dark:text-white hover:underline text-sm"
            >
              Edit Building: {building?.name}
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
            <ToolsTabsTableForm errors={errors} row={building} />
          </div>
          <div className="mt-9 shadow border border-gray-300 dark:border-dark-border overflow-hidden">
            <div className="flex items-center overflow-auto text-left bg-gray-100 dark:bg-dark-bg ">
              {Object.values(FLAT_PROPERTY_TABS)?.map((tab, index) => {
                if (building?.[tab?.x])
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
                row={building}
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
