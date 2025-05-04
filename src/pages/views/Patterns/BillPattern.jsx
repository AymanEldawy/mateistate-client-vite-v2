import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy } from 'react'
import { createBillPattern, deleteManyBillPatterns, getAllBillPatterns, getSingleBillPattern, updateBillPattern } from '@/services/billPatternsService'
import billPatternColumns from '@/helpers/patterns/bill/billPatternColumns'
import { billPatternDefaultValues, billPatternValidationSchema } from '@/helpers/patterns/bill/billPatternValidationSchema'
const BillPatternForm = lazy(() => import('@/components/forms/containers/patterns/bill/BillPatternForm'))

const billColumnsPatternConfig = {
  formProps: {
    defaultValue: billPatternDefaultValues,
    validationSchema: billPatternValidationSchema,
    mutationAddFunction: createBillPattern,
    mutationUpdateFunction: updateBillPattern,
    getSingleFunction: getSingleBillPattern,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteManyBillPatterns,
    RenderForm: (props) => <BillPatternForm {...props} />
  },
  formHeaderProps: {
    header: "bill_pattern",
  },

}

const BillPattern = () => {
  return (
    <PaperLayout
      name="bill_pattern"
      queryKey={QUERY_KEYS.BILL_PATTERN}
      queryFn={getAllBillPatterns}
      handleDeleteSelected={deleteManyBillPatterns}
      paperHeaderProps={{
        header: "bill_pattern"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: billPatternColumns
      }}
      {...billColumnsPatternConfig}

    />
  )
}

export default BillPattern