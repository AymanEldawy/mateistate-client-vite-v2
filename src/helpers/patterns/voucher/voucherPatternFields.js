import FIELDS_STRUCTURE from "../../FIELDS_STRUCTURE";

export const VOUCHER_PATTERN_GENERAL = [
  FIELDS_STRUCTURE.numberField({
    label: "code",
    name: "code",

  }),
  FIELDS_STRUCTURE.name(),
  FIELDS_STRUCTURE.textField({ label: "ltnname", name: "ltnname", }),
  FIELDS_STRUCTURE.textField({
    label: "list_name",
    name: "list_name",
  }),

  FIELDS_STRUCTURE.account({
    label: "default_account_id",
    name: "default_account_id",
  }),
  FIELDS_STRUCTURE.textField({
    label: "shortcut_key",
    name: "shortcut_key",
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
    label: "generate_records",
    name: "generate_records",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "show_contract_field",
    name: "show_contract_field",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "show_contract_cost_center",
    name: "show_contract_cost_center",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "required_cost_center",
    name: "required_cost_center",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "required_statement",
    name: "required_statement",
  }),
  FIELDS_STRUCTURE.textField({
    label: "default_print_folder_path",
    name: "default_print_folder_path",
  }),
];

export const VOUCHER_PATTERN_FIELDS = [
  FIELDS_STRUCTURE.checkboxField({
    label: "show_debit_field",
    name: "show_debit_field",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "show_credit_field",
    name: "show_credit_field",
  }),
  FIELDS_STRUCTURE.textField({
    label: "debit_field_label",
    name: "debit_field_label",
  }),
  FIELDS_STRUCTURE.textField({
    label: "credit_field_label",
    name: "credit_field_label",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "show_currency",
    name: "show_currency",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "show_cost_center",
    name: "show_cost_center",
  }),
  FIELDS_STRUCTURE.checkboxField({
    label: "show_note",
    name: "show_note",
  }),
  FIELDS_STRUCTURE.textField({
    label: "odd_table_color",
    name: "odd_table_color",
  }),
  FIELDS_STRUCTURE.textField({
    label: "even_table_color",
    name: "even_table_color",
  }),
];

export const VOUCHER_PATTERN_sms = [
  {
    label: "sms",
    name: "sms",
    type: "text",
  },
];