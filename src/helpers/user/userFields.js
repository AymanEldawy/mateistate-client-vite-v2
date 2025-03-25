import { USER_TYPE } from "../DEFAULT_OPTIONS";
import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const USER_FIELDS = [
  // FIELDS_STRUCTURE.number(),
  // FIELDS_STRUCTURE.created_at(),
  FIELDS_STRUCTURE.name(),
  FIELDS_STRUCTURE.selectField({
    label: "card_type",
    name: "card_type",
    options: USER_TYPE
  }),
  {
    label: "phone",
    name: "phone",
    type: "text",
    required: true,
  },
  FIELDS_STRUCTURE.number({
    label: "trn_number",
    name: "trn_number",
  }),
  // {
  //   label: "account_id",
  //   name: "account_id",
  //   required: true,
  //   table: "account",
  // },
  {
    label: "date_of_birth",
    name: "date_of_birth",
    type: "date",
  },
  {
    label: "passport_number",
    name: "passport_number",
    type: "text",
  },
  {
    label: "passport_expiry",
    name: "passport_expiry",
    type: "date",
  },
  {
    label: "national_id",
    name: "national_id",
    type: "text",
  },
  {
    label: "national_id_expiry",
    name: "national_id_expiry",
    type: "date",
  },
  {
    label: "address",
    name: "address",
    type: "text",
  },
  {
    label: "user_type",
    name: "user_type",
    type: "number",
  },
  {
    label: "commercial_register",
    name: "commercial_register",
    type: "text",
  },
  {
    label: "barcode",
    name: "barcode",
    type: "number",
  },
  {
    label: "profession",
    name: "profession",
    type: "number",
  },
  {
    label: "work_phone",
    name: "work_phone",
    type: "text",
  },

  {
    label: "token",
    name: "token",
    type: "text",
  },
  {
    label: "fax",
    name: "fax",
    type: "text",
  },
  {
    label: "mailbox",
    name: "mailbox",
    type: "text",
  },
  {
    label: "email",
    name: "email",
    type: "text",
  },
  {
    label: "sponsor",
    name: "sponsor",
    type: "number",
  },
  {
    label: "sponsor_data",
    name: "sponsor_data",
    type: "text",
  },
  {
    label: "statement",
    name: "statement",
    type: "text",
  },
  {
    label: "insurance_account_id",
    name: "insurance_account_id",
    table: "account",
  },
  {
    label: "bank_id",
    name: "bank_id",
    table: "bank",
  },

  FIELDS_STRUCTURE.nationality(),
];