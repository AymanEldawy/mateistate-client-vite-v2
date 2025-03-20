import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { DefaultColumnFilter } from "@/components/tables/filters/DefaultColumnFilter";
import { Link } from "react-router-dom";
import { ACCOUNT_TYPE } from "../DEFAULT_OPTIONS";

const accountColumns = [
  {
    id: "select",
    size: 40,
    isResizingColumn: false,
    header: ({ table }) => {
      return (
        <IndeterminateCheckbox
          {...{
            checked: table?.getIsAllRowsSelected(),
            indeterminate: table?.getIsSomeRowsSelected(),
            onChange: table?.getToggleAllRowsSelectedHandler(),
          }}
        />
      )
    },
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row?.getIsSelected(),
          disabled: !row?.getCanSelect(),
          indeterminate: row?.getIsSomeSelected(),
          onChange: row?.getToggleSelectedHandler(),
        }}
        style={{ px: "15px" }}
      />
    ),
  },
  {
    header: "number",
    accessorKey: "number",
    sortingFn: "myCustomSortingFn", // use custom global sorting function
    Filter: DefaultColumnFilter({ placeholder: "Search number" }),
    enableColumnFilter: true,
    filter: 'includesStringSensitive',
    filterFn: 'inNumberRange',
    addMeta: () => 'range',
    columnFiltersMeta: 'rangewithout',
  },

  {
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/account/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    header: "type",
    accessorKey: "type",
    cell: ({ getValue }) => {
      let type = ACCOUNT_TYPE?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
  { header: "parent name", accessorKey: "parent_name" },
  { header: "final name", accessorKey: "final_name" },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "currency", accessorKey: "currency_name" },
  { header: "note", accessorKey: "note" },
];

export default accountColumns