import { Controller, useFormContext } from 'react-hook-form';
import Select from "react-select";
import ReactSelectNormal from '../../shared/ReactSelectNormal';

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
  small = true,
  styles,
  ...field
}) => {
  const { control } = useFormContext();
  const { name, optionValue = 'id', optionLabel = 'name', options } = field || {}

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
          <ReactSelectNormal
            getOptionLabel={(option) => option?.[optionLabel]}
            getOptionValue={(option) => option?.[optionValue]}
            styles={styles}
            error={error}
            value={options?.find(c => c?.[optionValue] === value)}
            defaultValue={options?.find(c => c?.[optionValue] === value)}
            options={options}
            selectClassName={selectClassName}
            isDarkMode={isDarkMode}
            selectProps={selectProps}
            small={small}
          />
        );
      }}
    />
  );
};

export default RHFTableSelect;
