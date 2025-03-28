import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import { deleteCheque, deleteManyCheques, getAllCheques } from '@/services/chequeService'
import chequeColumns from '@/helpers/cheque/chequeColumns'
import { lazy } from 'react'
// import QUERY_KEYS from './../../../data/queryKeys';
const ChequeForm = lazy(() => import("@/components/forms/containers/cheque/ChequeForm"))

const defaultValue = {}

const validationSchema = () => { }

const chequeConfig = {
  defaultValue,
  validationSchema,
  mutationAddFunction: () => { },
  mutationUpdateFunction: () => { },
  onSuccessAction: () => { },
  isSteps: false,
  onHandleDelete: deleteCheque,
  RenderForm: (props) => <ChequeForm {...props} />
}

const Cheque = ({ formOnly, outerClose }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...chequeConfig}
        outerClose={outerClose}
      />
    )
  }

  return (
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
        onClickAdd: true,
      }}
      tableProps={{
        columns: chequeColumns
      }}
      {...chequeConfig}

    />
  )
}

export default Cheque