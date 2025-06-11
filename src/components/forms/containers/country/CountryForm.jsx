import { RHFInput } from "../../fields";

const CountryForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput label="code" name="code" type="number" required />
        <RHFInput label="name" name="name" required />
        <RHFInput label="ltnname" name="ltnname" />
      </div>
    </div>
  );
};

export default CountryForm;
