import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

const categoryProblemColumns = [
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
    header: "category_name",
    accessorKey: "category_name",
    cell: ({ row, getValue }) => {
      return getValue();
    },
  },
  {
    header: "description",
    accessorKey: "description",
    cell: ({ row, getValue }) => {
      return (
        <Link
          className="text-blue-500 hover:underline"
          to={`/category_problems?number=${row?.original?.number}`}
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "price", accessorKey: "price" },
  { header: "minutes", accessorKey: "minutes" },
  { header: "is_available", accessorKey: "is_available" },
];

export default categoryProblemColumns;