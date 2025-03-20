import { QueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from 'react-hook-form';
import AsyncSelect from "react-select/async";
import { Label } from "./Label";
import { ErrorText } from "../../shared/ErrorText";
import { PlusIcon, SearchIcon } from "@/components/Icons";
import Btn from "@/components/shared/Btn";

const PRIMARY_COLOR = "#2954c3";
const DARK_THREE_COLOR = "#202328";
const DARK_ONE = "#292e32";
const BORDER_COLOR = "#ced4da";
const BORDER_COLOR_DARK = "#32383e";
const RED_COLOR = "#d32424";

const DynamicUserField = ({
  containerClassName,
  selectClassName,
  labelClassName,
  getSingle,
  getSearch,
  isDarkMode,
  selectProps,
  styles,
  label,
  col,
  small = true,
  onClickPlus,
  ...field
}) => {
  const { control, watch, setValue } = useFormContext();
  const [defaultOption, setDefaultOption] = useState(null)
  const { name, optionValue, optionLabel, tableName, required, allowAdd } = field
  const queryClient = new QueryClient();

  const loadOptions = async (value, callback, id) => {
    try {
      const res = await queryClient.fetchQuery({
        queryKey: ["list", tableName, 'search', id, value],
        queryFn: async () => {
          if (!value && !id) return;
          let response;
          if (id) {
            response = await getSingle(tableName, id);
          } else {
            response = await getSearch(
              tableName,
              value,
            )
          }
          return response.result;
        },
      });
      if (id && res) {
        setDefaultOption(res?.[0]);
      } else {
        setDefaultOption(null);
      }
      // if (callback)
      //   callback(res);
      return res;
    } catch (error) {
      throw Error(JSON.stringify(error));
    }
  };

  useEffect(() => {
    if (!watch(name)) return;
    if (defaultOption && defaultOption?.[name] === watch(name)) return;

    loadOptions(watch(name), undefined)

  }, [watch(name), defaultOption])

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({
        field: { ref },
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
            <AsyncSelect
              ref={ref}
              menuPlacement="auto"
              menuPortalTarget={document?.body}
              className={`w-full min-h-[30px] h-[30px] border-none ${selectClassName}`}
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
                  maxWidth: small ? "155px" : "auto",
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
              getOptionLabel={(option) => {
                return option?.[optionLabel]
              }}
              defaultOptions
              cacheOptions
              value={defaultOption}
              defaultValue={defaultOption}
              getOptionValue={(option) => option?.[optionValue || "id"]}
              loadOptions={(inputValue, callback) => {
                loadOptions(inputValue, callback);
              }}
              onChange={(option) => {
                setDefaultOption(option);
                setValue(name, option[optionValue || 'id'])
              }}
              {...selectProps}
              components={{
                IndicatorsContainer: () => {
                  if (allowAdd) {
                    return (
                      <Btn
                        type="button"
                        kind="info"
                        containerClassName="h-[25px] w-[25px] !rounded-full !p-1 mx-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          onClickPlus()
                        }} ><PlusIcon className={`h-4 w-4 rounded-full`} />
                      </Btn>
                    )
                  }
                  return <SearchIcon className={`h-5  w-5 rounded-full mx-2 text-blue-500`} />
                }
              }}
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

export default DynamicUserField;
