import ToolsWarper from "@/components/Tools/ToolsWarper";
import { FlatColoringProvider } from "@/hook/useFlatColoring";
import { getBuildingDetails, getSingleBuilding } from "@/services/buildingService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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

  console.log(methods.watch("grid"), '-s');

  return (
    <FormProvider {...methods}>
      <FlatColoringProvider>
        <ToolsWarper />
      </FlatColoringProvider>
    </FormProvider>
  );
};

export default Tools;
