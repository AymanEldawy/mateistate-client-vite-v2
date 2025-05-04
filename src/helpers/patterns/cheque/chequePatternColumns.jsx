import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { CHEQUE_PATTERN_PAPER_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { Link } from "react-router-dom";

const chequePatternColumns = [
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
          to={`/patterns/cheque_pattern/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },

  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => {
      return (
        <Link
          to={`/patterns/cheque_pattern/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    header: "paperType",
    accessorKey: "paperType",
    cell: ({ getValue }) => {
      let type = CHEQUE_PATTERN_PAPER_TYPE?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
  { header: "listName", accessorKey: "listName" },
  { header: "defaultAccountId", accessorKey: "defaultAccountId" },
  {
    header: "genEntries",
    accessorKey: "genEntries",
    cell: ({ getValue, row }) => (
      <span className="text-blue-500 font-medium hover:underline">
        {getValue() ? "Yes" : "no"}
      </span>
    ),
  },
  { header: "defaultPrintFolder", accessorKey: "defaultPrintFolder" },
];

export default chequePatternColumns