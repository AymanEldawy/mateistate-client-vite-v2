import { ViewEntry } from "@/components/shared/ViewEntry";
import { CREATED_FROM_CONTRACT_FEES } from "@/data/GENERATE_STARTING_DATA"
import { useFormContext } from "react-hook-form"
import TableForm from "../../wrapper/TableForm";
import { RHFDatePicker, RHFInput, RHFInputAmount, RHFTableAsyncSelect } from "../../fields";
import { AccountField } from "../../global";

const ContractFormOtherFees = () => {
  const { watch } = useFormContext();

  return (
    <div className="p-4">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker
                name={`contract_other_fees.${index}.date`}
              />
            </td>
            <td>
              <RHFInputAmount
                name={`contract_other_fees.${index}.fee_amount`}
              />
            </td>
            <td>
              <AccountField
                name={`contract_other_fees.${index}.account_id`}
              />
            </td>
            <td>
              <RHFInput
                name={`contract_other_fees.${index}.notes`}
              />
            </td>
          </>
        )}
        gridName={"contract_other_fees"}
        headers={[
          "date",
          "fee_amount",
          "account_id",
          "notes",
        ]}

      />
      {watch('contract_other_fees.0.id') && (
        <ViewEntry id={watch('contract.id')} created_from={CREATED_FROM_CONTRACT_FEES} />
      )}
    </div>
  )
}

export default ContractFormOtherFees