import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import { createCheque, deleteCheque, getAllCheques, getSearchCheque, getSingleCheque, updateCheque } from '@/services/chequeService'
import chequeColumns from '@/helpers/cheque/chequeColumns'
import { lazy, useState } from 'react'
import EntryBar from '@/components/shared/EntryBar'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import Modal from '@/components/shared/Modal'
import BtnGroups from '@/components/shared/BtnGroups'
import ChequeFormBar from '@/components/forms/containers/cheque/ChequeFormBar'
import useUpdateSearchParams from '@/hook/useUpdateSearchParams'
import useCustomSearchParams from '@/hook/useCustomSearchParams'
import SEARCH_PARAMS from '@/data/searchParamsKeys'
import { chequeDefaultValue, chequeValidationSchema } from '@/helpers/cheque/ChequeValidationSchema'
import { useQuery } from '@tanstack/react-query'
import { getAllChequePatterns } from '@/services/chequePatternsService'
const ChequeForm = lazy(() => import("@/components/forms/containers/cheque/ChequeForm"))

const chequeConfig = {
  name: "cheque",
  formProps: {
    defaultValue: chequeDefaultValue,
    validationSchema: chequeValidationSchema,
    mutationAddFunction: createCheque,
    mutationUpdateFunction: updateCheque,
    getSingleFunction: getSingleCheque,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteCheque,
    RenderForm: (props) => <ChequeForm {...props} />
  },
  formHeaderProps: {
    header: "cheque",
    ExtraContentBar: ({ values }) => (
      <>
        <FormHeaderSearchBar
          getOptionLabel={option => option?.name}
          getOptionValue={option => option?.id}
          getSearch={getSearchCheque}
          queryKey={QUERY_KEYS.CHEQUE}
        />
        <EntryBar entryId={values?.id} />
      </>
    )
  },
}

const Cheque = ({
  formOnly,
  outerClose,
  defaultNumber,
  defaultCode,
  popupFormConfig,

}) => {
  const searchParamsSelectedCode = useCustomSearchParams(SEARCH_PARAMS.CODE);
  const [openFormType, setOpenFormType] = useState(false);

  if (formOnly) {
    return (
      <FormWrapper
        {...chequeConfig}
        outerClose={outerClose}
        code={searchParamsSelectedCode?.code}
        numberSearchParam={defaultNumber}
        codeSearchParam={defaultCode}
        oldValues={popupFormConfig?.oldValues}
      />
    )
  }

  return (
    <>
      <Modal containerClassName="!z-[100]" open={openFormType} onClose={() => setOpenFormType(false)}>
        <BtnGroups
          queryFn={getAllChequePatterns}
          queryKey={QUERY_KEYS.CHEQUE_PATTERN}
          onClose={() => setOpenFormType(false)}
        />
      </Modal>
      <PaperLayout
        name="cheque"
        queryKey={QUERY_KEYS.CHEQUE}
        queryFn={getAllCheques}
        // handleDeleteSelected={deleteManyCheques}
        paperHeaderProps={{
          header: "cheque"
        }}
        paperBarProps={{
          onClickPrint: true,
          customAdd: () => setOpenFormType(true),
        }}
        tableProps={{
          columns: chequeColumns
        }}
        {...chequeConfig}
      />
    </>
  )

}

export default Cheque