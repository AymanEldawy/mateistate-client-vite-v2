import { useEffect, useState } from "react";
import { ReportFilterColumns } from "../shared/ReportFilterColumns";

export const ReportFilterBuildings = ({
  buildingsIds,
  setBuildingsIds,
  bodyClassName,
  containerClassName,
}) => {
  const [buildings, setBuildings] = useState([]);

  const getData = async () => {
    // const buildingResponse = await get("building");
    // setBuildings(buildingResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      title="Buildings"
      columns={buildings?.map((c) => ({
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
