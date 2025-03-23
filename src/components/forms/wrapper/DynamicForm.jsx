import { CurrencyFieldGroup, RHFAsyncSelectField, RHFCheckbox, RHFInput, RHFSelectField, RHFTextarea } from "../fields";

export const DynamicForm = ({
  fields,
  containerClassName,
  labelClassName
}) => {

  return (
    <div
      className={`${containerClassName}`}
    >
      {fields?.map((field) => {
        if (field?.hide_in_form) return;

        if (field?.key === 'text') {
          return (
            <RHFTextarea
              key={field}
              {...field}
              labelClassName={labelClassName}
            />
          );
        } else if (field?.name === "currency_id") {
          return (
            <CurrencyFieldGroup
              {...field}
              key={field}
            />
          );
        } else if (field?.table) {
          return (
            <RHFAsyncSelectField
              {...field}
              key={field}
              labelClassName={labelClassName}
            />
          );
        } else if (field?.key === "select") {
          return (
            <RHFSelectField
              {...field}
              key={field}
              labelClassName={labelClassName}
            />
          );
        } else if (field?.key === "switch") {
          return (
            <RHFCheckbox
              {...field}
              key={field}
              labelClassName={labelClassName}
            />
          );
        } else {
          return (
            <RHFInput
              {...field}
              key={field}
              labelClassName={labelClassName}
            />
          );
        }
      })}
    </div>
  );
};

export default DynamicForm