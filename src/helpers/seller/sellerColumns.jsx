import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

const sellerColumns = [
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
  {
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/seller?number=${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "nationality", accessorKey: "nationality" },
  { header: "id_card", accessorKey: "idCard" },
  { header: "passport", accessorKey: "passport" },
  { header: "work_card_number", accessorKey: "workCardNumber" },
  { header: "mobile", accessorKey: "mobile" },
  { header: "cellPhone", accessorKey: "cellPhone" },
  { header: "fax", accessorKey: "fax" },
  { header: "mailbox", accessorKey: "mailbox" },
  { header: "email", accessorKey: "email" },
  { header: "address", accessorKey: "address" },
  { header: "minimum_commission", accessorKey: "minimumCommission" },
  { header: "maximum_discount", accessorKey: "maximumDiscount" },
  { header: "statement", accessorKey: "statement" },
];

export default sellerColumns;
