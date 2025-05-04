import { ACCOUNT_GRID_TYPE, CONTACT_PATTERN_ASSETS_TYPE, CONTACT_PATTERN_CONTRACT_TYPE, CONTACT_PATTERN_RECORD_CREATED_DATE } from "../../DEFAULT_OPTIONS";
import FIELDS_STRUCTURE from "../../FIELDS_STRUCTURE";

export const CONTRACT_PATTERN_GENERAL = [
  FIELDS_STRUCTURE.selectField({
    label: "contractType",
    name: "contractType",
    required: true,
    options: CONTACT_PATTERN_CONTRACT_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "assetsType",
    name: "assetsType",
    required: true,
    options: CONTACT_PATTERN_ASSETS_TYPE,
  }),
  FIELDS_STRUCTURE.numberField({
    label: "code",
    name: "code",
  }),
  FIELDS_STRUCTURE.name(),
  FIELDS_STRUCTURE.textField({
    label: "ltnname",
    name: "ltnname",
  }),
  FIELDS_STRUCTURE.textField({
    label: "listName",
    name: "listName",
  }),
  FIELDS_STRUCTURE.textField({
    label: "shortcutKey",
    name: "shortcutKey",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "recordDateCreated",
    name: "recordDateCreated",
    required: true,
    options: CONTACT_PATTERN_RECORD_CREATED_DATE,
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
    label: "newContractWithoutTerminating",
    name: "newContractWithoutTerminating",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "insuranceRequired",
    name: "insuranceRequired",
  }),

];

export const CONTRACT_PATTERN_default_accounts = [
  FIELDS_STRUCTURE.account({
    label: "defaultRevenueAccountId",
    name: "defaultRevenueAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_commission_from_clientAccountId",
    name: "defaultCommissionFromClientAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_commission_from_ownerAccountId",
    name: "defaultCommissionFromOwnerAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_contract_price_revenueAccountId",
    name: "defaultContractPriceRevenueAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_contract_ratification_revenueAccountId",
    name: "defaultContractRatificationRevenueAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fines_revenueAccountId",
    name: "defaultFinesRevenueAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fee_revenueAccountId",
    name: "defaultFeeRevenueAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_vatAccountId",
    name: "defaultVatAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_discountAccountId",
    name: "defaultDiscountAccountId",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "default_commission_From_client_Percentage",
    name: "defaultCommission_FromClient_Percentage",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_insuranceAccountId",
    name: "defaultInsuranceAccountId",
  }),
];
export const CONTRACT_PATTERN_default_fees_accounts = [
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_1",
    name: "defaultFeesAccount1",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_2",
    name: "defaultFeesAccount2",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_3",
    name: "defaultFeesAccount3",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_4",
    name: "defaultFeesAccount4",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_5",
    name: "defaultFeesAccount5",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_6",
    name: "defaultFeesAccount6",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_7",
    name: "defaultFeesAccount7",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_8",
    name: "defaultFeesAccount8",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_9",
    name: "defaultFeesAccount9",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_10",
    name: "defaultFeesAccount0",
  }),
];

export const CONTRACT_PATTERN_moving_cost_center = [
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_revenue",
    name: "moveCostCenterWithRevenue",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_tenant",
    name: "moveCostCenterWithTenant",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_insurance_revenue",
    name: "moveCostCenterWithInsuranceRevenue",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_price_revenue",
    name: "moveCostCenterWithPriceRevenue",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_intention_ratifying",
    name: "moveCostCenterWithIntentionRatifying",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_other_fee",
    name: "moveCostCenterWithOtherFee",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_commission_client",
    name: "moveCostCenterWithCommissionClient",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_commission_owner",
    name: "moveCostCenterWithCommissionOwner",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_contract_fines_terminating",
    name: "moveCostCenterWithContractFinesTerminating",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_decisiveness_granted",
    name: "moveCostCenterWithDecisivenessGranted",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_contract_proceeds_rerminating",
    name: "moveCostCenterWithContractProceedsRerminating",
    options: ACCOUNT_GRID_TYPE,
  }),
];

export const CONTRACT_PATTERN_contract_terms = [
  {
    label: "contract_terms",
    name: "contractTerms",
    type: "text",
  },
];

export const CONTRACT_PATTERN_sms = [
  {
    label: "sms",
    name: "sms",
    type: "text",
  },
];