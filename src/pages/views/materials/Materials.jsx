import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import { createMaterial, deleteManyMaterial, deleteMaterial, getAllMaterials, getSingleMaterial, updateMaterial } from "@/services/materialsService";
import materialsColumns from "@/helpers/materials/materialsColumns";
import { materialsDefaultValue, materialsValidationSchema } from "@/helpers/materials/materialsValidationSchema";
import { MATERIAL_STEPS } from "@/helpers/materials/materialsSteps";
import { lazy } from "react";

const MaterialsForm = lazy(() => import("@/components/forms/containers/materials/MaterialsForm"));


const materialsConfig = {
  formProps: {
    defaultValue: materialsDefaultValue,
    validationSchema: materialsValidationSchema,
    mutationAddFunction: createMaterial,
    mutationUpdateFunction: updateMaterial,
    getSingleFunction: getSingleMaterial,
    onSuccessAction: () => { },
    isSteps: true,
    onHandleDelete: deleteMaterial,
    RenderForm: (props) => <MaterialsForm {...props} />,
  },
  formSidebarProps: {
    list: Object.values(MATERIAL_STEPS)
  },
  formHeaderProps: {
    header: "materials",
  },
};

const Materials = () => {
  return (
    <PaperLayout
      name="materials"
      queryKey={QUERY_KEYS.MATERIALs}
      queryFn={getAllMaterials}
      handleDeleteSelected={deleteManyMaterial}
      paperHeaderProps={{
        header: "materials",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: materialsColumns,
      }}
      {...materialsConfig}
    />
  );
};

export default Materials;
