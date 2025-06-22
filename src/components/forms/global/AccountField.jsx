import QUERY_KEYS from '@/data/queryKeys';
import { getAllAccounts } from '@/services/accountService';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { RHFSelectFieldForTables } from '../fields';

const AccountField = ({ name, allowAdd, ...props }) => {
  const { setValue } = useFormContext()
  const queryClient = useQueryClient();

  const { data: accounts } = useQuery({
    queryKey: [QUERY_KEYS.ACCOUNT],
    queryFn: async () => {
      const response = await getAllAccounts();
      return response?.data || [];
    },
  });

  const onInsertDispatchedForm = (value) => {
    if (value && value?.account.id) {
      queryClient.setQueryData([QUERY_KEYS.ACCOUNT], (oldData) => {
        const newAccounts = [...(oldData || []), value];
        return newAccounts;
      });

      setTimeout(() => {
        setValue(name, value?.account.id);
      }, 200);
    }
  }


  return (
    <RHFSelectFieldForTables
      options={accounts}
      name={name}
      allowAdd={allowAdd}
      table="account"
      onInsertDispatchedForm={onInsertDispatchedForm}
      {...props}
    />
  )
}

export default AccountField