import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount,
  deleteManyAccounts,
  getAllAccounts,
} from "@/services/accountService";
import sellerColumns from "@/helpers/seller/sellerColumns";
import { sellerDefaultValue, sellerValidationSchema } from "@/helpers/seller/sellerValidationSchema";
import SellerForm from "@/components/forms/seller/sellerForm";
import {
  createSeller,
  deleteManySellers,
  deleteSeller,
  getAllSellers,
  getSingleSeller,
  updateSeller,
} from "@/services/SellerService";
import FormWrapper from "@/components/forms/wrapper/FormWrapper";
// import QUERY_KEYS from './../../../data/queryKeys';


const sellerConfig = {
  formProps: {
    defaultValue: sellerDefaultValue,
    validationSchema: sellerValidationSchema,
    mutationAddFunction: createSeller,
    mutationUpdateFunction: updateSeller,
    getSingleFunction: getSingleSeller,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteSeller,
    RenderForm: (props) => <SellerForm {...props} />,
  },
  formHeaderProps: {
    header: "Seller",
  },
};

const Seller = ({ formOnly, outerClose, defaultNumber }) => {
  
  if (formOnly) {
    return <FormWrapper
      {...sellerConfig}
      outerClose={outerClose}
      numberSearchParam={defaultNumber}
    />;
  }

  return (
    <PaperLayout
      name="Seller"
      queryKey={QUERY_KEYS.Seller}
      queryFn={getAllSellers} //
      handleDeleteSelected={deleteManySellers} //
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
