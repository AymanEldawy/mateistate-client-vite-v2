import QUERY_KEYS from '@/data/queryKeys';
import { getAllStores } from '@/services/storeService';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { RHFSelectFieldForTables } from '../fields';

const StoreField = ({ name, allowAdd, ...props }) => {
  const { setValue } = useFormContext()
  const queryClient = useQueryClient();

  const { data: stores } = useQuery({
    queryKey: [QUERY_KEYS.STORE],
    queryFn: async () => {
      const response = await getAllStores();
      return response?.data || [];
    },
  });

  const onInsertDispatchedForm = (value) => {
    if (value && value.id) {
      queryClient.setQueryData([QUERY_KEYS.STORE], (oldData) => {
        const newStores = [...(oldData || []), value];
        return newStores;
      });

      setTimeout(() => {
        setValue(name, value?.id);
      }, 200);
    }
  }


  return (
    <RHFSelectFieldForTables
      options={stores}
      name={name}
      allowAdd={allowAdd}
      table="store"
      onInsertDispatchedForm={onInsertDispatchedForm}
      {...props}
    />
  )
}

export default StoreField