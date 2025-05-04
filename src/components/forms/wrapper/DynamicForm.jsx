import { RHFAsyncSelectField, RHFCheckbox, RHFInput, RHFSelectField, RHFTextarea } from "../fields";
import { CurrencyFieldGroup } from "../global";

export const DynamicForm = ({
  fields,
  containerClassName,
  labelClassName,
  customGrid,
  tab
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
              name={tab ? `${tab}.${field?.name}` : field?.name}
              labelClassName={labelClassName}
            />
          );
        } else if (field?.name === "currency_id") {
          return (
            <CurrencyFieldGroup
              {...field}
              key={field?.name}
              name={tab ? `${tab}.${field?.name}` : field?.name}

            />
          );
        } else if (field?.table) {
          return (
            <RHFAsyncSelectField
              {...field}
              key={field?.name}
              labelClassName={labelClassName}
              name={tab ? `${tab}.${field?.name}` : field?.name}

            />
          );
        } else if (field?.key === "select") {
          return (
            <RHFSelectField
              {...field}
              key={field?.name}
              labelClassName={labelClassName}
              name={tab ? `${tab}.${field?.name}` : field?.name}

            />
          );
        } else if (field?.type === "checkbox") {
          return (
            <RHFCheckbox
              {...field}
              key={field?.name}
              labelClassName={labelClassName}
              name={tab ? `${tab}.${field?.name}` : field?.name}

            />
          );
        } else {
          return (
            <RHFInput
              {...field}
              key={field?.name}
              labelClassName={labelClassName}
              name={tab ? `${tab}.${field?.name}` : field?.name}

            />
          );
        }
      })}
    </div>
  );
};

export default DynamicForm