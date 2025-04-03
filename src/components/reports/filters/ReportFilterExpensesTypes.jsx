import React, { useEffect, useState } from "react";
import { ReportFilterColumns } from "../shared/ReportFilterColumns";

export const ReportFilterExpensesTypes = ({
  expensesIds,
  setExpensesIds,
  bodyClassName,
  containerClassName,
}) => {
  const [expenses, setExpenses] = useState([]);
  
  const getData = async () => {
    // const expensesTypes = await get("owner_expenses_types");
    // setExpenses(expensesTypes?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      title="Expenses"
      columns={expenses?.map((c) => ({
        name: c?.id,
        label: c?.name,
      }))}
      selectedColumns={expensesIds}
      setSelectedColumns={setExpensesIds}
      bodyClassName={bodyClassName}
      containerClassName={containerClassName}
    />
  );
};
