import ConfirmModal from "@/components/shared/ConfirmModal";
import EntryBar from "@/components/shared/EntryBar";
import Loading from "@/components/shared/Loading";
import QUERY_KEYS from "@/data/queryKeys";
import {
  opPartialDefaultValues,
  opPartialValidationSchema,
} from "@/helpers/operations/opPartialValidationSchema";
import {
  createPartial,
  deletePartial,
  getPartialByChequeId,
  getSinglePartial,
  updatePartial,
} from "@/services/opPartialCollectionService";
import {
  getFirstOne,
  getLastOne,
  getNextOne,
  getOneBy,
  getPreviousOne,
} from "@/services/paginationService";
import { cleanObject } from "@/utils/functions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  RHFDatePicker,
  RHFInput,
  RHFInputAmount,
  RHFTextarea,
} from "../../fields";
import { AccountLeaveField, CurrencyFieldGroup } from "../../global";
import CostCenterField from "../../global/CostCenterField";
import { FormFooter, FormHeader } from "../../wrapper";

const mergePattern = (pattern, chqValues, reset) => {
  let data = {
    chequeId: chqValues?.id,
    totalValue: chqValues?.amount,
    totalSum: chqValues?.amount,
    rest: chqValues?.amount,
    genEntries: true,
    number: 1,
  };

  if (pattern?.partialCreditAccountId) {
    data.creditAccountId = pattern?.partialCreditAccountId;
  }

  if (pattern?.partialDefaultObserveAccountIsClient) {
    data.creditAccountId = chqValues?.accountId;
  }

  if (pattern?.partialDebitAccountId) {
    data.debitAccountId = pattern?.partialDebitAccountId;
  }

  if (pattern?.partialGenEntries) data.genEntries = true;

  if (
    pattern?.partialMoveCostCenterDebit ||
    pattern?.partialMoveCostCenterCredit
  ) {
    data.costCenterId = chqValues?.costCenterId;
  }

  reset(data);
};

