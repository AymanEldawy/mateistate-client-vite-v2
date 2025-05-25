import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

const billColumns = [
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
        to={`/bills?number=${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
  },
  {
    header: "issue_date",
    accessorKey: "issueDate",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "bill_date",
    accessorKey: "billDate",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "bill_kind", accessorKey: "billKind" },
  { header: "kind", accessorKey: "kind" },
  { header: "payment_method", accessorKey: "paymentMethod" },
  { header: "receipt_number", accessorKey: "receiptNumber" },
  { header: "total_quantities", accessorKey: "totalQuantities" },
  { 
    header: "total", 
    accessorKey: "total",
    cell: ({ getValue }) => (
      <span className="font-medium">${getValue()?.toFixed(2)}</span>
    )
  },
  { 
    header: "grand_total", 
    accessorKey: "grandTotal",
    cell: ({ getValue }) => (
      <span className="font-bold text-green-600">${getValue()?.toFixed(2)}</span>
    )
  },
  { header: "discounts", accessorKey: "discounts" },
  { header: "vat_amount", accessorKey: "vatAmount" },
  { header: "net", accessorKey: "net" },
  { header: "note", accessorKey: "note" },
  { header: "code", accessorKey: "code" },
];

export default billColumns;