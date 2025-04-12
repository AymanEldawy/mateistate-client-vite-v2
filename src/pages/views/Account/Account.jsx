import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { createAccount, deleteAccount, deleteManyAccounts, getAllAccounts, getSingleAccount, updateAccount } from '@/services/accountService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import accountColumns from '@/helpers/account/accountColumns'
import { lazy } from 'react'
// import QUERY_KEYS from './../../../data/queryKeys';
const AccountForm = lazy(() => import("@/components/forms/containers/AccountForm"))
import { z } from "zod";

const validationSchema = z.object({
  code: z.string().min(1, { message: "Code is required" }),
  name: z.string().min(3, { message: "Name is required" }),
  type: z.number().int(),
});

const defaultValue = {
  code: "",
  type: 1,
  name: "",
  note: "",
  parent_id: null,
  final_id: null,
  account_assembly: [
    { account_id: null }
  ],
  account_distributive: [
    { account_id: null, percentage: 0 }
  ]
};

const accountConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationAddFunction: createAccount,
    mutationUpdateFunction: updateAccount,
    getSingleFunction: getSingleAccount,
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
        columns: accountColumns
      }}
      {...accountConfig}

    />
  )
}

export default Account