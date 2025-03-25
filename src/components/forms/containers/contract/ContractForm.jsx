import { GLOBAL_CONTRACT_STEPS } from "@/data/constants"
import ContractFormGeneral from "./ContractFormGeneral"
import ContractFormPayments from "./ContractFormPayments"
import ContractFormCommission from "./ContractFormCommission"
import ContractFormOtherFees from "./ContractFormOtherFees"
import ContractFormTermination from "./ContractFormTermination"
import ContractFormLinkedParking from "./ContractFormLinkedParking"
import ContractFormContractCycle from "./ContractFormContractCycle"
import { useForm } from "react-hook-form"

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
      case GLOBAL_CONTRACT_STEPS.contract_payments_step:
        return <ContractFormPayments />
      case GLOBAL_CONTRACT_STEPS.contract_commission_step:
        return <ContractFormCommission />
      case GLOBAL_CONTRACT_STEPS.contract_other_fees_step:
        return <ContractFormOtherFees />
      case GLOBAL_CONTRACT_STEPS.contract_termination_step:
        return <ContractFormTermination />
      case GLOBAL_CONTRACT_STEPS.contract_linked_parking_step:
        return <ContractFormLinkedParking />
      case GLOBAL_CONTRACT_STEPS.contract_contract_cycle_step:
        return <ContractFormContractCycle />
      default:
        return <ContractFormGeneral />

    }
  }

  const submit = (e) => {
    console.log("🚀 ~ submit ~ e:", e)
    e.preventDefault()
    console.log("🚀 ~ submit ~ value:", watch())

  }

  return (
    <>
      <button>click</button>
      <div className="min-w-[800px] h-[75vh]">
        {displayForm()}
      </div>
    </>
  )
}

export default ContractForm