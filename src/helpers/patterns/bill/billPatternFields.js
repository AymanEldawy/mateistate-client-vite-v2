import { BILL_PATTERN_BILL_TYPE, BILL_PATTERN_PAYMENT_METHODS } from "@/helpers/DEFAULT_OPTIONS";
import FIELDS_STRUCTURE from "@/helpers/FIELDS_STRUCTURE";

export const BILL_PATTERN_general = [
  { label: "code", name: "code", type: "number", required: false },
  { label: "name", name: "name", type: "text", required: false },
  { label: "ltnname", name: "ltnname", type: "text", required: false },
  { label: "number", name: "number", type: "number", required: false },
  FIELDS_STRUCTURE.selectField({
    label: "billType",
    name: "billType",
    list: BILL_PATTERN_BILL_TYPE,
  }),
  { label: "note", name: "note", type: "text", required: false },

  {
    label: "currencyId",
    name: "currencyId",
    type: "uuid",
    required: true,
    table: "currency",
    hideValue: true,
  },
  FIELDS_STRUCTURE.switchField({
    label: "barcodeBill",
    name: "barcodeBill",
  }),
];
export const BILL_PATTERN_accounts = [
  {
    label: "defaultStoreId",
    name: "defaultStoreId",
    type: "uuid",
    required: false,
    table: "store",
  },
  {
    label: "costCenterId",
    name: "costCenterId",
    type: "uuid",
    required: false,
    table: "cost_center",
  },
  {
    label: "materialAccountId",
    name: "materialAccountId",
    type: "uuid",
    required: false,
    table: "account",
  },
  {
    label: "cashAccountId",
    name: "cashAccountId",
    type: "uuid",
    required: false,
    table: "account",
  },
  {
    label: "discountAccountId",
    name: "discountAccountId",
    type: "uuid",
    required: false,
    table: "account",
  },
  {
    label: "extraAccountId",
    name: "extraAccountId",
    type: "uuid",
    required: false,
    table: "account",
  },

  FIELDS_STRUCTURE.selectField({
    label: "paymentMethod",
    name: "paymentMethod",
    list: BILL_PATTERN_PAYMENT_METHODS,
  }),

  {
    label: "activePerpetualInventory",
    name: "activePerpetualInventory",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "stockAccountId",
    name: "stockAccountId",
    type: "uuid",
    required: false,
    table: "account",
  },
  {
    label: "calculateSaleCostCenterId",
    name: "calculateSaleCostCenterId",
    type: "uuid",
    required: false,
    table: "calculate_sale_cost_center",
  },

  {
    label: "vatAccountId",
    name: "vatAccountId",
    type: "uuid",
    required: false,
    table: "account",
  },
  {
    label: "vatPercentage",
    name: "vatPercentage",
    type: "number",
  },
  {
    label: "useVatAccountFromCustomerCard",
    name: "useVatAccountFromCustomerCard",
    type: "checkbox",
    key: "switch",
    required: false,
  },
];
export const BILL_PATTERN_ENTRIES = [
  {
    label: "postToStore",
    name: "postToStore",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "postToStoreAuto",
    name: "postToStoreAuto",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "generateEntries",
    name: "generateEntries",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "autoGenerateEntries",
    name: "autoGenerateEntries",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "postGenerateEntriesAuto",
    name: "postGenerateEntriesAuto",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "deletingEntryDependingOnMaterials",
    name: "deletingEntryDependingOnMaterials",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "possibilityOfChangingMaterialsAccount",
    name: "possibilityOfChangingMaterialsAccount",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "calculateVatAfterDiscountAndExtraValueToTheInvoice",
    name: "calculateVatAfterDiscountAndExtraValueToTheInvoice",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "mergeRepeatedMaterials",
    name: "mergeRepeatedMaterials",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "requiredCustomerEntry",
    name: "requiredCustomerEntry",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "requiredCostCenterEntry",
    name: "requiredCostCenterEntry",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "requiredCategoryEntry",
    name: "requiredCategoryEntry",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "showAlertOnNavigateOutput",
    name: "showAlertOnNavigateOutput",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "dontSaveWhenNavigateOutput",
    name: "dontSaveWhenNavigateOutput",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "showAveragePriceCheckMessageAfterAddingModifying",
    name: "showAveragePriceCheckMessageAfterAddingModifying",
    type: "checkbox",
    key: "switch",
    required: false,
  },
];

export const BILL_PATTERN_OPTIONS = [
  {
    label: "billAffectedThePricingOfMaterials",
    name: "billAffectedThePricingOfMaterials",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "pricingOfMaterials",
    name: "pricingOfMaterials",
    type: "number",
    required: false,
  },
  { label: "menu", name: "menu", type: "text", required: false },
  {
    label: "tableColor1",
    name: "tableColor1",
    type: "color",
    required: false,
  },
  {
    label: "tableColor2",
    name: "tableColor2",
    type: "color",
    required: false,
  },
];

export const BILL_PATTERN_bill_DETAILS = [];

export const BILL_PATTERN_REFERENCES = [
  {
    label: "showReferencesField",
    name: "showReferencesField",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "requiredReferenceField",
    name: "requiredReferenceField",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "dontShowExpiredField",
    name: "dontShowExpiredField",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "lockBillWhenLoadingReferences",
    name: "lockBillWhenLoadingReferences",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  {
    label: "allowPartialLoad",
    name: "allowPartialLoad",
    type: "checkbox",
    key: "switch",
    required: false,
  },

  { label: "references", name: "references", type: "jsonb[]", required: false },
];