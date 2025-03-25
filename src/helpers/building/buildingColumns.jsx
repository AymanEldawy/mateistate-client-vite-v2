import { PaletteIcon } from "@/components/Icons";
import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

const buildingColumns = [
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
    header: "name",
    accessorKey: "name",
    cell: ({ getValue, row }) => (
      <div className="flex items-center gap-4 justify-between">

        <Link
          to={`/building/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
        <Link
          to={`/tools/${row?.original?.id}`}
          className="border capitalize hover:bg-gray-100 dark:bg-dark-border dark:text-white rounded-md px-2 py-[2px] text-sm flex items-center gap-1 font-medium "
        >
          <PaletteIcon className="w-5 h-5" />
        </Link>
      </div>
    ),
  },
  { header: "emirate", accessorKey: "emirate" },
  { header: "suburb", accessorKey: "suburb" },
  { header: "area", accessorKey: "area" },
  { header: "street", accessorKey: "street" },
  { header: "building_number", accessorKey: "building_number" },
  { header: "part_number", accessorKey: "part_number" },
  { header: "basin_number", accessorKey: "basin_number" },
  { header: "bond_number", accessorKey: "bond_number" },
  { header: "bond_type", accessorKey: "bond_type" },
  {
    header: "bond_date",
    accessorKey: "bond_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "owner_id", accessorKey: "owner_id" },
  { header: "display", accessorKey: "display" },
  { header: "statement", accessorKey: "statement" },
  { header: "construction_account_id", accessorKey: "construction_account_id" },
  { header: "create_within_id", accessorKey: "create_within_id" },
  { header: "main_cost_center_id", accessorKey: "main_cost_center_id" },
  {
    header: "building_bank_account_id",
    accessorKey: "building_bank_account_id",
  },
  { header: "lessor_id", accessorKey: "lessor_id" },
  { header: "bank_account_number", accessorKey: "bank_account_number" },
  { header: "number", accessorKey: "number" },
  { header: "apartment_count", accessorKey: "apartment_count" },
  { header: "penthouse_count", accessorKey: "penthouse_count" },
  { header: "parking_count", accessorKey: "parking_count" },
  { header: "mezzanine_count", accessorKey: "mezzanine_count" },
  { header: "office_count", accessorKey: "office_count" },
  { header: "warehouse_count", accessorKey: "warehouse_count" },
  { header: "service_apartments", accessorKey: "service_apartments" },
  { header: "drivers_apartments", accessorKey: "drivers_apartments" },
  { header: "stores", accessorKey: "stores" },
  {
    header: "purchase_date",
    accessorKey: "purchase_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "amount", accessorKey: "amount" },
  { header: "currency_id", accessorKey: "currency_id" },
  { header: "currency_val", accessorKey: "currency_val" },
  { header: "account_id", accessorKey: "account_id" },
  { header: "apartment_floor", accessorKey: "apartment_floor" },
  { header: "penthouse_floor", accessorKey: "penthouse_floor" },
  { header: "parking_floor", accessorKey: "parking_floor" },
  { header: "mezzanine_floor", accessorKey: "mezzanine_floor" },
  { header: "office_floor", accessorKey: "office_floor" },
  { header: "underground_parking", accessorKey: "underground_parking" },
  { header: "bank_id", accessorKey: "bank_id" },
  { header: "gen_entries", accessorKey: "gen_entries" },
];

export default buildingColumns