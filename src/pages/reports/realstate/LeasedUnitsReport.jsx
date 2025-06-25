import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFCheckbox } from "@/components/forms/fields";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportReviewField } from "@/components/reports/shared/ReportReviewField";
import { ReportStatementField } from "@/components/reports/shared/ReportStatementField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getLeasedUnitsReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";


const REPORT_OPTIONS = [
  // {
  //   name: "show_merged_shops_and_flats",
  //   label: "Show merged shops and flats",
  // },
  // {
  //   name: "consider_assembled_units_in_as_leased",
  //   label: "Consider assembled units in as leased",
  // },
  // {
  //   name: "hide_assembled_unit",
  //   label: "Hide assembled unit",
  // },
  // {
  //   name: "consider_assembled_flats_that_contract_has_been_terminated",
  //   label: "Consider assembled flats that contract has been terminated",
  // },
  {
    name: "show_debit",
    label: "Show debit",
  },
  {
    name: "show_credit",
    label: "Show credit",
  },
  {
    name: "show_sold_units",
    label: "Show sold units",
  },
  {
    name: "flats",
    label: "Flats",
  },
  {
    name: "shops",
    label: "Shops",
  },
];

const LeasedUnitsReport = () => {
  const name = "leased_units_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns}
      getReportData={getLeasedUnitsReportData}
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
            <RHFCheckbox label={option.label} name={option.name} key={option.name} defaultValue={false} />
          ))}
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
          {/* <ReportFilterColumns
            searchKey="accessorKey"
            columns={columns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            bodyClassName="max-h-[340px]"
          /> */}
          <ReportBetweenDateField
            date1Field={{
              name: "created_at_from",
            }}
            date2Field={{
              name: "created_at_to",
            }}
          />
          <ReportFilterBuildings
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="h-[210px]"
          />
        </div>
      </div>
    </ReportWrapper>

  );
};

export default LeasedUnitsReport;
