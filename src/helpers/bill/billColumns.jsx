import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { BILL_PATTERN_BILL_TYPE } from "../DEFAULT_OPTIONS";
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
    size: 40,
    header: "no",
    accessorKey: "number",
    cell: ({ getValue, row }) => {
      let type = BILL_PATTERN_BILL_TYPE?.find(
        (c) => c?.id === row?.original.code
      );
      return (
        <Link
          to={`/bill/${row?.original.code}s?number=${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },
  { header: "bill_date", accessorKey: "bill_date" },
  {
    header: "code",
    accessorKey: "code",
    cell: ({ getValue }) => {
      let type = BILL_PATTERN_BILL_TYPE?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
  { header: "note", accessorKey: "note" },
  {
    header: "barcode_bill",
    accessorKey: "barcode_bill",
  },

  { header: "total_quantities", accessorKey: "total_quantities" },
  { header: "refunded_taxable_amount", accessorKey: "refunded_taxable_amount" },
  {
    header: "non_refunded_taxable_amount",
    accessorKey: "non_refunded_taxable_amount",
  },
  { header: "not_taxable", accessorKey: "not_taxable" },
  { header: "taxable", accessorKey: "taxable" },
  { header: "discounts", accessorKey: "discounts" },
  { header: "discounts_extra", accessorKey: "discounts_extra" },
  { header: "non_refundable_vat", accessorKey: "non_refundable_vat" },
  { header: "non_refundable_vat2", accessorKey: "non_refundable_vat2" },
  { header: "total", accessorKey: "total" },
  { header: "grand_total", accessorKey: "grand_total" },
  { header: "net", accessorKey: "net" },
];
export default billColumns