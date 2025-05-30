
import { RHFCheckbox, RHFDatePicker, RHFInput, RHFInputAmount, RHFTextarea } from "../../fields"

// contract_received
const ContractFormContractCycle = () => {
  return (
    <div className="py-4 flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-4">
        <RHFInput
          label="contractCertifyingBody"
          name={`contractCycle.contractCertifyingBody`}
        />
        <RHFInputAmount
          label="commissionFromOwnerValue"
          name={`contractCycle.commissionFromOwnerValue`}
        />
        <RHFDatePicker
          label="municipalLicenseFrom"
          name={`contractCycle.municipalLicenseFrom`}
        />
        <RHFDatePicker
          label="municipalLicenseTo"
          name={`contractCycle.municipalLicenseTo`}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <RHFInput
            label="licenseNum"
            name={`contractCycle.licenseNum`}
            type="number"
          />
          <RHFDatePicker
            label="licenseFrom"
            name={`contractCycle.licenseFrom`}
          />
          <RHFDatePicker
            label="licenseTo"
            name={`contractCycle.licenseTo`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <RHFInput
            label="civilLicenseNum"
            name={`contractCycle.civilLicenseNum`}
            type="number"
          />
          <RHFDatePicker
            label="civilLicenseFrom"
            name={`contractCycle.civilLicenseFrom`}
          />
          <RHFDatePicker
            label="civilLicenseTo"
            name={`contractCycle.civilLicenseTo`}
          />
        </div>
      </div>


      <RHFCheckbox
        label="contractDocumented"
        name={`contractCycle.contractDocumented`}
      />
      <RHFCheckbox
        label="contractCertifying"
        name={`contractCycle.contractCertifying`}
      />
      <RHFCheckbox
        label="contractDelivered"
        name={`contractCycle.contractDelivered`}
      />
      <RHFCheckbox
        label="contractSigned"
        name={`contractCycle.contractSigned`}
      />
    </div>
  )
}

export default ContractFormContractCycle