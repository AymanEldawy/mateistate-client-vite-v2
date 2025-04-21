import { useFormContext } from "react-hook-form";
import { RHFCheckbox, RHFInput, RHFSelectField } from "@/components/forms/fields";
import { ReportFilterCard } from "./ReportFilterCard";

export const ReportStatementField = ({
  name,
  title,
  containerClassName,
  bodyClassName,
}) => {
  const { watch } = useFormContext();
  return (
    <ReportFilterCard
      title={title}
      containerClassName={`border-0 shadow-none p-0 mt-4 ${containerClassName}`}
      bodyClassName={bodyClassName}
      customTitle={
        <RHFCheckbox name={`allow_${name}_statement`} label={name} />
      }
    >
      <div className="flex gap-2 items-start">
        <RHFSelectField
          labelClassName="w-[230px]"
          containerClassName="flex-1 max-lg:flex-wrap"
          readOnly={!watch(`allow_${name}_statement`)}
          {...{
            label: `${name}_statement_type`,
            name: `${name}_statement_type`,
            options: [
              { id: 1, name: "Contains" },
              { id: 2, name: "Not-contains" },
            ],
          }}
        />
      </div>
      <RHFInput
        labelClassName="w-[230px]"
        containerClassName="flex-1 max-lg:flex-wrap"
        readOnly={!watch(`allow_${name}_statement`)}
        {...{
          label: `${name}_statement`,
          name: `${name}_statement`,
        }}
      />
    </ReportFilterCard>
  );
};
