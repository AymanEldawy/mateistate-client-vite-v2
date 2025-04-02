import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";
import { SERVICE_STATUS, UNIT_TYPE } from "../DEFAULT_OPTIONS";

const serviceColumns = [
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
    header: "number",
    accessorKey: "number",
    cell: ({ row, getValue }) => (
      <Link
        to={`/maintenances/${row?.original?.code}/${row.original.id}`}
        className="text-blue-500 font-medium hover:underline"
      >
        # {getValue()}
      </Link>
    ),
  },
  { header: "code", accessorKey: "code" },
  {
    header: "start_date",
    accessorKey: "start_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "end_date",
    accessorKey: "end_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "building_name", accessorKey: "building_name" },
  { header: "unit_name", accessorKey: "unit_name" },
  { header: "apartment_no", accessorKey: "apartment_no" },
  {
    header: "unit_type",
    accessorKey: "unit_type",
    cell: ({ getValue }) => {
      let type = UNIT_TYPE?.find((c) => c?.id === getValue());
      return <span>{type?.name}</span>;
    },
  },
  { header: "contract_name", accessorKey: "contract_name" },
  { header: "payment_method", accessorKey: "payment_method" },
  { header: "customer_user_name", accessorKey: "customer_user_name" },
  { header: "is_default", accessorKey: "is_default" },
  { header: "total", accessorKey: "total" },
  {
    header: "status",
    accessorKey: "status",
    cell: ({ getValue }) => {
      let type = SERVICE_STATUS?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
  { header: "supervisor_user_name", accessorKey: "supervisor_user_name" },
  { header: "reason", accessorKey: "reason" },
];

export default serviceColumns;