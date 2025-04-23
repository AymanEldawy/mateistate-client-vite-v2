import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import ChequePatternForm from '@/components/forms/containers/patterns/cheque/ChequePatternForm'
import { createChequePattern, deleteChequePattern, deleteManyChequePatterns, getAllChequePatterns, getSingleChequePattern, updateChequePattern } from '@/services/chequePatternsService'

const defaultValue = {}

const validationSchema = () => { }

const chequePatternConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationAddFunction: createChequePattern,
    mutationUpdateFunction: updateChequePattern,
    getSingleFunction: getSingleChequePattern,
    onSuccessAction: () => { },
    isSteps: false,
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
      tableProps={{
        columns: [] // 
      }}
      {...chequePatternConfig}

    />
  )
}

export default ContractPattern