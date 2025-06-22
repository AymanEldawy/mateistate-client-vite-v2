import QUERY_KEYS from "@/data/queryKeys";
import { getSearchApartment, getSingleApartment } from "@/services/apartmentService";
import { getAllBanks } from "@/services/bankService";
import { getSearchParking, getSingleParking } from "@/services/parkingService";
import { getSearchShop, getSingleShop } from "@/services/shopService";
import { getAllUsers } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { RHFAsyncSelectField, RHFCheckbox, RHFDatePicker, RHFInput, RHFInputAmount, RHFSelectField, RHFTextarea } from "../../fields";
import { AccountField, CurrencyFieldGroup } from "../../global";
import CostCenterField from "../../global/CostCenterField";
import ChequeFormBar from "./ChequeFormBar";
// import { getSearchParking, getSingleParking } from "@/services/parkingService";
// import { getAccountSearch, getSingleAccount } from "@/services/accountService";
// import { getSearchCostCenter, getSingleCostCenter } from "@/services/CostCenterService";
// import { getSearchBank, getSingleBank } from "@/services/bankService";

const mergePatternWithChequeData = (pattern, watch, setValue, reset) => {

  setValue('code', pattern?.code);
  setValue('patternId', pattern?.id);
  if (pattern?.auto_gen_entries) {
    setValue('genEntries', true)
  }

  if (pattern?.code) {
    setValue('code', pattern?.code)
  }
  if (pattern?.default_account_id) {
    setValue('accountId', pattern?.default_account_id)
  }

    // reset({
    //   code: pattern?.code || '',
    //   patternId: pattern?.id || '',
    // })
};

const ChequeForm = ({ code, pattern, ...props }) => {
  const { watch, setValue,reset } = useFormContext();

  const { data: users } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: async () => {
      const response = await getAllUsers();
      return response?.data || [];
    },
  });

  const { data: banks } = useQuery({
    queryKey: [QUERY_KEYS.Bank],
    queryFn: async () => {
      const response = await getAllBanks();
      return response?.data || [];
    },
  });

  useEffect(() => {
    if (!pattern) return;
    mergePatternWithChequeData(pattern, watch, setValue, reset)
  }, [pattern]);



  return (
    <>
      <div className="relative p-4">
        <div className="grid gap-y-2 gap-x-8 grid-cols-3">
          <div className="flex flex-col gap-2">
            <RHFInput name="internalNumber" label="internal_number" />  {/* Not in Postman */}
            <RHFInputAmount name="amount" label="amount" required />
            <RHFSelectField
              name="customerId"
              label="customer_id"
              options={users}
            />
            <RHFInput
              name="beneficiaryName"
              label="beneficiary_name"
            />
            {/* <UniqueFieldGroup values={watch()} onSelectContract={onSelectContract} /> */}
            {watch('parking_id') ?
              <RHFAsyncSelectField
                name="parkingId"
                label="parking_id"
                getSearch={getSearchParking}
                getSingle={getSingleParking}
                required
              />
              : null}
            {watch('shop_id') ?
              <RHFAsyncSelectField
                name="shopId"
                label="shop_id"
                getSearch={getSearchShop}
                getSingle={getSingleShop}
                required
              />
              : null}
            {watch('apartment_id') ?
              <RHFAsyncSelectField
                name="apartmentId"
                label="apartment_id"
                getSearch={getSearchApartment}
                getSingle={getSingleApartment}
                required
              />
              : null}

          </div>
          <div className="flex flex-col gap-2">

            <AccountField
              label="account_id"
              name="accountId"
              required
              allowAdd
            />
            <CostCenterField
              label="cost_center_id"
              name="costCenterId"
              required
            />
            <AccountField
              label="observe_account_id"
              name="observeAccountId"
              required
              allowAdd
            />

            <CostCenterField
              label="observe_cost_center_id"
              name="observeCostCenterId"
            />

            <CurrencyFieldGroup />

            <RHFSelectField
              name="bankId"
              label="bank_id"
              options={banks}
            />
          </div>
          <div className="flex flex-col gap-2">
            {/* <CurrencyFieldGroup
            values={watch()}
          /> */}
            <RHFDatePicker name="createdAt" label="created_at" />
            <RHFCheckbox name="withoutDueDate" label="without_due_date" /> {/* Not in Postman */}
            {
              watch('withoutDueDate') ? null :
                (
                  <>
                    <RHFDatePicker
                      name="dueDate"
                      label="due_date"
                      required={!watch('withoutDueDate')}
                    />
                    <RHFDatePicker
                      name="endDueDate"
                      label="end_due_date"
                    />
                  </>
                )
            }
            <RHFCheckbox name="depositStatus" label="deposit_status" /> {/* Not in Postman */}
          </div>
        </div>
        <div className=" grid gap-y-3 gap-x-8 grid-cols-2 mt-4">
          <RHFTextarea
            name="note"
            label="note"
          />
          <RHFTextarea
            name="note2"
            label="note2"
          />
        </div>
        <ChequeFormBar pattern={pattern} />
      </div>
    </>
  );
}

export default ChequeForm