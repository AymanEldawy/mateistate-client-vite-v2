import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { deleteAccount, deleteManyAccounts, getAllAccounts } from '@/services/accountService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import accountColumns from '@/helpers/account/accountColumns'
import { lessorValidationSchema } from '@/helpers/lessor/lessorValidationSchema'
import LessorForm from '@/components/forms/containers/LessorForm'
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {}

const accountConfig = {
  formProps: {
    defaultValue,
    validationSchema: lessorValidationSchema,
    mutationAddFunction: () => { },
    mutationUpdateFunction: () => { },
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <LessorForm {...props} />
  },
  formHeaderProps: {
    header: "Account"
  },
  formPaginationProps: {
    name: 'account',
    number: 1
  },
}

const Account = ({ formOnly, outerClose }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...accountConfig}
        outerClose={outerClose}
      />
    )
  }
  
  return (
    <PaperLayout
      name="account"
      queryKey={QUERY_KEYS.ACCOUNT}
      queryFn={getAllAccounts}
      handleDeleteSelected={deleteManyAccounts}
      paperHeaderProps={{
        header: "account"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: accountColumns
      }}
      {...accountConfig}

    />
  )
}

export default Account