import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

const contractPatternColumns = [
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
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "contract_type", accessorKey: "contract_type" },
  { header: "code", accessorKey: "code" },
  {
    header: "name", accessorKey: "name", cell: ({ row, getValue }) => (
      <Link className="text-blue-600 hover:underline" to={`/patterns/contract_pattern/${row?.original?.number}`}>{getValue()}</Link>
    )
  },
  { header: "list_name", accessorKey: "list_name" },
  { header: "shortcut_key", accessorKey: "shortcut_key" },
  { header: "gen_entries", accessorKey: "gen_entries" },
  { header: "auto_gen_entries", accessorKey: "auto_gen_entries" },
  { header: "auto_transfer_entry", accessorKey: "auto_transfer_entry" },
  { header: "record_date_created", accessorKey: "record_date_created" },
  {
    header: "new_contract_without_terminating",
    accessorKey: "new_contract_without_terminating",
  },
  { header: "insurance_required", accessorKey: "insurance_required" },
  {
    header: "default_revenue_account_id",
    accessorKey: "default_revenue_account_id",
  },
  {
    header: "default_commission_from_client_account_id",
    accessorKey: "default_commission_from_client_account_id",
  },
  {
    header: "default_commission_from_owner_account_id",
    accessorKey: "default_commission_from_owner_account_id",
  },
  {
    header: "default_contract_price_revenue_account_id",
    accessorKey: "default_contract_price_revenue_account_id",
  },
  {
    header: "default_contract_ratification_revenue_account_id",
    accessorKey: "default_contract_ratification_revenue_account_id",
  },
  {
    header: "default_fines_revenue_account_id",
    accessorKey: "default_fines_revenue_account_id",
  },
  {
    header: "default_fee_revenue_account_id",
    accessorKey: "default_fee_revenue_account_id",
  },
  {
    header: "default_discount_account_id",
    accessorKey: "default_discount_account_id",
  },
  {
    header: "default_commission_From_client_Percentage",
    accessorKey: "default_commission_From_client_Percentage",
  },
  {
    header: "default_insurance_account_id",
    accessorKey: "default_insurance_account_id",
  },
  {
    header: "move_cost_center_with_revenue",
    accessorKey: "move_cost_center_with_revenue",
  },
  {
    header: "move_cost_center_with_tenant",
    accessorKey: "move_cost_center_with_tenant",
  },
  {
    header: "move_cost_center_with_insurance_revenue",
    accessorKey: "move_cost_center_with_insurance_revenue",
  },
  {
    header: "move_cost_center_with_price_revenue",
    accessorKey: "move_cost_center_with_price_revenue",
  },
  {
    header: "move_cost_center_with_intention_ratifying",
    accessorKey: "move_cost_center_with_intention_ratifying",
  },
  {
    header: "move_cost_center_with_other_fee",
    accessorKey: "move_cost_center_with_other_fee",
  },
  {
    header: "move_cost_center_with_commission_client",
    accessorKey: "move_cost_center_with_commission_client",
  },
  {
    header: "move_cost_center_with_commission_owner",
    accessorKey: "move_cost_center_with_commission_owner",
  },
  {
    header: "move_cost_center_with_contract_fines_terminating",
    accessorKey: "move_cost_center_with_contract_fines_terminating",
  },
  {
    header: "move_cost_center_with_decisiveness_granted",
    accessorKey: "move_cost_center_with_decisiveness_granted",
  },
  { header: "contract_terms", accessorKey: "contract_terms" },
  { header: "folder_default_printing", accessorKey: "folder_default_printing" },
  {
    header: "folder_print_communications",
    accessorKey: "folder_print_communications",
  },
  { header: "folder_print_clearance", accessorKey: "folder_print_clearance" },
  {
    header: "move_cost_center_with_contract_proceeds_rerminating",
    accessorKey: "move_cost_center_with_contract_proceeds_rerminating",
  },
  { header: "sms", accessorKey: "sms" },
];



export default contractPatternColumns