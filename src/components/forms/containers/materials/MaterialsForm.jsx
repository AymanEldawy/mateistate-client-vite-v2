import { MATERIAL_STEPS } from "@/data/constants"
import DynamicForm from "../../wrapper/DynamicForm"

const MaterialsForm = ({ tab }) => {


  const displayForm = () => {
    switch (tab) {
      case MATERIAL_STEPS.contract_payments_step:
        return <DynamicForm />
      // case GLOBAL_CONTRACT_STEPS.contract_commission_step:
      //   return <ContractFormCommission />
      // case GLOBAL_CONTRACT_STEPS.contract_other_fees_step:
      //   return <ContractFormOtherFees />
      // case GLOBAL_CONTRACT_STEPS.contract_termination_step:
      //   return <ContractFormTermination />
      // case GLOBAL_CONTRACT_STEPS.contract_linked_parking_step:
      //   return <ContractFormLinkedParking />
      // case GLOBAL_CONTRACT_STEPS.contract_contract_cycle_step:
      //   return <ContractFormContractCycle />
      default:
        return <></>
    }
  }

  return (
    <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
      {displayForm()}
    </div>
  )
}

export default MaterialsForm
