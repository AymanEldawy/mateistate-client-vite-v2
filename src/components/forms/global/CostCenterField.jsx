import QUERY_KEYS from '@/data/queryKeys';
import { getAllCostCenters } from '@/services/CostCenterService';
import { useQuery } from '@tanstack/react-query';
import { RHFSelectFieldForTables } from '../fields';

const CostCenterField = ({ name, ...props }) => {
  const { data: costCenters } = useQuery({
    queryKey: [QUERY_KEYS.Cost_center],
    queryFn: async () => {
      const response = await getAllCostCenters();
      return response?.data || [];
    },
  });

  return (
    <RHFSelectFieldForTables
      options={costCenters}
      name={name}
      table="cost_center"
      {...props}
    />
  )
}

export default CostCenterField