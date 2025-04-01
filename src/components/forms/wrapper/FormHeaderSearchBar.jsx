import { SearchIcon } from "@/components/Icons";
import ReactSelectAsync from "../../shared/ReactSelectAsync";

const FormHeaderSearchBar = ({
  queryKey,
  getSearch,
  getOptionLabel,
  getOptionValue,
}) => {
  return (
    <ReactSelectAsync
      getSearch={getSearch}
      queryKey={queryKey}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      placeholder="Search"
      components={{
        IndicatorsContainer: () => <SearchIcon className={`h-4 w-4 rounded-full mx-2 text-blue-500`} />
      }}
    />
  )
}

export default FormHeaderSearchBar