import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { ReportFilterContractPatterns } from "@/components/reports/filters/ReportFilterContractPatterns";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportStatementField } from "@/components/reports/shared/ReportStatementField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getContractNearToExpiredReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const ContractNearToExpireReport = () => {
  const name = "contract_near_to_expire_report";
  const methods = useForm();
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns} //
      getReportData={getContractNearToExpiredReportData} //
      // extraContent={} // if you have extra content you need to put them outside the form
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <ReportFilterFields title="Fields">
          <ReportFields
            sharedLabelClassName="w-[200px]"
            fields={[
              ...fields,

              {
                label: "Days number",
                name: "days_number",
                type: "number",
              },
            ]}
          />
          <div className="grid grid-cols-1 gap-4">
            <ReportBetweenDateField
              date1Field={{
                name: "start_date",
              }}
              date2Field={{
                name: "end_date",
              }}
              containerClassName="!m-0"
            />
            <ReportStatementField
              containerClassName="!m-0"
              name="contract"
              title={"Contract Statement"}
            />
            <ReportStatementField
              containerClassName="!m-0"
              name="unit"
              title={"Contract Statement"}
            />
          </div>
        </ReportFilterFields>{" "}
        <div className="grid gap-4 order-3 md:order-2 max-[768px]:col-span-full max-[768px]:grid-cols-2 w-full">
          <ReportFilterContractPatterns
            contractIds={contractIds}
            setContractIds={setContractIds}
            bodyClassName="h-[250px]"
          />
          <ReportFilterBuildings
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="h-[260px]"
          />
        </div>
        <ReportFilterColumns
          searchKey="accessorKey"
          columns={columns}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
          bodyClassName="h-[600px] max-[768px]:w-[768px]"
          containerClassName="order-2"
        />
      </div>
    </ReportWrapper>
  );
};

export default ContractNearToExpireReport;
