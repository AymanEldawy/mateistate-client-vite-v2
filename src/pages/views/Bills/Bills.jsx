

import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy, useState } from 'react'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import EntryBar from '@/components/shared/EntryBar'
import { createBill, deleteBill, deleteManyBills, getAllBills, getSearchBill, updateBill } from '@/services/billService'
import { billValidationSchema } from '@/helpers/bill/billValidationSchema'
import billColumns from '@/helpers/bill/billColumns'
const BillForm = lazy(() => import("@/components/forms/containers/bill/BillForm"))

const defaultValue = {}


const Bills = () => {
  const [isInstallmentOpen, setIsInstallmentOpen] = useState(false)
  // const [list, setList] = useState(APARTMENT_STEPS_CONTRACT)

  return (
    <>
      <PaperLayout
        name="bills"
        queryKey={QUERY_KEYS.BILLS}
        queryFn={getAllBills}
        handleDeleteSelected={deleteManyBills}
        paperHeaderProps={{
          header: "bills"
        }}
        paperBarProps={{
          onClickPrint: true,
          onClickAdd: true,
        }}
        tableProps={{
          columns: billColumns
        }}
        formProps={{
          defaultValue,
          validationSchema: billValidationSchema,
          mutationAddFunction: createBill,
          mutationUpdateFunction: updateBill,
          onSuccessAction: () => { },
          isSteps: false,
          onHandleDelete: deleteBill,
          RenderForm: (props) => <BillForm {...props}  />
        }}
        formHeaderProps={{
          header: "bill",
          ExtraContentBar: ({ values }) => (
            <>
              <FormHeaderSearchBar
                getOptionLabel={option => option?.name}
                getOptionValue={option => option?.id}
                getSearch={getSearchBill}
                queryKey={QUERY_KEYS.BILLS}
              />
              <EntryBar entryId={values?.id} />
            </>
          )
        }}
        formPaginationProps={{
          name: 'bill',
          number: 1,
          code: 1
        }}
      />
    </>

  )
}

export default Bills