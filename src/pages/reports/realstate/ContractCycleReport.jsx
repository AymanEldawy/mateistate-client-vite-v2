import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { ReportFilterContractPatterns } from "@/components/reports/filters/ReportFilterContractPatterns";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/Reports";
import { getContractCycleReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const ContractCycleReport = () => {
  const name = "contract_cycle_report";
  const methods = useForm();
  const [selectedColumns, setSelectedColumns] = useState({});
  const [contractIds, setContractIds] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns} //
      getReportData={getContractCycleReportData} //
      // extraContent={} // if you have extra content you need to put them outside the form
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <ReportFilterFields
          title="Fields"
          containerClassName=" !col-span-2"
        >
          <ReportFields
            fields={fields}
            // sharedLabelClassName="w-[250px] !whitespace-normal"
            sharedContainerClassName="!flex-wrap"
            containerClassName="grid grid-cols-2 gap-4"
          // sharedInputClassName="min-w-[200px]"
          />
        </ReportFilterFields>

        <div className="flex md:flex-col gap-4 max-[768px]:col-span-full max-[768px]:grid max-[768px]:grid-cols-2">
          <ReportFilterColumns
            searchKey="accessorKey"
            columns={columns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            bodyClassName="h-[520px]"
          />
        </div>
        <ReportFilterContractPatterns
          contractIds={contractIds}
          setContractIds={setContractIds}
          bodyClassName="h-[300px]"
        />
        <ReportFilterBuildings
          buildingsIds={buildingsIds}
          setBuildingsIds={setBuildingsIds}
          bodyClassName="h-[190px]"
        />
      </div>
    </ReportWrapper>
  );
};

export default ContractCycleReport;
