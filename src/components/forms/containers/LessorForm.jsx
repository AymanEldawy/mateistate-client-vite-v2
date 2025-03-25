import { Lessor_FIELDS } from "@/helpers/lessor/lessorFields";
import { RHFDatePicker, RHFInput } from "../fields";

// const lessor = [
//   FIELDS_STRUCTURE.id(),
//   { label: "full_name", name: "name", type: "text", required: true },
//   { label: "ltnname", name: "ltnname", type: "text", required: false },
//   FIELDS_STRUCTURE.numberField({
//     label: "passport",
//     name: "passport",
//     type: "number",
//   }),
//   {
//     label: "passport_expiry_date",
//     name: "passport_expiry_date",
//     type: "date",
//   },
//   FIELDS_STRUCTURE.numberField({
//     label: "id_card",
//     name: "id_card",
//     type: "number",
//   }),
//   {
//     label: "lessor_card",
//     name: "lessor_card",
//     type: "number",
//   },
//   {
//     label: "cell_phone",
//     name: "cell_phone",
//     type: "number",
//   },
//   {
//     label: "number",
//     name: "number",
//     type: "number",

//     hide_in_form: true,
//   },
//   {
//     label: "address",
//     name: "address",
//     type: "text",
//   },
//   FIELDS_STRUCTURE.nationality(),
//   FIELDS_STRUCTURE.textField({ label: "mobile", name: "mobile", type: "text" }),
//   FIELDS_STRUCTURE.textField({ label: "fax", name: "fax", type: "text" }),
//   FIELDS_STRUCTURE.textField({
//     label: "mailbox",
//     name: "mailbox",
//     type: "text",
//   }),
//   FIELDS_STRUCTURE.textField({ label: "email", name: "email", type: "text" }),
//   FIELDS_STRUCTURE.textField({ label: "note", name: "note", type: "text" }),
//   FIELDS_STRUCTURE.textField({ label: "role", name: "role", type: "text" }),
// ];
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
