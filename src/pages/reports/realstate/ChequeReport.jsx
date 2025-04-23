import { ReportFilterBuildings } from '@/components/filters/ReportFilterBuildings'
import { ReportFilterColumns } from '@/components/filters/ReportFilterColumns'
import { RHFInput, RHFSelectField } from '@/components/forms/fields'
import { ReportFilterChequePattern } from '@/components/reports/filters/ReportFilterChequePattern'
import { ReportFilterContractPatterns } from '@/components/reports/filters/ReportFilterContractPatterns'
import { ReportBetweenDateField } from '@/components/reports/shared/ReportDateField'
import { ReportFields } from '@/components/reports/shared/ReportFields'
import { ReportFilterCard } from '@/components/reports/shared/ReportFilterCard'
import { ReportFilterFields } from '@/components/reports/shared/ReportFilterFields'
import { ReportReviewField } from '@/components/reports/shared/ReportReviewField'
import { ReportStatementField } from '@/components/reports/shared/ReportStatementField'
import ReportWrapper from '@/components/reports/wrapper/ReportWrapper'
import Checkbox from '@/components/shared/Checkbox'
import { getReportColumns, getReportFields } from '@/helpers/Reports'
import chequeReportColumns from '@/helpers/Reports/chequeReportColumns'
import { getChequeReportData } from '@/services/reportsServices'
import { useMemo, useState } from 'react'
import { useForm, useFormContext } from 'react-hook-form'

const ChequeReport = () => {
  const name = "cheques_report";
  const methods = useForm();
  const { watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState([]);
  const [chqIds, setChqIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);


  return (
    <ReportWrapper
      columns={chequeReportColumns} //
      getReportData={getChequeReportData} //
      // extraContent={} // if you have extra content you need to put them outside the form
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
        <ReportFilterFields title="fields">
          <ReportFields
            fields={fields}
            containerClassName="!mb-0 gap-3"
            sharedLabelClassName="w-[200px]"
          />
          <div className="">
            <ReportBetweenDateField
              title="Due Date"
              date1Field={{
                label: "start_due_date",
                name: "start_due_date",
              }}
              date2Field={{
                label: "end_due_date",
                name: "end_due_date",
              }}
            />
            <ReportBetweenDateField
              labelClassName="w-[230px]"
              date1Field={{
                name: "start_date",
              }}
              date2Field={{
                name: "end_date",
              }}
            />
            {/* <ReportStatementField name="statement" title="" /> */}
            <ReportStatementField name="paper" title="Paper" />
            <ReportStatementField name="note" title="Note" />
          </div>
        </ReportFilterFields>
        <div className="grid gap-4">
          <ReportFilterBuildings
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="h-[270px]"
          />
          <ReportFilterContractPatterns
            contractIds={contractIds}
            setContractIds={setContractIds}
            bodyClassName="h-[285px]"
          />
          <div className="px-2 flex flex-col gap-2">
            <Checkbox
              containerClassName="!flex-row-reverse items-center gap-4"
              labelClassName="mt-2"
              {...{
                text: "Showing papers not linked to contract",
                name: "non_linked_contract",
              }}
            />
            <Checkbox
              containerClassName="!flex-row-reverse items-center gap-4"
              labelClassName="mt-2"
              {...{
                text:
                  "Show papers that are not linked to contracts only",
                name: "linked_contract_only",
              }}
            />
          </div>
          <ReportFilterCard
            title={"Migration"}
          // containerClassName="border-0 shadow-none p-0"
          >
            <Checkbox
              {...{
                text: "displaying_transferred_constraints",
                name: "transferred",
              }}
            />
            <Checkbox
              {...{
                text: "displaying_untransferred_constraints",
                name: "untransferred",
              }}
            />
          </ReportFilterCard>
          <ReportReviewField />
        </div>
        <div className="grid gap-4 max-[768px]:col-span-full max-[768px]:grid-cols-2">
          <ReportFilterColumns
            searchKey="accessorKey"
            columns={columns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            bodyClassName="!max-h-[450px]"
          />
          <div className="grid gap-4">
            <ReportFilterChequePattern
              chqIds={chqIds}
              setChqIds={setChqIds}
            />
            <div className="flex flex-col gap-2 items-start px-2">
              <Checkbox
                labelClassName="mt-2"
                containerClassName=" gap-4 !flex-row-reverse !items-center"
                {...{
                  label: "Securities that have no status",
                  name: "securities_without_status",
                }}
              />
              <Checkbox
                readOnly={watch("securities_without_status")}
                labelClassName="mt-2"
                containerClassName=" gap-4 !flex-row-reverse !items-center"
                {...{
                  label: "collection",
                  name: "collection",
                }}
              />
              <Checkbox
                readOnly={watch("securities_without_status")}
                labelClassName="mt-2"
                containerClassName=" gap-4 !flex-row-reverse !items-center"
                {...{
                  label: "deportation",
                  name: "deportation",
                }}
              />

              <ReportFilterCard
                containerClassName="w-full"
                customTitle={
                  <Checkbox
                    name="return"
                    label="return"
                    readOnly={watch("securities_without_status")}
                  />
                }
              >
                {/* <Checkbox
                    /> */}
                <RHFSelectField
                  readOnly={!watch("return")}
                  labelClassName="w-[140px]"
                  containerClassName="flex-1"
                  {...{
                    label: "return_status",
                    name: "return_status",
                    options: [
                      { id: 0, name: "All" },
                      { id: 1, name: "" },
                      { id: 2, name: "" },
                    ],
                  }}
                />
                <RHFInput
                  labelClassName="w-[140px]"
                  {...{
                    label: "return_reason",
                    name: "return_reason",
                    type: "number",
                  }}
                  readOnly={!watch("return")}
                />
              </ReportFilterCard>
              <ReportFilterCard
                containerClassName="w-full"
                bodyClassName="!grid-cols-1 w-full"
                customTitle={
                  <Checkbox
                    name="partial_collection"
                    label="partial_collection"
                    readOnly={watch("securities_without_status")}
                  />
                }
              >
                <RHFSelectField
                  readOnly={!watch("partial_collection")}
                  containerClassName="flex-1 w-full"
                  selectClassName="w-full flex-1"
                  {...{
                    label: "partial_collection_status",
                    name: "partial_collection_status",
                    options: [
                      { id: 0, name: "All" },
                      { id: 1, name: "" },
                      { id: 2, name: "" },
                    ],
                  }}
                />
              </ReportFilterCard>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start mt-8">
        <div className="flex flex-col gap-4"></div>
      </div>
      {/* children */}
    </ReportWrapper>
  )
}

export default ChequeReport