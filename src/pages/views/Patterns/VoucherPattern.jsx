import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy } from 'react'
import { createVoucherPattern, deleteManyVoucherPatterns, deleteVoucherPattern, getAllVoucherPatterns, getSingleVoucherPattern, updateVoucherPattern } from '@/services/voucherPatternService'
import { VOUCHER_PATTERN_STEPS } from '@/helpers/patterns/voucher/voucherPatternSteps'
import { voucherPatternDefaultValues, voucherPatternValidationSchema } from '@/helpers/patterns/voucher/voucherPatternValidationSchema'
import voucherPatternColumns from '@/helpers/patterns/voucher/voucherPatternColumns'
const VoucherPatternForm = lazy(() => import('@/components/forms/containers/patterns/voucher/VoucherPatternForm'))


const voucherPatternConfig = {
  formProps: {
    defaultValue: voucherPatternDefaultValues,
    validationSchema: voucherPatternValidationSchema,
    mutationAddFunction: createVoucherPattern,
    mutationUpdateFunction: updateVoucherPattern,
    getSingleFunction: getSingleVoucherPattern,
    onSuccessAction: () => { },
    isSteps: true,
    onHandleDelete: deleteVoucherPattern,
    RenderForm: (props) => <VoucherPatternForm {...props} />
  },
  formHeaderProps: {
    header: "voucher_pattern",
  },
  formSidebarProps: {
    list: Object.keys(VOUCHER_PATTERN_STEPS)
  }

}

const voucherPattern = () => {
  return (
    <PaperLayout
      name="voucher_pattern"
      queryKey={QUERY_KEYS.VOUCHER_PATTERN}
      queryFn={getAllVoucherPatterns}
      handleDeleteSelected={deleteManyVoucherPatterns}
      paperHeaderProps={{
        header: "voucher_pattern"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}

      tableProps={{
        columns: voucherPatternColumns
      }}
      {...voucherPatternConfig}

    />
  )
}

export default voucherPattern

