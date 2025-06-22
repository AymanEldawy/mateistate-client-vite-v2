import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

const categoryColumns = [
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
        to={`/categories?number=${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
  },
  { header: "name", accessorKey: "name" },
  { header: "description", accessorKey: "description" },
  { header: "parent_name", accessorKey: "parent.name" },
  { header: "image", accessorKey: "image" },
];

export default categoryColumns;