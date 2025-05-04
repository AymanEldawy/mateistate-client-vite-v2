import { useEffect, useState } from "react";
import { ReportFilterColumns } from "./ReportFilterColumns";
import { getAllCategories } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "@/data/queryKeys";

export const ReportFilterCategories = ({
  categoriesIds,
  setCategoriesIds,
  bodyClassName,
  containerClassName,
}) => {

  const { data } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORY],
    queryFn:  async () => await getAllCategories()
  })

  return (
    <ReportFilterColumns
      title="Categories"
      columns={data?.data?.map((c) => ({
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
