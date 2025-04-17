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
  { header: "building_id", accessorKey: "building_name" },
  {
    header: "apartment_number",
    accessorKey: "apartment_no",
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
    accessorKey: "apartment_kind",
    cell: ({ getValue, row }) => {
      let kind = APARTMENT_FLAT_TYPE.find(
        (c) => c?.id === +getValue()
      ).name;
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
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "view", accessorKey: "view" },
  { header: "bathroom_count", accessorKey: "bathroom_count" },
  { header: "balcony_count", accessorKey: "balcony_count" },
  { header: "has_lawsuit", accessorKey: "has_lawsuit" },
  { header: "main_cost_center_id", accessorKey: "main_cost_center_id" },
  { header: "cost_center_id", accessorKey: "cost_center_id" },
  { header: "property_type", accessorKey: "property_type" },
  { header: "water_meter", accessorKey: "water_meter" },
  { header: "electricity_meter", accessorKey: "electricity_meter" },
  { header: "statement", accessorKey: "statement" },
  { header: "room_count", accessorKey: "room_count" },
  { header: "property_values_id", accessorKey: "property_values_id" },
  { header: "hex", accessorKey: "hex" },
  { header: "cost_price", accessorKey: "cost_price" },
  { header: "amount_paid", accessorKey: "amount_paid" },
  { header: "cost_currency_id", accessorKey: "cost_currency_id" },
  { header: "note", accessorKey: "note" },
];

export default apartmentColumns;