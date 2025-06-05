import QUERY_KEYS from '@/data/queryKeys';
import { getAccountCustomersOnly } from '@/services/accountService';
import { useQuery } from '@tanstack/react-query';
import { RHFSelectFieldForTables } from '../fields';

const CustomersAccountField = ({ name, allowAdd, ...props }) => {
  const { data: accounts } = useQuery({
    queryKey: [QUERY_KEYS.ACCOUNT, 'customers'],
    queryFn: async () => {
      const response = await getAccountCustomersOnly();
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

export default CustomersAccountField