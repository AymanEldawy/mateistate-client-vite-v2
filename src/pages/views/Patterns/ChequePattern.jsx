import { lazy } from 'react'
import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import { createChequePattern, deleteChequePattern, deleteManyChequePatterns, getAllChequePatterns, getSingleChequePattern, updateChequePattern } from '@/services/chequePatternsService'
import { chequePatternDefaultValues, chequePatternValidationSchema } from '@/helpers/patterns/cheque/chequePatternValidationSchema'
import { CHEQUE_PATTERN_STEPS } from '@/helpers/patterns/cheque/chequePatternSteps'
import chequePatternColumns from '@/helpers/patterns/cheque/chequePatternColumns'

const ChequePatternForm = lazy(() => import('@/components/forms/containers/patterns/cheque/ChequePatternForm'))

const chequePatternConfig = {
  formProps: {
    defaultValue: chequePatternDefaultValues,
    validationSchema: chequePatternValidationSchema,
    mutationAddFunction: createChequePattern,
    mutationUpdateFunction: updateChequePattern,
    getSingleFunction: getSingleChequePattern,
    onSuccessAction: () => { },
    isSteps: true,
    onHandleDelete: deleteChequePattern,
    RenderForm: (props) => <ChequePatternForm {...props} />
  },
  formHeaderProps: {
    header: "cheque_pattern",
  },
}

const ContractPattern = ({ formOnly, outerClose }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...chequePatternConfig}
        outerClose={outerClose}
      />
    )
  }

  return (
    <PaperLayout
      name="cheque_pattern"
      queryKey={QUERY_KEYS.CHEQUE_PATTERN}
      queryFn={getAllChequePatterns}
      handleDeleteSelected={deleteManyChequePatterns}
      paperHeaderProps={{
        header: "cheque_pattern"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      formSidebarProps={{
        list: Object.keys(CHEQUE_PATTERN_STEPS)
      }}
      tableProps={{
        columns: chequePatternColumns
      }}
      {...chequePatternConfig}

    />
  )
}

export default ContractPattern