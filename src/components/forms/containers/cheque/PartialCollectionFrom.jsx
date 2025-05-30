import { useEffect, useState } from 'react';
import { FormFooter, FormHeader } from '../../wrapper';
import { RHFAsyncSelectField, RHFInput, RHFTextarea } from '../../fields';
import { FormProvider, useForm } from 'react-hook-form';
import { AccountField, CurrencyFieldGroup } from '../../global';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import QUERY_KEYS from '@/data/queryKeys';
import ConfirmModal from '@/components/shared/ConfirmModal';
import { getFirstOne, getLastOne, getNextOne, getOneBy, getPreviousOne } from '@/services/paginationService';

const mergePattern = (pattern, chqValues, setValue) => {

  if (chqValues?.id) {
    setValue("chequeId", chqValues?.id);
  }
  if (chqValues?.amount) {
    setValue("totalValue", chqValues?.amount);
    setValue("totalSum", chqValues?.amount);
    setValue("rest", chqValues?.amount);
  }
  if (pattern?.partial_creditAccountId) {
    setValue("creditAccountId", pattern?.partialCreditAccountId);
  }

  if (pattern?.partialDefaultObserveAccountIsClient) {
    setValue("creditAccountId", chqValues?.accountId);
  }

  if (pattern?.partialDebitAccountId) {
    setValue("debitAccountId", pattern?.partialDebitAccountId);
  }

  if (pattern?.partialGenEntries) setValue("genEntries", true);

  if (
    pattern?.partialMoveCostCenterDebit ||
    pattern?.partialMoveCostCenterCredit
  ) {
    setValue("costCenterId", chqValues?.costCenterId);
  }
}


const PartialCollectionFrom = ({
  popupFormConfig,
  outerClose
}) => {
  const methods = useForm({
    defaultValue: {
      id: null,
      chequeId: null,
      createdAt: new Date(),
      amount: 0,
      totalValue: 0,
      totalSumPrev: 0,
      totalSum: 0,
      rest: 0,
      debitAccountId: null,
      creditAccountId: null,
      costCenterId: null,
      note: '',
      commissionDebitId: null,
      commission_credit_id: null,
      commissionCostCenterId: null,
      commissionPercentage: 0,
      commissionValue: 0,
      commissionNote: '',
    }
  });
  const chequeId = popupFormConfig?.chequeValue?.id
  const chequeValue = popupFormConfig?.chequeValue
  const { handleSubmit, watch, setValue, setError, clearErrors, reset, formState: { isLoading, isSubmitting } } = methods
  const [currentNumber, setCurrentNumber] = useState(0);
  const [lastNumber, setLastNumber] = useState(0);
  const [openConfirmation, setOpenConfirmation] = useState(false)

  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.PARTIAL_COLLECTION, chequeId],
    queryFn: async () => {
      const response = await getLastOne('op_partial_collection', null, chequeId);
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
        let prev = +watch("totalSumPrev") || 0;
        let total = +watch("totalValue") || 0;

        let theTotalRest = total - prev - amount;
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
        setValue("totalSum", theTotalSum);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const goTo = async (value) => {
    let response = null;
    if (value === 'FIRST')
      response = await getFirstOne('op_partial_collection', null, chequeId)
    else if (value === 'LAST')
      response = await getLastOne('op_partial_collection', null, chequeId)
    else await getOneBy('op_partial_collection', value, 'number', null, chequeId)

  }

  const goNew = () => {
    if (!data) return;
    if (data?.rest === 0) {
      reset(data);
      return
    }
    let totalSumPrev = (data?.totalSumPrev || 0) + data?.amount;

    setValue("id", null);
    setValue("amount", 0);
    setValue("totalSum", 0);
    setValue("totalSumPrev", totalSumPrev || 0);
    setValue("rest", +watch("totalValue") - totalSumPrev);
    setValue("costCenterId", data?.costCenterId);
    setValue("chequeId", data?.chequeId || chequeId);
    setValue("creditAccountId", data?.creditAccountId);
    setValue("debitAccountId", data?.debitAccountId);
    setValue("totalValue", chequeValue?.amount);
    let num = +data?.number + 1 || 1
    setValue("number", num);
    setCurrentNumber(num);
  }

  const onHandleDelete = async () => { }

  const onSubmit = async (value) => {

  };

  return (
    <>
      <ConfirmModal
        onConfirm={onHandleDelete}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormHeader onClose={outerClose} header="partial_collection" />
          <div className="max-w-3xl w-full p-4">
            <div className="grid grid-cols-3 gap-8 xl:gap-14">
              <div className="flex flex-col gap-2 col-span-2">
                <RHFInput name="createdAt" label="createdAt" />
                <CurrencyFieldGroup />
                <RHFInput name="amount" label="amount" />
                <RHFAsyncSelectField
                  name="debitAccountId"
                  label="debitAccountId"
                  getSearch={() => { }}
                  getSingle={() => { }}
                />
                <RHFAsyncSelectField
                  name="creditAccountId"
                  label="creditAccountId"
                  getSearch={() => { }}
                  getSingle={() => { }}

                />
                <RHFAsyncSelectField
                  name="costCenterId"
                  label="costCenterId"
                  getSearch={() => { }}
                  getSingle={() => { }}

                />
              </div>
              <div className="flex flex-col gap-2 ">
                {["totalValue", "totalSumPrev", "totalSum", "rest"]?.map(
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
                  name='commissionDebitId'
                  label='commissionDebitId'
                />
                <AccountField
                  name='commissionCreditId'
                  label='commissionCreditId'
                />
                <RHFAsyncSelectField
                  name='commissionCostCenterId'
                  label='commissionCostCenterId'
                  getSearch={() => { }}
                  getSingle={() => { }}

                />
              </div>
              <div className="flex flex-col gap-2 ">
                <RHFInput name="commissionPercentage" label="commissionPercentage" />
                <RHFInput name="commissionValue" label="commissionValue" />
                <RHFInput name="commissionNote" label="commissionNote" />
              </div>
            </div>

          </div>
          <FormFooter
            isLoading={isLoading || isSubmitting}
            setOpenConfirmation={setOpenConfirmation}
            paginationForm={{
              goTo,
              goBack: getPreviousOne('op_partial_collection', currentNumber, null, chequeId),
              goNext: getNextOne('op_partial_collection', currentNumber, null, chequeId),
              lastNumber,
              setCurrentNumber,
              currentNumber,
              isLast: currentNumber === lastNumber,
              goNew,
            }}
          />
        </form>
      </FormProvider>
    </>
  )
}

export default PartialCollectionFrom
