import { CHEQUE_PATTERN_PAPER_TYPE, CHEQUE_PATTERN_DEFAULT_DATE } from "../../DEFAULT_OPTIONS";
import FIELDS_STRUCTURE from "../../FIELDS_STRUCTURE";

export const CHEQUE_PATTERN_GENERAL = [
  FIELDS_STRUCTURE.selectField({
    label: "paperType",
    name: "paperType",
    options: CHEQUE_PATTERN_PAPER_TYPE,
    required: true,
  }),
  FIELDS_STRUCTURE.name(),
  FIELDS_STRUCTURE.textField({
    label: "ltnname",
    name: "ltnname",
  }),
  FIELDS_STRUCTURE.textField({
    label: "optionsName",
    name: "optionsName",
  }),

  FIELDS_STRUCTURE.account({
    label: "defaultAccountId",
    name: "defaultAccountId",
  }),
  FIELDS_STRUCTURE.textField({
    label: "defaultPrintFolder",
    name: "defaultPrintFolder",
  }),
  FIELDS_STRUCTURE.gen_entries(),
  FIELDS_STRUCTURE.gen_entries({
    label: "autoGenEntries",
    name: "autoGenEntries",
  }),

 
  FIELDS_STRUCTURE.gen_entries({
    label: "autoTransferEntry",
    name: "autoTransferEntry",
  }),
];

export const CHEQUE_PATTERN_COLLECTION = [

  FIELDS_STRUCTURE.checkboxField({
    label: "collection",
    name: "collection",
  }),

  FIELDS_STRUCTURE.checkboxField({
    label: "collectionGenEntries",
    name: "collectionGenEntries",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "collectionAutoGenEntries",
    name: "collectionAutoGenEntries",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "collectionAutoTransferEntry",
    name: "collectionAutoTransferEntry",
  }),

  FIELDS_STRUCTURE.checkboxField({
    label: "collectionDefaultAccountIsBuildingBank",
    name: "collectionDefaultAccountIsBuildingBank",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "collectionDefaultObserveAccountIsClient",
    name: "collectionDefaultObserveAccountIsClient",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "collectionMoveCostCenterDebit",
    name: "collectionMoveCostCenterDebit",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "collectionMoveCostCenterCredit",
    name: "collectionMoveCostCenterCredit",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "collectionDefaultDate",
    name: "collectionDefaultDate",
    options: CHEQUE_PATTERN_DEFAULT_DATE,
  }),
  FIELDS_STRUCTURE.account({
    label: "collectionCreditAccountId",
    name: "collectionCreditAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "collectionDebitAccountId",
    name: "collectionDebitAccountId",
  }),
];

export const CHEQUE_PATTERN_COMMISSION = [
  FIELDS_STRUCTURE.checkboxField({
    label: "commissionAmountFromBuilding",
    name: "commissionAmountFromBuilding",
    type: "checkbox",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "commissionDefaultAccountIsBuildingOwner",
    name: "commissionDefaultAccountIsBuildingOwner",
    type: "checkbox",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "commissionDefaultObserveIsRevenueAccount",
    name: "commissionDefaultObserveIsRevenueAccount",
    type: "checkbox",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "commissionMoveCostCenterDebit",
    name: "commissionMoveCostCenterDebit",
    type: "checkbox",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "commissionMoveCostCenterCredit",
    name: "commissionMoveCostCenterCredit",
    type: "checkbox",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "commissionType",
    name: "commissionType",
    options: CHEQUE_PATTERN_DEFAULT_DATE,
  }),
  FIELDS_STRUCTURE.account({
    label: "commissionDebitAccountId",
    name: "commissionDebitAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "commissionCreditAccountId",
    name: "commissionCreditAccountId",
  }),
];

export const CHEQUE_PATTERN_PARTIAL_COLLECTION = [
  FIELDS_STRUCTURE.checkboxField({
    label: "partialCollection",
    name: "partialCollection",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partialGenEntries",
    name: "partialGenEntries",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partialAutoGenEntries",
    name: "partialAutoGenEntries",

  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partialAutoTransferEntry",
    name: "partialAutoTransferEntry",

  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partialDefaultAccountIsBuildingBank",
    name: "partialDefaultAccountIsBuildingBank",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partialDefaultObserveAccountIsClient",
    name: "partialDefaultObserveAccountIsClient",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partialMoveCostCenterDebit",
    name: "partialMoveCostCenterDebit",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partialMoveCostCenterCredit",
    name: "partialMoveCostCenterCredit",
  }),
  FIELDS_STRUCTURE.account({
    label: "partialDebitAccountId",
    name: "partialDebitAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "partialCreditAccountId",
    name: "partialCreditAccountId",
  }),
];

export const CHEQUE_PATTERN_RETURN = [
  FIELDS_STRUCTURE.checkboxField({
    label: "returnable",
    name: "returnable",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnableGenEntries",
    name: "returnableGenEntries",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnableAutoGenEntries",
    name: "returnableAutoGenEntries",

  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnableAutoTransferEntry",
    name: "returnableAutoTransferEntry",

  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnableDefaultAccountIsClient",
    name: "returnableDefaultAccountIsClient",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnableDefaultObserveAccountIsBuildingBank",
    name: "returnableDefaultObserveAccountIsBuildingBank",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnableActiveOperations",
    name: "returnableActiveOperations",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnableMoveCostCenterDebit",
    name: "returnableMoveCostCenterDebit",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnableMoveCostCenterCredit",
    name: "returnableMoveCostCenterCredit",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnFeeDefaultAccountIsClient",
    name: "returnFeeDefaultAccountIsClient",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "returnableDefaultDate",
    name: "returnableDefaultDate",
    options: CHEQUE_PATTERN_DEFAULT_DATE,
  }),
  FIELDS_STRUCTURE.account({
    label: "returnableDebitAccountId",
    name: "returnableDebitAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "returnableCreditAccountId",
    name: "returnableCreditAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "returnFeeDebitAccountId",
    name: "returnFeeDebitAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "returnFeeCreditAccountId",
    name: "returnFeeCreditAccountId",
  }),
];

export const CHEQUE_PATTERN_STATEMENTS = [
  FIELDS_STRUCTURE.textField({
    label: "statementAccount",
    name: "statementAccount",
  }),
  FIELDS_STRUCTURE.textField({
    label: "statementObserveAccount",
    name: "statementObserveAccount",
  }),
  FIELDS_STRUCTURE.textField({
    label: "statementCollection",
    name: "statementCollection",
  }),
  FIELDS_STRUCTURE.textField({
    label: "statementReturn",
    name: "statementReturn",
  }),
  FIELDS_STRUCTURE.textField({
    label: "statementPartial",
    name: "statementPartial",
  }),
];

export const CHEQUE_PATTERN__sms = [{ label: "sms", name: "sms", type: "text" }];