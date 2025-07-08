import { RHFAsyncSelectField, RHFCheckbox, RHFInput, RHFSelectField } from '@/components/forms/fields'
import { AccountField } from '@/components/forms/global'
import DynamicForm from '@/components/forms/wrapper/DynamicForm'
import { BILL_PATTERN_BILL_TYPE, BILL_PATTERN_PAYMENT_METHODS } from '@/helpers/DEFAULT_OPTIONS'
import { BILL_PATTERN_accounts, BILL_PATTERN_bill_DETAILS, BILL_PATTERN_ENTRIES, BILL_PATTERN_general, BILL_PATTERN_OPTIONS, BILL_PATTERN_REFERENCES } from '@/helpers/patterns/bill/billPatternFields'
import { BILL_PATTERN_STEPS } from '@/helpers/patterns/bill/billPatternSteps'
import { getSearchCostCenter, getSingleCostCenter } from '@/services/CostCenterService'
import { getSearchCurrency, getSingleCurrency } from '@/services/currencyService'
import { getSearchStore, getSingleStore } from '@/services/storeService'

const BillPatternForm = ({ tab }) => {

  const displayForm = () => {
    switch (tab) {
      case BILL_PATTERN_STEPS.accounts:
        return  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <RHFAsyncSelectField getSearch={getSearchStore} getSingle={getSingleStore} label="defaultStoreId" name="defaultStoreId"/>
          <RHFAsyncSelectField getSearch={getSearchCostCenter} getSingle={getSingleCostCenter} label="costCenterId" name="costCenterId"/>
          <AccountField label="materialAccountId" name="materialAccountId"/>
          <AccountField label="cashAccountId" name="cashAccountId"/>
          <AccountField label="discountAccountId" name="discountAccountId"/>
          <AccountField label="extraAccountId" name="extraAccountId"/>
          <RHFSelectField options={BILL_PATTERN_PAYMENT_METHODS} label="paymentMethod" name="paymentMethod"/>
          <RHFCheckbox label="activePerpetualInventory" name="activePerpetualInventory"/>
          <AccountField label="stockAccountId" name="stockAccountId"/>
          <RHFAsyncSelectField getSearch={getSearchCostCenter} getSingle={getSingleCostCenter} label="calculateSaleCostCenterId" name="calculateSaleCostCenterId"/>
          <AccountField label="vatAccountId" name="vatAccountId"/>
          <RHFInput label="vatPercentage" name="vatPercentage" type="number" />
          <RHFCheckbox label="useVatAccountFromCustomerCard" name="useVatAccountFromCustomerCard"/>
        </div>
        // return <DynamicForm fields={BILL_PATTERN_accounts} />
      case BILL_PATTERN_STEPS.entries:
        return <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <RHFCheckbox label="postToStore" name="postToStore"/>
        <RHFCheckbox label="postToStoreAuto" name="postToStoreAuto"/>
        <RHFCheckbox label="generateEntries" name="generateEntries"/>
        <RHFCheckbox label="autoGenerateEntries" name="autoGenerateEntries"/>
        <RHFCheckbox label="postGenerateEntriesAuto" name="postGenerateEntriesAuto"/>
        <RHFCheckbox label="deletingEntryDependingOnMaterials" name="deletingEntryDependingOnMaterials"/>
        <RHFCheckbox label="possibilityOfChangingMaterialsAccount" name="possibilityOfChangingMaterialsAccount"/>
        <RHFCheckbox label="calculateVatAfterDiscountAndExtraValueToTheInvoice" name="calculateVatAfterDiscountAndExtraValueToTheInvoice"/>
        <RHFCheckbox label="mergeRepeatedMaterials" name="mergeRepeatedMaterials"/>
        <RHFCheckbox label="requiredCustomerEntry" name="requiredCustomerEntry"/>
        <RHFCheckbox label="requiredCostCenterEntry" name="requiredCostCenterEntry"/>
        <RHFCheckbox label="requiredCategoryEntry" name="requiredCategoryEntry"/>
        <RHFCheckbox label="showAlertOnNavigateOutput" name="showAlertOnNavigateOutput"/>
        <RHFCheckbox label="dontSaveWhenNavigateOutput" name="dontSaveWhenNavigateOutput"/>
        <RHFCheckbox label="showAveragePriceCheckMessageAfterAddingModifying" name="showAveragePriceCheckMessageAfterAddingModifying"/>
      </div>
        // return <DynamicForm fields={BILL_PATTERN_ENTRIES} />
      case BILL_PATTERN_STEPS.options:
        return <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <RHFCheckbox label="billAffectedThePricingOfMaterials" name="billAffectedThePricingOfMaterials"/>
        <RHFInput label="pricingOfMaterials" name="pricingOfMaterials" type="number" />
        <RHFInput label="menu" name="menu" />
        <RHFInput label="tableColor1" name="tableColor1" type="color" />
        <RHFInput label="tableColor2" name="tableColor2" type="color" />
      </div>
        // return <DynamicForm fields={BILL_PATTERN_OPTIONS} />
        case BILL_PATTERN_STEPS.bill_details:
          return <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        </div>
        // return <DynamicForm fields={BILL_PATTERN_bill_DETAILS} />
      case BILL_PATTERN_STEPS.references:
        return <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <RHFCheckbox label="showReferencesField" name="showReferencesField"/>
        <RHFCheckbox label="requiredReferenceField" name="requiredReferenceField"/>
        <RHFCheckbox label="dontShowExpiredField" name="dontShowExpiredField"/>
        <RHFCheckbox label="lockBillWhenLoadingReferences" name="lockBillWhenLoadingReferences"/>
        <RHFCheckbox label="allowPartialLoad" name="allowPartialLoad"/>
        <RHFInput label="references" name="references" type="jsonb[]" />
      </div>
      // return <DynamicForm fields={BILL_PATTERN_REFERENCES} />
      default:
        return <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <RHFInput label="code" name="code" type="number" />
        <RHFInput label="name" name="name" />
        <RHFInput label="ltnname" name="ltnname" />
        <RHFInput label="number" name="number" type="number" />
        <RHFSelectField options={BILL_PATTERN_BILL_TYPE} label="billType" name="billType"/>
        <RHFInput label="note" name="note" />
        <RHFAsyncSelectField getSearch={getSearchCurrency} getSingle={getSingleCurrency} label="currencyId" name="currencyId"/>
        <RHFCheckbox label="barcodeBill" name="barcodeBill"/>
      </div>
      // return <DynamicForm fields={BILL_PATTERN_general} />
    }
  }

  return (
    <div className="min-w-[800px] h-[75vh]">
      {displayForm()}
    </div>
  )
}

export default BillPatternForm