import ChartWrapper from '@/components/chartWrapper/ChartWrapper'
import QUERY_KEYS from '@/data/queryKeys'
import { getAccountChildrenByParentId, getAccountCodeNumber, getAllAccounts, getAllChartAccounts } from '@/services/accountService'
import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next'

const AccountChart = () => {
  const { t } = useTranslation()


  return (
    <ChartWrapper
      title={t('accountChart')}
      queryKey={QUERY_KEYS.ACCOUNT}
      queryFn={getAllChartAccounts}
      // queryFn={getAllAccounts}
      onClickAdd={getAccountCodeNumber}
      onSelectItem={getAccountChildrenByParentId}
      name="account"
    />
  )
}

export default AccountChart