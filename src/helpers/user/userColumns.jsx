import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";
import { USER_TYPE } from "../DEFAULT_OPTIONS";

const userColumns = [
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
    header: "number",
    accessorKey: "number",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/users?number=${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },
  {
    header: "name",
    accessorKey: "name",
    cell: ({ row, getValue }) => {
      return (
        <Link
          to={`/users?number=${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    header: "created_at",
    accessorKey: "created_at",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "phone", accessorKey: "phone" },
  { header: "token", accessorKey: "token" },
  {
    header: "card_type",
    accessorKey: "card_type",

    cell: ({ getValue }) => {
      let type = USER_TYPE.find((c) => c?.id === getValue());
      return <span>{type?.name}</span>;
    },
  },
  {
    header: "date_of_birth",
    accessorKey: "date_of_birth",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "passport_number", accessorKey: "passport_number" },
  { header: "passport_expiry", accessorKey: "passport_expiry" },
  {
    header: "national_id",
    accessorKey: "national_id",
  },
  {
    header: "national_id_expiry",
    accessorKey: "national_id_expiry",
  },
  { header: "address", accessorKey: "address" },
  { header: "user_type", accessorKey: "user_type" },
  { header: "commercial_register", accessorKey: "commercial_register" },
  { header: "barcode", accessorKey: "barcode" },
  { header: "profession", accessorKey: "profession" },
  { header: "work_phone", accessorKey: "work_phone" },
  { header: "personal_phone", accessorKey: "personal_phone" },
  { header: "fax", accessorKey: "fax" },
  { header: "mailbox", accessorKey: "mailbox" },
  { header: "email", accessorKey: "email" },
  { header: "sponsor", accessorKey: "sponsor" },
  { header: "sponsor_data", accessorKey: "sponsor_data" },
  { header: "statement", accessorKey: "statement" },
  {
    header: "account_id",
    accessorKey: "account_id",
  },
  {
    header: "insurance_account_id",
    accessorKey: "insurance_account_id",
  },
  {
    header: "bank_id",
    accessorKey: "bank_id",
  },
  { header: "bank_account", accessorKey: "bank_account" },
  { header: "files", accessorKey: "files" },
  {
    header: "nationality",
    accessorKey: "nationality",
  },
];

export default userColumns