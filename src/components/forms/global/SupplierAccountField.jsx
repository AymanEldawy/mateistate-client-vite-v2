import QUERY_KEYS from '@/data/queryKeys';
import { getAccountSuppliersOnly } from '@/services/accountService';
import { useQuery } from '@tanstack/react-query';
import { RHFSelectFieldForTables } from '../fields';

const SupplierAccountField = ({ name, allowAdd, ...props }) => {
  const { data: accounts } = useQuery({
    queryKey: [QUERY_KEYS.ACCOUNT, 'supplier'],
    queryFn: async () => {
      const response = await getAccountSuppliersOnly();
      return response?.data || [];
    },
  });

  const onInertNewOne = (value) => {

  }

  return (
    <RHFSelectFieldForTables
      options={accounts}
      name={name}
      allowAdd={allowAdd}
      table="account"
      onInertNewOne={onInertNewOne}
      {...props}
    />
  )
}

export default SupplierAccountField