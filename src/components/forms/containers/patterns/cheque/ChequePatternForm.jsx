import { RHFAsyncSelectField, RHFCheckbox, RHFInput, RHFSelectField } from '@/components/forms/fields'
import { AccountField } from '@/components/forms/global'
import DynamicForm from '@/components/forms/wrapper/DynamicForm'
import { CHEQUE_PATTERN_DEFAULT_DATE, CHEQUE_PATTERN_PAPER_TYPE } from '@/helpers/DEFAULT_OPTIONS'
import { CHEQUE_PATTERN_COLLECTION, CHEQUE_PATTERN_COMMISSION, CHEQUE_PATTERN_GENERAL, CHEQUE_PATTERN_PARTIAL_COLLECTION, CHEQUE_PATTERN_RETURN, CHEQUE_PATTERN_STATEMENTS } from '@/helpers/patterns/cheque/chequePatternFields'
import { CHEQUE_PATTERN_STEPS } from '@/helpers/patterns/cheque/chequePatternSteps'

const ChequePatternForm = ({ tab }) => {

  const displayForm = () => {
    switch (tab) {
      case CHEQUE_PATTERN_STEPS.commission:
        return <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <RHFCheckbox label="commissionAmountFromBuilding" name="commissionAmountFromBuilding"/>
        <RHFCheckbox label="commissionDefaultAccountIsBuildingOwner" name="commissionDefaultAccountIsBuildingOwner"/>
        <RHFCheckbox label="commissionDefaultObserveIsRevenueAccount" name="commissionDefaultObserveIsRevenueAccount"/>
        <RHFCheckbox label="commissionMoveCostCenterDebit" name="commissionMoveCostCenterDebit"/>
        <RHFCheckbox label="commissionMoveCostCenterCredit" name="commissionMoveCostCenterCredit"/>
        <RHFSelectField options={CHEQUE_PATTERN_DEFAULT_DATE} label="commissionType" name="commissionType"/>
        <AccountField label="commissionDebitAccountId" name="commissionDebitAccountId"/>
        <AccountField label="commissionCreditAccountId" name="commissionCreditAccountId"/>
        </div>
        // return <DynamicForm customGrid="grid-cols-2" fields={CHEQUE_PATTERN_COMMISSION} />
      case CHEQUE_PATTERN_STEPS.collection:
        return <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
        <RHFCheckbox label="collection" name="collection"/>
        <RHFCheckbox label="collectionGenEntries" name="collectionGenEntries"/>
        <RHFCheckbox label="collectionAutoGenEntries" name="collectionAutoGenEntries"/>
        <RHFCheckbox label="collectionAutoTransferEntry" name="collectionAutoTransferEntry"/>
        <RHFCheckbox label="collectionDefaultAccountIsBuildingBank" name="collectionDefaultAccountIsBuildingBank"/>
        <RHFCheckbox label="collectionDefaultObserveAccountIsClient" name="collectionDefaultObserveAccountIsClient"/>
        <RHFCheckbox label="collectionMoveCostCenterDebit" name="collectionMoveCostCenterDebit"/>
        <RHFCheckbox label="collectionMoveCostCenterCredit" name="collectionMoveCostCenterCredit"/>
        <RHFSelectField options={CHEQUE_PATTERN_DEFAULT_DATE} label="collectionDefaultDate" name="collectionDefaultDate"/>
        <AccountField label="collectionCreditAccountId" name="collectionCreditAccountId"/>
        <AccountField label="collectionDebitAccountId" name="collectionDebitAccountId"/>
        </div>
        // return <DynamicForm customGrid="grid-cols-2" fields={CHEQUE_PATTERN_COLLECTION} />
      case CHEQUE_PATTERN_STEPS.partial_collection:
        return <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
        <RHFCheckbox label="partialCollection" name="partialCollection"/>
        <RHFCheckbox label="partialGenEntries" name="partialGenEntries"/>
        <RHFCheckbox label="partialAutoGenEntries" name="partialAutoGenEntries"/>
        <RHFCheckbox label="partialAutoTransferEntry" name="partialAutoTransferEntry"/>
        <RHFCheckbox label="partialDefaultAccountIsBuildingBank" name="partialDefaultAccountIsBuildingBank"/>
        <RHFCheckbox label="partialDefaultObserveAccountIsClient" name="partialDefaultObserveAccountIsClient"/>
        <RHFCheckbox label="partialMoveCostCenterDebit" name="partialMoveCostCenterDebit"/>
        <RHFCheckbox label="partialMoveCostCenterCredit" name="partialMoveCostCenterCredit"/>
        <AccountField label="partialDebitAccountId" name="partialDebitAccountId"/>
        <AccountField label="partialCreditAccountId" name="partialCreditAccountId"/>
        </div>
        // return <DynamicForm customGrid="grid-cols-2" fields={CHEQUE_PATTERN_PARTIAL_COLLECTION} />
      case CHEQUE_PATTERN_STEPS.return:
        return <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
        <RHFCheckbox label="returnable" name="returnable"/>
        <RHFCheckbox label="returnableGenEntries" name="returnableGenEntries"/>
        <RHFCheckbox label="returnableAutoGenEntries" name="returnableAutoGenEntries"/>
        <RHFCheckbox label="returnableAutoTransferEntry" name="returnableAutoTransferEntry"/>
        <RHFCheckbox label="returnableDefaultAccountIsBuildingBank" name="returnableDefaultAccountIsBuildingBank"/>
        <RHFCheckbox label="returnableDefaultObserveAccountIsClient" name="returnableDefaultObserveAccountIsClient"/>
        <RHFCheckbox label="returnableMoveCostCenterDebit" name="returnableMoveCostCenterDebit"/>
        <RHFCheckbox label="returnableMoveCostCenterCredit" name="returnableMoveCostCenterCredit"/>
        <RHFSelectField options={CHEQUE_PATTERN_DEFAULT_DATE} label="returnableDefaultDate" name="returnableDefaultDate"/>
        <AccountField label="returnableCreditAccountId" name="returnableCreditAccountId"/>
        <AccountField label="returnableDebitAccountId" name="returnableDebitAccountId"/>
        </div>
        // return <DynamicForm customGrid="grid-cols-2" fields={CHEQUE_PATTERN_RETURN} />
        case CHEQUE_PATTERN_STEPS.default_statement:
          return <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
        <RHFInput label="statementAccount" name="statementAccount"/>
        <RHFInput label="statementObserveAccount" name="statementObserveAccount"/>
        <RHFInput label="statementCollection" name="statementCollection"/>
        <RHFInput label="statementReturn" name="statementReturn"/>
        <RHFInput label="statementPartial" name="statementPartial"/>
        </div>
        // return <DynamicForm customGrid="grid-cols-2" fields={CHEQUE_PATTERN_STATEMENTS} />
        default:
          return <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
        <RHFSelectField options={CHEQUE_PATTERN_PAPER_TYPE} label="paperType" name="paperType" required={true}/>
        <RHFInput label="name" name="name" required={true}/>
        <RHFInput label="ltnname" name="ltnname"/>
        <RHFInput label="optionsName" name="optionsName"/>
        <AccountField label="defaultAccountId" name="defaultAccountId"/>
        <RHFInput label="defaultPrintFolder" name="defaultPrintFolder"/>
        <RHFCheckbox label="genEntries" name="genEntries"/>
        <RHFCheckbox label="autoGenEntries" name="autoGenEntries"/>
        <RHFCheckbox label="autoTransferEntry" name="autoTransferEntry"/>
        </div>
        // return <DynamicForm customGrid="grid-cols-2" fields={CHEQUE_PATTERN_GENERAL} />
    }
  }

  return (
    <div className="min-w-[800px] h-[75vh]">
      {displayForm()}
    </div>
  )
}

export default ChequePatternForm