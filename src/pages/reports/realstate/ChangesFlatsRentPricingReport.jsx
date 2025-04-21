import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";
import { RHFAsyncSelectField, RHFInput } from "@/components/forms/fields";
import { ReportBetweenDateField } from "@/components/reports/shared/ReportDateField";
import { ReportFields } from "@/components/reports/shared/ReportFields";
import { ReportFilterFields } from "@/components/reports/shared/ReportFilterFields";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getReportColumns, getReportFields } from "@/helpers/reports";
import { getChangesFlatRentPricingReportData, getChequeReportData } from "@/services/reportsServices";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const ChangesFlatsRentPricingReport = () => {
  const name = "changes_flats_rent_pricing_report";
  const methods = useForm();
  const [buildingsIds, setBuildingsIds] = useState({});

  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns} //
      getReportData={getChangesFlatRentPricingReportData} //
      // extraContent={} // if you have extra content you need to put them outside the form
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 items-start">
        <ReportFilterFields title="Fields">
          <RHFAsyncSelectField
            label="flat_no"
            name="apartment_id"
            table="apartments"
          />
          <RHFInput
            label="area"
            name="area"
          />

          <ReportBetweenDateField containerClassName="!m-0" />
        </ReportFilterFields>
        <div className="grid gap-4">
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

export default ChangesFlatsRentPricingReport;
