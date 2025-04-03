

import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy } from 'react'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import EntryBar from '@/components/shared/EntryBar'
import { createVoucher, deleteManyVouchers, deleteVoucher, getAllVouchers, getSearchVoucher, updateVoucher } from '@/services/vouchersService'
import voucherColumns from '@/helpers/voucher/voucherColumns'
import { voucherValidationSchema } from '@/helpers/voucher/voucherValidationSchema'
const VoucherForm = lazy(() => import("@/components/forms/containers/voucher/VoucherForm"))

const defaultValue = {
  gen_entries: true,
  credit_total: 0,
  debit_total: 0,
  debit_amount: 0,
  credit_amount: 0,
}


const Vouchers = () => {

  return (
    <>
      <PaperLayout
        name="vouchers"
        queryKey={QUERY_KEYS.VOUCHERS}
        queryFn={getAllVouchers}
        handleDeleteSelected={deleteManyVouchers}
        paperHeaderProps={{
          header: "vouchers"
        }}
        paperBarProps={{
          onClickPrint: true,
          onClickAdd: true,
        }}
        tableProps={{
          columns: voucherColumns
        }}
        formProps={{
          defaultValue,
          validationSchema: voucherValidationSchema,
          mutationAddFunction: createVoucher,
          mutationUpdateFunction: updateVoucher,
          onSuccessAction: () => { },
          isSteps: false,
          onHandleDelete: deleteVoucher,
          RenderForm: (props) => <VoucherForm {...props} />
        }}
        formHeaderProps={{
          header: "voucher",
          ExtraContentBar: ({ values }) => (
            <>
              <FormHeaderSearchBar
                getOptionLabel={option => option?.name}
                getOptionValue={option => option?.id}
                getSearch={getSearchVoucher}
                queryKey={QUERY_KEYS.VOUCHERS}
              />
              <EntryBar entryId={values?.id} />
            </>
          )
        }}
        formPaginationProps={{
          name: 'voucher',
          number: 1,
          code: 1
        }}
      />
    </>

  )
}

export default Vouchers