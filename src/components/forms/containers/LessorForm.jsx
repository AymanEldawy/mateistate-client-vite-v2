import { NATIONALITY_LISTS } from "@/helpers/DEFAULT_OPTIONS";
import { RHFDatePicker, RHFInput, RHFSelectField } from "../fields";

const LessorForm = () => {

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="name" label="name" required />
        <RHFInput name="ltnname" label="ltnname" />
        <RHFInput name="passport" label="passport" required />
        <RHFDatePicker name="passport_expiry_date" label="passport_expiry_date" />
        <RHFInput name="id_card" label="id_card" />
        <RHFInput name="lessor_card" label="lessor_card" />
        <RHFInput name="cell_phone" label="cell_phone" />
        <RHFInput name="number" label="number" />
        <RHFInput name="address" label="address" />
        <RHFInput name="fax" label="fax" />
        <RHFSelectField name="nationality" label="nationality" options={NATIONALITY_LISTS} />
        <RHFInput name="mobile" label="mobile" />
        <RHFInput name="note" label="note" />
        <RHFInput name="mailbox" label="mailbox" />
        <RHFInput name="email" label="email" type="email" required />
        <RHFInput name="role" label="role" />
      </div>
    </div>
  );
};

export default LessorForm;
