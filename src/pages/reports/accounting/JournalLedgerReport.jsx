import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFCheckbox } from "@/components/forms/fields";
import { ReportFilterChequePattern } from "@/components/reports/filters/ReportFilterChequePattern";
import { ReportFilterChqOperationsTypes } from "@/components/reports/filters/ReportFilterChqOperationsTypes";
import { ReportFilterContractPatterns } from "@/components/reports/filters/ReportFilterContractPatterns";
import { ReportFilterVoucherPattern } from "@/components/reports/filters/ReportFilterVoucherPattern";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterCard } from "@/components/reports/shared/ReportFilterCard";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportPostedField } from "@/components/reports/shared/ReportPostedField";
import { ReportReviewField } from "@/components/reports/shared/ReportReviewField";
import { ReportSectionFilterValues } from "@/components/reports/shared/ReportSectionFilterValues";
import { ReportStatementField } from "@/components/reports/shared/ReportStatementField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getJournalLedgerReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const JournalLedgerReport = () => {
  const name = "journal_ledger_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [voucherIds, setVoucherIds] = useState({});
  const [operationIds, setOperationIds] = useState({});
  const [chqIds, setChqIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns}
      getReportData={getJournalLedgerReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
        <ReportFilterFields title="fields">
          <ReportFields
            fields={fields}
            containerClassName="!mb-0 gap-3"
            sharedLabelClassName="w-[200px]"
          />
          <ReportBetweenDateField date1Field={{
            name:'created_at_from'
          }}
          date2Field={{
            name: 'created_at_to'
          }} containerClassName="!m-0" />
          <ReportSectionFilterValues />
          {/* <ReportStatementField
            name="statement"
            title="statement"
            containerClassName="!m-0"
          /> */}
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
        </ReportFilterFields>
        <div className="grid gap-4">
          {/* <ReportFilterContractPatterns
            contractIds={contractIds}
            setContractIds={setContractIds}
          /> */}
          <ReportFilterVoucherPattern
            voucherIds={voucherIds}
            setVoucherIds={setVoucherIds}
            bodyClassName="h-[90px]"
          />
          {/* <ReportFilterChqOperationsTypes
            operationIds={operationIds}
            setOperationIds={setOperationIds}
          /> */}
        </div>
        {/* <div className="grid gap-4 max-[768px]:col-span-full max-[768px]:grid-cols-2">
          <ReportFilterChequePattern
            chqIds={chqIds}
            setChqIds={setChqIds}
          />
          <ReportFilterColumns
            searchKey="accessorKey"
            columns={columns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            bodyClassName="!max-h-[510px]"
          />
        </div> */}
        <ReportReviewField containerClassName="!m-0" />
        {/* <ReportPostedField containerClassName="!m-0" /> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start mt-8">
        <div className="flex flex-col gap-4"></div>
      </div>
    </ReportWrapper>

  );
};

export default JournalLedgerReport;
