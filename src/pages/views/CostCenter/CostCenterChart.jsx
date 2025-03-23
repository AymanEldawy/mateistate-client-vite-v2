import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { deleteAccount, deleteManyAccounts, getAllAccounts } from '@/services/accountService'
import AccountColumns from '@/helpers/account/accountColumns'
import AccountForm from '@/components/forms/containers/AccountForm'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {}

const validationSchema = () => { }

const accountConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationAddFunction: () => { },
    mutationUpdateFunction: () => { },
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
        tableColumns: AccountColumns
      }}
      {...accountConfig}

    />
  )
}

export default Account