import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFSelectField } from "@/components/forms/fields";
import { ReportFilterContractPatterns } from "@/components/reports/filters/ReportFilterContractPatterns";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterCard } from "@/components/reports/shared/ReportFilterCard";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportReviewField } from "@/components/reports/shared/ReportReviewField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { REVENUES_REPORT_DATE } from "@/helpers/DEFAULT_OPTIONS";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getEarningRentalIncomeEarnedReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const EarningRentalIncomeEarnedReport = () => {
  const name = "earning_rental_income_earned_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);


  return (
    <ReportWrapper
      columns={columns}
      getReportData={getEarningRentalIncomeEarnedReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <ReportFilterFields title="Fields" containerClassName="">
          <ReportFields
            fields={fields}
            sharedLabelClassName="w-[220px]"
          />
          <ReportFilterCard
            customTitle={<></>}
            containerClassName="!border rounded-md p-2"
            bodyClassName="!grid-cols-1"
          >
            <RHFSelectField
              {...{
                label: "Date by",
                name: "date_by",
                options: REVENUES_REPORT_DATE,
                labelClassName: "w-[130px] !font-medium",
              }}
            />
            <ReportBetweenDateField
              customTitle={<></>}
              containerClassName="!p-0 !border-none"
              date1Field={{ name: "start_date" }}
              date2Field={{ name: "end_date" }}
            />
          </ReportFilterCard>

          <ReportBetweenDateField
            title="Revenue calculation revenue"
            date1Field={{
              label: "start_revenue_date",
              name: "start_revenue_date",
            }}
            date2Field={{
              label: "end_revenue_date",
              name: "end_revenue_date",
            }}
          />
          <ReportReviewField />
        </ReportFilterFields>
        <div className="grid gap-7">
          <ReportFilterContractPatterns
            contractIds={contractIds}
            setContractIds={setContractIds}
            bodyClassName="h-[290px]"
          />
          <ReportFilterBuildings
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="h-[190px]"
          />
        </div>
        <ReportFilterColumns
          searchKey="accessorKey"
          columns={columns}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
          bodyClassName="h-[580px] max-md:h-[320px]"
        />
      </div>
    </ReportWrapper>

  );
};

export default EarningRentalIncomeEarnedReport;
