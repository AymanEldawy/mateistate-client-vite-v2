import QUERY_KEYS from '@/data/queryKeys';
import { getAllAccounts } from '@/services/accountService';
import { useQuery } from '@tanstack/react-query';
import { RHFSelectFieldForTables } from '../fields';

const AccountField = ({ name, allowAdd, ...props }) => {
  const { data: accounts } = useQuery({
    queryKey: [QUERY_KEYS.ACCOUNT],
    queryFn: async () => {
      const response = await getAllAccounts();
      return response?.data || [];
    },
  });

  const onInertNewOne = (value) => {
    console.log('called herer');
    
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

export default AccountField