import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFAsyncSelectField } from "@/components/forms/fields";
import { ReportFilterExpensesTypes } from "@/components/reports/filters/ReportFilterExpensesTypes";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns } from "@/helpers/reports";
import { getOwnerExpensesReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const OwnerExpensesReport = () => {
  const name = "owner_expenses_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [expensesIds, setExpensesIds] = useState({});

  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns}
      getReportData={getOwnerExpensesReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <ReportFilterFields title="Fields">
          <RHFAsyncSelectField
            {...{
              label: "owner",
              name: "owner",
              table: "owner",
            }}
            values={watch()}
          />
          <ReportFilterExpensesTypes
            expensesIds={expensesIds}
            setExpensesIds={setExpensesIds}
            bodyClassName="h-[130px]"
          />
          <ReportBetweenDateField containerClassName="!m-0" />
        </ReportFilterFields>
        <ReportFilterBuildings
          setBuildingsIds={setBuildingsIds}
          buildingsIds={buildingsIds}
          bodyClassName="h-[230px]"
        />
        <div className="flex md:flex-col gap-4 max-[768px]:col-span-full max-[768px]:grid max-[768px]:grid-cols-2">
          <ReportFilterColumns
            searchKey="accessorKey"
            columns={columns}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
            bodyClassName="max-h-[670px]"
          />
        </div>
      </div>
    </ReportWrapper>

  );
};

export default OwnerExpensesReport;
