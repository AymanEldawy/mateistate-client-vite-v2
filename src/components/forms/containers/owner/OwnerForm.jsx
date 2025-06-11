import { RHFInput } from "../../fields";
import { AccountField } from "../../global";

const OwnerForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="name" lablel="name" required />
        <RHFInput name="ltnname" lablel="ltnname" />
        <RHFInput name="id_card" lablel="id_card" />
        <RHFInput name="cell_phone" lablel="cell_phone" />
        <RHFInput name="mailbox" lablel="mailbox" />
        <RHFInput name="address" lablel="address" />
        <RHFInput name="nationality" lablel="nationality" />
        <AccountField name="accountId" label="account_id" />
      </div>
    </div>
  );
};

export default OwnerForm;
