import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount,
  deleteManyAccounts,
  getAllAccounts,
} from "@/services/accountService";
import countryColumns from "@/helpers/country/countryColumns";
import { countryValidationSchema } from "@/helpers/country/countryValidationSchema";
import CountryForm from "@/components/forms/containers/country/CountryForm";
import {
  createCountry,
  deleteCountry,
  deleteManyCountries,
  getAllCountries,
  updateCountry,
} from "@/services/countryService";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {
  code: 0,
  name: "",
  ltnname: "",
};

const countryConfig = {
  formProps: {
    defaultValue,
    validationSchema: countryValidationSchema,
    mutationAddFunction: createCountry,
    mutationUpdateFunction: updateCountry,
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteCountry,
    RenderForm: (props) => <CountryForm {...props} />,
  },
  formHeaderProps: {
    header: "Country",
  },
  formPaginationProps: {
    name: "Country",
    number: 1,
  },
};

const Country = () => {
  return (
    <PaperLayout
      name="Country"
      queryKey={QUERY_KEYS.Country}
      queryFn={getAllCountries} //
      handleDeleteSelected={deleteManyCountries} //
      paperHeaderProps={{
        header: "Country",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: countryColumns,
      }}
      {...countryConfig}
    />
  );
};

export default Country;
