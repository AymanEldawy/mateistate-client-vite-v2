import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

const ownerExpensesTypesColumns = [
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
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/owner_expenses_types?number=${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "description", accessorKey: "description" },
  { header: "isActive", accessorKey: "isActive" },
];

export default ownerExpensesTypesColumns;
