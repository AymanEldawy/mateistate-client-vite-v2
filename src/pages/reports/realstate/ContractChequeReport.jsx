import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFCheckbox } from "@/components/forms/fields";
import { ReportFilterContractPatterns } from "@/components/reports/filters/ReportFilterContractPatterns";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterCard } from "@/components/reports/shared/ReportFilterCard";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportReviewField } from "@/components/reports/shared/ReportReviewField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getContractChequeReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const ContractChequeReport = () => {
  const name = "contract_cheque_report";
  const methods = useForm();
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns} //
      getReportData={getContractChequeReportData} //
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
            <ReportBetweenDateField
              customTitle={
                <RHFCheckbox name="allow_date" label="date" />
              }
              containerClassName="!p-0 !border-none"
              date1Field={{ name: "start_date" }}
              date2Field={{ name: "end_date" }}
            />
          </ReportFilterCard>
        </ReportFilterFields>
        <div className="grid gap-2">
          <ReportFilterContractPatterns
            contractIds={contractIds}
            setContractIds={setContractIds}
            bodyClassName="h-[290px]"
          />
          <ReportFilterBuildings
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="h-[110px]"
          />
          <ReportReviewField containerClassName="!m-0" />
          <ReportBetweenDateField
            containerClassName="!m-0"
            title="collect date"
            date1Field={{
              label: "start_collect_date",
              name: "start_collect_date",
            }}
            date2Field={{
              label: "end_collect_date",
              name: "end_collect_date",
            }}
          />
        </div>
        <ReportFilterColumns
          searchKey="accessorKey"
          columns={columns}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
          bodyClassName="h-[720px] max-md:h-[320px]"
        />
      </div>
    </ReportWrapper>
  );
};

export default ContractChequeReport;
