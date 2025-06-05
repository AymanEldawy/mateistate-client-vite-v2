import { PlusIcon, SearchIcon } from "@/components/Icons";
import Btn from "@/components/shared/Btn";
import ReactSelectNormal from "@/components/shared/ReactSelectNormal";
import { usePopupForm } from "@/hook/usePopupForm";
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorText } from "../../shared/ErrorText";
import { Label } from "./Label";

const PRIMARY_COLOR = "#2954c3";
const DARK_THREE_COLOR = "#202328";
const DARK_ONE = "#292e32";
const BORDER_COLOR = "#ced4da";
const BORDER_COLOR_DARK = "#32383e";
const RED_COLOR = "#d32424";

const RHFSelectFieldForTables = ({
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
  options,
  hideErrors,
  onInertNewOne,
  ...field
}) => {
  const { handleDispatchForm } = usePopupForm()
  const { control, watch, setValue } = useFormContext();
  const { name, optionValue = 'id', optionLabel = 'name', table, required, allowAdd } = field || {}

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({
        field: { ref, value, onChange },
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
              <ReactSelectNormal
                getOptionLabel={(option) => option?.[optionLabel]}
                getOptionValue={(option) => option?.[optionValue]}
                styles={styles}
                error={error}
                defaultValue={options?.find(c => c?.[optionValue] === value)}
                value={options?.find(c => c?.[optionValue] === value)}
                options={options}
                selectClassName={selectClassName}
                isDarkMode={isDarkMode}
                selectProps={selectProps}
                small={small}
                onChange={(option) => {
                  onChange(option?.[optionValue])
                }}
                table={table}
                required={required}
                components={{
                  IndicatorsContainer: ({ children }) => {
                    return (
                      <div className="mb-1 flex items-center">
                        <div className="w-[1px] h-4 bg-gray-300"></div>
                        {allowAdd ? (
                          <Btn
                            type="button"
                            kind="info"
                            containerClassName="h-[22px] w-[22px] !rounded-full mt-[2px] !p-1 mx-1"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDispatchForm({
                                table,
                                onInertNewOne,
                              })
                            }}
                          >
                            <PlusIcon className={`h-5 w-5 rounded-full`} />
                          </Btn>
                        ) : (
                          <SearchIcon className={`h-5 w-5 rounded-full mx-2 text-blue-500`} />
                        )}
                      </div>
                    );
                  },
                }}
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

export default RHFSelectFieldForTables;
