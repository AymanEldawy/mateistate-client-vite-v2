import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import { ownerValidationSchema } from "@/helpers/owner/ownerValidationSchema";
import ownerColumns from "@/helpers/owner/ownerColumns";
import OwnerForm from "@/components/forms/containers/owner/OwnerForm";
import {
  createOwner,
  deleteManyOwners,
  deleteOwner,
  getAllOwners,
  updateOwner,
} from "@/services/ownerService";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {
  accountId: "",
  name: "",
  ltnname: "",
  id_card: "",
  cell_phone: "",
  mailbox: "",
  address: "",
  nationality: "",
};

const ownerConfig = {
  formProps: {
    defaultValue,
    validationSchema: ownerValidationSchema,
    mutationAddFunction: createOwner,
    mutationUpdateFunction: updateOwner,
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteOwner,
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
      queryFn={getAllOwners} //
      handleDeleteSelected={deleteManyOwners} //
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
