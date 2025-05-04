import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { ReportFilterColumns } from "@/components/filters/ReportFilterColumns";
import { RHFCheckbox, RHFInput } from "@/components/forms/fields";
import { ReportFilterContractPatterns } from "@/components/reports/filters/ReportFilterContractPatterns";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getReservedUnitsReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const ReservedUnitsReport = () => {
  const name = "reserved_units_report";
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const [selectedColumns, setSelectedColumns] = useState({});
  const [buildingsIds, setBuildingsIds] = useState({});
  const [contractIds, setContractIds] = useState({});

  const fields = useMemo(() => getReportFields(name), []);
  const columns = useMemo(() => getReportColumns(name), []);

  return (

    <ReportWrapper
      columns={columns}
      getReportData={getReservedUnitsReportData}
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
          <RHFInput
            containerClassName="!flex-col"
            {...{
              label: "remaining_days_of_number_of_reservation_is_smaller",
              name: "remaining_days_of_number_of_reservation_is_smaller",
              type: "number",
            }}
          />
          <ReportBetweenDateField
            customTitle={
              <RHFCheckbox
                name="allow_booking_date"
                label="booking date"
              />
            }
            title="Booking date"
            date1Field={{
              label: "from",
              name: "from",
            }}
            date2Field={{
              label: "to",
              name: "to",
            }}
            sharedProps={{
              readOnly: !watch("allow_booking_date"),
            }}
            containerClassName="!m-0"
          />
        </ReportFilterFields>
        <div className="grid gap-4">
          <ReportFilterContractPatterns
            contractIds={contractIds}
            setContractIds={setContractIds}
          />
          <ReportFilterBuildings
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="min-h-[100px] max-h-[210px]"
          />
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

export default ReservedUnitsReport;
