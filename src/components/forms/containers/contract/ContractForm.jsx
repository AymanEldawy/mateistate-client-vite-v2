import ContractFormGeneral from "./ContractFormGeneral"
import ContractFormPayments from "./ContractFormPayments"
import ContractFormCommission from "./ContractFormCommission"
import ContractFormOtherFees from "./ContractFormOtherFees"
import ContractFormTermination from "./ContractFormTermination"
import ContractFormLinkedParking from "./ContractFormLinkedParking"
import ContractFormContractCycle from "./ContractFormContractCycle"
import { useForm } from "react-hook-form"
import { GLOBAL_CONTRACT_STEPS } from "@/helpers/contract/contractSteps"

const ContractForm = ({ tab }) => {
  const {
    formState: { errors },
    handleSubmit,
    watch
  } = useForm({
    mode: "onBlur",
  });


  const displayForm = () => {
    switch (tab) {
      case GLOBAL_CONTRACT_STEPS.payments:
        return <ContractFormPayments />
      case GLOBAL_CONTRACT_STEPS.commission:
        return <ContractFormCommission />
      case GLOBAL_CONTRACT_STEPS.other_fees:
        return <ContractFormOtherFees />
      case GLOBAL_CONTRACT_STEPS.termination:
        return <ContractFormTermination />
      case GLOBAL_CONTRACT_STEPS.linked_parking:
        return <ContractFormLinkedParking />
      case GLOBAL_CONTRACT_STEPS.contract_cycle:
        return <ContractFormContractCycle />
      default:
        return <ContractFormGeneral />
    }
  }

  return (
    <div className="flex flex-col min-h-[400px] max-h-[72vh] overflow-auto min-w-[700px]">
      {displayForm()}
    </div>
  )
}

export default ContractForm