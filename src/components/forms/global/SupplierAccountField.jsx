import QUERY_KEYS from '@/data/queryKeys';
import { getAccountSuppliersOnly } from '@/services/accountService';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { RHFSelectFieldForTables } from '../fields';

const SupplierAccountField = ({ name, allowAdd, ...props }) => {
  const { setValue } = useFormContext()
  const queryClient = useQueryClient();

  const { data: accounts } = useQuery({
    queryKey: [QUERY_KEYS.ACCOUNT, 'supplier'],
    queryFn: async () => {
      const response = await getAccountSuppliersOnly();
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
      options={accounts}
      name={name}
      allowAdd={allowAdd}
      table="account"
      onInsertDispatchedForm={onInsertDispatchedForm}
      {...props}
    />
  )
}

export default SupplierAccountField