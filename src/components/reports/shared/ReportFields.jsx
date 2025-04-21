
import { RHFAsyncSelectField, RHFCheckbox, RHFInput, RHFSelectField } from "@/components/forms/fields";
import { useFormContext } from "react-hook-form";
import { ReportFieldBetweenValues } from "./ReportFieldBetweenValues";


export const ReportFields = ({
  fields,
  values,
  tab,
  containerClassName,
  sharedLabelClassName,
  sharedInputClassName,
  sharedContainerClassName,
}) => {
  const { watch } = useFormContext();

  return (
    <div className={`flex flex-col gap-2 ${containerClassName}`}>
      {fields?.map((field, i) => {
        if (field?.is_ref) {
          return (
            <RHFAsyncSelectField
              {...field}
              key={`${field?.name}-${i}`}
              name={tab ? `${tab}.${field?.name}` : ""}
              table={field?.ref_table}
              labelClassName={sharedLabelClassName}
              containerClassName={sharedContainerClassName}
              inputClassName={sharedInputClassName}
            />
          );
        } else if (field?.key === "select") {
          return (
            <RHFSelectField
              {...field}
              key={`${field?.name}-${i}`}
              name={tab ? `${tab}.${field?.name}` : ""}
              value={watch(tab ? `${tab}.${field?.name}` : field?.name)}
              labelClassName={sharedLabelClassName}
              containerClassName={sharedContainerClassName}
              selectContainerClassName={sharedInputClassName}
            />
          );
        } else if (field?.key === "switch") {
          return (
            <RHFCheckbox
              {...field}
              defaultChecked={values?.[field?.name]}
              key={`${field?.name}-${i}`}
              name={tab ? `${tab}.${field?.name}` : ""}
              values={values}
              labelClassName={sharedLabelClassName}
              containerClassName={sharedContainerClassName}
              inputClassName={sharedInputClassName}
            />
          );
        } else if (field?.key === "between") {
          return (
            <ReportFieldBetweenValues
              {...field}
              key={`${field?.name}-${i}`}
              labelClassName={sharedLabelClassName}
              containerClassName={sharedContainerClassName}
              inputClassName={sharedInputClassName}
            />
          );
        } else {
          return (
            <RHFInput
              {...field}
              key={`${field?.name}-${i}`}
              updatedName={tab ? `${tab}.${field?.name}` : ""}
              values={values}
              tab={tab}
              labelClassName={sharedLabelClassName}
              containerClassName={sharedContainerClassName}
              inputClassName={sharedInputClassName}
            />
          );
        }
      })}
    </div>
  );
};
