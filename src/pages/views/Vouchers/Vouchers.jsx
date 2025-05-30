

import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy, useState } from 'react'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import EntryBar from '@/components/shared/EntryBar'
import { createVoucher, deleteManyVouchers, deleteVoucher, getAllVouchers, getSearchVoucher, getSingleVoucher, updateVoucher } from '@/services/vouchersService'
import voucherColumns from '@/helpers/voucher/voucherColumns'
import { voucherDefaultValues, voucherValidationSchema } from '@/helpers/voucher/voucherValidationSchema'
import Modal from '@/components/shared/Modal'
import BtnGroups from '@/components/shared/BtnGroups'
import useCustomSearchParams from '@/hook/useCustomSearchParams'
import useUpdateSearchParams from '@/hook/useUpdateSearchParams'
import SEARCH_PARAMS from '@/data/searchParamsKeys'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import { RHFCheckbox } from '@/components/forms/fields'

const VoucherForm = lazy(() => import("@/components/forms/containers/voucher/VoucherForm"))

const Vouchers = ({
  formOnly,
  outerClose,
  defaultNumber,
  defaultCode,
}) => {
  const searchParamsSelectedCode = useCustomSearchParams(SEARCH_PARAMS.CODE);
  const updateSearchParams = useUpdateSearchParams();
  const [openFormType, setOpenFormType] = useState(false);

  const handleChangeCode = (code) => {
    updateSearchParams([{ name: SEARCH_PARAMS.CODE, value: code }]);
  }

  if (formOnly) {
    return (
      <FormWrapper
        {...voucherColumns}
        outerClose={outerClose}
        numberSearchParam={defaultNumber}
        codeSearchParam={defaultCode}
      />
    )
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
          customAdd: () => setOpenFormType(true),
        }}
        tableProps={{
          columns: voucherColumns
        }}
        formProps={{
          defaultValue: voucherDefaultValues,
          validationSchema: voucherValidationSchema,
          mutationAddFunction: createVoucher,
          mutationUpdateFunction: updateVoucher,
          getSingleFunction: getSingleVoucher,
          onSuccessAction: () => { },
          isSteps: false,
          onHandleDelete: deleteVoucher,
          RenderForm: (props) => (
            <VoucherForm {...props} code={searchParamsSelectedCode.code} />
          )
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
              <div className='flex gap-2'>
                <RHFCheckbox containerClassName="!gap-1" labelClassName="!w-fit" name={`voucher.feedback`} label="feedback" />
                <RHFCheckbox containerClassName="!gap-1" labelClassName="!w-fit whitespace-nowrap" name={`voucher.genEntires`} label="gen_entries" />
              </div>
              {/* <EntryBar tab={'voucher'} entryId={values?.id} /> */}
            </>
          )
        }}
      />
    </>

  )
}

export default Vouchers