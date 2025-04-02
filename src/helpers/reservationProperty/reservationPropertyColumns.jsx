import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";

const reservationPropertyColumns = [
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
  { header: "account", accessorKey: "account" },
  { header: "property_type", accessorKey: "property_type" },
  { header: "building_id", accessorKey: "building_id" },
  { header: "property_id", accessorKey: "property_id" },
  {
    header: "book_date",
    accessorKey: "book_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "end_book_date",
    accessorKey: "end_book_date",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "note", accessorKey: "note" },
  { header: "has_payment", accessorKey: "has_payment" },
  { header: "payment_method", accessorKey: "payment_method" },
  { header: "reservation_expired", accessorKey: "reservation_expired" },
  { header: "payment_amount", accessorKey: "payment_amount" },
  { header: "currency_id", accessorKey: "currency_id" },
];

export default reservationPropertyColumns;