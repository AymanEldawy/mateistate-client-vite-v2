
import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFCheckbox } from "@/components/forms/fields";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns } from "@/helpers/reports";
import { getMangerChequeReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const MangerChequeReport = () => {
  const name = "manger_cheques_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [buildingsIds, setBuildingsIds] = useState({});
  const [selectedColumns, setSelectedColumns] = useState({});

  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns}
      getReportData={getMangerChequeReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
        <div className="grid gap-4">
          <ReportFilterBuildings
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="h-[300px]"
          />
          <ReportBetweenDateField
            customTitle={<RHFCheckbox name="allow_date" label="date" />}
            date1Field={{ name: "start_date" }}
            date2Field={{ name: "end_date" }}
            sharedProps={{
              readOnly: !watch("allow_date"),
            }}
          />
        </div>
        <ReportFilterColumns
          searchKey="accessorKey"
          columns={columns}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
          bodyClassName="h-[450px]"
        />
      </div>
    </ReportWrapper>

  );
};

export default MangerChequeReport;
