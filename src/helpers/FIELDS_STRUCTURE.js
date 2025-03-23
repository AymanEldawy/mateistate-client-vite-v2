import { NATIONALITY_LISTS } from "./DEFAULT_OPTIONS";

const textField = (additional) => ({
  type: "text",
  required: false,
  ...additional,
});

const dateField = (additional) => ({
  name: 'date',
  type: "date",
  required: false,
  ...additional,
});

const feedback = (additional) => ({
  label: 'feedback',
  name: 'feedback',
  type: "checkbox",
  required: false,
  ...additional,
});

const gen_entries = (additional) => ({
  label: 'gen_entries',
  name: 'gen_entries',
  type: "checkbox",
  required: false,
  ...additional,
});

const lawsuit = (additional) => ({
  label: 'lawsuit',
  name: 'lawsuit',
  type: "checkbox",
  required: false,
  ...additional,
});

const numberField = (additional) => ({
  type: "number",
  required: false,
  ...additional,
});

const selectField = (additional) => ({
  intValue: true,
  selectFirstAsDefault: true,
  options: [],
  required: false,
  ...additional,
});

const uniqueField = (additional) => ({
  ref_id: "id",
  ref_name: "name",
  is_ref: true,
  ...additional,
});

const number = (additional) => ({
  label: "number",
  name: "number",
  type: "number",
  required: true,
  ...additional,
});

const created_at = (additional) => ({
  label: "date",
  name: "created_at",
  type: "date",
  defaultValue: new Date(),
  hide_in_form: true,
  ...additional,
});

const name = (additional) => ({
  label: "name",
  name: "name",
  type: "text",
  required: true,
  ...additional,
});

const note = (additional) => ({
  label: "note",
  name: "note",
  type: "text",
  ...additional,
});

const nationality = (additional) => ({
  label: "nationality",
  name: "nationality",
  options: NATIONALITY_LISTS,
  allowInsert: true,

  ...additional,
});
const account = (additional) => ({
  label: "account_id",
  name: "account_id",
  is_ref: true,
  allowAdd: true, 
  table: "account",
  ...additional,
});
const cost_center = (additional) => ({
  label: "cost_center_id",
  name: "cost_center_id",
  is_ref: true,
  table: "cost_center",
  ...additional,
});

const building = (additional) => ({
  label: "building",
  name: "building_id",
  table: "building",
  ...additional,
});

const bank = (additional) => ({
  label: "bank_id",
  name: "bank_id",
  is_ref: true,
  table: "bank",
  ...additional,
});

// const client = (additional) => ({
//   label: "client_id",
//   name: "client_id",
//   is_ref: true,
//   table: UNIQUE_TABLES.clients,
//   ...additional,
// });

// const suppliers = (additional) => ({
//   label: "owner_id",
//   name: "owner_id",
//   is_ref: true,
//   table: UNIQUE_TABLES.suppliers,
//   ...additional,
// });

const FIELDS_STRUCTURE = {
  number,
  created_at,
  name,
  account,
  note,
  nationality,
  cost_center,
  // client,
  // suppliers,
  bank,
  building,
  // Fields,
  // switchField,
  textField,
  dateField,
  numberField,
  selectField,
  uniqueField,
  feedback,
  lawsuit,
  gen_entries,
};

export default FIELDS_STRUCTURE;
