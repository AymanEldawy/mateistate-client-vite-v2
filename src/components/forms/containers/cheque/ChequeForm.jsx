import { useFormContext } from "react-hook-form";
import { RHFCheckbox, RHFInput, RHFTextarea, RHFAsyncSelectField, RHFDatePicker, RHFInputAmount } from "../../fields";
import { useQuery } from "@tanstack/react-query";
import ChequeFormBar from "./ChequeFormBar";
import { getSearchCurrency, getSingleCurrency } from "@/services/currencyService";
import { getSearchBank, getSingleBank } from "@/services/bankService";
import { getSearchCostCenter, getSingleCostCenter } from "@/services/CostCenterService";
import { getChequePatternByCode } from "@/services/chequePatternsService";
import { getSearchAccount, getSingleAccount } from "@/services/accountService";
import { getSearchUser, getSingleUser } from "@/services/userService";
import { getSearchParking, getSingleParking } from "@/services/parkingService";
import { getSearchShop, getSingleShop } from "@/services/shopService";
import { getSearchApartment, getSingleApartment } from "@/services/apartmentService";
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

const ChequeForm = ({ code, ...props }) => {
  console.log(props, code, 'props');

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
    <>
      <div className="relative p-4">
        <div className="grid gap-y-2 gap-x-8 grid-cols-3">
          <div className="flex flex-col gap-2">
            <RHFInput name="internalNumber" label="internal_number" />  {/* Not in Postman */}
            <RHFInputAmount name="amount" label="amount" required />
            <RHFAsyncSelectField
              name="customerId"
              label="customer_id"
              getSearch={getSearchUser}
              getSingle={getSingleUser}
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

            {[
              {
                label: "account_id",
                name: "accountId",
                getSearch: getSearchAccount,
                getSingle: getSingleAccount
              },
              {
                label: "cost_center_id",
                name: "costCenterId",
                getSearch: getSearchCostCenter,
                getSingle: getSingleCostCenter
              },
              {
                label: "observe_account_id",
                name: "observeAccountId",
                getSearch: getSearchAccount,
                getSingle: getSingleAccount
              },
              {
                label: "observe_cost_center_id",
                name: "observeCostCenterId",
                getSearch: getSearchCostCenter,
                getSingle: getSingleCostCenter
              },
              {
                label: "currency_id",
                name: "currencyId",
                getSearch: getSearchCurrency,
                getSingle: getSingleCurrency
              }
            ]?.map((field) => {
              let name = field.name?.replace(/observe_|_id/g, "");
              return (
                <RHFAsyncSelectField
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  table={name}
                  getSearch={field.getSearch}
                  getSingle={field.getSingle}
                  required={field.name !== "observeCostCenterId"}
                />
              );
            })}
            <RHFAsyncSelectField
              getSearch={getSearchBank}
              getSingle={getSingleBank}
              name="bankId"
              label="bank_id"
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
          {/* <RHFTextarea
          name="note2"
          label="note2"
        /> */}
        </div>
        <ChequeFormBar pattern={pattern} />
      </div>
    </>
  );
}

export default ChequeForm