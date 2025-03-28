import { RHFInput } from "../../fields";
import { Owner_FIELDS } from "@/helpers/owner/ownerFields";

const OwnerForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Owner_FIELDS?.name} />
        <RHFInput {...Owner_FIELDS?.ltnname} />
        <RHFInput {...Owner_FIELDS?.id_card} />
      </div>
      {/* <RHFDatePicker {...Lessor_FIELDS?.passport_expiry_date} /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Owner_FIELDS?.cell_phone} />
        <RHFInput {...Owner_FIELDS?.mailbox} />
        <RHFInput {...Owner_FIELDS?.address} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Owner_FIELDS?.nationality} />
      </div>
    </div>
  );
};

export default OwnerForm;
