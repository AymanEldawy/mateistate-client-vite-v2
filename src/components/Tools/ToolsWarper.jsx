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

  const getBuildingOwning = async (building) => { };

  const { data: building } = useQuery({
    queryKey: ["building", id],
    queryFn: async () => {
      const res = await getSingleBuilding(id);

      return {
        ...res,



        "apartmentFloor": 4,

        "mezzanineFloor": 5,

        "officeFloor": 6,

        "parkingFloor": 3,

        "penthouseFloor": 3,

        "undergroundParking": 4,

        "apartmentCount": 4,

        "bankAccountNumber": null,

        "buildingBankAccountId": null,

        "buildingCashAccountId": null,

        "buildingChequeAccountId": null,

        "buildingDepositAccountId": null,

        "buildingDiscountAccountId": null,

        "buildingInsuranceAccountId": null,

        "buildingRevenueAccountId": null,

        "commissionExpenseAccountId": null,

        "customersMainAccountId": null,

        "deferredVatAccountId": null,

        "entryCommissionFromOwnerAccountId": null,

        "entryLandlordAccountId": null,

        "entryRevenueAccountId": null,

        "entryVatAccountId": null,

        "investmentOwnerAccountId": null,

        "mezzanineCount": 3,

        "officeCount": 4,

        "ownerAccountId": null,

        "ownerTaxAccountId": null,

        "parkingCount": 2,

        "penthouseCount": 2,

        "realestateCompanyAccountId": null,

        "receivedAccountId": null,

        "shopCount": 3,

        "storeCount": 3,

        "supplierAccountId": null,

        "vatAccountId": null,

        "warehouseCount": 7

      }
    },
    enabled: !!id
  });


  const { refetch } = useQuery({
    queryKey: ["property_values", building?.id],
    queryFn: async () => {
      const response = await getBuildingDetails(building?.id);
      reset({
        grid: response?.result?.sort((a, b) => a?.row_index - b?.row_index),
      });
    },
    enabled: !!building?.id
  });

  useEffect(() => {
    if (!building?.id) return;

    calculateFlats(building);
    getBuildingOwning(building);
    refetchBuildingAssets(
      building?.id,
      setFlatsDetails,
      COLLECTION_COUNTS,
      setUNITS_COLORED_COUNT
    );
  }, [building?.id]);


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
      building,
      UPDATES_ROWS
    );

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

  console.log({
    flatsDetails,
    grid: watch("grid")
  });
  

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
