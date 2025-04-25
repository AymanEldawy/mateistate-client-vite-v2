import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFCheckbox, RHFInput } from "@/components/forms/fields";
import { LedgerFilters } from "@/components/reports/filters/LedgerFilters";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFilterCard } from "@/components/reports/shared/ReportFilterCard";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns } from "@/helpers/reports";
import { getGeneralLedgerReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const GeneralLedgerReport = () => {
  const name = "general_ledger_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});

  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns}
      getReportData={getGeneralLedgerReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <div className="grid gap-4">
          <LedgerFilters />
          <ReportFilterCard title="Accounts">
            <RHFCheckbox
              {...{
                label: "show_sub_account",
                name: "show_sub_account",
              }}
            />
            <RHFInput
              {...{
                label: "level",
                name: "level",
                type: "number",
              }}
              readOnly={!watch("show_sub_account")}
            />
          </ReportFilterCard>
          <ReportFilterCard
            title="Show moving"
            containerClassName="!mt-0"
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
          {/* <ReportFilterCard title="Previous Years">
                <RHFCheckbox
                  {...{
                    label: "include_previous_years",
                    name: "prev_year",
                  }}
                />
                <RHFInput
                  containerClassName="flex-1"
                  {...{
                    label: "exception_to_opening_restrictions",
                    name: "exception_opening_restriction",
                    type: "number",
                  }}
                  readOnly={!watch("prev_year")}
                />
              </ReportFilterCard> */}
          <div className="grid gap-4">
            <ReportBetweenDateField
              date1Field={{ name: "start_date" }}
              date2Field={{ name: "end_date" }}
            />
            <ReportFilterCard title="Statement">
              <RHFInput
                {...{
                  label: "include_words",
                  name: "include_words",
                  type: "text",
                }}
              />
              <RHFInput
                {...{
                  label: "exception_words",
                  name: "exception_words",
                  type: "text",
                }}
              />
            </ReportFilterCard>
            <ReportFilterCard title="Migration">
              <RHFCheckbox
                {...{
                  label: "displaying_transferred_constraints",
                  name: "transferred",
                }}
              />
              <RHFCheckbox
                {...{
                  label: "displaying_untransferred_constraints",
                  name: "Untransferred",
                }}
              />
            </ReportFilterCard>
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

export default GeneralLedgerReport;
