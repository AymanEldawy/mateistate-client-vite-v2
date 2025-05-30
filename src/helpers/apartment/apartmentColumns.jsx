import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";
import { APARTMENT_FLAT_TYPE } from "../DEFAULT_OPTIONS";

const apartmentColumns = [
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
  { header: "building_id", accessorKey: "buildingName" },
  {
    header: "apartment_number",
    accessorKey: "apartmentNo",
    cell: ({ getValue, row }) => (
      <Link
        to={`/apartments?number=${row?.original?.number}`}
        className="text-blue-500 font-medium hover:underline"
      >
        {getValue()}
      </Link>
    ),
  },
  { header: "floor", accessorKey: "floor" },
  {
    header: "apartment_kind",
    accessorKey: "apartmentKind",
    cell: ({ getValue, row }) => {
      let kind = APARTMENT_FLAT_TYPE.find(
        (c) => c?.id === +getValue()
      )?.name;
      return (
        <span
          to={`/apartments?number=${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {kind}
        </span>
      );
    },
  },
  { header: "description", accessorKey: "description" },
  { header: "category", accessorKey: "category" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "areaUnit" },
  { header: "view", accessorKey: "view" },
  { header: "bathroom_count", accessorKey: "bathroomCount" },
  { header: "balcony_count", accessorKey: "balconyCount" },
  { header: "has_lawsuit", accessorKey: "hasLawsuit" },
  { header: "main_cost_center_id", accessorKey: "mainCostCenterId" },
  { header: "cost_center_id", accessorKey: "costCenterId" },
  { header: "property_type", accessorKey: "propertyType" },
  { header: "water_meter", accessorKey: "waterMeter" },
  { header: "electricity_meter", accessorKey: "electricityMeter" },
  { header: "statement", accessorKey: "statement" },
  { header: "room_count", accessorKey: "roomCount" },
  { header: "property_values_id", accessorKey: "propertyValuesId" },
  { header: "hex", accessorKey: "hex" },
  { header: "cost_price", accessorKey: "costPrice" },
  { header: "amount_paid", accessorKey: "amountPaid" },
  { header: "cost_currency_id", accessorKey: "costCurrencyId" },
  { header: "note", accessorKey: "note" },
];

export default apartmentColumns;