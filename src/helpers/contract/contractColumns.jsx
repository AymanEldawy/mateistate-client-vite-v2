import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";
import { CONTACT_PATTERN_CONTRACT_TYPE } from "../DEFAULT_OPTIONS";
// import { getUnitType } from "@/utils/functions";
import { BanknoteIcon, UserIcon } from "@/components/Icons";
import { getUnitInfo, getUnitTypeColorOrClass } from "@/utils/functions";

const contractColumns = [
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
    size: 40,
    header: "no",
    accessorKey: "number",
    cell: ({ getValue, row }) => {
      // contract_type
      let type = CONTACT_PATTERN_CONTRACT_TYPE?.find(
        (c) => c?.id === row?.original?.contractType
      );
      // let unitType = getContractUnitType(row?.original);
      let unitType = null;
      const link = `/contracts?code=${row?.original?.code}&number=${row?.original?.number}`;

      return (
        <Link to={link} className="text-blue-500 font-medium hover:underline">
          # {getValue()}
        </Link>
      );
    },
  },
  {
    header: "building",
    accessorKey: "building.name",
    cell: ({ row, getValue }) => (
      <Link
        className="text-blue-500 hover:underline"
        to={`/buildings?number=${row?.original?.building_id}`}
      >
        {getValue()}
      </Link>
    ),
  },
  {
    header: "unit",
    accessorKey: "unit.name",
    cell: ({ row, getValue }) => {
      const unit = getUnitInfo(row?.original?.flatType);

      return (
        <span className={`font-medium`} style={{ color: row?.original?.hex }}>
          {row?.original?.[unit?.table]?.[unit?.label]}
        </span>
      );
    },
  },
  {
    header: "unit_type",
    accessorKey: "unit.type",

    cell: ({ row, getValue }) => {
      const unit = getUnitInfo(row?.original?.flatType);
      const color = getUnitTypeColorOrClass(unit?.unitType);
      return (
        <span
          className={`capitalize px-2 py-1 rounded-md flex mx-auto w-fit ${color}`}
        >
          {unit?.unitType}
        </span>
      );
    },
  },
  {
    header: "description",
    accessorKey: "description",
  },
  // {
  //   header: "contract_type",
  //   accessorKey: "contract_type",
  //   cell: ({ row, getValue }) => {
  //     let rentType = getValue() === CONTRACT_RENT_CODE;
  //     return (
  //       <span
  //         className={`rounded-md px-4 py-1 ${
  //           rentType ? "bg-orange-50 text-orange-600" : ""
  //         }`}
  //       >
  //         {rentType ? "Rent" : "Sale"}
  //       </span>
  //     );
  //   },
  // },
  // {
  //   header: "contract_status",
  //   accessorKey: "status",
  //   cell: ({ row, getValue }) => {
  //     return (
  //       <ContractStatus status={getValue()} containerClassName="mx-auto !w-fit" />
  //     );
  //   },
  // },
  {
    header: "contract date",
    accessorKey: "startDurationDate",
    cell: ({ row, getValue }) => (
      <div className="flex gap-1 items-center">
        {new Date(getValue()).toLocaleDateString("en-UK")} -{" "}
        <span className="text-red-500">
          {new Date(row?.original?.endDurationDate).toLocaleDateString("en-UK")}
        </span>
      </div>
    ),
  },
  // {
  //   header: "end_date",
  //   accessorKey: "end_duration_date",
  //   cell: ({ getValue }) => (
  //     <span></span>
  //   ),
  // },
  {
    header: "contract_value",
    accessorKey: "contractValue",
    cell: ({ getValue }) => (
      <span className="flex gap-1 font-medium text-green-600">
        <BanknoteIcon className="h-5 w-5 text-green-500" /> {getValue()}
      </span>
    ),
  },
  {
    header: "price_before_vat",
    accessorKey: "priceBeforeVat",
    cell: ({ getValue }) => (
      <span className="flex gap-1 font-medium text-green-600">
        <BanknoteIcon className="h-5 w-5 text-green-500" /> {getValue()}
      </span>
    ),
  },
  {
    header: "final_price",
    accessorKey: "finalPrice",
    cell: ({ getValue }) => (
      <span className="flex gap-1 font-medium text-green-600">
        <BanknoteIcon className="h-5 w-5 text-green-500" /> {getValue()}
      </span>
    ),
  },
  {
    header: "client",
    accessorKey: "client.name",
    cell: ({ row, getValue }) => (
      <Link
        className="text-blue-500 hover:underline flex gap-1 items-center capitalize"
        to={`/update/building/${row?.original?.account_id}`}
      >
        <UserIcon className="h-4 w-4" />
        {getValue()}
      </Link>
    ),
  },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
  // { header: "number", accessorKey: "number" },
];

export default contractColumns;
