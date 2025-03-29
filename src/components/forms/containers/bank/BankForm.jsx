import { BANK_FIELDS } from "@/helpers/bank/bankFields";
import { RHFInput } from "../../fields";

const BankForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
        <RHFInput {...BANK_FIELDS?.name} />
        <RHFInput {...BANK_FIELDS?.address} />
      </div>
    </div>
  );
};

export default BankForm;
