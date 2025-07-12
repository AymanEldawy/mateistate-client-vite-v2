import { BUILDING_DEFAULT_ACCOUNTS_FIELDS } from "@/helpers/building/buildingFields";
import { AccountLeaveField } from "../../global";

const BuildingFormAccounts = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {BUILDING_DEFAULT_ACCOUNTS_FIELDS?.map((field) => (
        <AccountLeaveField {...field} />
      ))}
    </div>
  );
};

export default BuildingFormAccounts;
