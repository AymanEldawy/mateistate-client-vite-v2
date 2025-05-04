import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { createAccount, deleteAccount, deleteManyAccounts, getAllAccounts, getSingleAccount, updateAccount } from '@/services/accountService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import accountColumns from '@/helpers/account/accountColumns'
import { lazy } from 'react'
import { accountDefaultValue, accountValidationSchema } from '@/helpers/account/accountValidationSchema'
const AccountForm = lazy(() => import("@/components/forms/containers/AccountForm"))

const accountConfig = {
  formProps: {
    defaultValue: accountDefaultValue,
    validationSchema: accountValidationSchema,
    mutationAddFunction: createAccount,
    mutationUpdateFunction: updateAccount,
    getSingleFunction: getSingleAccount,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <AccountForm {...props} />
  },
  formHeaderProps: {
    header: "account"
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