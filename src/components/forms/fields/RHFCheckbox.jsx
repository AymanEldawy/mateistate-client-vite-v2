import { Controller, useFormContext } from 'react-hook-form';
import { Label } from "./Label";
import { ErrorText } from "../../shared/ErrorText";

const RHFCheckbox = ({
  containerClassName,
  labelClassName,
  label,
  col,
  ...field
}) => {
  const { control } = useFormContext();
  const { name, required } = field

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({
        field: { onChange, ref, value },
        fieldState: { error },
      }) => {
        return (
          <div className={`w-full gap-4 ${containerClassName} flex ${col ? 'flex-col' : 'flex-row items-center'} gap-1`}>
            <input
              ref={ref}
              className={`h-5 w-5 `}
              name={name}
              onChange={(e) => {
                onChange(e.target.checked);
              }}
              type="checkbox"
              {...field}
              checked={value}
            />
            {label && (
              <Label
                name={name}
                required={required}
                label={label}
                labelClassName={labelClassName}
              />
            )}

            {error ? (
              <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
            ) : null}
          </div>
        );
      }}
    />
  );
};

export default RHFCheckbox;
