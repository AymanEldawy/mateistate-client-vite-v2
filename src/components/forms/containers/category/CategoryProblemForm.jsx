import { getSearchCategory, getSingleCategory } from "@/services/categoryService";
import { RHFAsyncSelectField, RHFCheckbox, RHFInput, RHFTextarea } from "../../fields";

const CategoryProblemForm = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
      <RHFInput name="description" label="problem" required />
      <RHFInput name="ltndescription" label="ltnproblem" required />
      <RHFAsyncSelectField
        name="categoryId" label="category_id"
        getSearch={getSearchCategory}
        getSingle={getSingleCategory}
        required
      />
      <RHFInput name="minutes" label="minutes" required type="number" />
      <RHFInput name="price" label="price" type="number" />
      <RHFCheckbox name="isAvailable" label="isAvailable" />
    </div>
  );
};

export default CategoryProblemForm;