const PartialCollectionFrom = ({
  popupFormConfig,
  outerClose,
  refetchCheque,
}) => {
  const name = "op_partial_collection";
  const methods = useForm({
    defaultValue: opPartialDefaultValues,
    mode: "onBlur",
    resolver: zodResolver(opPartialValidationSchema),
  });
  const chequeId = popupFormConfig?.chequeValue?.id;
  const chequeValue = popupFormConfig?.chequeValue;
  const {
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    reset,
    formState: { isLoading, isSubmitting },
  } = methods;
  const [currentNumber, setCurrentNumber] = useState(1);
  const [lastNumber, setLastNumber] = useState(0);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.PARTIAL_COLLECTION, chequeId],
    queryFn: async () => {
      const response = await getPartialByChequeId(chequeId);

      if (response?.success && response?.data) {
        const current = await getSinglePartial(response?.data?.id);

        goNew(current);
        setLastNumber(response?.data?.number);
        return current;
      } else {
        setValue("number", 1);
      }
    },
    enabled: !!chequeId,
  });

  useEffect(() => {
    if (!popupFormConfig?.pattern || data) return;
    mergePattern(popupFormConfig?.pattern, popupFormConfig?.chequeValue, reset);
  }, [popupFormConfig, data]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "amount") {
        let amount = +watch("amount") || 0;
        let prev = +watch("totalSumPrev") || 0;
        let total = +watch("totalValue") || 0;

        let theTotalRest = total - prev - amount;
        let theTotalSum = prev + amount;

        if (theTotalRest <= -1) {
          toast.error("Failed to enter value the rest can't be less than 0", {
            autoClose: true,
          });
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
    let current = null;
    if (value === "FIRST") current = await getFirstOne(name, null, chequeId);
    else if (value === "LAST") current = await getLastOne(name, null, chequeId);
    else current = await getOneBy(name, value, "number", null, chequeId);

    if (current?.data) {
      reset(current?.data);
      setCurrentNumber(current?.data?.number);
    }
  };

  const goNew = () => {
    if (!data) return;
    if (data?.rest === 0) {
      reset(data);
      return;
    }
    let totalSumPrev = (data?.totalSumPrev || 0) + data?.amount;

    setValue("id", null);
    setValue("amount", 0);
    setValue("totalSum", 0);
    setValue("totalSumPrev", totalSumPrev || 0);
    setValue("rest", +watch("totalValue") - totalSumPrev);
    setValue("costCenterId", data?.costCenterId);
    setValue("currencyId", data?.currencyId);
    setValue("currencyVal", data?.currencyVal);
    setValue("genEntries", data?.genEntries);
    setValue("chequeId", data?.chequeId || chequeId);
    setValue("creditAccountId", data?.creditAccountId);
    setValue("debitAccountId", data?.debitAccountId);
    setValue("totalValue", chequeValue?.amount);
    let num = +data?.number + 1;
    setValue("number", num);
    setCurrentNumber(num);
  };

  const goBack = async () => {
    const current = await getPreviousOne(name, currentNumber, null, chequeId);
    if (current?.data) {
      reset(current?.data);
      setCurrentNumber(current?.data?.number);
    }
  };

  const goNext = async () => {
    const current = await getNextOne(name, currentNumber, null, chequeId);
    if (current?.data) {
      reset(current?.data);
      setCurrentNumber(current?.data?.number);
    }
  };

  const onHandleDelete = async () => {
    setIsDeleteLoading(true);
    const response = await deletePartial(data?.id);
    if (response?.success) {
      outerClose();
      refetchCheque();
    }
    setIsDeleteLoading(false);
  };

  const onSubmit = async (values) => {
    const isUpdate = data?.id;
    let response;
    if (isUpdate) {
      response = await updatePartial(data?.id, cleanObject(values));
    } else {
      response = await createPartial(cleanObject(values));
    }

    if (response?.success) {
      reset(response?.data);
      refetchCheque();
      toast.success(
        `Successfully ${
          isUpdate ? "updated" : "inserted"
        } cheque partial collection`
      );
    } else {
      toast.success(
        `Failed to ${
          isUpdate ? "updated" : "inserted"
        } cheque partial collection`
      );
    }
  };

  return (
    <>
      {isLoading || isDeleteLoading ? <Loading /> : null}

      <ConfirmModal
        onConfirm={onHandleDelete}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormHeader
            onClose={outerClose}
            header="partial_collection"
            ExtraContentBar={() => <EntryBar entryId={watch("id")} />}
          />
          <div className="max-w-3xl w-full p-4">
            <div className="grid grid-cols-3 gap-8 xl:gap-14">
              <div className="flex flex-col gap-2 col-span-2">
                <RHFDatePicker name="createdAt" label="createdAt" />
                <CurrencyFieldGroup />
                <RHFInputAmount name="amount" label="amount" />
                <AccountLeaveField
                  name="debitAccountId"
                  label="debitAccountId"
                />
                <AccountLeaveField
                  name="creditAccountId"
                  label="creditAccountId"
                />
                <CostCenterField name="costCenterId" label="costCenterId" />
              </div>
              <div className="flex flex-col gap-2 ">
                {["totalValue", "totalSumPrev", "totalSum", "rest"]?.map(
                  (field) => (
                    <RHFInput
                      name={field}
                      label={field}
                      key={field}
                      readOnly={true}
                      type="number"
                    />
                  )
                )}
                {/* {watch('rest') < 0 ? <ErrorText>Failed to enter value the rest can't be less than 0</ErrorText> : null} */}
              </div>
            </div>
            <RHFTextarea name="note" label="note" />
            <div className="grid grid-cols-2 gap-8 xl:gap-14 my-4">
              <div className="flex flex-col gap-2 ">
                <AccountLeaveField
                  name="commissionDebitId"
                  label="commissionDebitId"
                />
                <AccountLeaveField
                  name="commissionCreditId"
                  label="commissionCreditId"
                />
                <CostCenterField
                  name="commissionCostCenterId"
                  label="commissionCostCenterId"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <RHFInput
                  name="commissionPercentage"
                  label="commissionPercentage"
                  type="number"
                />
                <RHFInputAmount
                  name="commissionValue"
                  label="commissionValue"
                />
                <RHFInput name="commissionNote" label="commissionNote" />
              </div>
            </div>
          </div>
          <FormFooter
            isLoading={isLoading || isSubmitting}
            setOpenConfirmation={setOpenConfirmation}
            paginationForm={{
              goTo,
              goBack,
              goNext,
              lastNumber,
              setCurrentNumber,
              currentNumber,
              isLast: currentNumber >= lastNumber,
              goNew,
            }}
          />
        </form>
      </FormProvider>
    </>
  );
};

export default PartialCollectionFrom;
