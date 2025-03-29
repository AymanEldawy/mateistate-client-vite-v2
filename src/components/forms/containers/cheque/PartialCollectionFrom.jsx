import React, { useEffect, useState } from 'react'
import FormWrapper from '../../wrapper/FormWrapper'
import { FormFooter } from '../../wrapper';
import usePartialPagination from '@/hook/usePartialPagination';
import { CurrencyFieldGroup, RHFAsyncSelectField, RHFInput, RHFTextarea } from '../../fields';
import { FormProvider, useForm } from 'react-hook-form';
import { AccountField } from '../../global';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import QUERY_KEYS from '@/data/queryKeys';

const defaultValues = {}

const mergePattern = (pattern, chqValues, setValue) => {

  if (chqValues?.id) {
    setValue("cheque_id", chqValues?.id);
  }
  if (chqValues?.amount) {
    setValue("total_value", chqValues?.amount);
    setValue("total_sum", chqValues?.amount);
    setValue("rest", chqValues?.amount);
  }
  if (pattern?.partial_credit_account_id) {
    setValue("credit_account_id", pattern?.partial_credit_account_id);
  }

  if (pattern?.partial_default_observe_account_is_client) {
    setValue("credit_account_id", chqValues?.account_id);
  }

  if (pattern?.partial_debit_account_id) {
    setValue("debit_account_id", pattern?.partial_debit_account_id);
  }

  if (pattern?.partial_default_account_is_building_bank) {
  }

  if (pattern?.partial_gen_entries) setValue("gen_entries", true);

  if (
    pattern?.partial_move_cost_center_debit ||
    pattern?.partial_move_cost_center_credit
  ) {
    setValue("cost_center_id", chqValues?.cost_center_id);
  }

}


const PartialCollectionFrom = ({
  popupFormConfig
}) => {
  const methods = useForm({
    defaultValues
  });
  const chequeId = popupFormConfig?.chequeId
  const chequeValue = popupFormConfig?.chequeValue
  const { handleSubmit, watch, setValue, setError, clearErrors, reset } = methods
  const { getFirst, getLast, getNext: goNext, getPrevious: goBack, getPartialByNumber } = usePartialPagination(chequeId)
  const [currentNumber, setCurrentNumber] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);

  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.PARTIAL_COLLECTION, chequeId],
    queryFn: async () => {
      const response = await getLast(chequeId);
      if (response?.success) {
        goNew(response?.result?.at(0));
        setLastNumber(response?.result?.at(0)?.number);
      }
      return response?.result
    },
    enabled: !!chequeId
  });

  useEffect(() => {
    mergePattern(popupFormConfig?.pattern, popupFormConfig?.chequeValue, setValue)
  }, [popupFormConfig, setValue])

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "amount") {
        let amount = +watch("amount") || 0;
        let prev = +watch("total_sum_prev") || 0;
        let total = +watch("total_value") || 0;

        let theTotalRest = total - prev - amount;
        console.log(theTotalRest, 'theTotalRest');

        let theTotalSum = prev + amount;

        if (theTotalRest <= -1) {
          toast.error(
            "Failed to enter value the rest can't be less than 0",
            {
              autoClose: true,
            }
          );
          setError("rest", {
            type: "manual",
            message: "Failed to enter value the rest can't be less than 0",
          });
        } else {
          clearErrors("rest");
        }
        setValue("rest", theTotalRest);
        setValue("total_sum", theTotalSum);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const goTo = async (value) => {
    console.log("🚀 ~ onSubmit ~ value:", value)
    let response = null;
    if (value === 'FIRST')
      response = await getFirst()
    else if (value === 'LAST')
      response = await getLast()
    else await getPartialByNumber(value)

  }

  const goNew = () => {
    if (!data) return;
    if (data?.rest === 0) {
      reset(data);
      return
    }
    let total_sum_prev = (data?.total_sum_prev || 0) + data?.amount;

    setValue("id", null);
    setValue("amount", 0);
    setValue("total_sum", 0);
    setValue("total_sum_prev", total_sum_prev || 0);
    setValue("rest", +watch("total_value") - total_sum_prev);
    setValue("cost_center_id", data?.cost_center_id);
    setValue("cheque_id", data?.cheque_id || chequeId);
    setValue("credit_account_id", data?.credit_account_id);
    setValue("debit_account_id", data?.debit_account_id);
    setValue("total_value", chequeValue?.amount);
    let num = +data?.number + 1 || 1
    setValue("number", num);
    setCurrentNumber(num);
  }

  const onSubmit = async (value) => {

  };

  return (
    <div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-4">
          <div className="max-w-3xl w-full">
            <div className="grid grid-cols-3 gap-8 xl:gap-14">
              <div className="flex flex-col gap-2 col-span-2">
                <RHFInput name="created_at" label="created_at" />
                <CurrencyFieldGroup />
                <RHFInput name="amount" label="amount" />
                <RHFAsyncSelectField
                  name="debit_account_id"
                  label="debit_account_id"
                />
                <RHFAsyncSelectField
                  name="credit_account_id"
                  label="credit_account_id"
                />
                <RHFAsyncSelectField
                  name="cost_center_id"
                  label="cost_center_id"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                {["total_value", "total_sum_prev", "total_sum", "rest"]?.map(
                  (field) => (
                    <RHFInput name={field} label={field} key={field} readOnly={true} />
                  )
                )}
                {/* {watch('rest') < 0 ? <ErrorText>Failed to enter value the rest can't be less than 0</ErrorText> : null} */}
              </div>
            </div>
            <RHFTextarea name="note" label="note" />
            <div className="grid grid-cols-2 gap-8 xl:gap-14 my-4">
              <div className="flex flex-col gap-2 ">
                <AccountField
                  name='commission_debit_id'
                  label='commission_debit_id'
                />
                <AccountField
                  name='commission_credit_id'
                  label='commission_credit_id'
                />
                <RHFAsyncSelectField
                  name='commission_cost_center_id'
                  label='commission_cost_center_id'
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <RHFInput name="commission_percentage" label="commission_percentage" />
                <RHFInput name="commission_value" label="commission_value" />
                <RHFInput name="commission_note" label="commission_note" />
              </div>
            </div>

          </div>
          <FormFooter
            // additionalButtons={}
            paginationForm={{
              goTo,
              goBack,
              goNext,
              lastNumber,
              setCurrentNumber,
              currentNumber,
              isLast: currentNumber === lastNumber,
              goNew,
            }}
          />
        </form>
      </FormProvider>
    </div>
  )
}

export default PartialCollectionFrom
