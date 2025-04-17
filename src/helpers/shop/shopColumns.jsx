import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";
import { SHOP_KIND_TYPE } from "../DEFAULT_OPTIONS";

const shopColumns = [
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
  { header: "number", accessorKey: "number" },
  {
    header: "shop_no",
    accessorKey: "shop_no",

    cell: ({ getValue, row }) => (
      <Link
        to={`/shops?number=${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        {getValue()}
      </Link>
    ),
  },
  {
    header: "shop_kind",
    accessorKey: "shop_kind",
    cell: ({ getValue, row }) => {
      let kind = SHOP_KIND_TYPE?.find(
        (c) => c?.id === +getValue()
      ).name;
      return (
        <span
          to={`/shops?number=${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {kind}
        </span>
      );
    },
  },
  { header: "building_id", accessorKey: "building_name" },
  { header: "description", accessorKey: "description" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "view", accessorKey: "view" },
  { header: "license1", accessorKey: "license1" },
  { header: "license2", accessorKey: "license2" },
  { header: "unified_num", accessorKey: "unified_num" },
  { header: "manservant_room", accessorKey: "manservant_room" },
  { header: "driver_room", accessorKey: "driver_room" },
  { header: "has_lawsuit", accessorKey: "has_lawsuit" },
  { header: "customer_id", accessorKey: "customer_id" },
  { header: "customer_owner_id", accessorKey: "customer_owner_id" },
  { header: "flat_owner", accessorKey: "flat_owner" },
  { header: "water_meter", accessorKey: "water_meter" },
  { header: "electricity_meter", accessorKey: "electricity_meter" },
  { header: "bond_type", accessorKey: "bond_type" },
  { header: "bond_no", accessorKey: "bond_no" },
  {
    header: "bond_date",
    accessorKey: "bond_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "type", accessorKey: "type" },
  { header: "note", accessorKey: "note" },
];
export default shopColumns;