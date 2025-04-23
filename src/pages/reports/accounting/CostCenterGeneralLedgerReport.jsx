import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFCheckbox } from "@/components/forms/fields";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterCard } from "@/components/reports/shared/ReportFilterCard";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportPostedField } from "@/components/reports/shared/ReportPostedField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/Reports";
import { getCostCenterGeneralLedgerReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const CostCenterGeneralLedgerReport = () => {
  const name = "cost_center_general_ledger_report";
  const methods = useForm();
  const { watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);


  return (
    <ReportWrapper
      columns={columns}
      getReportData={getCostCenterGeneralLedgerReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <div className="grid gap-4">
          <ReportFilterFields title={"Fields"}>
            <ReportFields
              fields={fields}
              sharedLabelClassName="w-[260px]"
            />
          </ReportFilterFields>
          <ReportFilterCard
            title="Show moving"
            containerClassName="!mt-0"
            bodyClassName="grid !grid-cols-2"
          >
            <RHFCheckbox
              {...{
                label: "show_debit",
                name: "show_debit",
              }}
            />
            <RHFCheckbox
              {...{
                label: "show_credit",
                name: "show_credit",
              }}
            />
          </ReportFilterCard>
        </div>
        <div>
          <div className="grid gap-4">
            <ReportBetweenDateField
              customTitle={
                <RHFCheckbox name="allow_date" label="date" />
              }
              date1Field={{ name: "start_date" }}
              date2Field={{ name: "end_date" }}
              sharedProps={{
                readOnly: !watch("allow_date"),
              }}
            />
            <ReportPostedField containerClassName="!m-0" />
          </div>
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

export default CostCenterGeneralLedgerReport;
