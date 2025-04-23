import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFInput, RHFSelectField } from "@/components/forms/fields";
import { ReportFilterContractPatterns } from "@/components/reports/filters/ReportFilterContractPatterns";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterCard } from "@/components/reports/shared/ReportFilterCard";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportStatementField } from "@/components/reports/shared/ReportStatementField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { FILTER_USING } from "@/helpers/DEFAULT_OPTIONS";
import { getReportColumns, getReportFields } from "@/helpers/Reports";
import { getExpiredContractReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const ContractsExpiredReport = () => {
  const name = "contract_expired_reports";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);


  return (
    <ReportWrapper
      columns={columns} //
      getReportData={getExpiredContractReportData} //
      // extraContent={} // if you have extra content you need to put them outside the form
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <ReportFilterFields title="Fields" containerClassName="">
          <ReportFields
            fields={fields}
            sharedLabelClassName="w-[200px]"
          />
          <div className="">
            <div className="px-4 pt-2 pb-1 border rounded-md">
              <div className="">
                <RHFSelectField
                  labelClassName="!font-medium !text-lg w-[100px]"
                  selectClassName="flex-1"
                  containerClassName="!flex-row gap-4 items-center"
                  {...{
                    label: "filter using",
                    name: "filter_using",
                    options: FILTER_USING,
                  }}
                />
                <ReportFilterCard containerClassName="!border-0 !px-0">
                  <RHFInput
                    containerClassName="flex-1"
                    labelClassName="w-[150px]"
                    readOnly={watch("filter_using") === 2}
                    {...{
                      label: "Days start from",
                      name: "from",
                      type: "number",
                    }}
                  />
                  <RHFInput
                    containerClassName="flex-1"
                    labelClassName="w-[150px]"
                    readOnly={watch("filter_using") === 2}
                    {...{
                      label: "Days to",
                      name: "to",
                      type: "number",
                    }}
                  />
                </ReportFilterCard>
                <ReportBetweenDateField
                  containerClassName="!border-0 !px-0 !border-t !rounded-none"
                  date1Field={{
                    name: "start_date",
                  }}
                  date2Field={{
                    name: "end_date",
                  }}
                  sharedProps={{
                    containerClassName: "flex-1",
                    readOnly: watch("filter_using") === 1,
                    labelClassName: "w-[150px]",
                  }}
                />
              </div>
            </div>
          </div>
        </ReportFilterFields>
        <div className="flex flex-col gap-2">
          <ReportFilterBuildings
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="h-[210px]"
          />
          <ReportFilterContractPatterns
            contractIds={contractIds}
            setContractIds={setContractIds}
            bodyClassName="h-[250px]"
          />
        </div>
        <div className="">
          <ReportFilterColumns
            searchKey="accessorKey"
            columns={columns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            bodyClassName="w-full md:h-[530px]"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <ReportStatementField
          name="contract"
          title={"Contract Statement"}
        />
        <ReportStatementField name="unit" title={"unit Statement"} />
      </div>
    </ReportWrapper>
  );
};

export default ContractsExpiredReport;
