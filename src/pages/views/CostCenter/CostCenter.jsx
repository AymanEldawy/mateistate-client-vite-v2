import CostCenterForm from "@/components/forms/containers/costCenter/CostCenterForm";
import FormWrapper from "@/components/forms/wrapper/FormWrapper";
import QUERY_KEYS from "@/data/queryKeys";
import costCenterColumns from "@/helpers/costCenter/costCenterColumns";
import { costCenterDefaultValue, costCenterValidationSchema } from "@/helpers/costCenter/costCenterValidationSchema";
import { createCostCenter, deleteCostCenter, deleteManyCostCenters, getAllCostCenters, getSingleCostCenter, updateCostCenter } from "@/services/CostCenterService";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
// import QUERY_KEYS from './../../../data/queryKeys';

const costCenterConfig = {
  name:"cost_center",
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

const CostCenter = ({ formOnly, outerClose, defaultNumber, popupFormConfig }) => {
  if (formOnly) {
    return <FormWrapper
      {...costCenterConfig}
      outerClose={outerClose}
      numberSearchParam={defaultNumber}
      oldValues={popupFormConfig?.oldValues}
    />;
  }
  // const navigate = useNavigate();

  return (
    <PaperLayout

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
