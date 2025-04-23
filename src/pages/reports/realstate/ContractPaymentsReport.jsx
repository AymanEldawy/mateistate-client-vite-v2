import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFCheckbox } from "@/components/forms/fields";
import { ReportFilterContractPatterns } from "@/components/reports/filters/ReportFilterContractPatterns";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportReviewField } from "@/components/reports/shared/ReportReviewField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/Reports";
import { getContractPaymentsReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

export const ContractPaymentsReport = () => {
  const name = "contract_payments_report";
  const methods = useForm();
  const { watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (

    <ReportWrapper
      columns={columns} //
      getReportData={getContractPaymentsReportData} //
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
            fields={fields}
          />
        </ReportFilterFields>
        <div className="grid gap-4 order-3 md:order-2 max-[768px]:col-span-full max-[768px]:grid-cols-2 w-full">
          <ReportFilterContractPatterns
            contractIds={contractIds}
            setContractIds={setContractIds}
            bodyClassName="h-[250px]"
          />
          <ReportFilterBuildings
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="h-[230px]"
          />
          <ReportReviewField />
        </div>
        <ReportFilterColumns
          searchKey="accessorKey"
          columns={columns}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
          bodyClassName="h-[690px] max-[768px]:w-[768px]"
          containerClassName="order-2"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 lg:gap-8 mt-4">
        <ReportBetweenDateField
          customTitle={<RHFCheckbox name="allow_date" label="Date" />}
          date1Field={{
            name: "start_date",
          }}
          date2Field={{
            name: "end_date",
          }}
          sharedProps={{
            readOnly: !watch("allow_date"),
          }}
          containerClassName="!m-0"
        />
        <ReportBetweenDateField
          customTitle={
            <RHFCheckbox
              name="allow_cheques_date"
              label="Cheques Date"
            />
          }
          date1Field={{
            name: "start_cheques_date",
          }}
          date2Field={{
            name: "end_cheques_date",
          }}
          sharedProps={{
            readOnly: !watch("allow_cheques_date"),
          }}
          containerClassName="!m-0"
        />
        <ReportBetweenDateField
          customTitle={
            <RHFCheckbox
              name="allow_collection_date"
              label="Collection Date"
            />
          }
          date1Field={{
            name: "start_collection_date",
          }}
          date2Field={{
            name: "end_collection_date",
          }}
          sharedProps={{
            readOnly: !watch("allow_collection_date"),
          }}
          containerClassName="!m-0"
        />
      </div>
    </ReportWrapper>
  );
};

export default ContractPaymentsReport;
