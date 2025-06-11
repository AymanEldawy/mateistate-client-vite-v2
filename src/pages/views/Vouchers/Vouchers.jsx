

import { RHFCheckbox } from '@/components/forms/fields'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import BtnGroups from '@/components/shared/BtnGroups'
import Modal from '@/components/shared/Modal'
import QUERY_KEYS from '@/data/queryKeys'
import SEARCH_PARAMS from '@/data/searchParamsKeys'
import voucherColumns from '@/helpers/voucher/voucherColumns'
import { voucherDefaultValues, voucherValidationSchema } from '@/helpers/voucher/voucherValidationSchema'
import useCustomSearchParams from '@/hook/useCustomSearchParams'
import { getAllVoucherPatterns, getVoucherPatternByCode } from '@/services/voucherPatternService'
import { createVoucher, deleteManyVouchers, deleteVoucher, getAllVouchers, getSearchVoucher, getSingleVoucher, updateVoucher } from '@/services/vouchersService'
import { useQuery } from '@tanstack/react-query'
import { lazy, useMemo, useState } from 'react'
import PaperLayout from '../../../components/layout/paper/PaperLayout'

const VoucherForm = lazy(() => import("@/components/forms/containers/voucher/VoucherForm"))


const Vouchers = ({
  formOnly,
  outerClose,
  defaultNumber,
  defaultCode,
  popupFormConfig
}) => {
  const searchParamsSelectedCode = useCustomSearchParams(SEARCH_PARAMS.CODE);
  const [openFormType, setOpenFormType] = useState(false);
  const code = defaultCode || searchParamsSelectedCode;

  const { data: pattern } = useQuery({
    queryKey: [QUERY_KEYS.VOUCHER_PATTERN, code],
    queryFn: async () => {
      const response = await getVoucherPatternByCode(code)
      if (response?.success) {
        return response
      }
    },
    enabled: !!code
  })

  const voucherConfig = useMemo(() => ({
    name: "voucher_main_data",
    formProps: {
      defaultValue: voucherDefaultValues,
      validationSchema: voucherValidationSchema,
      mutationAddFunction: createVoucher,
      mutationUpdateFunction: updateVoucher,
      getSingleFunction: getSingleVoucher,
      onSuccessAction: () => { },
      isSteps: false,
      onHandleDelete: deleteVoucher,
      RenderForm: (props) => (
        <VoucherForm
          {...props}
          pattern={pattern}
          code={searchParamsSelectedCode}
        />
      )
    },
    formHeaderProps: {
      header: pattern?.name || "voucher",
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
    }
  }), [pattern, code])



  if (formOnly) {
    return (
      <FormWrapper
        {...voucherConfig}
        outerClose={outerClose}
        numberSearchParam={defaultNumber}
        codeSearchParam={defaultCode}
        oldValues={popupFormConfig?.oldValues}
      />
    )
  }


  return (
    <>
      <Modal containerClassName="!z-[100]" open={openFormType} >
        <BtnGroups
          queryKey={QUERY_KEYS.VOUCHER_PATTERN}
          queryFn={getAllVoucherPatterns}
          onClose={() => setOpenFormType(false)}
        />
      </Modal>
      <PaperLayout
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
        {...voucherConfig}

      />
    </>

  )
}

export default Vouchers