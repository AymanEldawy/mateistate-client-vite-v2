import { RHFAsyncSelectField, RHFInput, RHFTextarea } from "../../fields";
import { CATEGORY_FIELDS } from "@/helpers/category/categoryFields";
import { getSearchCategory, getSingleCategory } from "@/services/categoryService";

const CategoryForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...CATEGORY_FIELDS?.name} name="name" label="name" required />
        <RHFInput {...CATEGORY_FIELDS?.ltnname} name="ltnname" label="ltnname" />
        <RHFAsyncSelectField
          name="parent_id"
          label="parent_id"
          getSearch={getSearchCategory}
          getSingle={getSingleCategory}
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
