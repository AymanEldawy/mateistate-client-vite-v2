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
import {
  createSeller,
  deleteManySellers,
  deleteSeller,
  getAllSellers,
  updateSeller,
} from "@/services/SellerService";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {
  name: "",
  ltnname: "",
  id_card: "",
  passport: 0,
  work_card_number: 0,
  mobile: "",
  cellPhone: "",
  mailbox: "",
  email: "",
  address: "",
  minimumCommission: 1, // 
  maximumDiscount: 1, // 
  statement: "",
};

const sellerConfig = {
  formProps: {
    defaultValue,
    validationSchema: sellerValidationSchema,
    mutationAddFunction: createSeller,
    mutationUpdateFunction: updateSeller,
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteSeller,
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
