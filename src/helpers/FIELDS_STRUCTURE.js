import { UNIQUE_REF_TABLES } from "@/data/constants";
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

const checkboxField = (additional) => ({
  type: "checkbox",
  required: false,
  ...additional,
});

const gen_entries = (additional) => ({
  label: 'genEntries',
  name: 'genEntries',
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
  name: "createdAt",
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
  label: "accountId",
  name: "accountId",
  allowAdd: true,
  table: "account",
  ...additional,
});
const cost_center = (additional) => ({
  label: "costCenterId",
  name: "costCenterId",
  table: "cost_center",
  ...additional,
});

const building = (additional) => ({
  label: "building",
  name: "buildingId",
  table: "building",
  ...additional,
});

const bank = (additional) => ({
  label: "bankId",
  name: "bankId",
  table: "bank",
  ...additional,
});

const client = (additional) => ({
  label: "clientId",
  name: "clientId",
  table: UNIQUE_REF_TABLES.clients,
  ...additional,
});

const currency = (additional) => ({
  label: "currencyId",
  name: "currencyId",
  table: 'currency',
  ...additional,
});

const suppliers = (additional) => ({
  label: "ownerId",
  name: "ownerId",
  table: UNIQUE_REF_TABLES.suppliers,
  ...additional,
});

const FIELDS_STRUCTURE = {
  number,
  created_at,
  name,
  account,
  note,
  nationality,
  cost_center,
  client,
  currency,
  suppliers,
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
  checkboxField,
};

export default FIELDS_STRUCTURE;
