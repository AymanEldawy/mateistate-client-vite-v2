import IndeterminateCheckbox from "@/components/tables/containers/IndeterminateCheckbox";
import { Link } from "react-router-dom";
import { PARKING_KIND_TYPE } from "@/helpers/DEFAULT_OPTIONS";

const parkingColumns = [
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
    { header: "building_id", accessorKey: "building_name" },
    {
        header: "parking_no",
        accessorKey: "parking_no",
        cell: ({ getValue, row }) => (
            <Link
                to={`/parking/${row?.original?.number}`}
                className="text-blue-500 font-medium hover:underline"
            >
                {getValue()}
            </Link>
        ),
    },
    {
        header: "parking_kind",
        accessorKey: "parking_kind",
        cell: ({ getValue, row }) => {
            let kind = PARKING_KIND_TYPE?.find(
                (c) => c?.id === +getValue()
            ).name;
            return (
                <span
                    to={`/parking/${row?.original?.number}`}
                    className="text-blue-500 font-medium hover:underline"
                >
                    {kind}
                </span>
            );
        },
    },
    { header: "floor_no", accessorKey: "floor_no" },
    { header: "area", accessorKey: "area" },
    { header: "area_unit", accessorKey: "area_unit" },
    { header: "parking_kind", accessorKey: "parking_kind" },
    { header: "description", accessorKey: "description" },
    { header: "view", accessorKey: "view" },
    { header: "customer_id", accessorKey: "customer_id" },
    { header: "has_lawsuit", accessorKey: "has_lawsuit" },
    { header: "cost_center_id", accessorKey: "cost_center_id" },
    {
        header: "purchase_date",
        accessorKey: "purchase_date",
        cell: ({ getValue }) => (
            <span>{new Date(getValue())?.toLocaleDateString("en-UK")}</span>
        ),
    },
    { header: "flat_owner", accessorKey: "flat_owner" },
    { header: "note", accessorKey: "note" },
];

export default parkingColumns;