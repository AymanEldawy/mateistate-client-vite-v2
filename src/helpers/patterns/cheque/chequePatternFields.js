import { CHEQUE_PATTERN__PATTERN_DEFAULT_DATE, CHEQUE_PATTERN__PATTERN_PAPER_TYPE } from "../../DEFAULT_OPTIONS";
import FIELDS_STRUCTURE from "../../FIELDS_STRUCTURE";

export const CHEQUE_PATTERN_GENERAL = [
  FIELDS_STRUCTURE.selectField({
    label: "paper_type",
    name: "paper_type",
    options: CHEQUE_PATTERN__PATTERN_PAPER_TYPE,
    required: true,
  }),
  FIELDS_STRUCTURE.name(),
  FIELDS_STRUCTURE.textField({
    label: "ltnname",
    name: "ltnname",
  }),
  FIELDS_STRUCTURE.textField({
    label: "options_name",
    name: "options_name",
  }),

  FIELDS_STRUCTURE.account({
    label: "default_account_id",
    name: "default_account_id",
  }),

  FIELDS_STRUCTURE.gen_entries(),
  FIELDS_STRUCTURE.gen_entries({
    label: "auto_gen_entries",
    name: "auto_gen_entries",
  }),
  FIELDS_STRUCTURE.gen_entries({
    label: "auto_transfer_entry",
    name: "auto_transfer_entry",
  }),
  FIELDS_STRUCTURE.textField({
    label: "default_print_folder",
    name: "default_print_folder",
  })
];

export const CHEQUE_PATTERN_COLLECTION = [

  FIELDS_STRUCTURE.checkboxField({
    label: "collection",
    name: "collection",
  }),

  FIELDS_STRUCTURE.checkboxField({
    label: "collection_gen_entries",
    name: "collection_gen_entries",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "collection_auto_gen_entries",
    name: "collection_auto_gen_entries",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "collection_auto_transfer_entry",
    name: "collection_auto_transfer_entry",
  }),

  FIELDS_STRUCTURE.checkboxField({
    label: "collection_default_account_is_building_bank",
    name: "collection_default_account_is_building_bank",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "collection_default_observe_account_is_client",
    name: "collection_default_observe_account_is_client",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "collection_move_cost_center_debit",
    name: "collection_move_cost_center_debit",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "collection_move_cost_center_credit",
    name: "collection_move_cost_center_credit",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "collection_default_date",
    name: "collection_default_date",
    options: CHEQUE_PATTERN__PATTERN_DEFAULT_DATE,
  }),
  FIELDS_STRUCTURE.account({
    label: "collection_credit_account_id",
    name: "collection_credit_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "collection_debit_account_id",
    name: "collection_debit_account_id",
  }),
];

export const CHEQUE_PATTERN_COMMISSION = [
  FIELDS_STRUCTURE.checkboxField({
    label: "commission_amount_from_building",
    name: "commission_amount_from_building",
    type: "checkbox",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "commission_default_account_is_building_owner",
    name: "commission_default_account_is_building_owner",
    type: "checkbox",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "commission_default_observe_is_revenue_account",
    name: "commission_default_observe_is_revenue_account",
    type: "checkbox",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "commission_move_cost_center_debit",
    name: "commission_move_cost_center_debit",
    type: "checkbox",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "commission_move_cost_center_credit",
    name: "commission_move_cost_center_credit",
    type: "checkbox",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "commission_type",
    name: "commission_type",
    options: CHEQUE_PATTERN__PATTERN_DEFAULT_DATE,
  }),
  FIELDS_STRUCTURE.account({
    label: "commission_debit_account_id",
    name: "commission_debit_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "commission_credit_account_id",
    name: "commission_credit_account_id",
  }),
];

export const CHEQUE_PATTERN_PARTIAL_COLLECTION = [
  FIELDS_STRUCTURE.checkboxField({
    label: "partial_collection",
    name: "partial_collection",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partial_gen_entries",
    name: "partial_gen_entries",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partial_auto_gen_entries",
    name: "partial_auto_gen_entries",

  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partial_auto_transfer_entry",
    name: "partial_auto_transfer_entry",

  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partial_default_account_is_building_bank",
    name: "partial_default_account_is_building_bank",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partial_default_observe_account_is_client",
    name: "partial_default_observe_account_is_client",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partial_move_cost_center_debit",
    name: "partial_move_cost_center_debit",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "partial_move_cost_center_credit",
    name: "partial_move_cost_center_credit",
  }),
  FIELDS_STRUCTURE.account({
    label: "partial_debit_account_id",
    name: "partial_debit_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "partial_credit_account_id",
    name: "partial_credit_account_id",
  }),
];

export const CHEQUE_PATTERN_RETURN = [
  FIELDS_STRUCTURE.checkboxField({
    label: "returnable",
    name: "returnable",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnable_gen_entries",
    name: "returnable_gen_entries",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnable_auto_gen_entries",
    name: "returnable_auto_gen_entries",

  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnable_auto_transfer_entry",
    name: "returnable_auto_transfer_entry",

  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnable_default_account_is_client",
    name: "returnable_default_account_is_client",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnable_default_observe_account_is_building_bank",
    name: "returnable_default_observe_account_is_building_bank",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnable_active_operations",
    name: "returnable_active_operations",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnable_move_cost_center_debit",
    name: "returnable_move_cost_center_debit",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "returnable_move_cost_center_credit",
    name: "returnable_move_cost_center_credit",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "return_fee_default_account_is_client",
    name: "return_fee_default_account_is_client",
  }),
  FIELDS_STRUCTURE.selectField({
    label: "returnable_default_date",
    name: "returnable_default_date",
    options: CHEQUE_PATTERN__PATTERN_DEFAULT_DATE,
  }),
  FIELDS_STRUCTURE.account({
    label: "returnable_debit_account_id",
    name: "returnable_debit_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "returnable_credit_account_id",
    name: "returnable_credit_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "return_fee_debit_account_id",
    name: "return_fee_debit_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "return_fee_credit_account_id",
    name: "return_fee_credit_account_id",
  }),
];

export const CHEQUE_PATTERN_STATEMENTS = [
  FIELDS_STRUCTURE.textField({
    label: "statement_account",
    name: "statement_account",
  }),
  FIELDS_STRUCTURE.textField({
    label: "statement_observe_account",
    name: "statement_observe_account",
  }),
  FIELDS_STRUCTURE.textField({
    label: "statement_collection",
    name: "statement_collection",
  }),
  FIELDS_STRUCTURE.textField({
    label: "statement_return",
    name: "statement_return",
  }),
  FIELDS_STRUCTURE.textField({
    label: "statement_partial",
    name: "statement_partial",
  }),
];

export const CHEQUE_PATTERN__sms = [{ label: "sms", name: "sms", type: "text" }];