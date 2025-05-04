import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { BILL_PATTERN_BILL_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { Link } from "react-router-dom";

const billPatternColumns = [
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
    cell: ({ getValue, row }) => (
      <Link
        to={`/patterns/bill_pattern/${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
  },
  { header: "code", accessorKey: "code" },
  {
    header: "name", accessorKey: "name",
    cell: ({ row, getValue }) => (
      <Link className="text-blue-600 hover:underline" to={`/patterns/bill_pattern/${row?.original?.number}`}>{getValue()}</Link>
    )
  },
  {
    header: "bill_type",
    accessorKey: "bill_type",
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
    cell: ({ getValue, row }) => (
      <span className="text-blue-500 font-medium hover:underline">
        {getValue() ? "Yes" : "no"}
      </span>
    ),
  },
];

export default billPatternColumns