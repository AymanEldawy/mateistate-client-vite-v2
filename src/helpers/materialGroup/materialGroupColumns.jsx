import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";

const materialGroupColumns = [
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
  { header: "number", accessorKey: "number" },
  { header: "name", accessorKey: "name" },
  { header: "parent_name", accessorKey: "parent_name" },
  { header: "note", accessorKey: "note" },
];

export default materialGroupColumns;