import { useEffect, useState } from "react";
import { ReportFilterColumns } from "./ReportFilterColumns";
import QUERY_KEYS from "@/data/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getAllBuildings } from "@/services/buildingService";
import { useFormContext } from "react-hook-form";

export const ReportFilterBuildings = ({
  buildingsIds,
  setBuildingsIds,
  bodyClassName,
  containerClassName,
  name,
}) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.BUILDING],
    queryFn: async () => await getAllBuildings()
  })
  const { setValue } = useFormContext();
  useEffect(() => {
    if(buildingsIds){
      setValue(name?name:"buildings",Object.keys(buildingsIds))
    }
  }, [buildingsIds]);
  return (
    <ReportFilterColumns
      title="Buildings"
      columns={data?.data?.map((c) => ({
        name: c?.id,
        label: c?.name,
      }))}
      selectedColumns={buildingsIds}
      setSelectedColumns={setBuildingsIds}
      bodyClassName={bodyClassName}
      containerClassName={containerClassName}
    />
  );
};
