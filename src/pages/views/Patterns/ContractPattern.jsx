import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy } from 'react'
import { createContractPattern, deleteContractPattern, deleteManyContractPatterns, getAllContractPatterns, getSingleContractPattern, updateContractPattern } from '@/services/contractPatternsService'
import { contractPatternDefaultValues, contractPatternValidationSchema } from '@/helpers/patterns/contract/contractPatternValidationSchema'
import { CONTRACTS_PATTERN_STEPS } from '@/helpers/patterns/contract/contractPatternSteps'
import contractPatternColumns from '@/helpers/patterns/contract/contractPatternColumns'
const ContractPatternForm = lazy(() => import('@/components/forms/containers/patterns/contract/ContractPatternForm'))

const contractPatternConfig = {
  formProps: {
    defaultValue: contractPatternDefaultValues,
    validationSchema: contractPatternValidationSchema,
    mutationAddFunction: createContractPattern,
    mutationUpdateFunction: updateContractPattern,
    getSingleFunction: getSingleContractPattern,
    onSuccessAction: () => { },
    isSteps: true,
    onHandleDelete: deleteContractPattern,
    RenderForm: (props) => <ContractPatternForm {...props} />
  },
  formHeaderProps: {
    header: "contract_pattern",
  },
  formSidebarProps: {
    list: Object.keys(CONTRACTS_PATTERN_STEPS)
  }
}

const ContractPattern = () => {
  return (
    <PaperLayout
      name="contract_pattern"
      queryKey={QUERY_KEYS.CONTRACT_PATTERN}
      queryFn={getAllContractPatterns}
      handleDeleteSelected={deleteManyContractPatterns}
      paperHeaderProps={{
        header: "contract_pattern"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}

      tableProps={{
        columns: contractPatternColumns
      }}
      {...contractPatternConfig}

    />
  )
}

export default ContractPattern