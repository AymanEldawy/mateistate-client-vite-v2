import React, { useEffect, useState } from "react";
import { ReportFilterColumns } from "../shared/ReportFilterColumns";

export const ReportFilterCategories = ({
  categoriesIds,
  setCategoriesIds,
  bodyClassName,
  containerClassName,
}) => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    // const categoryResponse = await get("category");
    // setCategories(categoryResponse?.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ReportFilterColumns
      title="Categories"
      columns={categories?.map((c) => ({
        name: c?.id,
        label: c?.name,
      }))}
      selectedColumns={categoriesIds}
      setSelectedColumns={setCategoriesIds}
      bodyClassName={bodyClassName}
      containerClassName={containerClassName}
    />
  );
};
