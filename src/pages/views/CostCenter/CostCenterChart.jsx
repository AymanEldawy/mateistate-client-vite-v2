
import ChartWrapper from '@/components/chartWrapper/ChartWrapper'
import QUERY_KEYS from '@/data/queryKeys'
import { usePopupForm } from '@/hook/usePopupForm'
import { getAllCostCenters, getCostCenterCodeNumber } from '@/services/CostCenterService'
import { useTranslation } from 'react-i18next'

const CostCenterChart = () => {
  const { t } = useTranslation()
  const { handleDispatchForm } = usePopupForm()

  // onSelectAddHandler
  const onAddItemHandler = async (item) => {
    console.log(item,'item');
    
    const id = item?.parentId ? item?.parentId : item?.id
    const response = await getCostCenterCodeNumber(id);
    if (response?.success) {
      let defaultValues = {
        code: response?.nextChildCode,
        parentId: response?.parentId,
      };
      handleDispatchForm({
        table: 'cost_center',
        oldValues: defaultValues
      })
    }
  };

  return (
    <ChartWrapper
      title={t('costCenterChart')}
      queryKey={QUERY_KEYS.Cost_center}
      queryFn={getAllCostCenters}
      name="cost_center"
      onAddItemHandler={onAddItemHandler}
    />
  )
}

export default CostCenterChart