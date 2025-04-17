import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

const storeColumns = [
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
    accessorKey: "created_at",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "number",
    accessorKey: "number",
    cell: ({ getValue, row }) => (
      <Link
        to={`/stores?number=${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
  },
  { header: "type", accessorKey: "type" },
  { header: "code", accessorKey: "code" },
  { header: "name", accessorKey: "name" },
  { header: "last_name", accessorKey: "last_name" },
  { header: "address", accessorKey: "address" },
  { header: "warehouseman", accessorKey: "warehouseman" },
  { header: "note", accessorKey: "note" },
  {
    header: "parent_id",
    accessorKey: "parent_id",
  },
  {
    header: "store_final_id",
    accessorKey: "store_final_id",
  },
];

export default storeColumns;