import { COST_CENTER_FIELDS } from "@/helpers/costCenter/costCenterFields";
import { RHFInput } from "../../fields";

const CostCenterForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...COST_CENTER_FIELDS?.code} />
        <RHFInput {...COST_CENTER_FIELDS?.name} />
        <RHFInput {...COST_CENTER_FIELDS?.ltnname} />
      </div>
      {/* <RHFDatePicker {...Lessor_FIELDS?.passport_expiry_date} /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...COST_CENTER_FIELDS?.note} />
        <RHFInput {...COST_CENTER_FIELDS?.parent_id} />
      </div>
    </div>
  );
};

export default CostCenterForm;
