import QUERY_KEYS from '@/data/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { RHFSelectFieldForTables } from '../fields';

const PropertyValuesField = ({ name, ...props }) => {
  const { data: propertyValues } = useQuery({
    queryKey: [QUERY_KEYS.BUILDING],
    queryFn: async () => {
      // const response = await geallproper();
      // return response?.data || [];
    },
  });

  return (
    <RHFSelectFieldForTables
      options={propertyValues}
      name={name}
      table="building"
      {...props}
    />
  )
}

export default PropertyValuesField