import { ACCOUNT_GRID_TYPE, CONTACT_PATTERN_ASSETS_TYPE, CONTACT_PATTERN_CONTRACT_TYPE, CONTACT_PATTERN_RECORD_CREATED_DATE } from "../../DEFAULT_OPTIONS";
import FIELDS_STRUCTURE from "../../FIELDS_STRUCTURE";

export const CONTRACT_PATTERN_GENERAL = [
  FIELDS_STRUCTURE.selectField({
    label: "contract_type",
    name: "contract_type",
    required: true,
    options: CONTACT_PATTERN_CONTRACT_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "assets_type",
    name: "assets_type",
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
    label: "list_name",
    name: "list_name",
  }),
  FIELDS_STRUCTURE.textField({
    label: "shortcut_key",
    name: "shortcut_key",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "record_date_created",
    name: "record_date_created",
    required: true,
    options: CONTACT_PATTERN_RECORD_CREATED_DATE,
  }),
  FIELDS_STRUCTURE.gen_entries({
    label: "gen_entries",
    name: "gen_entries",
  }),
  FIELDS_STRUCTURE.gen_entries({
    label: "auto_gen_entries",
    name: "auto_gen_entries",
  }),
  FIELDS_STRUCTURE.gen_entries({
    label: "auto_transfer_entry",
    name: "auto_transfer_entry",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "new_contract_without_terminating",
    name: "new_contract_without_terminating",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "insurance_required",
    name: "insurance_required",
  }),

];

export const CONTRACT_PATTERN_default_accounts = [
  FIELDS_STRUCTURE.account({
    label: "default_revenue_account_id",
    name: "default_revenue_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_revenue_account_id",
    name: "default_revenue_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_commission_from_client_account_id",
    name: "default_commission_from_client_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_commission_from_owner_account_id",
    name: "default_commission_from_owner_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_contract_price_revenue_account_id",
    name: "default_contract_price_revenue_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_contract_ratification_revenue_account_id",
    name: "default_contract_ratification_revenue_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fines_revenue_account_id",
    name: "default_fines_revenue_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fee_revenue_account_id",
    name: "default_fee_revenue_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_vat_account_id",
    name: "default_vat_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_discount_account_id",
    name: "default_discount_account_id",
  }),
  FIELDS_STRUCTURE.numberField({
    label: "default_commission_From_client_Percentage",
    name: "default_commission_From_client_Percentage",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_insurance_account_id",
    name: "default_insurance_account_id",
  }),
];
export const CONTRACT_PATTERN_default_fees_accounts = [
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_1",
    name: "default_fees_account_1",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_2",
    name: "default_fees_account_2",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_3",
    name: "default_fees_account_3",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_4",
    name: "default_fees_account_4",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_5",
    name: "default_fees_account_5",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_6",
    name: "default_fees_account_6",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_7",
    name: "default_fees_account_7",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_8",
    name: "default_fees_account_8",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_9",
    name: "default_fees_account_9",
  }),
  FIELDS_STRUCTURE.account({
    label: "default_fees_account_10",
    name: "default_fees_account_10",
  }),
];

export const CONTRACT_PATTERN_moving_cost_center = [
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_revenue",
    name: "move_cost_center_with_revenue",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_tenant",
    name: "move_cost_center_with_tenant",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_insurance_revenue",
    name: "move_cost_center_with_insurance_revenue",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_price_revenue",
    name: "move_cost_center_with_price_revenue",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_intention_ratifying",
    name: "move_cost_center_with_intention_ratifying",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_other_fee",
    name: "move_cost_center_with_other_fee",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_commission_client",
    name: "move_cost_center_with_commission_client",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_commission_owner",
    name: "move_cost_center_with_commission_owner",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_contract_fines_terminating",
    name: "move_cost_center_with_contract_fines_terminating",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_decisiveness_granted",
    name: "move_cost_center_with_decisiveness_granted",
    options: ACCOUNT_GRID_TYPE,
  }),
  FIELDS_STRUCTURE.selectField({
    label: "move_cost_center_with_contract_proceeds_rerminating",
    name: "move_cost_center_with_contract_proceeds_rerminating",
    options: ACCOUNT_GRID_TYPE,
  }),
];

export const CONTRACT_PATTERN_contract_terms = [
  {
    label: "contract_terms",
    name: "contract_terms",
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