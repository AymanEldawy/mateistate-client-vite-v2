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
    label: "debitAccountId",
    name: "debitAccountId",
    required: true,
  }),
  FIELDS_STRUCTURE.account({
    label: "creditAccountId",
    name: "creditAccountId",
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
    label: "connectWithChqId",
    name: "connectWithChqId",
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
    label: "debitAccountId",
    name: "debitAccountId",
    required: true,
  }),
  FIELDS_STRUCTURE.account({
    label: "creditAccountId",
    name: "creditAccountId",
    required: true,
  }),
  FIELDS_STRUCTURE.cost_center({ required: true }),
  FIELDS_STRUCTURE.note(),
  
  FIELDS_STRUCTURE.numberField({
    label: "commissionPercentage",
    name: "commissionPercentage",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "commissionValue",
    name: "commissionValue",
  }),
  FIELDS_STRUCTURE.account({
    label: "commissionDebitId",
    name: "commissionDebitId",
  }),
  FIELDS_STRUCTURE.account({
    label: "commissionCreditId",
    name: "commissionCreditId",
  }),
  FIELDS_STRUCTURE.cost_center({
    label: "commissionCostCenterId",
    name: "commissionCostCenterId",
  }),
  FIELDS_STRUCTURE.textField({
    label: "commissionNote",
    name: "commissionNote",
  }),
];
