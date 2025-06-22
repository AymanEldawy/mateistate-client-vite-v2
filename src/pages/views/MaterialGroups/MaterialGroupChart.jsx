import ChartWrapper from '@/components/chartWrapper/ChartWrapper'
import QUERY_KEYS from '@/data/queryKeys'
import { usePopupForm } from '@/hook/usePopupForm'
import { getAllMaterialGroups, getMaterialGroupCodeNumber } from '@/services/materialGroupsService'
import { useTranslation } from 'react-i18next'

const MaterialGroupChart = () => {
  const { t } = useTranslation()
  const { handleDispatchForm } = usePopupForm()

  // onSelectAddHandler
  const onAddItemHandler = async (item) => {
    const response = await getMaterialGroupCodeNumber(item?.id);
    if (response?.success) {
      let defaultValues = {
        code: response?.data?.nextChildCode,
        parentId: response?.data?.parentId,
      };
      handleDispatchForm({
        table: 'materia_group',
        oldValues: defaultValues
      })
    }
  };

  return (
    <ChartWrapper
      title={t('materialGroupChart')}
      queryKey={QUERY_KEYS.MATERIAL_GROUP}
      queryFn={getAllMaterialGroups}
      name="material_group"
      onAddItemHandler={onAddItemHandler}
    />
  )
}

export default MaterialGroupChart