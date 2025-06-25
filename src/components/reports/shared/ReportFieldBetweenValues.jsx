import { RHFInput } from "@/components/forms/fields";
import { Label } from "@/components/forms/fields/Label";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export const ReportFieldBetweenValues = ({
  containerClassName,
  bodyClassName,
  field1Props,
  field2Props,
  sharedProps,
  hideText,
  readOnly,
  label,
  labelClassName,
  inputClassName,
}) => {
  const { register } = useFormContext();
  const { t } = useTranslation();
  console.log({label});
  return (
    <div className={`w-full ${containerClassName} flex flex-row items-center gap-1`}>
      {label && (
        <Label
          name={field1Props?.name || "from"}
          label={label}
          labelClassName={labelClassName}
        />
      )}
      <div className={`flex gap-4 items-center ${bodyClassName}`}>
        <RHFInput
          {...field1Props}
          {...sharedProps}
          name={field1Props?.name || "from"}
        />
        {hideText ? null : "To"}
        <RHFInput
          readOnly={readOnly}
          {...field2Props}
          {...sharedProps}
          name={field2Props?.name || "to"}
        />
      </div>
    </div>
  );
};
