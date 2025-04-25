import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFInput } from "@/components/forms/fields";
import { ReportFilterChequePattern } from "@/components/reports/filters/ReportFilterChequePattern";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns } from "@/helpers/reports";
import { getDueNotePaperReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const DueNotePaperReport = () => {
  const name = "due_note_paper_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [searchType, setSearchType] = useState(1);
  const [chqIds, setChqIds] = useState({});

  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns}
      getReportData={getDueNotePaperReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <div className="flex flex-col gap-4">
          <div
            className={`flex gap-4 items-start border p-2 rounded-md ${searchType === 2 ? "grayscale bg-gray-200 opacity-60 " : ""
              }`}
          >
            <input
              name="type"
              type="radio"
              className="h-6 w-6"
              onChange={() => setSearchType(1)}
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">
                Displaying securities due within a day
              </h3>
              <RHFInput
                {...{
                  label: "paid_due",
                  name: "paid_due",
                  type: "number",
                }}
                labelClassName="w-[220px] !font-medium"
                readOnly={searchType === 2}
              />
              <RHFInput
                {...{
                  label: "receivables_due",
                  name: "receivables_due",
                  type: "number",
                }}
                labelClassName="w-[220px] !font-medium"
                readOnly={searchType === 2}
              />
            </div>
          </div>
          <div
            className={`flex gap-4 items-start border p-2 rounded-md ${searchType === 1 ? "grayscale bg-gray-200 opacity-60 " : ""
              }`}
          >
            <input
              name="type"
              type="radio"
              className="h-6 w-6"
              onChange={() => setSearchType(2)}
            />
            <div className="flex flex-col gap-2">
              <ReportBetweenDateField
                title="Due Date"
                date1Field={{
                  label: "start_due_date",
                  name: "start_due_date",
                }}
                date2Field={{
                  label: "end_due_date",
                  name: "end_due_date",
                }}
                containerClassName="!p-0 !border-0"
                sharedProps={{
                  readOnly: searchType === 1,
                }}
              />
            </div>
          </div>
          <ReportFilterChequePattern
            chqIds={chqIds}
            setChqIds={setChqIds}
          />
        </div>
        <ReportFilterColumns
          searchKey="accessorKey"
          columns={columns}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
        />
      </div>
    </ReportWrapper>

  );
};

export default DueNotePaperReport;
