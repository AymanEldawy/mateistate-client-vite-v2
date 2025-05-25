import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import { ownerDefaultValue, ownerValidationSchema } from "@/helpers/owner/ownerValidationSchema";
import ownerColumns from "@/helpers/owner/ownerColumns";
import OwnerForm from "@/components/forms/containers/owner/OwnerForm";
import {
  createOwner,
  deleteManyOwners,
  deleteOwner,
  getAllOwners,
  getSingleOwner,
  updateOwner,
} from "@/services/ownerService";
// import QUERY_KEYS from './../../../data/queryKeys';

const ownerConfig = {
  formProps: {
    defaultValue: ownerDefaultValue,
    validationSchema: ownerValidationSchema,
    mutationAddFunction: createOwner,
    mutationUpdateFunction: updateOwner,
    getSingleFunction: getSingleOwner,
    onSuccessAction: () => {},
    isSteps: false,
    onHandleDelete: deleteOwner,
    RenderForm: (props) => <OwnerForm {...props} />,
  },
  formHeaderProps: {
    header: "Owner",
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
