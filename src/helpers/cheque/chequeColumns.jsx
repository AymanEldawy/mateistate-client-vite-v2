import { PrintIcon, SearchIcon } from "@/components/Icons";
import Btn from "@/components/shared/Btn";
import { ViewEntry } from "@/components/shared/ViewEntry";
import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { CHQ_RECEIVED_CODE } from "@/data/GENERATE_STARTING_DATA";
import { Link } from "react-router-dom";

const chequeColumns = [
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
    accessorKey: "createdAt",
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "number",
    accessorKey: "number",
    cell: ({ getValue, row }) => {
      return (
        <Link
          to={`/cheques?code=${row?.original?.code}&number=${row?.original?.number}`}
          className="text-blue-500 font-medium hover:underline"
        >
          # {getValue()}
        </Link>
      );
    },
  },
  { header: "code", accessorKey: "code" },
  { header: "type", accessorKey: "type" },
  { header: "amount", accessorKey: "amount" },
  { header: "beneficiary_name", accessorKey: "beneficiaryName" },
  { header: "note", accessorKey: "note" },
  { header: "currency_val", accessorKey: "currencyVal" },
  {
    header: "feedback",
    accessorKey: "feedback",
    cell: ({ getValue }) => <span>{getValue() ? "Yes" : "No"}</span>,
  },
  {
    header: "status",
    accessorKey: "isDeleted",
    cell: ({ getValue }) => (
      <span
        className={`px-2 py-1 rounded-full text-xs ${
          getValue() ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
        }`}
      >
        {getValue() ? "Deleted" : "Active"}
      </span>
    ),
  },
];

export const CHEQUE_GRID_COLUMNS = [
  // {
  //   id: "select",
  //   size: 40,
  //   isResizingColumn: false,
  //   header: ({ table }) => (
  //     <IndeterminateCheckbox
  //       {...{
  //         checked: table.getIsAllRowsSelected(),
  //         indeterminate: table.getIsSomeRowsSelected(),
  //         onChange: table.getToggleAllRowsSelectedHandler(),
  //       }}
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <IndeterminateCheckbox
  //       {...{
  //         checked: row.getIsSelected(),
  //         disabled: !row.getCanSelect(),
  //         indeterminate: row.getIsSomeSelected(),
  //         onChange: row.getToggleSelectedHandler(),
  //       }}
  //     />
  //   ),
  // },
  {
    header: "internal_number",
    accessorKey: "internalNumber",
    enableColumnFilter: false,
    cell: ({ row, getValue, table }) => {
      return (
        <div className="flex gap-2 items-center">
          <button
            type="button"
            className="border px-2 py-1 font-medium hover:bg-gray-200 bg-gray-100 rounded-md flex items-center gap-2 text-sm"
            onClick={() => {
              table.options.meta.handleDispatchForm({
                open: true,
                type: "CHEQUE",
                table: "cheque",
                oldValues: row?.original,
                defaultCode: CHQ_RECEIVED_CODE,
                defaultNumber: row?.original?.number,
                voucher_id: row?.original.id,
                handleRefetchOnChangeData:
                  table?.options?.meta?.handleRefetchOnChangeData,
              });
            }}
          >
            {getValue()}
            <SearchIcon className="h-4 w-4" />
          </button>
          <ViewEntry id={row?.original?.id} hideText />
          <Btn
            type="button"
            onClick={() => {}}
            containerClassName="!w-fit !px-2"
          >
            <PrintIcon className="w-5 h-5 text-inherit" />
          </Btn>
        </div>
      );
    },
  },
  { header: "amount", accessorKey: "amount", enableColumnFilter: false },
  {
    header: "status",
    accessorKey: "status",
    enableColumnFilter: false,
    cell: ({ row }) => {
      const displayChqStatus = () => {
        if (row?.original?.collectionStatus) {
          return (
            <span className="text-xs px-2 p-1 rounded-md font-normal text-green-500 bg-green-100 ">
              Collected
            </span>
          );
        } else if (row?.original?.partialCollectionStatus) {
          return (
            <span className="text-xs px-2 p-1 rounded-md font-normal text-yellow-500 bg-yellow-100 ">
              Partial Collected
            </span>
          );
        } else if (row?.original?.returnStatus) {
          return (
            <span className="text-xs px-2 p-1 rounded-md font-normal text-red-500 bg-red-100 ">
              Returned
            </span>
          );
        } else {
          return (
            <span className="text-xs px-2 p-1 rounded-md font-normal text-gray-500 bg-gray-100 ">
              Uncollected
            </span>
          );
        }
      };
      return displayChqStatus();
    },
  },
  {
    header: "due_date",
    accessorKey: "dueDate",
    enableColumnFilter: false,
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  {
    header: "end_due_date",
    accessorKey: "endDueDate",
    enableColumnFilter: false,
    cell: ({ getValue }) => (
      <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
    ),
  },
  { header: "bank_id", accessorKey: "bankId", enableColumnFilter: false },
  { header: "note1", accessorKey: "note1", enableColumnFilter: false },
  { header: "note2", accessorKey: "note2", enableColumnFilter: false },
];

export default chequeColumns;
