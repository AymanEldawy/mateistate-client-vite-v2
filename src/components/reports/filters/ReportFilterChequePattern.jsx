import { useEffect, useState } from "react";
import { ReportFilterColumns } from "../shared/ReportFilterColumns";

export const ReportFilterChequePattern = ({
  bodyClassName,
  containerClassName,
  chqIds,
  setChqIds,
}) => {
  const [chqPatterns, setChqPatterns] = useState([]);
  
  const getData = async () => {
    // const chqResponse = await get("cheque_pattern");
    // setChqPatterns(chqResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      containerClassName={containerClassName}
      bodyClassName={bodyClassName}
      title="Cheque Patterns"
      columns={chqPatterns?.map((c) => ({
        name: c?.id,
        label: c?.name,
      }))}
      selectedColumns={chqIds}
      setSelectedColumns={setChqIds}
    />
  );
};
