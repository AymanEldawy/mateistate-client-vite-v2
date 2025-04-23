import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFSelectField } from "@/components/forms/fields";
import { ReportFilterChequePattern } from "@/components/reports/filters/ReportFilterChequePattern";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import { ReportStatementField } from "@/components/reports/shared/ReportStatementField";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { RETURNED_CHEQUE_REPORT_DATA_BY } from "@/helpers/DEFAULT_OPTIONS";
import { getReportColumns, getReportFields } from "@/helpers/Reports";
import { getCollectionChqReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";


const CollectionChqReport = () => {
  const name = "collection_cheque_report";
  const methods = useForm();
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [chqIds, setChqIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns} //
      getReportData={getCollectionChqReportData} //
      // extraContent={} // if you have extra content you need to put them outside the form
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <ReportFilterFields title="Fields">
          <ReportFields
            fields={fields}
            sharedLabelClassName="w-[260px]"
          />
          <ReportBetweenDateField
            customTitle={
              <div className="mb-1">
                <RHFSelectField
                  labelClassName="w-[150px] !font-medium text-base"
                  selectClassName="w-full flex-1"
                  {...{
                    label: "Date By",
                    name: "date_by",
                    options: RETURNED_CHEQUE_REPORT_DATA_BY,
                  }}
                />
              </div>
            }
            date1Field={{ label: "from", name: "from" }}
            date2Field={{ label: "to", name: "to" }}
          />
          <ReportStatementField
            name="collection_details"
            containerClassName="!m-0"
          />
        </ReportFilterFields>
        {/* Filter */}
        <div className="grid gap-4">
          <ReportFilterBuildings
            setBuildingsIds={setBuildingsIds}
            buildingsIds={buildingsIds}
            bodyClassName="h-[260px]"
          />
          <ReportFilterChequePattern
            chqIds={chqIds}
            setChqIds={setChqIds}
          />
        </div>
        {/* Filter */}
        <ReportFilterColumns
          searchKey="accessorKey"
          columns={columns}
          selectedColumns={selectedColumns}
          setSelectedColumns={setSelectedColumns}
          bodyClassName="h-[400px]"
        />
      </div>
    </ReportWrapper>
  );
};

export default CollectionChqReport;
