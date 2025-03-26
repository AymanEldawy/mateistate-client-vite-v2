import { Lessor_FIELDS } from "@/helpers/lessor/lessorFields";
import { RHFDatePicker, RHFInput } from "../fields";

const LessorForm = () => {

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Lessor_FIELDS?.name} />
        <RHFInput {...Lessor_FIELDS?.ltnname} />
        <RHFInput {...Lessor_FIELDS?.passport} />
      </div>
      <RHFDatePicker {...Lessor_FIELDS?.passport_expiry_date} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Lessor_FIELDS?.id_card} />
        <RHFInput {...Lessor_FIELDS?.lessor_card} />
        <RHFInput {...Lessor_FIELDS?.cell_phone} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Lessor_FIELDS?.number} />
        <RHFInput {...Lessor_FIELDS?.address} />
        <RHFInput {...Lessor_FIELDS?.fax} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Lessor_FIELDS?.nationality} />
        <RHFInput {...Lessor_FIELDS?.mobile} />
        <RHFInput {...Lessor_FIELDS?.note} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...Lessor_FIELDS?.mailbox} />
        <RHFInput {...Lessor_FIELDS?.email} />
        <RHFInput {...Lessor_FIELDS?.role} />
      </div>
    </div>
  );
};

export default LessorForm;
