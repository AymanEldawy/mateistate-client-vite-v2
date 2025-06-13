import { PrintIcon, SearchIcon } from "@/components/Icons"
import Btn from "@/components/shared/Btn"
import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox"
import { VOUCHER_RECEIPTS_CODE, VOUCHER_RECEIPTS_NAME } from "@/data/GENERATE_STARTING_DATA"
import { Link } from "react-router-dom"

export const VOUCHER_GRID_COLUMNS = [
  {
    header: "internal_number",
    accessorKey: "internal_number",
    enableColumnFilter: false, cell: ({ row, getValue, table }) => {
      return (
        <div className="flex gap-2 items-center">
          <button type='button' className="border px-2 py-1 font-medium hover:bg-gray-200 bg-gray-100 rounded-md flex items-center gap-2 text-sm" onClick={() => {
            table.options.meta.handleDispatchForm({
              type: "VOUCHER",
              table: 'voucher',
              voucherName: VOUCHER_RECEIPTS_NAME,
              voucherType: VOUCHER_RECEIPTS_CODE,
              cheque_id: row?.original.id,
              oldValues: {
                ...row?.original,
                credit_total: 0,
                debit_total: 0,
                debit_amount: 0,
                credit_amount: 0,
                voucherGridData: row?.original?.result,
              },
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
  { header: "credit", accessorKey: "credit", enableColumnFilter: false, },
  {
    header: "created_at", accessorKey: "created_at", enableColumnFilter: false, cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "note", accessorKey: "note", enableColumnFilter: false, },
]

const voucherColumns = [
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
    accessorKey: "createdAt",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "number",
    accessorKey: "number",
    cell: ({ getValue, row }) => (
      <Link
        to={`/vouchers?number=${row?.original?.number}&code=${row?.original?.voucherType}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
  },
  { header: "note", accessorKey: "note" },
  { header: "debit_amount", accessorKey: "debitAmount" },
  { header: "credit_amount", accessorKey: "creditAmount" },
  { header: "debit_total", accessorKey: "debitTotal" },
  { header: "credit_total", accessorKey: "creditTotal" },
  { header: "voucher_type", accessorKey: "voucherType" },
  { header: "currency_val", accessorKey: "currencyVal" },
  { header: "connect_with", accessorKey: "connectWith" },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => (
      <span>{getValue() ? "Yes" : "No"}</span>
    ),
  },
  {
    header: "gen_entries",
    accessorKey: "genEntries",
    cell: ({ getValue }) => (
      <span>{getValue() ? "Yes" : "No"}</span>
    ),
  },
  {
    header: "first_batch",
    accessorKey: "isFirstBatch",
    cell: ({ getValue }) => (
      <span>{getValue() ? "Yes" : "No"}</span>
    ),
  },
  {
    header: "status",
    accessorKey: "isDeleted",
    cell: ({ getValue }) => (
      <span className={`px-2 py-1 rounded-full text-xs ${getValue() ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
        {getValue() ? "Deleted" : "Active"}
      </span>
    ),
  },
];

export default voucherColumns;