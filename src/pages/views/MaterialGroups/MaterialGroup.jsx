import FormWrapper from "@/components/forms/wrapper/FormWrapper";
import QUERY_KEYS from "@/data/queryKeys";
import materialGroupColumns from "@/helpers/materialGroup/materialGroupColumns";
import { materialGroupDefaultValues, materialGroupValidationSchema } from "@/helpers/materialGroup/materialGroupValidationSchema";
import {
  deleteAccount
} from "@/services/accountService";
import { createMaterialGroup, deleteManyMaterialGroup, getAllMaterialGroups, getSingleMaterialGroup, updateMaterialGroup } from "@/services/materialGroupsService";
import { lazy } from "react";
import PaperLayout from "../../../components/layout/paper/PaperLayout";

const MaterialGroupForm = lazy(() => import("@/components/forms/containers/materialGroup/MaterialGroupForm"))

const materialGroupConfig = {
  name: "material_group",
  formProps: {
    defaultValue: materialGroupDefaultValues,
    validationSchema: materialGroupValidationSchema,
    mutationAddFunction: createMaterialGroup,
    mutationUpdateFunction: updateMaterialGroup,
    getSingleFunction: getSingleMaterialGroup,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <MaterialGroupForm {...props} />,
  },
  formHeaderProps: {
    header: "material_group",
  },

};

const MaterialGroup = ({ formOnly, outerClose, defaultNumber, popupFormConfig }) => {
  if (formOnly) {
    return <FormWrapper
      {...materialGroupConfig}
      outerClose={outerClose}
      numberSearchParam={defaultNumber}
      oldValues={popupFormConfig?.oldValues}
    />;
  }

  return (
    <PaperLayout
      queryKey={QUERY_KEYS.MATERIAL_GROUP}
      queryFn={getAllMaterialGroups} //
      handleDeleteSelected={deleteManyMaterialGroup} //
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
