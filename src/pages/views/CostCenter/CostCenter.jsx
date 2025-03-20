import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { deleteAccount, deleteManyAccounts, getAllAccounts } from '@/services/accountService'
import AccountForm from '@/components/forms/containers/AccountForm'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import costCenterColumns from '@/helpers/costCenter/costCenterColumns'
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {}

const validationSchema = () => { }

const costCenterConfig = {
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

const CostCenter = ({ formOnly, outerClose }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...costCenterConfig}
        outerClose={outerClose}
      />
    )
  }


  return (
    <PaperLayout
      name="cost_center"
      queryKey={QUERY_KEYS.ACCOUNT}
      queryFn={getAllAccounts}
      handleDeleteSelected={deleteManyAccounts}
      paperHeaderProps={{
        header: "cost_center"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        tableColumns: costCenterColumns
      }}
      {...costCenterConfig}

    />
  )
}

export default CostCenter