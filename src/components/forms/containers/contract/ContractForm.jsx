import { mergePatternWithContractData } from "@/helpers/contract/contractHelpers"
import { GLOBAL_CONTRACT_STEPS } from "@/helpers/contract/contractSteps"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import ContractFormCommission from "./ContractFormCommission"
import ContractFormContractCycle from "./ContractFormContractCycle"
import ContractFormGeneral from "./ContractFormGeneral"
import ContractFormLinkedParking from "./ContractFormLinkedParking"
import ContractFormOtherFees from "./ContractFormOtherFees"
import ContractFormPayments from "./ContractFormPayments"
import ContractFormTermination from "./ContractFormTermination"




const ContractForm = ({ tab, code, pattern }) => {
  const {
    setValue,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (!pattern) return;
    mergePatternWithContractData(pattern, watch, setValue)
  }, [pattern, watch, setValue]);

  console.log(pattern, '-oa');




  // useEffect(() => {
  //   if (currentIndex !== 0 || !PATTERN_SETTINGS?.id) return;
  //   let newFields = [];
  //   for (const field of forms?.[steps?.[0]]?.fields) {
  //     if (
  //       field?.name === "current_securing_value" &&
  //       PATTERN_SETTINGS?.insurance_required
  //     ) {

  //       field.required = true;
  //     }
  //     if (
  //       field?.name === "insurance_account_id" &&
  //       PATTERN_SETTINGS?.insurance_required
  //     ) {
  //       field.required = true;
  //     }
  //     if (
  //       (field?.name === "vat_account_id" || field?.name === 'vat_value' || field?.name === 'vat_rate') &&
  //       PATTERN_SETTINGS?.vat_required
  //     ) {
  //       field.required = true;
  //     }
  //     newFields.push(field);
  //   }

  //   setFields(newFields);
  //   setShouldRefresh((p) => !p);
  // }, [PATTERN_SETTINGS, currentIndex]);

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => {
  //     switch (name) {

  //       case 'contract.end_duration_date':

  //         if (type === 'change' && watch('contract.start_duration_date') && watch('contract.end_duration_date') && Date.parse(watch('contract.end_duration_date')) < Date.parse(watch('contract.start_duration_date'))) {
  //           toast.error('End date should be grater than start date')
  //           // setValue('contract.end_duration_date', new Date(watch('contract.start_duration_date')))
  //         }
  //         break


  //       case `contract.${assetType}_id`:
  //         if (watch(name)) {
  //           fetchAndMergeAssetInfo(assetType, watch(name), setValue);
  //         }
  //         break;
  //       case `contract.building_id`:
  //         if (watch(name)) {
  //           fetchAndMergeBuildingInfo(watch(name), setValue);
  //           filterAssetsByBuilding(
  //             watch(name),
  //             assetType,
  //             CACHE_LIST,
  //             setCACHE_LIST,
  //             oldContracts
  //           );
  //           setValue(`contract.${assetType}_id`, null);
  //         }
  //         break;
  //       default:
  //     }

  //     if (name?.indexOf("contract.") !== -1) {
  //       onWatchChangesInTab1(
  //         name?.split(".")?.at(-1),
  //         setValue,
  //         watch,
  //       );
  //     }
  //     if (name?.indexOf(`installment.`) !== -1) {
  //       onWatchChangesInstallmentTab(
  //         name?.split(".")?.at(-1),
  //         watch(name),
  //         setValue,
  //         watch
  //       );
  //     }

  //     if (name?.indexOf(`contract_termination`) !== -1) {
  //       onWatchChangesTerminationTab(
  //         name?.split(".")?.at(-1),
  //         watch(name),
  //         watch,
  //         setValue
  //       );
  //     }

  //     if (name?.indexOf(`installment_grid`) !== -1) {
  //       let subName = name?.split(".")?.at(-1);
  //       switch (subName) {
  //         case "due_date":
  //         case "number":
  //         case "amount":
  //         case "bank_id":
  //         case "end_due_date": {
  //           onWatchChangesInstallmentGridTab(name, setValue, watch, CACHE_LIST);
  //           break;
  //         }
  //         default:
  //           return;
  //       }
  //     }
  //     if (name === 'contract_termination.termination_date' && type === 'change') {
  //       if (Date.parse(watch(name)) < Date.parse(watch('contract.start_duration_date'))) {
  //         toast.error(`Failed to set Date, termination date must be grater than start date`)
  //         setValue('contract_termination.termination_date', new Date())
  //       }
  //     }
  //   });
  //   return () => subscription.unsubscribe();
  // }, [watch, oldContracts?.length, CACHE_LIST]);

  // useEffect(() => {
  //   if (contractId) return;

  //   setValue("contract.number", +formPagination?.currentNumber || 1);
  //   autoMergePatternSettingsWithValues(
  //     PATTERN_SETTINGS,
  //     watch,
  //     setValue,
  //     tabNames
  //   );
  //   // setShouldRefresh((p) => !p);
  // }, [code, type, assetType, PATTERN_SETTINGS?.id, contractId, formPagination?.currentNumber]);

  const displayForm = () => {
    switch (tab) {
      case GLOBAL_CONTRACT_STEPS.payments:
        return <ContractFormPayments />
      case GLOBAL_CONTRACT_STEPS.commission:
        return <ContractFormCommission />
      case GLOBAL_CONTRACT_STEPS.other_fees:
        return <ContractFormOtherFees />
      case GLOBAL_CONTRACT_STEPS.termination:
        return <ContractFormTermination />
      case GLOBAL_CONTRACT_STEPS.linked_parking:
        return <ContractFormLinkedParking />
      case GLOBAL_CONTRACT_STEPS.contract_cycle:
        return <ContractFormContractCycle />
      default:
        return <ContractFormGeneral pattern={pattern} />
    }
  }

  return (
    <div className="flex flex-col min-h-[400px] max-h-[72vh] overflow-auto min-w-[700px]">
      {displayForm()}
    </div>
  )
}

export default ContractForm