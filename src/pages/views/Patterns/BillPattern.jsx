import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy } from 'react'
import { createBillPattern, deleteManyBillPatterns, getAllBillPatterns, getSingleBillPattern, updateBillPattern } from '@/services/billPatternsService'
const BillPatternForm = lazy(() => import('@/components/forms/containers/patterns/bill/BillPatternForm'))

const defaultValue = {}

const validationSchema = () => { }

const billColumnsPatternConfig = {
  formProps: {
    defaultValue,
    validationSchema,
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
        columns: [] // update
      }}
      {...billColumnsPatternConfig}

    />
  )
}

export default BillPattern