import { COST_CENTER_FIELDS } from "@/helpers/costCenter/costCenterFields";
import { RHFInput } from "../../fields";

const CostCenterForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="code" label="code" type="number" required />
        <RHFInput name="name" label="name" required />
        <RHFInput name="ltnname" label="ltnname" />
      </div>
      {/* <RHFDatePicker {...Lessor_FIELDS?.passport_expiry_date} /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="note" label="note" />
        <RHFInput name="parent_id" label="parent_id" />
      </div>
    </div>
  );
};

export default CostCenterForm;
