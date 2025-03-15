import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import InputContainer from "./InputContainer";

const RHFDatePicker = ({
  containerClassName,
  labelClassName,
  label: MI_label,
  inputClassName,
  ...field
}) => {
  const { control } = useFormContext();
  const { MI_name, required } = field

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

            <ReactDatePicker
              ref={ref}
              selected={value}
              timeIntervals={5}
              timeFormat="HH:mm"
              onChange={onChange}
              className={inputClassName}
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
