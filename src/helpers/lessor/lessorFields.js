import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const Lessor_FIELDS = {
  name: { label: "full_name", name: "name", type: "text", required: true },
  ltnname: { label: "ltnname", name: "ltnname", type: "text", required: false },
  passport: FIELDS_STRUCTURE.numberField({
    label: "passport",
    name: "passport",
    type: "text",
    required: true,
  }),

  passport_expiry_date: {
    label: "passport_expiry_date",
    name: "passport_expiry_date",
    type: "date",
    required: true,
  },
  id_card: FIELDS_STRUCTURE.numberField({
    label: "id_card",
    name: "id_card",
    type: "number",
  }),
  lessor_card: {
    label: "lessor_card",
    name: "lessor_card",
    type: "number",
  },
  cell_phone: {
    label: "cell_phone",
    name: "cell_phone",
    type: "number",
  },
  number: {
    label: "number",
    name: "number",
    type: "number",

    hide_in_form: true,
  },
  address: {
    label: "address",
    name: "address",
    type: "text",
  },
  nationality: FIELDS_STRUCTURE.nationality(),
  mobile: FIELDS_STRUCTURE.textField({
    label: "mobile",
    name: "mobile",
    type: "text",
  }),
  fax: FIELDS_STRUCTURE.textField({ label: "fax", name: "fax", type: "text" }),
  mailbox: FIELDS_STRUCTURE.textField({
    label: "mailbox",
    name: "mailbox",
    type: "text",
  }),
  email: FIELDS_STRUCTURE.textField({
    label: "email",
    name: "email",
    type: "email",
    required: true,
  }),
  note: FIELDS_STRUCTURE.textField({
    label: "note",
    name: "note",
    type: "text",
  }),
  role: FIELDS_STRUCTURE.textField({
    label: "role",
    name: "role",
    type: "text",
  }),
};
