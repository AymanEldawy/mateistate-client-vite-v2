import { useFormContext } from "react-hook-form";
import { RHFCheckbox, CurrencyFieldGroup, RHFInput, RHFTextarea, RHFAsyncSelectField } from "../../fields";
import { FormFooter, FormHeader } from "../../wrapper";
import useFormPagination from "@/hook/useFormPagination";
import { ViewEntry } from "@/components/shared/ViewEntry";
import { useState } from "react";


// const mergePatternWithChequeData = (pattern, watch, setValue) => {

//   if (pattern?.auto_gen_entries) {
//     setValue('gen_entries', true)
//   }

//   if (pattern?.code) {
//     setValue('code', pattern?.code)
//   }
//   if (pattern?.default_account_id) {
//     setValue('account_id', pattern?.default_account_id)
//   }

// };

const ChequeForm = ({ handleOnClose, ...props }) => {
  const name = 'cheque'
  const { watch } = useFormContext();
  console.log("🚀 ~ ChequeForm ~ watch:", watch())
  const code = 2
  const number = 1
  const paginationForm = useFormPagination({ name: 'cheque', number, code })
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState(null)

  return (
    <>
      <button>click</button>
      <FormHeader
        header={name}
        onClose={handleOnClose}
        extraContentBar={
          <>
            <RHFCheckbox name="feedback" label="feedback" />
            <RHFCheckbox name="gen_entries" label="gen_entries" />
            {watch('id') && PATTERN_SETTINGS?.auto_gen_entries ? (
              <ViewEntry id={watch('id')} />
            ) : null}
          </>
        }
      />
      <div className="relative p-4">
        <div className="grid gap-y-2 gap-x-8 grid-cols-3">
          <div className="flex flex-col gap-2">
            <RHFInput name="internal_number" label="internal_number" />
            <RHFInput name="amount" label="amount" />
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
              />
              : null}
            {watch('shop_id') ?
              <RHFAsyncSelectField
                name="shop_id"
                label="shop_id"
              />
              : null}
            {watch('apartment_id') ?
              <RHFAsyncSelectField
                name="apartment_id"
                label="apartment_id"
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
            <RHFInput name="created_at" label="created_at" />
            <RHFCheckbox name="without_due_date" label="without_due_date" />
            {
              watch('without_due_date') ? null :
                (
                  <>
                    <RHFInput
                      name="due_date"
                      label="due_date"
                      required={!watch('without_due_date')}
                    />
                    <RHFInput
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

        {/* <ChequeStatus
      pattern={PATTERN_SETTINGS}
      onOpenFormOperation={onOpenFormOperation}
      chqValues={watch()}
    /> */}

      </div>
      <FormFooter
        paginationForm={paginationForm}
        {...props}
      />
    </>
  );
}

export default ChequeForm