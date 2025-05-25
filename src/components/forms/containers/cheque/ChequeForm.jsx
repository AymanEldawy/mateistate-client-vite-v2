import { useFormContext } from "react-hook-form";
import { RHFCheckbox, RHFInput, RHFTextarea, RHFAsyncSelectField, RHFDatePicker, RHFInputAmount } from "../../fields";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getChequePatternByCode } from "@/services/chequeService";
import ChequeFormBar from "./ChequeFormBar";
import { getSearchCurrency, getSingleCurrency } from "@/services/currencyService";
import { getSearchBank, getSingleBank } from "@/services/bankService";
import { getSearchCostCenter, getSingleCostCenter } from "@/services/CostCenterService";
import { getSearchChequePattern, getSingleChequePattern } from "@/services/chequePatternsService";
import { getSearchAccount, getSingleAccount } from "@/services/accountService";
// import { getSearchParking, getSingleParking } from "@/services/parkingService";
// import { getAccountSearch, getSingleAccount } from "@/services/accountService";
// import { getSearchCostCenter, getSingleCostCenter } from "@/services/CostCenterService";
// import { getSearchBank, getSingleBank } from "@/services/bankService";

const mergePatternWithChequeData = (pattern, watch, setValue) => {

  if (pattern?.auto_gen_entries) {
    setValue('genEntries', true)
  }

  if (pattern?.code) {
    setValue('code', pattern?.code)
  }
  if (pattern?.default_account_id) {
    setValue('accountId', pattern?.default_account_id)
  }

};

const ChequeForm = ({ code }) => {
  const { watch, setValue } = useFormContext();

  const { data: pattern } = useQuery({
    queryKey: ['pattern', 'cheque', code],
    queryFn: async () => {
      const response = await getChequePatternByCode(code)
      mergePatternWithChequeData(response, watch, setValue)
    },
    enabled: !!code
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
      <RHFInput name="type" label="type" type="number" required />
      <RHFAsyncSelectField
        getSearch={getSearchCurrency}
        getSingle={getSingleCurrency}
        table="currency" name="currencyId" label="currency" required />
      <RHFAsyncSelectField
        getSearch={getSearchCurrency}
        getSingle={getSingleCurrency}
        table="seller" name="sellerId" label="seller" />
      <RHFAsyncSelectField
        getSearch={getSearchAccount}
        getSingle={getSingleAccount}
        table="account" name="accountId" label="account" required />
      <RHFAsyncSelectField
        getSearch={getSearchAccount}
        getSingle={getSingleAccount}
        table="account" name="observeAccountId" label="observe_account" />
      <RHFAsyncSelectField
        getSearch={getSearchChequePattern}
        getSingle={getSingleChequePattern}
        table="pattern" name="patternId" label="pattern" />
      <RHFInput name="note" label="note" />
      <RHFInput name="code" label="code" type="number"  />
      <RHFInput name="amount" label="amount" type="number" required />
      <RHFInput name="currencyVal" label="currency_value" type="number" />
      <RHFInput name="beneficiaryName" label="beneficiary_name" />
      <RHFAsyncSelectField
        getSearch={getSearchCostCenter}
        getSingle={getSingleCostCenter}
        table="costCenter" name="costCenterId" label="cost_center" />
      <RHFAsyncSelectField
        getSearch={getSearchCostCenter}
        getSingle={getSingleCostCenter}
        table="costCenter" name="observeCostCenterId" label="observe_cost_center" />
      <RHFAsyncSelectField
        getSearch={getSearchBank}
        getSingle={getSingleBank}
        table="bank" name="bankId" label="bank" />
      <RHFDatePicker name="date" label="date" />
    </div>
  );
}

export default ChequeForm