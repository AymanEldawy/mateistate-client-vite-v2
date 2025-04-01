import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import { deleteCheque, deleteManyCheques, getAllCheques, getSearchCheque } from '@/services/chequeService'
import chequeColumns from '@/helpers/cheque/chequeColumns'
import { lazy, useState } from 'react'
import EntryBar from '@/components/shared/EntryBar'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import Modal from '@/components/shared/Modal'
import BtnGroups from '@/components/shared/BtnGroups'
import ChequeFormBar from '@/components/forms/containers/cheque/ChequeFormBar'
// import QUERY_KEYS from './../../../data/queryKeys';
const ChequeForm = lazy(() => import("@/components/forms/containers/cheque/ChequeForm"))

const defaultValue = {}

const validationSchema = () => { }

const chequeConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationAddFunction: () => { },
    mutationUpdateFunction: () => { },
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteCheque,
    RenderForm: (props) => <ChequeForm {...props} />
    // RenderForm: (props) => <>te</>
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
  // formFooterProps: {
  //   additionalButtons: (data) => (
  //     <ChequeFormBar data={data} />
  //   )
  // },
}

const Cheque = ({ formOnly, outerClose }) => {
  const [openFormType, setOpenFormType] = useState(false);
  const [code, setCode] = useState(null)

  if (formOnly) {
    return (
      <FormWrapper
        {...chequeConfig}
        outerClose={outerClose}
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
                setCode(1)
                setOpenFormType(false)
              }
            },
            {
              name: 'paid', onClick: () => {
                setCode(2)
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
          code
        }}
      />
    </>
  )

}

export default Cheque