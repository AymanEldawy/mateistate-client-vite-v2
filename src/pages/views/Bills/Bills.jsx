

import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy, useState } from 'react'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import EntryBar from '@/components/shared/EntryBar'
import { createBill, deleteBill, deleteManyBills, getAllBills, getSearchBill, updateBill } from '@/services/billService'
import { billValidationSchema } from '@/helpers/bill/billValidationSchema'
import billColumns from '@/helpers/bill/billColumns'
import Modal from '@/components/shared/Modal'
import BtnGroups from '@/components/shared/BtnGroups'
import useUpdateSearchParams from '@/hook/useUpdateSearchParams'
import useCustomSearchParams from '@/hook/useCustomSearchParams'
import SEARCH_PARAMS from '@/data/searchParamsKeys'
const BillForm = lazy(() => import("@/components/forms/containers/bill/BillForm"))
const defaultValue = {}


const Bills = () => {
  const searchParamsSelectedCode = useCustomSearchParams(SEARCH_PARAMS.CODE);
  const updateSearchParams = useUpdateSearchParams();
  const [openFormType, setOpenFormType] = useState(false);

  const handleChangeCode = (code) => {
    updateSearchParams([{ name: SEARCH_PARAMS.CODE, value: code }]);
  }

  return (
    <>
      <Modal containerClassName="!z-[100]" open={openFormType} onClose={() => setOpenFormType(false)}>
        {/* get all chq patterns and display them */}
        <BtnGroups
          list={[
            {
              name: 'received', onClick: () => {
                handleChangeCode(1)
                setOpenFormType(false)
              }
            },
            {
              name: 'paid', onClick: () => {
                handleChangeCode(2)
                setOpenFormType(false)
              }
            }
          ]}
        />
        {/* setCode */}
      </Modal>
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
          customAdd: () => setOpenFormType(true),
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
          RenderForm: (props) => <BillForm {...props} code={searchParamsSelectedCode.code} />
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
      />
    </>

  )
}

export default Bills