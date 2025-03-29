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
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {};

const countryConfig = {
  formProps: {
    defaultValue,
    validationSchema: countryValidationSchema,
    mutationAddFunction: () => {},
    mutationUpdateFunction: () => {},
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteAccount,
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
      queryFn={getAllAccounts} //
      handleDeleteSelected={deleteManyAccounts} //
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
