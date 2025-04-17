import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { RHFInput } from "../../fields";

const CurrencyForm = () => {

  return (
    <div className="grid grid-cols-2 gap-4">
      <RHFInput
        name="code"
        label="Code"
        required
      />
      <RHFInput
        name="name"
        label="Name"
        required
      />
      <RHFInput
        name="ltnname"
        label="Latin Name"
      />
      <RHFInput
        name="rate"
        label="rate"
        type="number"
        required
      />
    </div>
  )
}

export default CurrencyForm