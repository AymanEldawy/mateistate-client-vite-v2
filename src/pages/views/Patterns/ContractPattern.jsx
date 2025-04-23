import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy } from 'react'
import { createContractPattern, deleteContractPattern, deleteManyContractPatterns, getAllContractPatterns, updateContractPattern } from '@/services/contractPatternsService'
const ContractPatternForm = lazy(() => import('@/components/forms/containers/patterns/contract/ContractPatternForm'))

const defaultValue = {}

const validationSchema = () => { }

const contractPatternConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationAddFunction: createContractPattern,
    mutationUpdateFunction: updateContractPattern,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteContractPattern,
    RenderForm: (props) => <ContractPatternForm {...props} />
  },
  formHeaderProps: {
    header: "contract_pattern",
  },
  formPaginationProps: {
    name: 'contract_pattern',
    number: 1
  },
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
        columns: [] //update
      }}
      {...contractPatternConfig}

    />
  )
}

export default ContractPattern