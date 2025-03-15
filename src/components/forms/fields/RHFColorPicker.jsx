import InputColor from "react-input-color";
import InputContainer from "./InputContainer";
import { Controller, useFormContext } from "react-hook-form";

const RHFColorPicker = ({
  name,
  label,
  hidden,
  disabled,
  required = true,
  containerClassName,
  translatePrefixKey = "formsInputs",
}) => {
  const { control, getFieldState } = useFormContext();
  const { invalid, error } = getFieldState(name);
  const { message: errorMessage } = error || {};

  const inputClassName = `${invalid ? "error" : ""} rhf-input-field`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <InputContainer
          name={name}
          label={label}
          hidden={hidden}
          invalid={invalid}
          required={required}
          errorMessage={errorMessage}
          containerClassName={containerClassName}
          translatePrefixKey={translatePrefixKey}
        >
          <InputColor
            value={value}
            placement="bottom"
            disabled={disabled}
            className={inputClassName}
            initialValue={value || "#2954c3"}
            onChange={(pickedColor) => onChange(pickedColor.hex)}
          />
        </InputContainer>
      )}
    />
  );
};

export default RHFColorPicker;
