import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

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
  { header: "created_at", accessorKey: "createdAt" },
  { header: "number", accessorKey: "number", cell: ({ getValue }) => <Link to={`/entries?number=${getValue()}`}>{getValue()}</Link> },
  { header: "debit", accessorKey: "debit" },
  { header: "credit", accessorKey: "credit" },
  { header: "account_name", accessorKey: "account.name" },
  { header: "cost_center", accessorKey: "costCenter.name" },
  { header: "original", accessorKey: "createdFrom" },
  { header: "note", accessorKey: "note" },
  { header: "observe_account_id", accessorKey: "observeAccountId" },
];

export default entriesColumns