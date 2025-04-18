import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import { createMaterial, deleteManyMaterial, deleteMaterial, getAllMaterials, getSingleMaterial, updateMaterial } from "@/services/materialsService";
import MaterialsForm from "@/components/forms/containers/materials/MaterialsForm";
import materialsColumns from "@/helpers/materials/materialsColumns";
import { materialsDefaultValue, materialsValidationSchema } from "@/helpers/materials/materialsValidationSchema";

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
  formHeaderProps: {
    header: "materials",
  },
  formPaginationProps: {
    name: "materials",
    number: 1,
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
