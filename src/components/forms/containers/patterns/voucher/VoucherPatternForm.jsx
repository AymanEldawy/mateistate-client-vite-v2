import DynamicForm from '@/components/forms/wrapper/DynamicForm'
import { VOUCHER_PATTERN_FIELDS, VOUCHER_PATTERN_GENERAL } from '@/helpers/patterns/voucher/voucherPatternFields'
import { VOUCHER_PATTERN_STEPS } from '@/helpers/patterns/voucher/voucherPatternSteps'

const VoucherPatternForm = ({ tab }) => {
  const displayForm = () => {
    switch (tab) {
      case VOUCHER_PATTERN_STEPS.voucher_fields:
        return <DynamicForm customGrid="grid-cols-2 gap-y-4" fields={VOUCHER_PATTERN_FIELDS} />
      default:
        return <DynamicForm customGrid="grid-cols-2 gap-y-4" fields={VOUCHER_PATTERN_GENERAL} />
    }
  }

  return (
    <div className="min-w-[800px] h-[75vh]">
      {displayForm()}
    </div>
  )
}

export default VoucherPatternForm