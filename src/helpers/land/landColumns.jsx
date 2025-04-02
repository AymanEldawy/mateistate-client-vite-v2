import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";

const landColumns = [
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
  { header: "name", accessorKey: "name" },
  { header: "type", accessorKey: "type" },
  { header: "ban", accessorKey: "ban" },
  { header: "land_no", accessorKey: "land_no" },
  {
    header: "date",
    accessorKey: "date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "city", accessorKey: "city" },
  { header: "region", accessorKey: "region" },
  { header: "space", accessorKey: "space" },
  { header: "area", accessorKey: "area" },
  { header: "area_unit", accessorKey: "area_unit" },
  { header: "price", accessorKey: "price" },
  { header: "license_no", accessorKey: "license_no" },
  { header: "license", accessorKey: "license" },
  {
    header: "license_date",
    accessorKey: "license_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
];

export default landColumns