import DynamicForm from '@/components/forms/wrapper/DynamicForm'
import { BILL_PATTERN_accounts, BILL_PATTERN_bill_DETAILS, BILL_PATTERN_ENTRIES, BILL_PATTERN_general, BILL_PATTERN_OPTIONS, BILL_PATTERN_REFERENCES } from '@/helpers/patterns/bill/billPatternFields'
import { BILL_PATTERN_STEPS } from '@/helpers/patterns/bill/billPatternSteps'

const BillPatternForm = ({ tab }) => {

  const displayForm = () => {
    switch (tab) {
      case BILL_PATTERN_STEPS.accounts:
        return <DynamicForm fields={BILL_PATTERN_accounts} />
      case BILL_PATTERN_STEPS.entries:
        return <DynamicForm fields={BILL_PATTERN_ENTRIES} />
      case BILL_PATTERN_STEPS.options:
        return <DynamicForm fields={BILL_PATTERN_OPTIONS} />
      case BILL_PATTERN_STEPS.bill_details:
        return <DynamicForm fields={BILL_PATTERN_bill_DETAILS} />
      case BILL_PATTERN_STEPS.references:
        return <DynamicForm fields={BILL_PATTERN_REFERENCES} />
      default:
        return <DynamicForm fields={BILL_PATTERN_general} />
    }
  }

  return (
    <div className="min-w-[800px] h-[75vh]">
      {displayForm()}
    </div>
  )
}

export default BillPatternForm