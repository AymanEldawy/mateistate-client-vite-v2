import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const Owner_FIELDS = {
//   FIELDS_STRUCTURE.id(),
  name: { label: "full_name", name: "name", type: "text", required: true },
  ltnname: { label: "ltnname", name: "ltnname", type: "text", required: false },
  id_card: FIELDS_STRUCTURE.textField({
    label: "id_card",
    name: "id_card",
    type: "text",
  }),
  phone: FIELDS_STRUCTURE.textField({ label: "phone", name: "phone", type: "text" }),
  cell_phone: FIELDS_STRUCTURE.textField({
    label: "cell_phone",
    name: "cell_phone",
    type: "text",
  }),
  fax: FIELDS_STRUCTURE.textField({ label: "fax", name: "fax", type: "text" }),
 mailbox: FIELDS_STRUCTURE.textField({
    label: "mailbox",
    name: "mailbox",
    type: "text",
  }),
  email: FIELDS_STRUCTURE.textField({ label: "email", name: "email", type: "text" }),
  address: FIELDS_STRUCTURE.textField({
    label: "address",
    name: "address",
    type: "text",
  }),
  nationality: FIELDS_STRUCTURE.nationality(),
};
