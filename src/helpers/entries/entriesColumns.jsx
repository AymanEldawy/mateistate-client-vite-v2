import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";

const entriesColumns = [
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
  { header: "created_at", accessorKey: "created_at" },
  { header: "number", accessorKey: "number" },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "account_name", accessorKey: "account_id" },
  { header: "cost_center", accessorKey: "cost_center_id" },
  { header: "original", accessorKey: "created_from" },
  { header: "note", accessorKey: "note" },
  { header: "observe_account_id", accessorKey: "observe_account_id" },
];

export default entriesColumns