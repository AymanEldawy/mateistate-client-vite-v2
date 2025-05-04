import PaperLayout from "@/components/layout/paper/PaperLayout";
import { LAND_STEPS } from "@/data/constants";
import QUERY_KEYS from "@/data/queryKeys";
import landColumns from "@/helpers/land/landColumns";
import { landDefaultValues, landValidationSchema } from "@/helpers/land/landValidationSchema";
import { updateLand, deleteLand, createLand, getSingleLand } from "@/services/landServices";
import { deleteManyLands, getAllLands } from "@/services/landServices";
import { lazy } from "react";
const LandForm = lazy(() => import("@/components/forms/containers/land/LandForm"))


const landConfig = {
  formProps: {
    defaultValue: landDefaultValues,
    validationSchema: landValidationSchema,
    mutationAddFunction: createLand,
    mutationUpdateFunction: updateLand,
    getSingleFunction: getSingleLand,
    onSuccessAction: () => { },
    isSteps: true,
    onHandleDelete: deleteLand,
    RenderForm: (props) => <LandForm {...props} />,
  },
  formHeaderProps: {
    header: "land",
  },
  formSidebarProps: {
    list: Object.values(LAND_STEPS)
  }
};

export default function Land() {
  return (
    <PaperLayout
      name="land"
      queryKey={QUERY_KEYS.Land}
      queryFn={getAllLands}
      handleDeleteSelected={deleteManyLands}
      paperHeaderProps={{
        header: "land",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: landColumns,
      }}
      {...landConfig}
    />
  );
}
