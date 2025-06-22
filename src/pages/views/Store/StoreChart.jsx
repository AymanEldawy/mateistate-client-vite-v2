import ChartWrapper from '@/components/chartWrapper/ChartWrapper'
import QUERY_KEYS from '@/data/queryKeys'
import { usePopupForm } from '@/hook/usePopupForm'
import { getAllStores, getStoreCodeNumber } from '@/services/storeService'
import { useTranslation } from 'react-i18next'

const StoreChart = () => {
  const { t } = useTranslation()
  const { handleDispatchForm } = usePopupForm()


  // onSelectAddHandler
  const onAddItemHandler = async (item) => {
    const response = await getStoreCodeNumber(item?.id);
    if (response?.success) {
      let defaultValues = {
        code: response?.nextChildCode,
        parentId: response?.parentId,
        finalId: response?.finalId || response?.parentId,
      };
      handleDispatchForm({
        table: 'store',
        oldValues: defaultValues
      })
    }
  };

  return (
    <ChartWrapper
      title={t('storeChart')}
      queryKey={QUERY_KEYS.STORE}
      queryFn={getAllStores}
      name="store"
      onAddItemHandler={onAddItemHandler}
    />
  )
}

export default StoreChart