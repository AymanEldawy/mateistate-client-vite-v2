import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const Seller_FIELDS = {
  //   FIELDS_STRUCTURE.id(),
  //   FIELDS_STRUCTURE.created_at(),
  name: { label: "full_name", name: "name", type: "text", required: true },
  ltnname: { label: "ltnname", name: "ltnname", type: "text", required: false },
  nationality: FIELDS_STRUCTURE.nationality(),
  id_card: FIELDS_STRUCTURE.numberField({
    label: "id_card",
    name: "id_card",
    type: "number",
  }),
  passport: FIELDS_STRUCTURE.numberField({
    label: "passport",
    name: "passport",
    type: "number",
  }),
  work_card_number: {
    label: "work_card_number",
    name: "work_card_number",
    type: "number",
  },
  mobile: FIELDS_STRUCTURE.textField({
    label: "mobile",
    name: "mobile",
    type: "text",
  }),
  cellPhone: FIELDS_STRUCTURE.textField({
    label: "cellPhone",
    name: "cellPhone",
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
    type: "text",
  }),
  address: FIELDS_STRUCTURE.textField({
    label: "address",
    name: "address",
    type: "text",
  }),
  minimum_commission: {
    label: "minimum_commission",
    name: "minimum_commission",
    type: "number",
    required: true,
  },
  maximum_discount: {
    label: "maximum_discount",
    name: "maximum_discount",
    type: "number",
    required: true,
  },
  statement: {
    label: "statement",
    name: "statement",
    type: "text",
  },
};
