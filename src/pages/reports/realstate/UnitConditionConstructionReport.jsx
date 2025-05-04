import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReportWrapper from "@/components/reports/wrapper/ReportWrapper";
import { getUnitConditionConstructionReportData } from "@/services/reportsServices";
import { useTranslation } from "react-i18next";
import { getReportColumns } from "@/helpers/reports";
import { RHFCheckbox } from "@/components/forms/fields";
import { ReportFilterBuildings } from "@/components/filters/ReportFilterBuildings";

const REPORT_OPTIONS_UNITS = ["flats", "shops", "parking"];
const REPORT_OPTIONS_STATUS = ["leased", "sold", "reserved", "empty"];

const UnitConditionConstructionReport = () => {
  const name = "unit_condition_for_construction_report";
  const methods = useForm();
  const { t } = useTranslation();
  const { handleSubmit, watch } = methods;
  const [buildingsIds, setBuildingsIds] = useState({});

  const columns = useMemo(() => getReportColumns(name), []);

  return (
    <ReportWrapper
      columns={columns}
      getReportData={getUnitConditionConstructionReportData}
      reportHeadProps={{
        header: name
      }}
      methods={methods}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
        <div className="grid gap-2">
          <h4 className="font-medium">{t("Units")}</h4>
          <div className="px-4 flex flex-col gap-2">
            {REPORT_OPTIONS_UNITS?.map((option) => (
              <RHFCheckbox
                key={option}
                {...{
                  label: option,
                  name: option,
                }}
              />
            ))}
          </div>
          <h4 className="font-medium">{t("Status")}</h4>
          <div className="px-4 flex flex-col gap-2">
            {REPORT_OPTIONS_STATUS?.map((option) => (
              <RHFCheckbox
                key={option}
                {...{
                  label: option,
                  name: option,
                }}
              />
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <ReportFilterBuildings
            buildingsIds={buildingsIds}
            setBuildingsIds={setBuildingsIds}
            bodyClassName="h-[240px]"
          />
        </div>
      </div>
    </ReportWrapper>

  );
};

export default UnitConditionConstructionReport;
