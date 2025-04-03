import { RHFCheckbox, RHFInput, RHFTextarea } from "../../fields";
import { CATEGORY_PROBLEM_FIELDS } from "@/helpers/category/categoryProblemFields";

const CategoryProblemForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <RHFTextarea {...CATEGORY_PROBLEM_FIELDS.problem} />
      <RHFTextarea {...CATEGORY_PROBLEM_FIELDS.Ltnproblem} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...CATEGORY_PROBLEM_FIELDS?.category_id} />
        <RHFInput {...CATEGORY_PROBLEM_FIELDS?.minutes} />
        <RHFInput {...CATEGORY_PROBLEM_FIELDS?.price} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFCheckbox {...CATEGORY_PROBLEM_FIELDS?.is_available} />
      </div>
    </div>
  );
};

export default CategoryProblemForm;
