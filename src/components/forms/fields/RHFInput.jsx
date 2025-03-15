import { Controller, useFormContext } from 'react-hook-form';
import { Label } from "./Label";
import { ErrorText } from "../../shared/ErrorText";

const RHFSelectField = ({
  containerClassName,
  labelClassName,
  label: MI_label,
  ...field
}) => {
  const { control } = useFormContext();
  const { MI_name, required, type } = field

  return (
    <Controller
      name={MI_name}
      control={control}
      defaultValue={null}
      render={({
        field: { onChange, ref, value },
        fieldState: { error },
      }) => {
        return (
          <div className={`w-full ${containerClassName} flex flex-col gap-1`}>
            {MI_label && (
              <Label
                name={MI_name}
                required={required}
                label={MI_label}
                labelClassName={labelClassName}
              />
            )}
            <input
              ref={ref}
              className={`border h-[30px] text-xs font-medium read-only:bg-[#2289fb1c] w-full dark:read-only:bg-[#444] rounded p-1 focus-within:opacity-100 
                ${type === 'number' && 'absolute top-0 left-0 w-full h-full opacity-0 z-10'} 
                ${error ? "border-red-200 text-red-500" : ""}
                `}
              name={MI_name}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              // onBlur={() => {
              //   onBlur()
              //   setHideNumber(false)
              // }}
              // onFocus={() => setHideNumber(true)}
              {...field}
              value={value}
            />

            {error ? (
              <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
            ) : null}
          </div>
        );
      }}
    />
  );
};

export default RHFSelectField;
