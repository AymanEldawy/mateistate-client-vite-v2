import QUERY_KEYS from "@/data/queryKeys";
import { getAllCategories } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";
import { RHFCheckbox, RHFInput, RHFSelectField } from "../../fields";

const CategoryProblemForm = () => {

  const { data: categories } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORY],
    queryFn: async () => {
      const response = await getAllCategories();
      return response?.data || [];
    },
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
      <RHFInput name="description" label="problem" required />
      <RHFInput name="ltndescription" label="ltnproblem" required />
      <RHFSelectField
        name="categoryId" label="category_id"
        options={categories}
        required
      />
      <RHFInput name="minutes" label="minutes" required type="number" />
      <RHFInput name="price" label="price" type="number" />
      <RHFCheckbox name="isAvailable" label="isAvailable" />
    </div>
  );
};

export default CategoryProblemForm;
