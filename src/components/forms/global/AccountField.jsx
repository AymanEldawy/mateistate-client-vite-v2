import { RHFAsyncSelectField } from '../fields'
import { getAccountSearch, getSingleAccount } from '@/services/accountService'

const AccountField = ({ name, allowAdd = true, ...props }) => {
  return (
    <RHFAsyncSelectField
      name={name}
      getSearch={getAccountSearch}
      getSingle={getSingleAccount}
      allowAdd={allowAdd}
      {...props}
    />
  )
}

export default AccountField