import { fetchAndMergeAssetInfo, fetchAndMergeBuildingInfo, mergePatternWithContractData, onWatchChangesInTab1, onWatchChangesTerminationTab } from "@/helpers/contract/contractHelpers"
import { GLOBAL_CONTRACT_STEPS } from "@/helpers/contract/contractSteps"
import { getUnitInfo } from "@/utils/functions"
import { useEffect, useMemo } from "react"
import { useFormContext } from "react-hook-form"
import { toast } from "react-toastify"
import ContractFormCommission from "./ContractFormCommission"
import ContractFormContractCycle from "./ContractFormContractCycle"
import ContractFormGeneral from "./ContractFormGeneral"
import ContractFormLinkedParking from "./ContractFormLinkedParking"
import ContractFormOtherFees from "./ContractFormOtherFees"
import ContractFormPayments from "./ContractFormPayments"
import ContractFormTermination from "./ContractFormTermination"




const ContractForm = ({ tab, code, pattern }) => {
  const { watch, setValue } = useFormContext()

  const unit = useMemo(() => {
    const assetType = pattern?.assetsType;

    return getUnitInfo(assetType);

  }, [pattern?.assetsType]);

  useEffect(() => {
    if (!pattern) return;

  }, [pattern]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {

      switch (name) {
        case 'contract.endDurationDate':
          if (type === 'change' && watch('contract.startDurationDate') && watch('contract.endDurationDate') && Date.parse(watch('contract.endDurationDate')) < Date.parse(watch('contract.startDurationDate'))) {
            toast.error('End date should be grater than start date')
            // setValue('contract.endDurationDate', new Date(watch('contract.startDurationDate')))
          }
          break


        case `contract.${unit?.value}`:
          if (watch(name)) {
            fetchAndMergeAssetInfo(unit.unitTypeId, watch(name), setValue);
          }
          break;
        case `contract.buildingId`:
          // if (pattern)
          mergePatternWithContractData(pattern, watch, setValue)

          if (watch(name)) {
            fetchAndMergeBuildingInfo(watch(name), setValue);
            setValue(`contract.${unit.value}`, null);
          }
          break;
        default:
      }

      if (name?.indexOf("contract.") !== -1) {
        onWatchChangesInTab1(
          name?.split(".")?.at(-1),
          setValue,
          watch,
        );
      }


      if (name?.indexOf(`contractTermination`) !== -1) {
        onWatchChangesTerminationTab(
          name?.split(".")?.at(-1),
          watch(name),
          watch,
          setValue
        );
      }

      if (name === 'contractTermination.terminationDate' && type === 'change') {
        if (Date.parse(watch(name)) < Date.parse(watch('contract.startDurationDate'))) {
          toast.error(`Failed to set Date, termination date must be grater than start date`)
          setValue('contractTermination.terminationDate', new Date())
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);


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
        return <ContractFormGeneral pattern={pattern} unit={unit} />
    }
  }

  return (
    <div className="flex flex-col min-h-[400px] max-h-[72vh] overflow-auto min-w-[700px]">
      {displayForm()}
    </div>
  )
}

export default ContractForm