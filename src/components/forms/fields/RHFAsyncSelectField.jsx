import { QueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from 'react-hook-form';
import AsyncSelect from "react-select/async";
import { Label } from "./Label";
import { ErrorText } from "../../shared/ErrorText";
import { PlusIcon, SearchIcon } from "@/components/Icons";
import Btn from "@/components/shared/Btn";
import { usePopupForm } from "@/hook/usePopupForm";
import ReactSelectAsync from "@/components/shared/ReactSelectAsync";

const PRIMARY_COLOR = "#2954c3";
const DARK_THREE_COLOR = "#202328";
const DARK_ONE = "#292e32";
const BORDER_COLOR = "#ced4da";
const BORDER_COLOR_DARK = "#32383e";
const RED_COLOR = "#d32424";

const RHFAsyncSelectField = ({
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
  ...field
}) => {
  const { control, watch, setValue } = useFormContext();
  const [defaultOption, setDefaultOption] = useState(null)
  const { name, optionValue = 'id', optionLabel = 'name', table, required, allowAdd } = field || {}
  const queryClient = new QueryClient();

  const getDefaultOption = async (value) => {
    try {
      const res = await queryClient.fetchQuery({
        queryKey: ["list", table],
        queryFn: async () => {
          if (!value) return;
          const response = await getSingle(value);
          setDefaultOption(response?.data)
        },
        enable: value
      });
      return res;
    } catch (error) {
      throw Error(JSON.stringify(error));
    }
  }

  useEffect(() => {
    if (!watch(name)) return;
    if (defaultOption && defaultOption?.[name] === watch(name)) return;
    console.log(defaultOption && defaultOption?.[name] === watch(name), '----fds');
    
    
    getDefaultOption(watch(name))

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
            <div className='relative w-full'>
              <ReactSelectAsync
                getOptionLabel={(option) => option?.[optionLabel]}
                getOptionValue={(option) => option?.[optionValue]}
                styles={styles}
                error={error}
                selectClassName={selectClassName}
                isDarkMode={isDarkMode}
                selectProps={selectProps}
                small={small}
                getSearch={getSearch}
                name={name}
                defaultOption={defaultOption}
                setDefaultOption={setDefaultOption}
                onChange={(option) => {
                  setDefaultOption(option);
                  setValue(name, option?.[optionValue]);
                }}
                allowAdd={allowAdd}
                table={table}
                formKey={name}
                required={required}
              />
              {error ? (
                <ErrorText containerClassName="py-1">{error?.message}</ErrorText>
              ) : null}
            </div>
          </div>
        );
      }}
    />
  );
};

export default RHFAsyncSelectField;
