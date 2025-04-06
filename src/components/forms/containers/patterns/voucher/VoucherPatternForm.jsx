import DynamicForm from '@/components/forms/wrapper/DynamicForm'
import { VOUCHER_PATTERN_STEPS } from '@/data/constants'
import { VOUCHER_PATTERN_FIELDS, VOUCHER_PATTERN_GENERAL } from '@/helpers/patterns/voucher/voucherPatternFields'

const VoucherPatternForm = ({ tab }) => {
  const displayForm = () => {
    switch (tab) {
      case VOUCHER_PATTERN_STEPS.cheque_pattern_return:
        return <DynamicForm fields={VOUCHER_PATTERN_FIELDS} />
      default:
        return <DynamicForm fields={VOUCHER_PATTERN_GENERAL} />
    }
  }

  return (
    <div className="min-w-[800px] h-[75vh]">
      {displayForm()}
    </div>
  )
}

export default VoucherPatternForm