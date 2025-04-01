import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount,
  deleteManyAccounts,
  getAllAccounts,
} from "@/services/accountService";
import costCenterColumns from "@/helpers/costCenter/costCenterColumns";
import CostCenterForm from "@/components/forms/containers/costCenter/CostCenterForm";
import { costCenterValidationSchema } from "@/helpers/costCenter/costCenterValidationSchema";
import FormWrapper from "@/components/forms/wrapper/FormWrapper";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {};

const lessorConfig = {
  formProps: {
    defaultValue,
    validationSchema: costCenterValidationSchema,
    mutationAddFunction: () => { },
    mutationUpdateFunction: () => { },
    onSuccessAction: () => { },
    isSteps: true,
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
    return <FormWrapper {...lessorConfig} outerClose={outerClose} />;
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
      {...lessorConfig}
    />
  );
};

export default CostCenter;
