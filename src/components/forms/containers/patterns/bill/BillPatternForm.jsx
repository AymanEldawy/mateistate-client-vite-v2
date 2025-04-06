import DynamicForm from '@/components/forms/wrapper/DynamicForm'
import { CHEQUE_PATTERN_COLLECTION, CHEQUE_PATTERN_COMMISSION, CHEQUE_PATTERN_GENERAL, CHEQUE_PATTERN_PARTIAL_COLLECTION, CHEQUE_PATTERN_RETURN, CHEQUE_PATTERN_STATEMENTS } from '@/helpers/patterns/cheque/chequePatternFields'
import { CHEQUE_PATTERN_STEPS } from '@/helpers/patterns/cheque/chequePatternSteps'

const BillPatternForm = ({ tab }) => {

  const displayForm = () => {
    switch (tab) {
      case CHEQUE_PATTERN_STEPS.commission:
        return <DynamicForm fields={CHEQUE_PATTERN_COMMISSION} />
      case CHEQUE_PATTERN_STEPS.collection:
        return <DynamicForm fields={CHEQUE_PATTERN_COLLECTION} />
      case CHEQUE_PATTERN_STEPS.partial_collection:
        return <DynamicForm fields={CHEQUE_PATTERN_PARTIAL_COLLECTION} />
      case CHEQUE_PATTERN_STEPS.return:
        return <DynamicForm fields={CHEQUE_PATTERN_RETURN} />
      case CHEQUE_PATTERN_STEPS.default_statement:
        return <DynamicForm fields={CHEQUE_PATTERN_STATEMENTS} />
      default:
        return <DynamicForm fields={CHEQUE_PATTERN_GENERAL} />
    }
  }

  return (
    <div className="min-w-[800px] h-[75vh]">
      {displayForm()}
    </div>
  )
}

export default BillPatternForm