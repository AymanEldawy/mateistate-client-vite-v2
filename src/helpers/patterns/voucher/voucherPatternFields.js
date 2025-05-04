import FIELDS_STRUCTURE from "../../FIELDS_STRUCTURE";

export const VOUCHER_PATTERN_GENERAL = [
  FIELDS_STRUCTURE.numberField({
    label: "code",
    name: "code",

  }),
  FIELDS_STRUCTURE.name(),
  FIELDS_STRUCTURE.textField({ label: "ltnname", name: "ltnname", }),
  FIELDS_STRUCTURE.textField({
    label: "listName",
    name: "listName",
  }),

  FIELDS_STRUCTURE.account({
    label: "defaultAccountId",
    name: "defaultAccountId",
  }),
  FIELDS_STRUCTURE.textField({
    label: "shortcutKey",
    name: "shortcutKey",
  }),
  FIELDS_STRUCTURE.gen_entries({
    label: "genEntries",
    name: "genEntries",
  }),
  FIELDS_STRUCTURE.gen_entries({
    label: "autoGenEntries",
    name: "autoGenEntries",
  }),
  FIELDS_STRUCTURE.gen_entries({
    label: "autoTransferEntry",
    name: "autoTransferEntry",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "generateRecords",
    name: "generateRecords",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "showContractField",
    name: "showContractField",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "showContractCostCenter",
    name: "showContractCostCenter",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "requiredCostCenter",
    name: "requiredCostCenter",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "requiredStatement",
    name: "requiredStatement",
  }),
  FIELDS_STRUCTURE.textField({
    label: "defaultPrintFolderPath",
    name: "defaultPrintFolderPath",
  }),
];

export const VOUCHER_PATTERN_FIELDS = [
  FIELDS_STRUCTURE.checkboxField({
    label: "showDebitField",
    name: "showDebitField",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "showCreditField",
    name: "showCreditField",
  }),
  FIELDS_STRUCTURE.textField({
    label: "debitFieldLabel",
    name: "debitFieldLabel",
  }),
  FIELDS_STRUCTURE.textField({
    label: "creditFieldLabel",
    name: "creditFieldLabel",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "showCurrency",
    name: "showCurrency",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "showCostCenter",
    name: "showCostCenter",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "showNote",
    name: "showNote",
  }),
  FIELDS_STRUCTURE.textField({
    label: "oddTableColor",
    name: "oddTableColor",
  }),
  FIELDS_STRUCTURE.textField({
    label: "evenTableColor",
    name: "evenTableColor",
  }),
];

export const VOUCHER_PATTERN_sms = [
  {
    label: "sms",
    name: "sms",
    type: "text",
  },
];