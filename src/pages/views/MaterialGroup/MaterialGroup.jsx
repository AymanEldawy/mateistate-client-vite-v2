import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount,
  deleteManyAccounts,
  getAllAccounts,
} from "@/services/accountService";
import { materialGroupValidationSchema } from "@/helpers/materialGroup/materialGroupValidationSchema";
import materialGroupColumns from "@/helpers/materialGroup/materialGroupColumns";
import MaterialGroupForm from "@/components/forms/containers/materialGroup/materialGroupForm";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {};

const materialGroupConfig = {
  formProps: {
    defaultValue,
    validationSchema: materialGroupValidationSchema,
    mutationAddFunction: () => {},
    mutationUpdateFunction: () => {},
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <MaterialGroupForm {...props} />,
  },
  formHeaderProps: {
    header: "material_group",
  },
  formPaginationProps: {
    name: "material_group",
    number: 1,
  },
};

const MaterialGroup = () => {
  return (
    <PaperLayout
      name="material_group"
      queryKey={QUERY_KEYS.MATERIAL_GROUP}
      queryFn={getAllAccounts} //
      handleDeleteSelected={deleteManyAccounts} //
      paperHeaderProps={{
        header: "material_group",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: materialGroupColumns,
      }}
      {...materialGroupConfig}
    />
  );
};

export default MaterialGroup;
