import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";

const villaColumns = [
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
  { header: "complex_name", accessorKey: "complex_name" },
  { header: "villa_no", accessorKey: "villa_no" },
  { header: "emirate", accessorKey: "emirate" },
  { header: "area", accessorKey: "area" },
  { header: "suburb", accessorKey: "suburb" },
  { header: "street", accessorKey: "street" },
  { header: "doc_type", accessorKey: "doc_type" },
  { header: "doc_no", accessorKey: "doc_no" },
  {
    header: "doc_date",
    accessorKey: "doc_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "piece_no", accessorKey: "piece_no" },
  { header: "basin_no", accessorKey: "basin_no" },
  { header: "water_meter", accessorKey: "water_meter" },
  { header: "electricity_meter", accessorKey: "electricity_meter" },
  { header: "customer_owner_id", accessorKey: "customer_owner_id" },
  { header: "note", accessorKey: "note" },
];

export default villaColumns;