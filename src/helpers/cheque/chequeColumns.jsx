import { PrintIcon, SearchIcon } from "@/components/Icons";
import Btn from "@/components/shared/Btn";
import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { CHQ_RECEIVED_CODE } from "@/data/GENERATE_STARTING_DATA";
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




export const CHEQUE_GRID_COLUMNS = [
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
    header: "internal_number",
    accessorKey: "internal_number",
    enableColumnFilter: false, cell: ({ row, getValue, table }) => {
      return (
        <div className="flex gap-2 items-center">
          <button type='button' className="border px-2 py-1 font-medium hover:bg-gray-200 bg-gray-100 rounded-md flex items-center gap-2 text-sm" onClick={() => {
            table.options.meta.setOpenForm({
              open: true,
              type: "CHEQUE",
              table: 'cheque',
              oldValues: row?.original,
              code: CHQ_RECEIVED_CODE,
              voucher_id: row?.original.id
            })
          }}>
            {getValue()}
            <SearchIcon className="h-4 w-4" />
          </button>
          {/* <ViewEntry id={row?.original?.id} hideText /> */}
          <Btn
            type="button"
            onClick={() => { }}
            containerClassName="!w-fit !px-2"
          >
            <PrintIcon className="w-5 h-5 text-inherit" />
          </Btn>
        </div>
      )
    }
  },
  { header: "amount", accessorKey: "amount", enableColumnFilter: false, },
  {
    header: "status", accessorKey: "status", enableColumnFilter: false, cell: ({ row }) => {
      const displayChqStatus = () => {
        if (row?.original?.collection_status) {
          return <span className="text-xs px-2 p-1 rounded-md font-normal text-green-500 bg-green-100 ">Collected</span>
        }
        else if (row?.original?.partial_collection_status) {
          return <span className="text-xs px-2 p-1 rounded-md font-normal text-yellow-500 bg-yellow-100 ">Partial Collected</span>
        }
        else if (row?.original?.return_status) {
          return <span className="text-xs px-2 p-1 rounded-md font-normal text-red-500 bg-red-100 ">Returned</span>
        }
        else {
          return <span className="text-xs px-2 p-1 rounded-md font-normal text-gray-500 bg-gray-100 ">Uncollected</span>
        }

      }
      return displayChqStatus()
    }
  },
  {
    header: "due_date", accessorKey: "due_date", enableColumnFilter: false, cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "end_due_date", accessorKey: "end_due_date", enableColumnFilter: false, cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "bank_id", accessorKey: "bank_id", enableColumnFilter: false, },
  { header: "note1", accessorKey: "note1", enableColumnFilter: false, },
  { header: "note2", accessorKey: "note2", enableColumnFilter: false, },
]

export default chequeColumns