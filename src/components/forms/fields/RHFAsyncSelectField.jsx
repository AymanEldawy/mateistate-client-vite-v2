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
  const { name, optionValue, optionLabel, table, required, allowAdd } = field || {}
  const queryClient = new QueryClient();

  const getDefaultOption = async (value) => {
    try {
      const res = await queryClient.fetchQuery({
        queryKey: ["list", table],
        queryFn: async () => {
          if (!value) return;
          let response;
          response = await getSingle(table, value);
          setDefaultOption(response)
        },
      });
      return res;
    } catch (error) {
      throw Error(JSON.stringify(error));
    }
  }

  useEffect(() => {
    if (!watch(name)) return;
    if (defaultOption && defaultOption?.[name] === watch(name)) return;

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
            <ReactSelectAsync
              getOptionLabel={(option) => option?.[optionLabel || 'name']}
              getOptionValue={(option) => option?.[optionValue || 'id']}
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
                setValue(name, option?.[optionValue])
              }}
              allowAdd={allowAdd}
              table={table}
              formKey={name}
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

export default RHFAsyncSelectField;
