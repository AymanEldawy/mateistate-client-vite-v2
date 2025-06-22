import { RHFInput } from "../../fields";
import CostCenterField from "../../global/CostCenterField";

const CostCenterForm = () => {

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="code" label="code" type="number" required />
        <RHFInput name="name" label="name" required />
        <RHFInput name="ltnname" label="ltnname" />
        {/* <RHFDatePicker name="passport_expiry_date" label="passport_expiry_date" /> */}

        <RHFInput name="note" label="note" />
        <CostCenterField name="parentId" label="parent_id" />
      </div>
    </div>
  );
};

export default CostCenterForm;
