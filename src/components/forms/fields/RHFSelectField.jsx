import { Controller, useFormContext } from 'react-hook-form';
import Select from "react-select";
import { Label } from "./Label";
import { ErrorText } from "../../shared/ErrorText";
import ReactSelectNormal from '../../shared/ReactSelectNormal';

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
  isDarkMode,
  selectProps,
  styles,
  label,
  col,
  small = true,
  hideErrors,
  ...field
}) => {
  const { control } = useFormContext();
  const { name, optionValue = "id", optionLabel = "name", required, options, value: defaultValue } = field

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
            <div className='w-full relative' >
              <ReactSelectNormal
                getOptionLabel={(option) => option?.[optionLabel || 'name']}
                getOptionValue={(option) => option?.[optionValue || 'id']}
                styles={styles}
                error={error}
                defaultValue={options?.find(c => c?.[optionValue] === (defaultValue || value))}
                value={options?.find(c => c?.[optionValue] === (defaultValue || value))}
                options={options}
                selectClassName={selectClassName}
                isDarkMode={isDarkMode}
                selectProps={selectProps}
                small={small}
                onChange={(option) => {
                  onChange(option?.[optionValue || 'id'])
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

export default RHFSelectField;
