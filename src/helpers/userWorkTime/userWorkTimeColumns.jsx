import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";

const userWorkTimeColumns = [
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
  { header: "user_id", accessorKey: "user_id" },
  { header: "category_id", accessorKey: "category_id" },
  { header: "work_time_start", accessorKey: "work_time_start" },
  { header: "work_time_end", accessorKey: "work_time_end" },
];

export default userWorkTimeColumns;