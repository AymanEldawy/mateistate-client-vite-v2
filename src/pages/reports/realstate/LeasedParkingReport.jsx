import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFCheckbox } from "@/components/forms/fields";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getLeasedParkingReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const REPORT_OPTIONS = [
  "show_parking_that_inside_assembled_parking",
  "show_assembled_parking_that_contract_has_been_terminated",
];

const LeasedParkingReport = () => {
  const name = "leased_parking_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns}
      getReportData={getLeasedParkingReportData}
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
          {REPORT_OPTIONS?.map((option) => (
            <RHFCheckbox label={option} name={option} key={option} />
          ))}
          <ReportFilterBuildings
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="h-[290px]"
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

export default LeasedParkingReport;
