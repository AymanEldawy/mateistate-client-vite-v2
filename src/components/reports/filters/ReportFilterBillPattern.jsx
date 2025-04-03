import React, { useEffect, useState } from "react";
import { ReportFilterColumns } from "../shared/ReportFilterColumns";

export const ReportFilterBillPattern = ({
  bodyClassName,
  containerClassName,
  billIds,
  setBillIds,
}) => {
  const [billPatterns, setBillPatterns] = useState([]);
  
  const getData = async () => {
    // const billResponse = await get("bill_pattern");
    // setBillPatterns(billResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      containerClassName={containerClassName}
      bodyClassName={bodyClassName}
      title="Bill Types"
      columns={billPatterns?.map((c) => ({
        name: c?.id,
        label: c?.name,
      }))}
      selectedColumns={billIds}
      setSelectedColumns={setBillIds}
    />
  );
};
