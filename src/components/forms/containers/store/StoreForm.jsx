import { RHFCheckbox, RHFInput } from "../../fields";
import { STORE_Fields } from "@/helpers/store/storeFields";

const StoreForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...STORE_Fields?.number} />
        <RHFInput {...STORE_Fields?.code} />
        <RHFInput {...STORE_Fields?.name} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFCheckbox {...STORE_Fields?.ltnname} />
        <RHFInput {...STORE_Fields?.address} />
        <RHFInput {...STORE_Fields?.warehouseman} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFCheckbox {...STORE_Fields?.note} />
        <RHFInput {...STORE_Fields?.parent_id} />
        <RHFInput {...STORE_Fields?.final_id} />
      </div>
    </div>
  );
};

export default StoreForm;
