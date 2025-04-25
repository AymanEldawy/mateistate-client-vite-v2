import { RHFInput, RHFSelectField } from "@/components/forms/fields";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ReportFieldBetweenValues } from "./ReportFieldBetweenValues";
export const ReportSectionFilterValues = () => {
  const { t } = useTranslation();
  const { watch } = useFormContext();

  return (
    <div className={`flex flex-col gap-2 border p-2 rounded-md`}>
      <label
        className={
          "font-medium text-black text-base mb-1 overflow-hidden text-ellipsis min-w-fit whitespace-nowrap capitalize flex items-center gap-2 "
        }
      >
        {t("amount_terms")}
      </label>
      <RHFSelectField
        label="field"
        name="field"
        isArray
        options={[
          { id: 1, name: "debit" },
          { id: 2, name: "credit" },
        ]}
        labelClassName="w-[120px]"
      />
      <RHFSelectField
        label="transaction"
        name="transaction"
        isArray
        options={[
          { id: 0, name: "Without" },
          { id: 1, name: "less than" },
          { id: 2, name: "more than" },
          { id: 3, name: "equal" },
          { id: 4, name: "between" },
          { id: 5, name: "less or equal" },
          { id: 6, name: "largest or equal" },
        ]}
        labelClassName="w-[120px]"
      />
      {watch("transaction") === "between" ? (
        <ReportFieldBetweenValues
          field1Props={{
            name: "amount_from",
          }}
          field2Props={{
            name: "amount_to",
          }}
        />
      ) : (
        <RHFInput
          label="amount"
          name="amount"
          labelClassName="w-[120px]"
          type="number"
        />
      )}
    </div>
  );
};
