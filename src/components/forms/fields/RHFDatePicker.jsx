import "react-datepicker/dist/react-datepicker.css";
import "@/styles/date-picker.css";

import ReactDatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorText } from "@/components/shared/ErrorText";
import { Label } from "./Label";

const RHFDatePicker = ({
  containerClassName,
  labelClassName,
  label,
  inputClassName,
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
          <div className={`w-full ${containerClassName} flex ${col ? 'flex-col' : 'flex-row items-center'} gap-1`}>
            {label && (
              <Label
                name={name}
                required={required}
                label={label}
                labelClassName={labelClassName}
              />
            )}

            <ReactDatePicker
              ref={ref}
              selected={value}
              timeIntervals={5}
              timeFormat="HH:mm"
              onChange={onChange}
              className={`w-full flex-1 ${inputClassName}`}
              showYearDropdown
              dateFormat={"dd/MM/yyyy"}
              // showTimeSelect={showTimeSelect}
              // minDate={disablePast && new Date()}
              // dateFormat={showTimeSelect ? "dd/MM/yyyy h:mm aa" : "dd/MM/yyyy"}
              {...field}
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

export default RHFDatePicker;
