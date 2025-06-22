import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportReviewField } from "@/components/reports/shared/ReportReviewField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getLeasedPropertyActivityReportData } from "@/services/reportsServices";
import React, { useMemo, useState } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";


const property_columns = [
  { name: "apartment", label: "apartment" },
  { name: "shop", label: "shop" },
  { name: "parking", label: "parking" },
  { name: "villa", label: "villa" },
  { name: "land", label: "land" },
];

const LeasedPropertyActivityReport = () => {
  const name = "leased_property_activity_report";
  const methods = useForm();
  const { handleSubmit, watch, setValue } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [selectedPropertyColumns, setSelectedPropertyColumns] = useState({});
  const [data, setData] = useState([]);
  const [openReportResults, setOpenReportResults] = useState(false);

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);
  React.useEffect(() => {
    if (selectedPropertyColumns) {
      setValue("property", Object.keys(selectedPropertyColumns));
    }
  }, [selectedPropertyColumns]);
  return (
    <ReportWrapper
      columns={columns}
      getReportData={getLeasedPropertyActivityReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid md:grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
        <ReportFilterFields title={"Fields"}>
          <ReportFields
            containerClassName="gap-3"
            fields={fields}
            sharedLabelClassName="w-[200px]"
          />
        </ReportFilterFields>
        {/* <ReportFilterColumns
          searchKey="accessorKey"
          columns={columns}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
        /> */}
        <div className="flex flex-col gap-4">
          <ReportFilterColumns
            columns={property_columns}
            selectedColumns={selectedPropertyColumns}
            setSelectedColumns={setSelectedPropertyColumns}
            title="Show Property"
          />
          <ReportBetweenDateField
            date1Field={{
              name: "start_date",
            }}
            date2Field={{
              name: "end_date",
            }}
          />
        </div>
        <ReportReviewField />
      </div>
    </ReportWrapper>

  );
};

export default LeasedPropertyActivityReport;
