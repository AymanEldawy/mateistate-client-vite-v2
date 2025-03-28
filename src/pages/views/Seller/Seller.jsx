import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount,
  deleteManyAccounts,
  getAllAccounts,
} from "@/services/accountService";
import sellerColumns from "@/helpers/seller/sellerColumns";
import { sellerValidationSchema } from "@/helpers/seller/sellerValidationSchema";
import SellerForm from "@/components/forms/seller/sellerForm";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {};

const sellerConfig = {
  formProps: {
    defaultValue,
    validationSchema: sellerValidationSchema,
    mutationAddFunction: () => {},
    mutationUpdateFunction: () => {},
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <SellerForm {...props} />,
  },
  formHeaderProps: {
    header: "Seller",
  },
  formPaginationProps: {
    name: "Seller",
    number: 1,
  },
};

const Seller = () => {
  // if (formOnly) {
  //   return <FormWrapper {...accountConfig} outerClose={outerClose} />;
  // }
  // const navigate = useNavigate();

  return (
    <PaperLayout
      name="Seller"
      queryKey={QUERY_KEYS.Lessor}
      queryFn={getAllAccounts} //
      handleDeleteSelected={deleteManyAccounts} //
      paperHeaderProps={{
        header: "Seller",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: sellerColumns,
      }}
      {...sellerConfig}
    />
  );
};

export default Seller;
