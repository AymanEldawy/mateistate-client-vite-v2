import { MATERIAL_STEPS } from "@/helpers/materials/materialsSteps";
import { lazy } from "react";

const MaterialsGeneral = lazy(() => import("./MaterialsGeneral"));
const MaterialFormPrices = lazy(() => import("./MaterialFormPrices"));
const MaterialFormBalance = lazy(() => import("./MaterialFormBalance"));
const MaterialFormMinimum = lazy(() => import("./MaterialFormMinimum"));
const MaterialFormSpecifications = lazy(() =>
  import("./MaterialFormSpecifications")
);
const MaterialFormPricesDetails = lazy(() =>
  import("./MaterialFormPricesDetails")
);

const MaterialsForm = ({ tab }) => {
  const displayForm = () => {
    switch (tab) {
      case MATERIAL_STEPS.material_balance:
        return <MaterialFormBalance />;
      case MATERIAL_STEPS.material_minimum:
        return <MaterialFormMinimum />;
      case MATERIAL_STEPS.material_prices:
        return <MaterialFormPrices />;
      case MATERIAL_STEPS.material_prices_details:
        return <MaterialFormPricesDetails />;
      case MATERIAL_STEPS.material_specifications:
        return <MaterialFormSpecifications />;
      default:
        return <MaterialsGeneral />;
    }
  };

  return (
    <div className="flex flex-col min-h-[400px] max-h-[72vh] overflow-auto ">
      {displayForm()}
    </div>
  );
};

export default MaterialsForm;
