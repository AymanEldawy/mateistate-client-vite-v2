import { RHFCheckbox, RHFInput, RHFSelectField } from '@/components/forms/fields'
import { AccountField } from '@/components/forms/global'
import DynamicForm from '@/components/forms/wrapper/DynamicForm'
import { VOUCHER_PATTERN_FIELDS, VOUCHER_PATTERN_GENERAL } from '@/helpers/patterns/voucher/voucherPatternFields'
import { VOUCHER_PATTERN_STEPS } from '@/helpers/patterns/voucher/voucherPatternSteps'

const VoucherPatternForm = ({ tab }) => {
  const displayForm = () => {
    switch (tab) {
      case VOUCHER_PATTERN_STEPS.voucher_fields:
        return <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
          <RHFCheckbox label="showDebitField" name="showDebitField"/>
          <RHFCheckbox label="showCreditField" name="showCreditField"/>
          <RHFInput label="debitFieldLabel" name="debitFieldLabel"/>
          <RHFInput label="creditFieldLabel" name="creditFieldLabel"/>
          <RHFCheckbox label="showCurrency" name="showCurrency"/>
          <RHFCheckbox label="showCostCenter" name="showCostCenter"/>
          <RHFCheckbox label="showNote" name="showNote"/>
          <RHFInput label="oddTableColor" name="oddTableColor"/>
          <RHFInput label="evenTableColor" name="evenTableColor"/>
          </div>
        // return <DynamicForm customGrid="grid-cols-2 gap-y-4" fields={VOUCHER_PATTERN_FIELDS} />
      default:
        return <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
          <RHFInput label="code" name="code" type="number"/>
          <RHFInput label="name" name="name" required={true}/>
          <RHFInput label="ltnname" name="ltnname"/>
          <RHFInput label="listName" name="listName"/>
          <AccountField label="defaultAccountId" name="defaultAccountId"/>
          <RHFInput label="shortcutKey" name="shortcutKey"/>
          <RHFCheckbox label="genEntries" name="genEntries"/>
          <RHFCheckbox label="autoGenEntries" name="autoGenEntries"/>
          <RHFCheckbox label="autoTransferEntry" name="autoTransferEntry"/>
          <RHFCheckbox label="generateRecords" name="generateRecords"/>
          <RHFCheckbox label="showContractField" name="showContractField"/>
          <RHFCheckbox label="showContractCostCenter" name="showContractCostCenter"/>
          <RHFCheckbox label="requiredCostCenter" name="requiredCostCenter"/>
          <RHFCheckbox label="requiredStatement" name="requiredStatement"/>
          <RHFInput label="defaultPrintFolderPath" name="defaultPrintFolderPath"/>
          </div>
        // return <DynamicForm customGrid="grid-cols-2 gap-y-4" fields={VOUCHER_PATTERN_GENERAL} />
    }
  }

  return (
    <div className="min-w-[800px] h-[75vh]">
      {displayForm()}
    </div>
  )
}

export default VoucherPatternForm