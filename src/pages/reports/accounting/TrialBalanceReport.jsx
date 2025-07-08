
import { RHFCheckbox, RHFInput, RHFSelectField } from "@/components/forms/fields";
import { LedgerFilters } from "@/components/reports/filters/LedgerFilters";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFilterCard } from "@/components/reports/shared/ReportFilterCard";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportPostedField } from "@/components/reports/shared/ReportPostedField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { LEVELS_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { getReportColumns } from "@/helpers/reports";
import { getCostCenterTrialBalanceReportData } from "@/services/reportsServices";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

const TrialBalanceReport = () => {
  const name = "trial_balance_report";
  const name2 = "journal_ledger_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;

  const columns = useMemo(() => getReportColumns(name2), []);

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
          // hideCurrency
          extraFields={
            <RHFSelectField
              containerClassName="!-mt-2"
              labelClassName="w-[260px]"
              name="level"
              label="level"
              type="number"
              options={LEVELS_TYPE}
            />
          }
        />
        <ReportFilterFields
          title={"Accounts"}
          containerClassName="border-x px-4 flex flex-col gap-3"
        >
          <RHFCheckbox
            {...{
              label: "show_sub_account",
              name: "show_sub_account",
            }}
          />
          <RHFCheckbox
            {...{
              label: "Show customers / suppliers accounts",
              name: "show_customer_accounts",
            }}
          />
          <RHFCheckbox
            {...{
              label: "Show empty accounts",
              name: "show_empty_accounts",
            }}
          />
          <RHFCheckbox
            {...{
              label: "Show monitored accounts",
              name: "show_monitored_accounts",
            }}
          />
          <RHFCheckbox
            {...{
              label: "Show the previous balance",
              name: "show_previous_balance",
            }}
          />
          <RHFCheckbox
            {...{
              label: "Display in totals",
              name: "display_in_totals",
            }}
          />
          <ReportFilterCard
            title="Display balances"
            containerClassName="!mt-0 !p-0 !border-0"
            bodyClassName="!flex-row"
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
        </ReportFilterFields>
        <div className="grid gap-4">
          <ReportBetweenDateField
            customTitle={<RHFCheckbox name="allow_date" label="date" />}
            date1Field={{ name: "date_from" }}
            date2Field={{ name: "date_to" }}
            date1Props={{
              value: new Date()
            }}
            date2Props={{
              value: new Date()
            }}
            sharedProps={{
              readOnly: !watch("allow_date"),
            }}
          />

          <ReportPostedField />
        </div>
      </div>
    </ReportWrapper>

  );
};

export default TrialBalanceReport;
