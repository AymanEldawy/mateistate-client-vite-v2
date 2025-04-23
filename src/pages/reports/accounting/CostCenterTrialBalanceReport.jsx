  import { FormProvider, useForm } from "react-hook-form";
import { useMemo, useState } from "react";
import { getReportColumns } from "@/helpers/reports";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getCostCenterTrialBalanceReportData } from "@/services/reportsServices";
import { RHFCheckbox, RHFInput } from "@/components/forms/fields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportPostedField } from "@/components/reports/shared/ReportPostedField";
import { LedgerFilters } from "@/components/reports/filters/LedgerFilters";


const REPORT_OPTIONS = [
  "show_main_accounts",
  "show_empty_cost_center",
  "show_previous_balance",
  "show_by_totals",
  "show_by_balance",
];

const CostCenterTrialBalanceReport = () => {
  const name = "cost_center_trial_balance";
  const methods = useForm();
  const columns = useMemo(() => getReportColumns('journal_ledger_report'), []);

  return (
    <ReportWrapper
      columns={columns}
      getReportData={getCostCenterTrialBalanceReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
        <LedgerFilters
          hideCurrency
          extraFields={
            <RHFInput
              containerClassName="!-mt-2"
              labelClassName="w-[260px]"
              name="level"
              label="level"
              type="number"
            />
          }
        />
        <ReportFilterFields
          title={"Accounts"}
          containerClassName="border-x px-4 flex flex-col gap-3"
        >
          {REPORT_OPTIONS?.map((option) => (
            <RHFCheckbox
              key={option}
              {...{
                label: option,
                name: option,
              }}
            />
          ))}
        </ReportFilterFields>
        <div className="grid gap-4">
          <ReportBetweenDateField
            date1Field={{ name: "start_date" }}
            date2Field={{ name: "end_date" }}
          />
          <ReportPostedField />
        </div>
      </div>
    </ReportWrapper>

  );
};

export default CostCenterTrialBalanceReport;
