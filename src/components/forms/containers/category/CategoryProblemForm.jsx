import { getSearchCategory, getSingleCategory } from "@/services/categoryService";
import { RHFAsyncSelectField, RHFCheckbox, RHFInput, RHFTextarea } from "../../fields";
import { CATEGORY_PROBLEM_FIELDS } from "@/helpers/category/categoryProblemFields";

const CategoryProblemForm = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
      <RHFInput {...CATEGORY_PROBLEM_FIELDS.problem} />
      <RHFInput {...CATEGORY_PROBLEM_FIELDS.ltnproblem} />
      <RHFAsyncSelectField
        {...CATEGORY_PROBLEM_FIELDS?.category_id}
        getSearch={getSearchCategory}
        getSingle={getSingleCategory}
      />
      <RHFInput {...CATEGORY_PROBLEM_FIELDS?.minutes} />
      <RHFInput {...CATEGORY_PROBLEM_FIELDS?.price} />
      <RHFCheckbox {...CATEGORY_PROBLEM_FIELDS?.is_available} />
    </div>
  );
};

export default CategoryProblemForm;
