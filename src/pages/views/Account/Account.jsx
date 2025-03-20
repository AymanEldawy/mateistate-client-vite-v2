import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { deleteAccount, deleteManyAccounts, getAllAccounts } from '@/services/accountService'
import AccountForm from '@/components/forms/containers/AccountForm'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import accountColumns from '@/helpers/account/accountColumns'
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {}

const validationSchema = () => { }

const accountConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationFunction: () => { },
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <AccountForm {...props} />
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
console.log("🚀 ~ Account ~ outerClose:", outerClose)

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