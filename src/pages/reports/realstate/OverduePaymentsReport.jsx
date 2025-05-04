import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFCheckbox, RHFInput } from "@/components/forms/fields";
import { ReportFilterContractPatterns } from "@/components/reports/filters/ReportFilterContractPatterns";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getOverduePaymentsReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";


const OverduePaymentsReport = () => {
  const name = "overdue_payments_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [contractIds, setContractIds] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns}
      getReportData={getOverduePaymentsReportData}
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
          <RHFInput
            containerClassName="!flex-col"
            name="exceeds_day_number"
            label="considered overdue if it exceeds days no."
            type="number"
            labelClassName="max-w-[200px] overflow-auto"
          />
          <RHFCheckbox
            name="excluding_returned_checks"
            label="Excluding returned checks"
          />
          <RHFCheckbox
            name="Excluding checks without a due date"
            label="excluding_checks_without_due_date"
          />
        </ReportFilterFields>
        <div className="grid gap-4">
          <ReportFilterContractPatterns
            containerClassName="!m-0"
            contractIds={contractIds}
            setContractIds={setContractIds}
          />
          <ReportFilterBuildings
            containerClassName="!m-0"
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="h-[60px]"
          />
        </div>

        <div className="flex md:flex-col gap-4 max-[768px]:col-span-full max-[768px]:grid max-[768px]:grid-cols-2">
          <ReportFilterColumns
            searchKey="accessorKey"
            columns={columns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            bodyClassName="max-h-[400px]"
          />
        </div>
      </div>
    </ReportWrapper>

  );
};

export default OverduePaymentsReport;
