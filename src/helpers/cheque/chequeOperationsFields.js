import { CHQ_RETURN_REASONS } from "../DEFAULT_OPTIONS";
import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const OP_RETURN_FIELDS = [
  {
    label: "amount",
    name: "amount",
    type: "number",
    required: true,
  },
  // FIELDS_STRUCTURE.currency({ required: true }),
  FIELDS_STRUCTURE.account({
    label: "debit_account_id",
    name: "debit_account_id",
    required: true,
  }),
  FIELDS_STRUCTURE.account({
    label: "credit_account_id",
    name: "credit_account_id",
    required: true,
  }),
  FIELDS_STRUCTURE.cost_center({ required: true }),
  FIELDS_STRUCTURE.note(),
  FIELDS_STRUCTURE.selectField({
    label: "reason",
    name: "reason",
    options: CHQ_RETURN_REASONS,
    required: true,
  }),
  FIELDS_STRUCTURE.uniqueField({
    label: "connect_with_chq_id",
    name: "connect_with_chq_id",
    table: 'cheque'
  }),
];


export const OP_COLLECTION_FIELDS = [

  {
    label: "amount",
    name: "amount",
    type: "number",
    required: true,
  },
  // FIELDS_STRUCTURE.currency({ required: true }),
  FIELDS_STRUCTURE.account({
    label: "debit_account_id",
    name: "debit_account_id",
    required: true,
  }),
  FIELDS_STRUCTURE.account({
    label: "credit_account_id",
    name: "credit_account_id",
    required: true,
  }),
  FIELDS_STRUCTURE.cost_center({ required: true }),
  FIELDS_STRUCTURE.note(),
  
  FIELDS_STRUCTURE.numberField({
    label: "commission_percentage",
    name: "commission_percentage",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "commission_value",
    name: "commission_value",
  }),
  FIELDS_STRUCTURE.account({
    label: "commission_debit_id",
    name: "commission_debit_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "commission_credit_id",
    name: "commission_credit_id",
  }),
  FIELDS_STRUCTURE.cost_center({
    label: "commission_cost_center_id",
    name: "commission_cost_center_id",
  }),
  FIELDS_STRUCTURE.textField({
    label: "commission_note",
    name: "commission_note",
  }),
];
