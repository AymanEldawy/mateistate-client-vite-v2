
// contract_certifying
// contract_delivered
// contract_signed

import { RHFCheckbox, RHFDatePicker, RHFInput, RHFInputAmount, RHFTextarea } from "../../fields"

// contract_received
const ContractFormContractCycle = () => {
  return (
    <div className="py-4 flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-4">
        <RHFInput
          label="contract_certifying_body"
          name={`contract_cycle.contract_certifying_body`}
        />
        <RHFInputAmount
          label="commission_from_owner_value"
          name={`contract_cycle.commission_from_owner_value`}
        />
        <RHFDatePicker
          label="municipal_license_from"
          name={`contract_cycle.municipal_license_from`}
        />
        <RHFDatePicker
          label="municipal_license_to"
          name={`contract_cycle.municipal_license_to`}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <RHFInput
            label="license_num"
            name={`contract_cycle.license_num`}
            type="number"
          />
          <RHFDatePicker
            label="license_from"
            name={`contract_cycle.license_from`}
          />
          <RHFDatePicker
            label="license_to"
            name={`contract_cycle.license_to`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <RHFInput
            label="civil_license_num"
            name={`contract_cycle.civil_license_num`}
            type="number"
          />
          <RHFDatePicker
            label="civil_license_from"
            name={`contract_cycle.civil_license_from`}
          />
          <RHFDatePicker
            label="civil_license_to"
            name={`contract_cycle.civil_license_to`}
          />
        </div>
      </div>


      <RHFCheckbox
        label="contract_documented"
        name={`contract_cycle.contract_documented`}
      />
      <RHFCheckbox
        label="contract_certifying"
        name={`contract_cycle.contract_certifying`}
      />
      <RHFCheckbox
        label="contract_delivered"
        name={`contract_cycle.contract_delivered`}
      />
      <RHFCheckbox
        label="contract_signed"
        name={`contract_cycle.contract_signed`}
      />
    </div>
  )
}

export default ContractFormContractCycle