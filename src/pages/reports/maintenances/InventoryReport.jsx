import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterBillPattern } from "@/components/reports/filters/ReportFilterBillPattern";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getInventoryReportData } from "@/services/reportsServices";
import { ReportFilterColumns } from "@/components/reports/shared/ReportFilterColumns";

// ## Metadata
// total quantity

const InventoryReport = () => {
  const name = "inventory_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [billIds, setBillIds] = useState({});
  const [openReportResults, setOpenReportResults] = useState(false);
  const [data, setData] = useState([]);

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <>
    <ReportWrapper
      columns={columns}
      getReportData={getInventoryReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
            <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
              <ReportFilterFields title={"Fields"}>
                <ReportFields
                  containerClassName="gap-3"
                  fields={fields}
                  sharedLabelClassName="w-[200px]"
                />
              </ReportFilterFields>
              <ReportFilterColumns
                searchKey="accessorKey"
                columns={columns}
                selectedColumns={selectedColumns}
                setSelectedColumns={setSelectedColumns}
              />
              <div className="flex flex-col gap-4">
                <ReportFilterBillPattern
                  billIds={billIds}
                  setBillIds={setBillIds}
                />
                <ReportBetweenDateField
                  date1Field={{
                    name: "start_date",
                  }}
                  date2Field={{
                    name: "end_date",
                  }}
                />
              </div>
            </div>
            </ReportWrapper>
            </>
  );
};

export default InventoryReport;
