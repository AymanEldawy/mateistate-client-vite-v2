import { RHFInput } from "../../fields";

const BankForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput name="name" label="name"  />
        <RHFInput name="address" label="address" />
      </div>
    </div>
  );
};

export default BankForm;
