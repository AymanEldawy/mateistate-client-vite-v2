import { SubStepsList } from "@/components/shared/SubStepsList";
import {
  BUILDING_BUYING_FIELDS,
  BUILDING_EDITORIAL_FIELDS,
  BUILDING_FIELDS,
  BUILDING_INVESTMENT_FIELDS,
  BUILDING_REAL_ESTATE_DEVELOPMENT_FIELDS,
  BUILDING_REAL_ESTATE_MANAGEMENT_FIELDS,
  BUILDING_UNITS_FIELDS
} from "@/helpers/building/buildingFields";
import { FLATS } from "@/helpers/building/buildingHelpers";
import { BUILDING_STEPS } from "@/helpers/building/buildingSteps";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import DynamicForm from "../../wrapper/DynamicForm";
import BuildingFormAccounts from "./BuildingFormAccounts";

const SUB_STEPS = [
  "real_estate_management",
  "buying",
  "editorial_entry",
  "investment",
  "real_estate_development",
];

const BuildingForm = ({ tab }) => {
  const { watch, setValue } = useFormContext()
  const [currentSubIndex, setCurrentSubIndex] = useState(0)

  const calculateFlats = (name) => {
    // return
    let flat = name?.split(".").at(-1);
    switch (flat) {
      case "apartmentCount":
      case "apartmentFloor":
        FLATS.apartmentCount =
          watch("apartmentCount") * watch("apartmentFloor");
        break;
      case "penthouseCount":
      case "penthouseFloor":
        FLATS.penthouseCount =
          watch("penthouseCount") * watch("penthouseFloor");

        break;
      case "parkingCount":
      case "parkingFloor":
        FLATS.parkingCount = watch("parkingCount") * watch("parkingFloor");

        break;
      case "mezzanineCount":
      case "mezzanineFloor":
        FLATS.mezzanineCount =
          watch("mezzanineCount") * watch("mezzanineFloor");

        break;
      case "officeCount":
      case "officeFloor":
        FLATS.officeCount = watch("officeCount") * watch("officeFloor");

        break;
      case "storeCount":
        FLATS.storeCount = watch("storeCount");
        break;

      case "shopCount":
        FLATS.shopCount = watch("shopCount");

        break;
      case "warehouseCount":
        FLATS.warehouseCount = watch("warehouseCount");

        break;
      case "service_apartments":
        FLATS.serviceApartments = watch("serviceApartments");

        break;
      case "drivers_apartments":
        FLATS.driversApartments = watch("driversApartments");

        break;
      case "underground_parking": {
        let undergroundParking = watch("undergroundParking");
        FLATS.undergroundParking = undergroundParking;
      }

        break;
      default:
        return;
    }
  };


  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!type) return
      calculateFlats(name, watch, setValue);
    });
    return () => subscription.unsubscribe();
  }, [watch]);


  const displayForm = () => {
    switch (tab) {
      case BUILDING_STEPS.building_units:
        return <DynamicForm fields={BUILDING_UNITS_FIELDS} />
      case BUILDING_STEPS.building_ownership: {
        return (
          <div className="items-start -mt-4 -ml-4">
            <SubStepsList
              steps={SUB_STEPS}
              goTo={setCurrentSubIndex}
              activeStage={currentSubIndex}
            />
            {currentSubIndex === 0 && <DynamicForm fields={BUILDING_REAL_ESTATE_MANAGEMENT_FIELDS} />}
            {currentSubIndex === 1 && <DynamicForm fields={BUILDING_BUYING_FIELDS} />}
            {currentSubIndex === 2 && <DynamicForm fields={BUILDING_EDITORIAL_FIELDS} />}
            {currentSubIndex === 3 && <DynamicForm fields={BUILDING_INVESTMENT_FIELDS} />}
            {currentSubIndex === 4 && <DynamicForm fields={BUILDING_REAL_ESTATE_DEVELOPMENT_FIELDS} />}
          </div>
        )
      }
      case BUILDING_STEPS.building_default_accounts:
        return <BuildingFormAccounts />
      default:
        return <DynamicForm customGrid="grid-cols-2 gap-4" fields={BUILDING_FIELDS} />
    }
  }

  return (
    <div className="p-4 min-h-[350px] w-[95vh]">
          {displayForm()}
          {BUILDING_STEPS.building_units === tab && (
            <div className="grid grid-cols-3 text-xs mt-4 border-t pt-2 gap-4">
              {Object.entries(FLATS)?.map(([key, val]) => {
                return (
                  <span
                    key={key}
                    className="bg-blue-50 rounded-md py-1 px-2 whitespace-nowrap text-blue-500 border text-center capitalize flex items-center gap-2 justify-between"
                  >
                    {key?.replace(/_|count/ig, " ")} <span className="p-[2px] rounded-md bg-blue-500 text-white px-2">{val || 0}</span>
                  </span>
                );
              })}
            </div>
          )}
    </div>
  );
};

export default BuildingForm;
