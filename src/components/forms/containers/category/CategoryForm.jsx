import { RHFInput, RHFTextarea } from "../../fields";
import { CATEGORY_FIELDS } from "@/helpers/category/categoryFields";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";

const CategoryForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...CATEGORY_FIELDS?.name} />
        <RHFInput {...CATEGORY_FIELDS?.ltnname} />
      </div>
      <RHFTextarea {...CATEGORY_FIELDS?.description} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...CATEGORY_FIELDS?.parent_id} />
      </div>
      {/* <RHFUploadFilesController {...CATEGORY_FIELDS?.image} /> */}
    </div>
  );
};

export default CategoryForm;
