import { FLATS } from "@/data/constants";
import { useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import DynamicForm from "../../wrapper/DynamicForm";
import { SubStepsList } from "@/components/shared/SubStepsList";
import { BUILDING_STEPS } from "@/helpers/building/buildingSteps";
import {
  BUILDING_UNITS_FIELDS,
  BUILDING_BUYING_FIELDS,
  BUILDING_EDITORIAL_FIELDS,
  BUILDING_INVESTMENT_FIELDS,
  BUILDING_REAL_ESTATE_DEVELOPMENT_FIELDS,
  BUILDING_REAL_ESTATE_MANAGEMENT_FIELDS,
  BUILDING_DEFAULT_ACCOUNTS_FIELDS,
  BUILDING_FIELDS
} from "@/helpers/building/buildingFields";

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
      case "apartment_count":
      case "apartment_floor":
        FLATS.apartment_count =
          watch("apartment_count") * watch("apartment_floor");
        break;
      case "penthouse_count":
      case "penthouse_floor":
        FLATS.penthouse_count =
          watch("penthouse_count") * watch("penthouse_floor");

        break;
      case "parking_count":
      case "parking_floor":
        FLATS.parking_count = watch("parking_count") * watch("parking_floor");

        break;
      case "mezzanine_count":
      case "mezzanine_floor":
        FLATS.mezzanine_count =
          watch("mezzanine_count") * watch("mezzanine_floor");

        break;
      case "office_count":
      case "office_floor":
        FLATS.office_count = watch("office_count") * watch("office_floor");

        break;
      case "store_count":
        FLATS.store_count = watch("store_count");
        break;

      case "shop_count":
        FLATS.shop_count = watch("shop_count");

        break;
      case "warehouse_count":
        FLATS.warehouse_count = watch("warehouse_count");

        break;
      case "service_apartments":
        FLATS.service_apartments = watch("service_apartments");

        break;
      case "drivers_apartments":
        FLATS.drivers_apartments = watch("drivers_apartments");

        break;
      case "underground_parking": {
        let underground_parking = watch("underground_parking");
        FLATS.underground_parking = underground_parking;
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

  const buildingFormValid = useCallback(() => {
    let valid = false;
    for (const flat in FLATS) {
      if (FLATS?.[flat]) valid = true;
    }
    return valid;
  }, []);

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
        return <DynamicForm fields={BUILDING_DEFAULT_ACCOUNTS_FIELDS} customGrid="grid-cols-2 gap-4" />
      default:
        return <DynamicForm fields={BUILDING_FIELDS} />
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
