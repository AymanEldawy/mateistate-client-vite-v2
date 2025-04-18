import { QueryClient } from '@tanstack/react-query';
import AsyncSelect from "react-select/async";
import { PlusIcon, SearchIcon } from '../Icons';
import Btn from './Btn';
import { usePopupForm } from '@/hook/usePopupForm';

const PRIMARY_COLOR = "#2954c3";
const DARK_THREE_COLOR = "#202328";
const DARK_ONE = "#292e32";
const BORDER_COLOR = "#ced4da";
const BORDER_COLOR_DARK = "#32383e";
const RED_COLOR = "#d32424";

const ReactSelectAsync = ({
  selectClassName,
  isDarkMode,
  small,
  styles,
  getOptionLabel,
  getOptionValue,
  value,
  error,
  queryKey,
  getSearch,
  name,
  defaultOption,
  setDefaultOption,
  allowAdd,
  table,
  formKey,
  ...selectProps
}) => {
  const { handleDispatchForm } = usePopupForm()
  const queryClient = new QueryClient();

  const loadOptions = async (value, callback) => {
    try {
      const res = await queryClient.fetchQuery({
        queryKey: [queryKey || name, 'search', value],
        queryFn: async () => {
          const response = await getSearch(value);
          if (response?.data) {
            callback(response.data);
          }
          return response.data;
        },
      });
      return res;
    } catch (error) {
      console.error("Error fetching options:", error);
      callback([]);
      return [];
    }
  };

  return (
    <AsyncSelect
      menuPlacement="auto"
      menuPortalTarget={document?.body}
      className={`w-full min-h-[30px] h-[30px] flex-1 text-xs border-none ${selectClassName}`}
      classNames={{
        control: () => `!min-h-[30px] !h-[30px]`,
        singleValue: () => "!-mt-[5px]",
        menu: () => "min-w-[190px]",
        input: () => "!h-[30px] !py-0 !-mt-[4px]",
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
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      loadOptions={(inputValue, callback) => {
        loadOptions(inputValue, callback);
      }}
      value={defaultOption}
      defaultValue={defaultOption}
      components={{
        IndicatorsContainer: ({ children }) => {
          return (
            <div className="mb-1 flex items-center">
              <div className="w-[1px] h-4 bg-gray-300"></div>
              {allowAdd ? (
                <Btn
                  type="button"
                  kind="info"
                  containerClassName="h-[25px] w-[25px] !rounded-full mt-[2px] !p-1 mx-1"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDispatchForm({
                      setDefaultOption,
                      table,
                      formKey
                    })
                  }}
                >
                  <PlusIcon className={`h-4 w-4 rounded-full`} />
                </Btn>
              ) : (
                <SearchIcon className={`h-5 w-5 rounded-full mx-2 text-blue-500`} />
              )}
            </div>
          );
        },
      }}
      {...selectProps}
    />
  )
}

export default ReactSelectAsync