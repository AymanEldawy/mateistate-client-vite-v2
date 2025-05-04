import { useFormContext } from "react-hook-form";
import { RHFCheckbox, RHFInput, RHFTextarea, RHFAsyncSelectField, RHFDatePicker, RHFInputAmount } from "../../fields";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getChequePatternByCode } from "@/services/chequeService";
import ChequeFormBar from "./ChequeFormBar";

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
    <>
      <div className="relative p-4">
        <div className="grid gap-y-2 gap-x-8 grid-cols-3">
          <div className="flex flex-col gap-2">
            <RHFInput name="internalNumber" label="internalNumber" />
            <RHFInputAmount name="amount" label="amount" required />
            <RHFAsyncSelectField
              name="customerId"
              label="customerId"
            />
            <RHFInput
              name="beneficiaryName"
              label="beneficiaryName"
            />
            {/* <UniqueFieldGroup values={watch()} onSelectContract={onSelectContract} /> */}
            {watch('parking_id') ?
              <RHFAsyncSelectField
                name="parkingId"
                label="parkingId"
                required
              />
              : null}
            {watch('shop_id') ?
              <RHFAsyncSelectField
                name="shopId"
                label="shopId"
                required
              />
              : null}
            {watch('apartment_id') ?
              <RHFAsyncSelectField
                name="apartmentId"
                label="apartmentId"
                required
              />
              : null}

          </div>
          <div className="flex flex-col gap-2">

            {[
              "account_id",
              "cost_center_id",
              "observe_account_id",
              "observe_cost_center_id",
            ]?.map((field) => {
              let name = field?.replace(/observe_|_id/g, "");
              return (
                <RHFAsyncSelectField
                  key={field}
                  name={field}
                  label={field}
                  table={name}
                  required={field !== "observe_cost_center_id"}
                />
              );
            })}
            <RHFAsyncSelectField
              name="bankId"
              label="bankId"
            />
          </div>
          <div className="flex flex-col gap-2">
            {/* <CurrencyFieldGroup
              values={watch()}
            /> */}
            <RHFDatePicker name="createdAt" label="createdAt" />
            <RHFCheckbox name="withoutDueDate" label="withoutDueDate" />
            {
              watch('withoutDueDate') ? null :
                (
                  <>
                    <RHFDatePicker
                      name="dueDate"
                      label="dueDate"
                      required={!watch('withoutDueDate')}
                    />
                    <RHFDatePicker
                      name="endDueDate"
                      label="endDueDate"
                    />
                  </>
                )
            }
            <RHFCheckbox name="depositStatus" label="depositStatus" />
          </div>
        </div>
        <div className=" grid gap-y-3 gap-x-8 grid-cols-2 mt-4">
          <RHFTextarea
            name="note1"
            label="note1"
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