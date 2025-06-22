import { RHFCheckbox } from "@/components/forms/fields";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportPostedField } from "@/components/reports/shared/ReportPostedField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getProfitAndLossReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";


const ProfitAndLossReport = () => {
  const name = "profit_and_loss_report"
  const methods = useForm();

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);
  return (
    <ReportWrapper
      columns={columns}
      getReportData={getProfitAndLossReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <ReportFilterFields title="Fields">
          <ReportFields
            fields={fields}
            sharedLabelClassName="w-[200px]"
          // containerClassName="grid grid-cols-2 gap-4"
          />
        </ReportFilterFields>
        <div className="grid gap-4">
          <ReportBetweenDateField date1Props={
            {
              name: "date_from",
            }
          }
          date2Props={
            {
              name: "date_to",
            }
          }
          containerClassName="!m-0" />
          {/* <ReportPostedField containerClassName="!m-0" /> */}
        </div>
        {/* <div className="grid gap-4">
          {REPORT_OPTIONS?.map((option) => (
            <RHFCheckbox label={option} name={option} key={option} />
          ))}
        </div> */}
      </div>
    </ReportWrapper>

  );
};

export default ProfitAndLossReport;
