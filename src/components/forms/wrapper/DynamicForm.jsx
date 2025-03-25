import { CurrencyFieldGroup, RHFAsyncSelectField, RHFCheckbox, RHFInput, RHFSelectField, RHFTextarea } from "../fields";

export const DynamicForm = ({
  fields,
  containerClassName,
  labelClassName,
  customGrid,
}) => {

  
  return (
    <div
      className={`${containerClassName} grid gap-x-4 gap-y-2 ${customGrid ? customGrid : ' grid-cols-2 lg:grid-cols-3'}`}
    >
      {fields?.map((field) => {
        if (field?.key === 'text') {
          return (
            <RHFTextarea
              key={field?.name}
              {...field}
              labelClassName={labelClassName}
            />
          );
        } else if (field?.name === "currency_id") {
          return (
            <CurrencyFieldGroup
              {...field}
              key={field?.name}
            />
          );
        } else if (field?.table) {
          return (
            <RHFAsyncSelectField
              {...field}
              key={field?.name}
              labelClassName={labelClassName}
            />
          );
        } else if (field?.key === "select") {
          return (
            <RHFSelectField
              {...field}
              key={field?.name}
              labelClassName={labelClassName}
            />
          );
        } else if (field?.key === "checkbox") {
          return (
            <RHFCheckbox
              {...field}
              key={field?.name}
              labelClassName={labelClassName}
            />
          );
        } else {
          return (
            <RHFInput
              {...field}
              key={field?.name}
              labelClassName={labelClassName}
            />
          );
        }
      })}
    </div>
  );
};

export default DynamicForm