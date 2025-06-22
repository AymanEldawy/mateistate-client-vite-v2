import ToolsWarper from "@/components/Tools/ToolsWarper";
import { FlatColoringProvider } from "@/hook/useFlatColoring";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const gridDefaultValues = [
  {
    hex: "",
    roomCount: 0,
    description: "",
    area: 0,
    areaUnit: "Square Feet",
    propertyType: 2,
  },
];

const Tools = () => {
  const { id } = useParams();
  const methods = useForm({
    defaultValues: {
      grid: gridDefaultValues,
    }
  })

  return (
    <FormProvider {...methods}>
      <FlatColoringProvider>
        <ToolsWarper />
      </FlatColoringProvider>
    </FormProvider>
  );
};

export default Tools;
