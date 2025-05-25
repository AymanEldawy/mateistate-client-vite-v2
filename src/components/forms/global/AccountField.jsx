import { RHFAsyncSelectField } from '../fields'
import { getAccountSearch, getSingleAccount } from '@/services/accountService'

const AccountField = ({ name, ...props }) => {
  return (
    <RHFAsyncSelectField
      name={name}
      getSearch={getAccountSearch}
      getSingle={getSingleAccount}
      {...props}
      allowAdd
    />
  )
}

export default AccountField