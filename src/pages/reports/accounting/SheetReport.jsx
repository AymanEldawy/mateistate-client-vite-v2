import { RHFCheckbox } from "@/components/forms/fields";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportPostedField } from "@/components/reports/shared/ReportPostedField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportFields } from "@/helpers/reports";
import { getSheetReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const REPORT_OPTIONS = [
  "include_previous_years",
  "show_empty_accounts",
  "show_closing_accounts_details",
];

const SheetReport = ({ name }) => {
  const methods = useForm();
  const { handleSubmit, watch } = methods;

  const fields = useMemo(() => getReportFields(name), []);

  return (
    <ReportWrapper
      columns={[]}
      getReportData={getSheetReportData}
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
          <ReportBetweenDateField containerClassName="!m-0" />
          <ReportPostedField containerClassName="!m-0" />
        </div>
        <div className="grid gap-4">
          {REPORT_OPTIONS?.map((option) => (
            <RHFCheckbox label={option} name={option} key={option} />
          ))}
        </div>
      </div>
    </ReportWrapper>

  );
};

export default SheetReport;
