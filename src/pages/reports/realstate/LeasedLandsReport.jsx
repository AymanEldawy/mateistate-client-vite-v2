import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportReviewField } from "@/components/reports/shared/ReportReviewField";
import { ReportStatementField } from "@/components/reports/shared/ReportStatementField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getLeasedLandsReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";


const LeasedLandsReport = () => {
  const name = "leased_lands_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns}
      getReportData={getLeasedLandsReportData}
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
          <ReportReviewField containerClassName="!m-0" />
          <ReportStatementField
            containerClassName="!m-0"
            name="contract"
          />
          <ReportStatementField
            containerClassName="!m-0"
            name="property"
          />
        </div>

        <div className="flex md:flex-col gap-4 max-[768px]:col-span-full max-[768px]:grid max-[768px]:grid-cols-2">
          <ReportFilterColumns
            searchKey="accessorKey"
            columns={columns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            bodyClassName="max-h-[340px]"
          />
        </div>
      </div>
    </ReportWrapper>

  );
};

export default LeasedLandsReport;
