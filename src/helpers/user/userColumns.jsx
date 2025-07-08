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
          to={`/users?number=${row?.original?.user?.number}`}
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
          to={`/users?number=${row?.original?.user?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          {getValue()}
        </Link>
      );
    },
  },
  {
    header: "created_at",
    accessorKey: "createdAt",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "phone", accessorKey: "phone" },
  { header: "token", accessorKey: "token" },
  {
    header: "card_type",
    accessorKey: "user.cardType",

    cell: ({ getValue }) => {
      let type = USER_TYPE.find((c) => c?.id === getValue());
      return <span>{type?.name}</span>;
    },
  },
  {
    header: "date_of_birth",
    accessorKey: "user.dateOfBirth",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "passport_number", accessorKey: "user.passportNumber" },
  { header: "passport_expiry", accessorKey: "user.passportExpiry" },
  {
    header: "national_id",
    accessorKey: "user.nationalId",
  },
  {
    header: "national_id_expiry",
    accessorKey: "user.nationalIdExpiry",
  },
  { header: "address", accessorKey: "user.address" },
  { header: "user_type", accessorKey: "user.userType" },
  { header: "commercial_register", accessorKey: "user.commercialRegister" },
  { header: "barcode", accessorKey: "user.barcode" },
  { header: "profession", accessorKey: "user.profession" },
  { header: "work_phone", accessorKey: "user.workPhone" },
  { header: "personal_phone", accessorKey: "user.personalPhone" },
  { header: "fax", accessorKey: "user.fax" },
  { header: "mailbox", accessorKey: "user.mailbox" },
  { header: "email", accessorKey: "email" },
  { header: "sponsor", accessorKey: "user.sponsor" },
  { header: "sponsor_data", accessorKey: "user.sponsorData" },
  { header: "statement", accessorKey: "user.statement" },
  {
    header: "account_id",
    accessorKey: "user.accountId",
  },
  {
    header: "insurance_account_id",
    accessorKey: "user.insuranceAccountId",
  },
  {
    header: "bank_id",
    accessorKey: "user.bankId",
  },
  { header: "bank_account", accessorKey: "user.bankAccount" },
  { header: "files", accessorKey: "files" },
  {
    header: "nationality",
    accessorKey: "user.nationality",
  },
];

export default userColumns