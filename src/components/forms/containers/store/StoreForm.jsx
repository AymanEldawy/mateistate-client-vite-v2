import { RHFAsyncSelectField, RHFInput } from "../../fields";

const StoreForm = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
      <RHFInput name="type" label="code" type="number" required />
      <RHFInput name="name" label="name" required />
      <RHFInput name="ltnname" label="ltnname" />
      <RHFInput name="address" label="address" />
      <RHFInput name="warehouseman" label="warehouseman" />
      <RHFInput name="note" />
      <RHFAsyncSelectField table="store" name="parent_id" label="parent_id" />
      <RHFAsyncSelectField table="store" name="final_id" label="final_id" />
    </div>
  );
};

export default StoreForm;
