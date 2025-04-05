import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount,
  deleteManyAccounts,
  getAllAccounts,
} from "@/services/accountService";
import { storeValidationSchema } from "@/helpers/store/storeValidationSchema";
import storeColumns from "@/helpers/store/storeColumns";
import StoreForm from "@/components/forms/containers/store/StoreForm";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {};

const storeConfig = {
  formProps: {
    defaultValue,
    validationSchema: storeValidationSchema,
    mutationAddFunction: () => {},
    mutationUpdateFunction: () => {},
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <StoreForm {...props} />,
  },
  formHeaderProps: {
    header: "store",
  },
  formPaginationProps: {
    name: "store",
    number: 1,
  },
};

const Store = () => {
  return (
    <PaperLayout
      name="store"
      queryKey={QUERY_KEYS.STORE}
      queryFn={getAllAccounts} //
      handleDeleteSelected={deleteManyAccounts} //
      paperHeaderProps={{
        header: "store",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: storeColumns,
      }}
      {...storeConfig}
    />
  );
};

export default Store;
