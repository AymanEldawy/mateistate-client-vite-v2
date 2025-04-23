import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFCheckbox } from "@/components/forms/fields";
import { ReportFilterContractPatterns } from "@/components/reports/filters/ReportFilterContractPatterns";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportReviewField } from "@/components/reports/shared/ReportReviewField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/Reports";
import { getContractDepositReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";


const ContractsDepositReport = () => {
  const name = "contracts_deposit_report";
  const methods = useForm();
  const [selectedColumns, setSelectedColumns] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  
  return (
    <ReportWrapper
      columns={columns} //
      getReportData={getContractDepositReportData} //
      // extraContent={} // if you have extra content you need to put them outside the form
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4  lg:gap-8 items-start">
        <ReportFilterFields title="Fields">
          <ReportFields
            fields={fields}
            sharedLabelClassName="w-[200px] !whitespace-pre-wrap"
          // containerClassName="grid grid-cols-2 gap-4"
          />
          <ReportBetweenDateField
            title="Date"
            date1Field={{
              label: "from",
              name: "from",
            }}
            date2Field={{
              label: "to",
              name: "to",
            }}
            containerClassName="!-my-2"
          />
          <RHFCheckbox
            name="without_deposit"
            label="show_contract_without_security_deposit"
          />
        </ReportFilterFields>
        <div className="grid gap-2">
          <ReportFilterContractPatterns
            contractIds={contractIds}
            setContractIds={setContractIds}
          />
          <ReportReviewField />
        </div>

        <div className="flex md:flex-col gap-4 max-[768px]:col-span-full max-[768px]:grid max-[768px]:grid-cols-2">
          <ReportFilterColumns
            searchKey="accessorKey"
            columns={columns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            bodyClassName="max-h-[560px]"
          />
        </div>
      </div>
    </ReportWrapper>

  );
};

export default ContractsDepositReport;
