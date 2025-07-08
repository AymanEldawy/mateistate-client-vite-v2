import { NATIONALITY_LISTS } from "@/helpers/DEFAULT_OPTIONS";
import { RHFInput, RHFSelectField } from "../../fields";

const OwnerForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="name" label="name" required />
        <RHFInput name="ltnname" label="ltnname" />
        <RHFInput name="id_card" label="id_card" />
        <RHFInput name="cell_phone" label="cell_phone" />
        <RHFInput name="mailbox" label="mailbox" />
        <RHFInput name="address" label="address" />
        <RHFSelectField name="nationality" label="nationality" options={NATIONALITY_LISTS} />
      </div>
    </div>
  );
};

export default OwnerForm;
