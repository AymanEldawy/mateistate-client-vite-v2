import { useEffect, useState } from "react";
import { ReportFilterColumns } from "./ReportFilterColumns";
import QUERY_KEYS from "@/data/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getAllBuildings } from "@/services/buildingService";

export const ReportFilterBuildings = ({
  buildingsIds,
  setBuildingsIds,
  bodyClassName,
  containerClassName,
}) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.BUILDING],
    queryFn: async () => await getAllBuildings()
  })

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
