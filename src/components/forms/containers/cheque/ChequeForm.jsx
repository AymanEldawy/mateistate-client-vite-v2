import { useFormContext } from "react-hook-form";
import { RHFCheckbox, RHFInput, RHFTextarea, RHFAsyncSelectField, RHFDatePicker, RHFInputAmount } from "../../fields";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getChequePatternByCode } from "@/services/chequeService";
import ChequeFormBar from "./ChequeFormBar";

const mergePatternWithChequeData = (pattern, watch, setValue) => {

  if (pattern?.auto_gen_entries) {
    setValue('gen_entries', true)
  }

  if (pattern?.code) {
    setValue('code', pattern?.code)
  }
  if (pattern?.default_account_id) {
    setValue('account_id', pattern?.default_account_id)
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
            <RHFInput name="internal_number" label="internal_number" />
            <RHFInputAmount name="amount" label="amount" required />
            <RHFAsyncSelectField
              name="customer_id"
              label="customer_id"
            />
            <RHFInput
              name="beneficiary_name"
              label="beneficiary_name"
            />
            {/* <UniqueFieldGroup values={watch()} onSelectContract={onSelectContract} /> */}
            {watch('parking_id') ?
              <RHFAsyncSelectField
                name="parking_id"
                label="parking_id"
                required
              />
              : null}
            {watch('shop_id') ?
              <RHFAsyncSelectField
                name="shop_id"
                label="shop_id"
                required
              />
              : null}
            {watch('apartment_id') ?
              <RHFAsyncSelectField
                name="apartment_id"
                label="apartment_id"
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
              name="bank_id"
              label="bank_id"
            />
          </div>
          <div className="flex flex-col gap-2">
            {/* <CurrencyFieldGroup
              values={watch()}
            /> */}
            <RHFDatePicker name="created_at" label="created_at" />
            <RHFCheckbox name="without_due_date" label="without_due_date" />
            {
              watch('without_due_date') ? null :
                (
                  <>
                    <RHFDatePicker
                      name="due_date"
                      label="due_date"
                      required={!watch('without_due_date')}
                    />
                    <RHFDatePicker
                      name="end_due_date"
                      label="end_due_date"
                    />
                  </>
                )
            }
            <RHFCheckbox name="deposit_status" label="deposit_status" />
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