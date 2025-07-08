import { RHFCheckbox, RHFInput, RHFSelectField } from '@/components/forms/fields'
import { AccountField } from '@/components/forms/global'
import DynamicForm from '@/components/forms/wrapper/DynamicForm'
import { ACCOUNT_GRID_TYPE, CONTACT_PATTERN_ASSETS_TYPE, CONTACT_PATTERN_CONTRACT_TYPE, CONTACT_PATTERN_RECORD_CREATED_DATE } from '@/helpers/DEFAULT_OPTIONS'
import { CONTRACT_PATTERN_default_accounts, CONTRACT_PATTERN_default_fees_accounts, CONTRACT_PATTERN_GENERAL, CONTRACT_PATTERN_moving_cost_center } from '@/helpers/patterns/contract/contractPatternFields'
import { CONTRACTS_PATTERN_STEPS } from '@/helpers/patterns/contract/contractPatternSteps'
import React from 'react'

const ContractPatternForm = ({ tab }) => {

  const displayForm = () => {
    switch (tab) {
      case CONTRACTS_PATTERN_STEPS.default_accounts:
        return <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
          <AccountField label="defaultRevenueAccountId" name="defaultRevenueAccountId" />
          <AccountField label="default_commission_from_clientAccountId" name="defaultCommissionFromClientAccountId" />
          <AccountField label="default_commission_from_ownerAccountId" name="defaultCommissionFromOwnerAccountId" />
          <AccountField label="default_contract_price_revenueAccountId" name="defaultContractPriceRevenueAccountId" />
          <AccountField label="default_contract_ratification_revenueAccountId" name="defaultContractRatificationRevenueAccountId" />
          <AccountField label="default_fines_revenueAccountId" name="defaultFinesRevenueAccountId" />
          <AccountField label="default_fee_revenueAccountId" name="defaultFeeRevenueAccountId" />
          <AccountField label="default_vatAccountId" name="defaultVatAccountId" />
          <AccountField label="default_discountAccountId" name="defaultDiscountAccountId" />
          <RHFInput label="default_commission_From_client_Percentage" name="defaultCommission_FromClient_Percentage" type="number" />
          <AccountField label="default_insuranceAccountId" name="defaultInsuranceAccountId" />
        </div>
      // return <DynamicForm labelClassName="min-w-[180px]" customGrid="grid-cols-2 gap-y-4" fields={CONTRACT_PATTERN_default_accounts} />
      case CONTRACTS_PATTERN_STEPS.pattern_default_fees_accounts:
        return <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
          <AccountField label="default_fees_account_1" name="defaultFeesAccount1" />
          <AccountField label="default_fees_account_2" name="defaultFeesAccount2" />
          <AccountField label="default_fees_account_3" name="defaultFeesAccount3" />
          <AccountField label="default_fees_account_4" name="defaultFeesAccount4" />
          <AccountField label="default_fees_account_5" name="defaultFeesAccount5" />
          <AccountField label="default_fees_account_6" name="defaultFeesAccount6" />
          <AccountField label="default_fees_account_7" name="defaultFeesAccount7" />
          <AccountField label="default_fees_account_8" name="defaultFeesAccount8" />
          <AccountField label="default_fees_account_9" name="defaultFeesAccount9" />
          <AccountField label="default_fees_account_10" name="defaultFeesAccount10" />
        </div>
      // return <DynamicForm fields={CONTRACT_PATTERN_default_fees_accounts} />
      case CONTRACTS_PATTERN_STEPS.moving_cost_center:
        return <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
          <RHFSelectField label="move_cost_center_with_revenue" name="moveCostCenterWithRevenue" options={ACCOUNT_GRID_TYPE} />
          <RHFSelectField label="move_cost_center_with_tenant" name="moveCostCenterWithTenant" options={ACCOUNT_GRID_TYPE} />
          <RHFSelectField label="move_cost_center_with_insurance_revenue" name="moveCostCenterWithInsuranceRevenue" options={ACCOUNT_GRID_TYPE} />
          <RHFSelectField label="move_cost_center_with_price_revenue" name="moveCostCenterWithPriceRevenue" options={ACCOUNT_GRID_TYPE} />
          <RHFSelectField label="move_cost_center_with_intention_ratifying" name="moveCostCenterWithIntentionRatifying" options={ACCOUNT_GRID_TYPE} />
          <RHFSelectField label="move_cost_center_with_other_fee" name="moveCostCenterWithOtherFee" options={ACCOUNT_GRID_TYPE} />
          <RHFSelectField label="move_cost_center_with_commission_client" name="moveCostCenterWithCommissionClient" options={ACCOUNT_GRID_TYPE} />
          <RHFSelectField label="move_cost_center_with_commission_owner" name="moveCostCenterWithCommissionOwner" options={ACCOUNT_GRID_TYPE} />
          <RHFSelectField label="move_cost_center_with_contract_fines_terminating" name="moveCostCenterWithContractFinesTerminating" options={ACCOUNT_GRID_TYPE} />
          <RHFSelectField label="move_cost_center_with_decisiveness_granted" name="moveCostCenterWithDecisivenessGranted" options={ACCOUNT_GRID_TYPE} />
          <RHFSelectField label="move_cost_center_with_contract_proceeds_rerminating" name="moveCostCenterWithContractProceedsRerminating" options={ACCOUNT_GRID_TYPE} />
        </div>
        // return <DynamicForm labelClassName="min-w-[250px]" customGrid="grid-cols-1" fields={CONTRACT_PATTERN_moving_cost_center} />
      default:
        return <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
          <RHFSelectField label="contractType" name="contractType" options={CONTACT_PATTERN_CONTRACT_TYPE} required={true} />
          <RHFSelectField label="assetsType" name="assetsType" options={CONTACT_PATTERN_ASSETS_TYPE} required={true} />
          <RHFInput label="code" name="code"/>
          <RHFInput label="name" name="name" required={true}/>
          <RHFInput label="ltnname" name="ltnname"/>
          <RHFInput label="listName" name="listName"/>
          <RHFInput label="shortcutKey" name="shortcutKey"/>
          <RHFSelectField label="recordDateCreated" name="recordDateCreated" options={CONTACT_PATTERN_RECORD_CREATED_DATE} required={true} />
          <RHFCheckbox label="genEntries" name="genEntries"/>
          <RHFCheckbox label="autoGenEntries" name="autoGenEntries"/>
          <RHFCheckbox label="autoTransferEntry" name="autoTransferEntry"/>
          <RHFCheckbox label="newContractWithoutTerminating" name="newContractWithoutTerminating"/>
          <RHFCheckbox label="insuranceRequired" name="insuranceRequired"/>
        </div>
        // return <DynamicForm fields={CONTRACT_PATTERN_GENERAL} />
    }
  }

  return (
    <div className="min-w-[800px] h-[75vh] p-4">
      {displayForm()}
    </div>
  )
}

export default ContractPatternForm