import { USER_TYPE } from "../DEFAULT_OPTIONS";
import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const USER_FIELDS = [
  FIELDS_STRUCTURE.uniqueField({
    name: "building_id",
    hide_in_form: true,
    category: "building",
  }),
  FIELDS_STRUCTURE.uniqueField({
    name: "category_id",
    hide_in_form: true,
    category: "category",
  }),

  FIELDS_STRUCTURE.number(),
  FIELDS_STRUCTURE.name(),
  FIELDS_STRUCTURE.created_at(),
  FIELDS_STRUCTURE.selectField({
    label: "card_type",
    name: "card_type",
    options: USER_TYPE
  }),
  
  FIELDS_STRUCTURE.number({
    label: "trn_number",
    name: "trn_number",
  }),
  {
    label: "account_id",
    name: "account_id",
    required: true,
    is_ref: true,
    category: "account",
    hide_in_form: true,
  },
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
    label: "phone",
    name: "phone",
    type: "text",
    required: true,
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
    is_ref: true,
    category: "account",
  },
  // {
  //   label: "category_id",
  //   name: "category_id",
  //   is_ref: true,
  //   category: "category",
  // },
  {
    label: "bank_id",
    name: "bank_id",
    is_ref: true,
    category: "bank",
  },
  {
    label: "bank_account",
    name: "bank_account",
    type: "text",
  },
  FIELDS_STRUCTURE.nationality(),
];