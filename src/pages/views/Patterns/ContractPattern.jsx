import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import accountColumns from '@/helpers/account/accountColumns'
import { lazy } from 'react'
import ContractPatternForm from '@/components/forms/containers/patterns/contract/ContractPatternForm'
import { createContractPattern, deleteContractPattern, deleteManyContractPatterns, getAllContractPatterns, updateContractPattern } from '@/services/contractPatternsService'
// import QUERY_KEYS from './../../../data/queryKeys';
const AccountForm = lazy(() => import("@/components/forms/containers/AccountForm"))

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
        columns: accountColumns
      }}
      {...contractPatternConfig}

    />
  )
}

export default ContractPattern