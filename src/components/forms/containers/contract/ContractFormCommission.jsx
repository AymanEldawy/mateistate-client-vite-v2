import { RHFInput, RHFInputAmount, RHFTextarea } from "../../fields"
import { AccountField } from "../../global"

const ContractFormCommission = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-2 py-4">
      <div className="flex flex-col gap-2">
        <RHFInput
          label="commissionPercentage"
          name={`contractCommission.commissionPercentage`}
        />
        <RHFInputAmount
          label="commissionValue"
          name={`contractCommission.commissionValue`}
        />
        <AccountField
          name={`contractCommission.commissionAccountId`}
          label="commissionAccountId"
        />
        <RHFTextarea
          label="commissionNote"
          name={`contractCommission.commissionNote`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <RHFInput
          label="commissionFromOwnerPercentage"
          name={`contractCommission.commissionFromOwnerPercentage`}
        />
        <RHFInputAmount
          label="commissionFromOwnerValue"
          name={`contractCommission.commissionFromOwnerValue`}
        />
        <AccountField
          name={`contractCommission.commissionFromOwnerAccountId`}
          label="commissionFromOwnerAccountId"
        />
        <RHFTextarea
          label="commissionFromOwnerNote"
          name={`contractCommission.commissionFromOwnerNote`}
        />
      </div>
    </div>
  )
}

export default ContractFormCommission