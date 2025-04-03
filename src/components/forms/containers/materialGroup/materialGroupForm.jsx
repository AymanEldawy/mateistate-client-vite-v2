import { MATERIAL_GROUP_FIELDS } from "@/helpers/materialGroup/materialGroupFields";
import { RHFInput } from "../../fields";

const MaterialGroupForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...MATERIAL_GROUP_FIELDS?.code} />
        <RHFInput {...MATERIAL_GROUP_FIELDS?.name} />
        <RHFInput {...MATERIAL_GROUP_FIELDS?.ltnname} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...MATERIAL_GROUP_FIELDS?.note} />
        <RHFInput {...MATERIAL_GROUP_FIELDS?.parent_id} />
      </div>
    </div>
  );
};

export default MaterialGroupForm;
