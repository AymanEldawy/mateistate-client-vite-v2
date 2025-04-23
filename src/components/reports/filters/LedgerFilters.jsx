import { useFormContext } from "react-hook-form";
import { ReportFilterFields } from "../shared/ReportFilterFields";
import { getReportFields } from "@/helpers/Reports";
import { useMemo } from "react";
import { ReportFields } from "../shared/ReportFields";
import { CurrencyFieldGroup } from "@/components/forms/global";


export const LedgerFilters = ({ extraFields, hideCurrency }) => {
  const name = "general_ledger_report";
  const { watch } = useFormContext();

  const fields = useMemo(() => getReportFields(name), []);

  return (
    <ReportFilterFields title={"Fields"}>
      <ReportFields
        fields={fields}
        sharedLabelClassName="w-[260px]"
      />
      {extraFields}
      {hideCurrency ? null : (
        <CurrencyFieldGroup
          fields={{ ...fields?.currency_id, hideValue: false }}
        />
      )}
    </ReportFilterFields>
  );
};
