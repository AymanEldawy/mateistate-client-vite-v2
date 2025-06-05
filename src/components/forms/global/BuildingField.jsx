import QUERY_KEYS from '@/data/queryKeys';
import { getAllBuildings } from '@/services/buildingService';
import { useQuery } from '@tanstack/react-query';
import { RHFSelectFieldForTables } from '../fields';

const BuildingField = ({ name, ...props }) => {
  const { data: buildings } = useQuery({
    queryKey: [QUERY_KEYS.BUILDING],
    queryFn: async () => {
      const response = await getAllBuildings();
      return response?.data || [];
    },
  });

  return (
    <RHFSelectFieldForTables
      options={buildings}
      name={name}
      table="building"
      {...props}
    />
  )
}

export default BuildingField