import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { createAccount, deleteAccount, deleteManyAccounts, getAllAccounts, updateAccount } from '@/services/accountService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import accountColumns from '@/helpers/account/accountColumns'
import { lazy } from 'react'
// import QUERY_KEYS from './../../../data/queryKeys';
const AccountForm = lazy(() => import("@/components/forms/containers/AccountForm"))

const defaultValue = {}

const validationSchema = () => { }

const accountConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationAddFunction: createAccount,
    mutationUpdateFunction: updateAccount,
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

const ContractPattern = ({ formOnly, outerClose }) => {

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
      name="contract_pattern"
      queryKey={QUERY_KEYS.CONTRACT_PATTERN}
      queryFn={getAllAccounts}
      handleDeleteSelected={deleteManyAccounts}
      paperHeaderProps={{
        header: "contract_pattern"
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

export default ContractPattern