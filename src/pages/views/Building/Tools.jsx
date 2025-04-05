import ToolsWarper from "@/components/Tools/ToolsWarper";
import { FlatColoringProvider } from "@/hook/useFlatColoring";
import { getBuildingDetails, getSingleBuilding } from "@/services/buildingService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Tools = () => {
  const { id } = useParams();
  const methods = useForm({ defaultValues: {
    grid: [
      {
        hex: "",
        room_count: 0,
        description: "",
        area: 0,
        area_unit: "",
        property_type: "",
      },
    ],
  } });

  return (
    <FormProvider {...methods}>
      <FlatColoringProvider>
        td
        <ToolsWarper />
      </FlatColoringProvider>
    </FormProvider>
  );
};

export default Tools;
