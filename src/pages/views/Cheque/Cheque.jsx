import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import { createCheque, deleteCheque, deleteManyCheques, getAllCheques, getSearchCheque, getSingleCheque, updateCheque } from '@/services/chequeService'
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
// import QUERY_KEYS from './../../../data/queryKeys';
const ChequeForm = lazy(() => import("@/components/forms/containers/cheque/ChequeForm"))

const chequeConfig = {
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

const Cheque = ({ formOnly, outerClose, }) => {
  const searchParamsSelectedCode = useCustomSearchParams(SEARCH_PARAMS.CODE);
  const updateSearchParams = useUpdateSearchParams();
  const [openFormType, setOpenFormType] = useState(false);

  const handleChangeCode = (code) => {
    updateSearchParams([{ name: SEARCH_PARAMS.CODE, value: code }]);
  }

  console.log(chequeValidationSchema, 'ch');
  

  if (formOnly) {
    return (
      <FormWrapper
        {...chequeConfig}
        outerClose={outerClose}
        code={searchParamsSelectedCode?.code}
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
        name="cheque"
        queryKey={QUERY_KEYS.CHEQUE}
        queryFn={getAllCheques}
        handleDeleteSelected={deleteManyCheques}
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
        formPaginationProps={{
          name: 'cheque',
          number: 1,
          code: searchParamsSelectedCode?.code,
        }}
      />
    </>
  )

}

export default Cheque