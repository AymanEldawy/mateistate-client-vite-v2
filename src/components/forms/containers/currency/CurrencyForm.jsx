import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { RHFInput } from "../../fields";

const CurrencyForm = () => {

  return (
    <div className="grid grid-cols-2 gap-4">
      <RHFInput
        name="code"
        label="code"
        required
      />
      <RHFInput
        name="name"
        label="name"
        required
      />
      <RHFInput
        name="ltnname"
        label="ltnname"
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