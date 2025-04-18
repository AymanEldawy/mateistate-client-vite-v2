import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";
import { MATERIAL_TYPE } from "../DEFAULT_OPTIONS";

const materialsColumns = [
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
  { header: "code", accessorKey: "code" },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/material/${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },
  { header: "defaults1", accessorKey: "defaults1" },
  { header: "unit1", accessorKey: "unit1" },
  { header: "barcode1", accessorKey: "barcode1" },
  { header: "unit2", accessorKey: "unit2" },
  { header: "exchange2", accessorKey: "exchange2" },
  { header: "barcode2", accessorKey: "barcode2" },
  { header: "defaults2", accessorKey: "defaults2" },
  { header: "unit3", accessorKey: "unit3" },
  { header: "exchange3", accessorKey: "exchange3" },
  { header: "barcode3", accessorKey: "barcode3" },
  { header: "defaults3", accessorKey: "defaults3" },
  { header: "material_group_name", accessorKey: "material_group_name" },
  { header: "note", accessorKey: "note" },
  {
    header: "material_type",
    accessorKey: "material_type",
    cell: ({ getValue }) => {
      let type = MATERIAL_TYPE?.find(
        (c) => c?.id === getValue()
      );
      return <span>{type?.name}</span>;
    },
  },
];


export default materialsColumns