import ChartWrapper from '@/components/chartWrapper/ChartWrapper'
import QUERY_KEYS from '@/data/queryKeys'
import { usePopupForm } from '@/hook/usePopupForm'
import { getAccountChildrenByParentId, getAccountCodeNumber, getAllAccounts, getAllChartAccounts } from '@/services/accountService'
import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next'

const AccountChart = () => {
  const { t } = useTranslation()
  const { handleDispatchForm } = usePopupForm()


  // onSelectAddHandler
  const onAddItemHandler = async (item) => {
    const response = await getAccountCodeNumber(item?.id);
    if (response?.success) {
      let defaultValues = {
        type: 1,
        account: {
          type: 1,
          code: response?.data?.nextChildCode,
          parentId: response?.data?.parentId,
          finalId: response?.data?.finalId,
        }
      };
      handleDispatchForm({
        table: 'account',
        oldValues: defaultValues
      })
    }
  };

  return (
    <ChartWrapper
      title={t('accountChart')}
      queryKey={QUERY_KEYS.ACCOUNT}
      // queryFn={getAllChartAccounts}
      queryFn={getAllAccounts}
      onClickAdd={getAccountCodeNumber}
      onSelectItem={getAccountChildrenByParentId}
      name="account"
      onAddItemHandler={onAddItemHandler}
    />
  )
}

export default AccountChart