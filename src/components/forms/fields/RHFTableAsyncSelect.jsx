import ReactSelectAsync from "@/components/shared/ReactSelectAsync";
import { QueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from 'react-hook-form';

const RHFTableAsyncSelect = ({
  selectClassName,
  getSingle,
  getSearch,
  isDarkMode,
  selectProps,
  styles,
  small = true,
  ...field
}) => {

  console.log(getSearch,'getsearch');
  

  const { control, watch, setValue } = useFormContext();
  const [defaultOption, setDefaultOption] = useState(null)
  const { name, optionValue, optionLabel, table } = field
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
      className="w-full"
      render={({
        field: { ref },
        fieldState: { error },
      }) => {
        return (
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
          />
        );
      }}
    />
  );
};

export default RHFTableAsyncSelect;
