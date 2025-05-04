import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

const voucherPatternColumns = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  {
    header: "createdAt",
    accessorKey: "createdAt",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "code", accessorKey: "code" },
  {
    header: "name", accessorKey: "name",
    cell: ({ row, getValue }) => (
      <Link className="text-blue-600 hover:underline" to={`/patterns/voucher_pattern/${row?.original?.number}`}>{getValue()}</Link>
    )
  },
  { header: "list_name", accessorKey: "list_name" },
  { header: "default_account_id", accessorKey: "default_account_id" },
  { header: "shortcut_key", accessorKey: "shortcut_key" },
  { header: "auto_gen_entries", accessorKey: "auto_gen_entries" },
  { header: "auto_transfer_entry", accessorKey: "auto_transfer_entry" },
  { header: "gen_entries", accessorKey: "gen_entries" },
  { header: "generate_records", accessorKey: "generate_records" },
  { header: "show_contract_field", accessorKey: "show_contract_field" },
  {
    header: "show_contract_cost_center",
    accessorKey: "show_contract_cost_center",
  },
  { header: "required_cost_center", accessorKey: "required_cost_center" },
  { header: "required_statement", accessorKey: "required_statement" },
  {
    header: "default_print_folder_path",
    accessorKey: "default_print_folder_path",
  },
  { header: "show_debit_field", accessorKey: "show_debit_field" },
  { header: "show_credit_field", accessorKey: "show_credit_field" },
  { header: "debit_field_label", accessorKey: "debit_field_label" },
  { header: "credit_field_label", accessorKey: "credit_field_label" },
  { header: "show_currency", accessorKey: "show_currency" },
  { header: "show_cost_center", accessorKey: "show_cost_center" },
  { header: "show_note", accessorKey: "show_note" },
  { header: "odd_table_color", accessorKey: "odd_table_color" },
  { header: "even_table_color", accessorKey: "even_table_color" },
  { header: "sms", accessorKey: "sms" },
  { header: "mulct_price", accessorKey: "mulct_price" },
  { header: "mulct_debit_id", accessorKey: "mulct_debit_id" },
  { header: "mulct_credit_id", accessorKey: "mulct_credit_id" },
  { header: "mulct_note", accessorKey: "mulct_note" },
];

export default voucherPatternColumns;