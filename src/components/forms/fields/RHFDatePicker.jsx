import "react-datepicker/dist/react-datepicker.css";
import "@/styles/date-picker.css";

import ReactDatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorText } from "@/components/shared/ErrorText";
import { Label } from "./Label";
import { CalenderIcon } from "@/components/Icons";

const RHFDatePicker = ({
  containerClassName,
  labelClassName,
  label,
  inputClassName,
  col,
  hideErrors,
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
          <div className={`w-full ${containerClassName} flex ${col ? 'flex-col' : 'flex-row items-center'} gap-1`}>
            {label && (
              <Label
                name={name}
                required={required}
                label={label}
                labelClassName={labelClassName}
              />
            )}
            <div className='w-full relative' >

              <ReactDatePicker
                // ref={ref}
                selected={value}
                timeIntervals={5}
                timeFormat="HH:mm"
                onChange={onChange}
                className={`w-full flex-1 ${inputClassName} border h-[30px] text-xs font-medium read-only:bg-[#2289fb1c] w-full dark:read-only:bg-[#444] rounded p-1 focus-within:opacity-100 
                ${error ? "border-red-200 text-red-500" : ""}
                `}
                showIcon
                icon={<CalenderIcon />}
                showYearDropdown
                dateFormat={"dd/MM/yyyy"}
                // showTimeSelect={showTimeSelect}
                // minDate={disablePast && new Date()}
                // dateFormat={showTimeSelect ? "dd/MM/yyyy h:mm aa" : "dd/MM/yyyy"}
                {...field}
              />

              {error && !hideErrors ? (
                <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
              ) : null}
            </div>
          </div>
        );
      }}
    />
  );
};

export default RHFDatePicker;
