import { RHFInput, RHFInputAmount, RHFTextarea } from "../../fields"
import { AccountField } from "../../global"

const ContractFormCommission = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-2 py-4">
      <div className="flex flex-col gap-2">
        <RHFInput
          label="commission_percentage"
          name={`contract_commission.commission_percentage`}
        />
        <RHFInputAmount
          label="commission_value"
          name={`contract_commission.commission_value`}
        />
        <AccountField
          name={`contract_commission.commission_account_id`}
          label="commission_account_id"
        />
        <RHFTextarea
          label="commission_note"
          name={`contract_commission.commission_note`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <RHFInput
          label="commission_from_owner_percentage"
          name={`contract_commission.commission_from_owner_percentage`}
        />
        <RHFInputAmount
          label="commission_from_owner_value"
          name={`contract_commission.commission_from_owner_value`}
        />
        <AccountField
          name={`contract_commission.commission_from_owner_account_id`}
          label="commission_from_owner_account_id"
        />
        <RHFTextarea
          label="commission_from_owner_note"
          name={`contract_commission.commission_from_owner_note`}
        />
      </div>
    </div>
  )
}

export default ContractFormCommission