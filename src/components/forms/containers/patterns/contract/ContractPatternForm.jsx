import DynamicForm from '@/components/forms/wrapper/DynamicForm'
import { CONTRACT_PATTERN_default_accounts, CONTRACT_PATTERN_default_fees_accounts, CONTRACT_PATTERN_GENERAL, CONTRACT_PATTERN_moving_cost_center } from '@/helpers/patterns/contract/contractPatternFields'
import { CONTRACTS_PATTERN_STEPS } from '@/helpers/patterns/contract/contractPatternSteps'
import React from 'react'

const ContractPatternForm = ({ tab }) => {

  const displayForm = () => {
    switch (tab) {
      case CONTRACTS_PATTERN_STEPS.default_accounts:
        return <DynamicForm labelClassName="min-w-[180px]" customGrid="grid-cols-2 gap-y-4" fields={CONTRACT_PATTERN_default_accounts} />
      case CONTRACTS_PATTERN_STEPS.pattern_default_fees_accounts:
        return <DynamicForm fields={CONTRACT_PATTERN_default_fees_accounts} />
      case CONTRACTS_PATTERN_STEPS.moving_cost_center:
        return <DynamicForm labelClassName="min-w-[250px]" customGrid="grid-cols-1" fields={CONTRACT_PATTERN_moving_cost_center} />
      default:
        return <DynamicForm fields={CONTRACT_PATTERN_GENERAL} />
    }
  }

  return (
    <div className="min-w-[800px] h-[75vh] p-4">
      {displayForm()}
    </div>
  )
}

export default ContractPatternForm