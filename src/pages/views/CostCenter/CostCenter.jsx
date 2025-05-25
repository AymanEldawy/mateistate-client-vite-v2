import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import costCenterColumns from "@/helpers/costCenter/costCenterColumns";
import CostCenterForm from "@/components/forms/containers/costCenter/CostCenterForm";
import { costCenterDefaultValue, costCenterValidationSchema } from "@/helpers/costCenter/costCenterValidationSchema";
import FormWrapper from "@/components/forms/wrapper/FormWrapper";
import { createCostCenter, deleteCostCenter, deleteManyCostCenters, getAllCostCenters, getSingleCostCenter, updateCostCenter } from "@/services/CostCenterService";
// import QUERY_KEYS from './../../../data/queryKeys';

const costCenterConfig = {
  formProps: {
    defaultValue: costCenterDefaultValue,
    validationSchema: costCenterValidationSchema,
    mutationAddFunction: createCostCenter,
    mutationUpdateFunction: updateCostCenter,
    getSingleFunction: getSingleCostCenter,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteCostCenter,
    RenderForm: (props) => <CostCenterForm {...props} />,
  },
  formHeaderProps: {
    header: "Cost_center",
  },
};

const CostCenter = ({ formOnly, outerClose, defaultNumber }) => {
  if (formOnly) {
    return <FormWrapper
      {...costCenterConfig}
      outerClose={outerClose}
      numberSearchParam={defaultNumber}
    />;
  }
  // const navigate = useNavigate();

  return (
    <PaperLayout
      name="cost_center"
      queryKey={QUERY_KEYS.Cost_center}
      queryFn={getAllCostCenters} //
      handleDeleteSelected={deleteManyCostCenters} //
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
