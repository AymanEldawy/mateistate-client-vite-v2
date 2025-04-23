import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy } from 'react'
import { createVoucherPattern, deleteManyVoucherPatterns, deleteVoucherPattern, getAllVoucherPatterns, getSingleVoucherPattern, updateVoucherPattern } from '@/services/voucherPatternService'
const VoucherPatternForm = lazy(() => import('@/components/forms/containers/patterns/contract/VoucherPatternForm'))

const defaultValue = {}

const validationSchema = () => { }

const voucherPatternConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationAddFunction: createVoucherPattern,
    mutationUpdateFunction: updateVoucherPattern,
    getSingleFunction: getSingleVoucherPattern,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteVoucherPattern,
    RenderForm: (props) => <VoucherPatternForm {...props} />
  },
  formHeaderProps: {
    header: "voucher_pattern",
  },

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
        columns: [] //update
      }}
      {...voucherPatternConfig}

    />
  )
}

export default voucherPattern

