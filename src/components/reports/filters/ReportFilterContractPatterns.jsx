import { useEffect, useState } from "react";
import { ReportFilterColumns } from "../shared/ReportFilterColumns";
import { getAllContractPatterns } from "@/services/contractPatternsService";
import { useQuery } from "@tanstack/react-query";

export const ReportFilterContractPatterns = ({
  contractIds,
  setContractIds,
  bodyClassName,
  containerClassName,
}) => {
  const [contractPatterns, setContractPatterns] = useState([]);
  const { data: contractPatternsData } = useQuery({
    queryKey: ["contractPatterns"],
    queryFn: () => getAllContractPatterns(),
  });
  console.log(contractPatternsData);
  const getData = async () => {
    // const contractResponse = await ApiActions.read("contract_pattern", {
    //   columns: ["code", "name", "id", "number"],
    // });
    // setContractPatterns(contractResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ReportFilterColumns
      title="Contract Patterns"
      columns={contractPatternsData?.data?.map((c) => ({
        name: c?.id,
        label: c?.name,
      }))}
      // disabledItem={watch("linked_contract_only")}
      selectedColumns={contractIds}
      setSelectedColumns={setContractIds}
      bodyClassName={bodyClassName}
      containerClassName={containerClassName}
    />
  );
};
