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
    cell: ({ getValue, row }) => {
      return (
      <div className="flex items-center gap-4 justify-between">

        <Link
          to={`/buildings?number=${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
        <Link
          to={`/building/details/${row?.original?.id}`}
          className="border capitalize hover:bg-gray-100 dark:bg-dark-border dark:text-white rounded-md px-2 py-[2px] text-sm flex items-center gap-1 font-medium "
        >
          <PaletteIcon className="w-5 h-5" />
        </Link>
      </div>
    )},
  },
  { header: "emirate", accessorKey: "emirate" },
  { header: "suburb", accessorKey: "suburb" },
  { header: "area", accessorKey: "area" },
  { header: "street", accessorKey: "street" },
  { header: "building_number", accessorKey: "building_number" },
  { header: "part_number", accessorKey: "partNumber" },
  { header: "basin_number", accessorKey: "basinNumber" },
  { header: "bond_number", accessorKey: "bondNumber" },
  { header: "bond_type", accessorKey: "bondType" },
  {
    header: "bond_date",
    accessorKey: "bondDate",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "owner_id", accessorKey: "ownerId" },
  { header: "display", accessorKey: "display" },
  { header: "statement", accessorKey: "statement" },
  { header: "construction_account_id", accessorKey: "constructionAccountId" },
  { header: "create_within_id", accessorKey: "createWithinId" },
  { header: "main_cost_center_id", accessorKey: "mainCostCenterId" },
  {
    header: "building_bank_account_id",
    accessorKey: "buildingBankAccountId",
  },
  { header: "lessor_id", accessorKey: "lessorId" },
  { header: "bank_account_number", accessorKey: "bankAccountNumber" },
  { header: "number", accessorKey: "number" },
  { header: "apartment_count", accessorKey: "apartmentCount" },
  { header: "penthouse_count", accessorKey: "penthouseCount" },
  { header: "parking_count", accessorKey: "parkingCount" },
  { header: "mezzanine_count", accessorKey: "mezzanineCount" },
  { header: "office_count", accessorKey: "officeCount" },
  { header: "warehouse_count", accessorKey: "warehouseCount" },
  { header: "service_apartments", accessorKey: "serviceApartments" },
  { header: "drivers_apartments", accessorKey: "driversApartments" },
  { header: "stores", accessorKey: "stores" },
  {
    header: "purchase_date",
    accessorKey: "purchaseDate",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "amount", accessorKey: "amount" },
  { header: "currency_id", accessorKey: "currencyId" },
  { header: "currency_val", accessorKey: "currencyVal" },
  { header: "account_id", accessorKey: "buildingAccountId" },
  { header: "apartment_floor", accessorKey: "apartmentFloor" },
  { header: "penthouse_floor", accessorKey: "penthouseFloor" },
  { header: "parking_floor", accessorKey: "parkingFloor" },
  { header: "mezzanine_floor", accessorKey: "mezzanineFloor" },
  { header: "office_floor", accessorKey: "officeFloor" },
  { header: "underground_parking", accessorKey: "undergroundParking" },
  { header: "bank_id", accessorKey: "bankId" },
  { header: "gen_entries", accessorKey: "investmentGenEntries" },
];

export default buildingColumns