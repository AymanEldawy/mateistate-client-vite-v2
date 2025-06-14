import QUERY_KEYS from '@/data/queryKeys';
import { getAllUsers } from '@/services/userService';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { RHFSelectFieldForTables } from '../fields';

const UserField = ({ name, allowAdd, ...props }) => {
  const { setValue } = useFormContext()
  const queryClient = useQueryClient();


  const { data: users } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: async () => {
      const response = await getAllUsers();
      return response?.data || [];
    },
  });

  const onInsertDispatchedForm = (value) => {
    if (value && value?.account.id) {
      queryClient.setQueryData([QUERY_KEYS.ACCOUNT, 'customers'], (oldData) => {
        const newAccounts = [...(oldData || []), value];
        return newAccounts;
      });
      setTimeout(() => {
        setValue(name, value?.user.id);
      }, 200);
    }
  }

  return (
    <RHFSelectFieldForTables
      options={users}
      name={name}
      allowAdd={allowAdd}
      table="user"
      onInsertDispatchedForm={onInsertDispatchedForm}
      {...props}
    />
  )
}

export default UserField