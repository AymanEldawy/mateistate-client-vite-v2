import { Controller, useFormContext } from 'react-hook-form';
import AsyncSelect from "react-select/async";
import { Label } from "./Label";
import { ErrorText } from "../../shared/ErrorText";

const PRIMARY_COLOR = "#2954c3";
const DARK_THREE_COLOR = "#202328";
const DARK_ONE = "#292e32";
const BORDER_COLOR = "#ced4da";
const BORDER_COLOR_DARK = "#32383e";
const RED_COLOR = "#d32424";

const RHFSelectField = ({
  containerClassName,
  selectClassName,
  labelClassName,
  small,
  isDarkMode,
  selectProps,
  styles,
  options,
  label: MI_label,
  ...field
}) => {
  const { control } = useFormContext();
  const { MI_name, MI_label_key, MI_value, required } = field

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
            <AsyncSelect
              ref={ref}
              required
              className={`w-full min-h-[30px] h-[30px] border-none ${selectClassName}`}
              styles={{
                placeholder: (provided) => ({
                  ...provided,
                  color: isDarkMode ? "white" : "black",
                  fontWeight: "normal",
                  fontSize: small ? "13px" : "14px",
                }),
                valueContainer: (provided) => ({
                  ...provided,
                  height: small ? "32px" : provided.height,
                  padding: small ? "0 6px" : "0 10px",
                  fontSize: small ? "13px" : provided.fontSize,
                  cursor: "pointer",
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor:
                    state.isFocused && isDarkMode ? DARK_ONE : provided.backgroundColor,
                  fontSize: small ? "13px" : provided.fontSize,
                  cursor: "pointer",
                }),
                container: (provided) => ({
                  ...provided,
                  height: small ? "32px" : provided.height,
                  minWidth: "110px",
                  maxWidth: small ? "155px" : "auto",
                }),
                indicatorsContainer: (provided) => ({
                  ...provided,
                  height: small ? "32px" : provided.height,
                  cursor: "pointer",
                }),
                control: (provided, state) => ({
                  ...provided,
                  boxShadow: "none",
                  height: small ? "32px" : provided.height,
                  minHeight: small ? "32px" : provided.minHeight,
                  borderColor: error
                    ? RED_COLOR
                    : state.isFocused
                      ? PRIMARY_COLOR
                      : isDarkMode
                        ? BORDER_COLOR_DARK
                        : BORDER_COLOR,
                  backgroundColor: isDarkMode
                    ? DARK_THREE_COLOR
                    : provided.backgroundColor,
                  "&:hover": {
                    borderColor: PRIMARY_COLOR,
                  },
                  " > div": {
                    overflow: "auto",
                  },
                }),
                menu: (provided) => ({
                  ...provided,
                  zIndex: 10000,
                  backgroundColor: isDarkMode
                    ? DARK_THREE_COLOR
                    : provided.backgroundColor,
                }),
                ...styles,
              }}
              options={options}
              value={options?.find(
                (c) => c?.value === value
              )}
              getOptionLabel={(option) => {
                return option?.[MI_label_key]
              }}
              defaultOptions
              cacheOptions
              getOptionValue={(option) => option?.[MI_value || "id"]}
              onChange={(option) => {
                onChange(option?.[MI_value || "id"])
              }}
              {...selectProps}

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
