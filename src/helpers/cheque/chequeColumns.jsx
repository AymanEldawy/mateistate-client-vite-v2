import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

const chequeColumns = [
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
    size: 40,
    header: "no",
    accessorKey: "number",
    cell: ({ getValue, row }) => {
      return (
        <Link
          to={`/cheque/${row?.original?.code}/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },

  { header: "number", accessorKey: "number" },
  { header: "account", accessorKey: "account" },
  { header: "cost_center", accessorKey: "cost_center" },
  { header: "note", accessorKey: "note" },
  { header: "connect_with", accessorKey: "connect_with" },
  { header: "type", accessorKey: "type" },
  { header: "amount", accessorKey: "amount" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "code", accessorKey: "code" },
  { header: "feedback", accessorKey: "feedback" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "seller_id", accessorKey: "seller_id" },
  { header: "observe_account_id", accessorKey: "observe_account_id" },
  { header: "observe_cost_center_id", accessorKey: "observe_cost_center_id" },
  { header: "observe_account_note", accessorKey: "observe_account_note" },
  { header: "beneficiary_name", accessorKey: "beneficiary_name" },
  { header: "parking_id", accessorKey: "parking_id" },
  { header: "shop_id", accessorKey: "shop_id" },
  { header: "shop_no", accessorKey: "shop_no" },
  { header: "apartment_id", accessorKey: "apartment_id" },
  { header: "apartment_no", accessorKey: "apartment_no" },
  {
    header: "due_date",
    accessorKey: "due_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "end_due_date",
    accessorKey: "end_due_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "without_due_date", accessorKey: "without_due_date" },
  { header: "bank_id", accessorKey: "bank_id" },
  { header: "note1", accessorKey: "note1" },
  { header: "note2", accessorKey: "note2" },
  { header: "deport_status", accessorKey: "deport_status" },
  { header: "collection_status", accessorKey: "collection_status" },
  {
    header: "partial_collection_status",
    accessorKey: "partial_collection_status",
  },
  { header: "return_status", accessorKey: "return_status" },
  { header: "deposit_status", accessorKey: "deposit_status" },
  { header: "gen_entries", accessorKey: "gen_entries" },
];

export default chequeColumns