import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount,
  deleteManyAccounts,
  getAllAccounts,
} from "@/services/accountService";
import { ownerValidationSchema } from "@/helpers/owner/ownerValidationSchema";
import ownerColumns from "@/helpers/owner/ownerColumns";
import OwnerForm from "@/components/forms/containers/owner/OwnerForm";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {};

const ownerConfig = {
  formProps: {
    defaultValue,
    validationSchema: ownerValidationSchema,
    mutationAddFunction: () => {},
    mutationUpdateFunction: () => {},
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <OwnerForm {...props} />,
  },
  formHeaderProps: {
    header: "Owner",
  },
  formPaginationProps: {
    name: "Owner",
    number: 1,
  },
};

const Owner = () => {
  // if (formOnly) {
  //   return <FormWrapper {...accountConfig} outerClose={outerClose} />;
  // }
  // const navigate = useNavigate();

  return (
    <PaperLayout
      name="Owner"
      queryKey={QUERY_KEYS.Owner}
      queryFn={getAllAccounts} //
      handleDeleteSelected={deleteManyAccounts} //
      paperHeaderProps={{
        header: "Owner",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: ownerColumns,
      }}
      {...ownerConfig}
    />
  );
};

export default Owner;
