import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  createAccount,
  deleteAccount,
  deleteManyAccounts,
  getAllAccounts,
  updateAccount,
} from "@/services/accountService";
import costCenterColumns from "@/helpers/costCenter/costCenterColumns";
import CostCenterForm from "@/components/forms/containers/costCenter/CostCenterForm";
import { costCenterValidationSchema } from "@/helpers/costCenter/costCenterValidationSchema";
import FormWrapper from "@/components/forms/wrapper/FormWrapper";
// import QUERY_KEYS from './../../../data/queryKeys';
const defaultValue = {
  code: "",
  name: "",
  note: "",
  parent_id: null,
  ltnname: ""
};

const costCenterConfig = {
  formProps: {
    defaultValue,
    validationSchema: costCenterValidationSchema,
    mutationAddFunction: createAccount,
    mutationUpdateFunction: updateAccount,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <CostCenterForm {...props} />,
  },
  formHeaderProps: {
    header: "Cost_center",
  },
  formPaginationProps: {
    name: 'cost_center',
    number: 1
  },
};

const CostCenter = ({ formOnly, outerClose }) => {
  if (formOnly) {
    return <FormWrapper {...costCenterConfig} outerClose={outerClose} />;
  }
  // const navigate = useNavigate();

  return (
    <PaperLayout
      name="Cost_center"
      queryKey={QUERY_KEYS.Cost_center}
      queryFn={getAllAccounts} //
      handleDeleteSelected={deleteManyAccounts} //
      paperHeaderProps={{
        header: "Cost_center",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: costCenterColumns,
      }}
      {...costCenterConfig}
    />
  );
};

export default CostCenter;
