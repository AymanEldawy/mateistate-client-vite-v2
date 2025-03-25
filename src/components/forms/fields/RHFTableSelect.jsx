import { Controller, useFormContext } from 'react-hook-form';
import Select from "react-select";

const PRIMARY_COLOR = "#2954c3";
const DARK_THREE_COLOR = "#202328";
const DARK_ONE = "#292e32";
const BORDER_COLOR = "#ced4da";
const BORDER_COLOR_DARK = "#32383e";
const RED_COLOR = "#d32424";

const RHFTableSelect = ({
  selectClassName,
  isDarkMode,
  selectProps,
  styles,
  small = true,
  ...field
}) => {
  const { control } = useFormContext();
  const { name, optionValue, optionLabel, options } = field

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
          <Select
            ref={ref}
            menuPlacement="auto"
            menuPortalTarget={document?.body}
            className={`w-full min-h-[30px] h-[30px] text-xs border-none ${selectClassName}`}
            classNames={{
              // indicatorsContainer: () => "!hidden bg-black",
              control: () => `!min-h-[30px] !h-[30px]`,
              singleValue: () => "!-mt-[5px]",
              menu: () => "min-w-[190px]",
              input: () => "!h-[30px] !py-0 !-mt-[2px]",
            }}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              placeholder: (provided) => ({
                ...provided,
                color: isDarkMode ? "white" : "black",
                fontWeight: "normal",
                fontSize: small ? "12px" : "14px",
              }),
              valueContainer: (provided) => ({
                ...provided,
                height: small ? "30px" : provided.height,
                padding: small ? "0 6px" : "0 10px",
                fontSize: small ? "12px" : provided.fontSize,
                cursor: "pointer",
              }),
              option: (provided, state) => ({
                ...provided,
                backgroundColor:
                  state.isFocused && isDarkMode ? DARK_ONE : provided.backgroundColor,
                fontSize: small ? "12px" : provided.fontSize,
                cursor: "pointer",
              }),
              container: (provided) => ({
                ...provided,
                height: small ? "30px" : provided.height,
                minWidth: "110px",
                // maxWidth: small ? "155px" : "auto",
              }),
              indicatorsContainer: (provided) => ({
                ...provided,
                height: small ? "30px" : provided.height,
                cursor: "pointer",
              }),
              control: (provided, state) => ({
                ...provided,
                boxShadow: "none",
                height: small ? "30px" : provided.height,
                minHeight: small ? "30px" : provided.minHeight,
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
                // " > div": {
                //   overflow: "auto",
                // },
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
              return option?.[optionLabel || 'name']
            }}
            // defaultOptions
            // cacheOptions
            getOptionValue={(option) => option?.[optionValue || "id"]}
            onChange={(option) => {
              onChange(option?.[optionValue || "id"])
            }}
            {...selectProps}

          />
        );
      }}
    />
  );
};

export default RHFTableSelect;
