import { useSearchParams } from "react-router-dom";

const useCustomSearchParams = (paramName) => {
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get(paramName);
  const searchParamsObject = Object.fromEntries(searchParams);

  console.log('called useCustomSearchParams', paramName, paramValue, searchParamsObject);
  
  return paramName
    ? (paramValue && decodeURIComponent(paramValue)) || ""
    : searchParamsObject || {};
};

export default useCustomSearchParams;
