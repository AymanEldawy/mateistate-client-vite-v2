import QUERY_KEYS from "@/data/queryKeys";
import { getAllCategories } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";
import { RHFInput, RHFSelectField, RHFTextarea } from "../../fields";

const CategoryForm = () => {

  const { data: categories } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORY],
    queryFn: async () => {
      const response = await getAllCategories();
      return response?.data || [];
    },
  })

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="name" label="name" required />
        <RHFInput name="ltnname" label="ltnname" />
        <RHFSelectField
          name="parentId"
          label="parentId"
          options={categories}
        />
      </div>
      <RHFTextarea
        name="description"
        label="description"
      />
    </div>
  );
};

export default CategoryForm;
