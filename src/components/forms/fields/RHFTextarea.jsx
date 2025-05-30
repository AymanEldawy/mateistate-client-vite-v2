import { Controller, useFormContext } from 'react-hook-form';
import { Label } from "./Label";
import { ErrorText } from "../../shared/ErrorText";

const RHFTextarea = ({
  containerClassName,
  labelClassName,
  label,
  hideErrors,
  ...field
}) => {
  const { control } = useFormContext();
  const { name, required, type } = field

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
          <div className={`w-full ${containerClassName} flex flex-col gap-1`}>
            {label && (
              <Label
                name={name}
                required={required}
                label={label}
                labelClassName={`${labelClassName} !w-full`}
              />
            )}
            <textarea
              ref={ref}
              className={`border min-h-16 text-xs font-medium read-only:bg-[#2289fb1c] w-full dark:read-only:bg-[#444] rounded p-1 focus-within:opacity-100 
                ${type === 'number' && 'absolute top-0 left-0 w-full h-full opacity-0 z-10'} 
                ${error ? "border-red-200 text-red-500" : ""}
                `}
              name={name}
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

            {error && !hideErrors ? (
              <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
            ) : null}
          </div>
        );
      }}
    />
  );
};

export default RHFTextarea;
