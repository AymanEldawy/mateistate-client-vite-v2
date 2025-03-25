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
  key: "select",
  options: [],
  required: false,
  ...additional,
});

const uniqueField = (additional) => ({
  ref_id: "id",
  ref_name: "name",
  ...additional,
});

const number = (additional) => ({
  label: "number",
  name: "number",
  type: "number",
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
  key: "select",
  options: NATIONALITY_LISTS,

  ...additional,
});
const account = (additional) => ({
  label: "account_id",
  name: "account_id",
  allowAdd: true,
  table: "account",
  ...additional,
});
const cost_center = (additional) => ({
  label: "cost_center_id",
  name: "cost_center_id",
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
  table: "bank",
  ...additional,
});

// const client = (additional) => ({
//   label: "client_id",
//   name: "client_id",
//   table: UNIQUE_TABLES.clients,
//   ...additional,
// });

// const suppliers = (additional) => ({
//   label: "owner_id",
//   name: "owner_id",
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
