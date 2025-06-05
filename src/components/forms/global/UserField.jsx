import QUERY_KEYS from '@/data/queryKeys';
import { getAllUsers } from '@/services/userService';
import { useQuery } from '@tanstack/react-query';
import { RHFSelectFieldForTables } from '../fields';

const UserField = ({ name, allowAdd, ...props }) => {
  const { data: users } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: async () => {
      const response = await getAllUsers();
      return response?.data || [];
    },
  });

  const onInertNewOne = (value) => {

  }

  return (
    <RHFSelectFieldForTables
      options={users}
      name={name}
      allowAdd={allowAdd}
      table="user"
      onInertNewOne={onInertNewOne}
      {...props}
    />
  )
}

export default UserField