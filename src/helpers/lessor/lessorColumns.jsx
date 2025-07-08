import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";

const lessorColumns = [
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
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/lessors?number=${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  { header: "passport", accessorKey: "passport" },
  {
    header: "passport_expiry_date",
    accessorKey: "passportExpiryDate",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "id_card", accessorKey: "idCard" },
  { header: "lessor_card", accessorKey: "lessorCard" },
  { header: "cell_phone", accessorKey: "cellPhone" },
  { header: "number", accessorKey: "number" },
  { header: "address", accessorKey: "address" },
  { header: "nationality", accessorKey: "nationality" },
  { header: "mobile", accessorKey: "mobile" },
  { header: "fax", accessorKey: "fax" },
  { header: "mailbox", accessorKey: "mailbox" },
  { header: "email", accessorKey: "email" },
  { header: "note", accessorKey: "note" },
  { header: "role", accessorKey: "role" },
];

export default lessorColumns;