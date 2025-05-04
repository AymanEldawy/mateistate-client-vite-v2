import { RHFCheckbox, RHFInput } from "../../fields";

const OwnerExpensesTypeForm = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
      <RHFInput name="code" label="code" type="number" />
      <RHFInput name="name" label="name" />
      <RHFInput name="description" label="description" />
      <RHFCheckbox name="isActive" label="isActive" />
    </div>
  );
};

export default OwnerExpensesTypeForm;
