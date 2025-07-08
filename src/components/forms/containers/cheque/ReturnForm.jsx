import ConfirmModal from "@/components/shared/ConfirmModal";
import Loading from "@/components/shared/Loading";
import QUERY_KEYS from "@/data/queryKeys";
import { CHQ_RETURN_REASONS } from "@/helpers/DEFAULT_OPTIONS";
import {
  opReturnDefaultValues,
  opReturnValidationSchema,
} from "@/helpers/operations/opReturnValidationSchema";
import { getSearchCheque, getSingleCheque } from "@/services/chequeService";
import {
  createReturn,
  deleteReturn,
  getReturnByChequeId,
  updateReturn,
} from "@/services/opReturnService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  RHFAsyncSelectField,
  RHFDatePicker,
  RHFInput,
  RHFInputAmount,
  RHFSelectField,
} from "../../fields";
import { AccountField } from "../../global";
import CostCenterField from "../../global/CostCenterField";
import { FormFooter, FormHeader } from "../../wrapper";

const mergePattern = async (pattern, chqValues, setValue) => {
  setValue("amount", chqValues?.amount);
  setValue("cheque_id", chqValues?.id);

  if (pattern?.returnableGenEntries) setValue("genEntries", true);
  if (pattern?.returnableCreditAccountId) {
    setValue("creditAccountId", pattern?.returnableCreditAccountId);
  }
  if (pattern?.returnDefaultObserveAccountIsClient) {
    setValue("creditAccountId", chqValues?.accountId);
  }
  setValue("debitAccountId", chqValues?.accountId);
  // if (pattern?.returnableDefaultAccountIsClient) {
  //   setValue("debitAccountId", chqValues?.accountId);
  // }

  if (pattern?.returnableDebitAccountId) {
    setValue("debitAccountId", pattern?.returnableDebitAccountId);
  }

  // if(pattern?.returnableActiveOperations)

  if (pattern?.returnableDefaultDate === 2) {
    setValue("createdAt", chqValues?.dueDate);
  } else {
    setValue("createdAt", new Date());
  }

  if (pattern?.returnableDefaultObserveAccountIsBuildingBank) {
    //  get building bank
  }

  if (
    pattern?.returnableMoveCostCenterCredit ||
    pattern?.returnableMoveCostCenterDebit
  )
    setValue("costCenterId", chqValues?.costCenterId);

  // const buildingAccounts = await getBuildingBank(chqValues);
  // setValue("debitAccountId", buildingAccounts?.bankId);
  // setValue("creditAccountId", buildingAccounts?.chequeId);
  // setRefresh(p => !p);
};

const CollectionForm = ({ popupFormConfig, outerClose }) => {
  const methods = useForm({
    defaultValue: opReturnDefaultValues,
    mode: "onBlur",
    resolver: zodResolver(opReturnValidationSchema),
  });

  const chequeId = popupFormConfig?.chequeValue?.id;
  const {
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    reset,
    formState: { errors, isLoading, isSubmitting },
  } = methods;
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.COLLECTION, chequeId],
    queryFn: async () => {
      const response = await getReturnByChequeId(chequeId);
      if (response?.success) {
        reset(response);
        return response;
      }
    },
    enabled: !!chequeId,
  });
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  useEffect(() => {
    mergePattern(
      popupFormConfig?.pattern,
      popupFormConfig?.chequeValue,
      setValue
    );
    setValue("chequeId", chequeId);
  }, [popupFormConfig, setValue]);

  const onHandleDelete = async () => {
    setIsDeleteLoading(true);
    const response = await deleteReturn(data?.id);
    if (response?.success) {
      outerClose();
    }
    setIsDeleteLoading(false);
  };

  const onSubmit = async (values) => {
    const isUpdate = data?.id;
    let response;

    if (isUpdate) {
      response = await updateReturn(data?.id, values);
    } else {
      response = await createReturn(values);
    }

    if (response?.success) {
      toast.success(
        `Successfully ${isUpdate ? "updated" : "inserted"} cheque return`
      );
    } else {
      toast.success(
        `Failed to ${isUpdate ? "updated" : "inserted"} cheque return`
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
          <FormHeader header="return" onClose={outerClose} />
          <div className="grid grid-cols-2 gap-4 p-4">
            <RHFDatePicker label="createdAt" name="createdAt" />
            <RHFInputAmount label="amount" name="amount" />
            <AccountField label="creditAccountId" name="creditAccountId" />
            <AccountField
              label="debitAccountId"
              name="debitAccountId"
              required
            />
            <CostCenterField
              label="costCenterId"
              name="costCenterId"
              required
            />
            <RHFSelectField
              label="reason"
              name="reason"
              options={CHQ_RETURN_REASONS}
              required
            />
            <RHFAsyncSelectField
              label="connectWithChqId"
              name="connectWithChqId"
              getSearch={getSearchCheque}
              getSingle={getSingleCheque}
            />
            <RHFInput label="note" name="note" />
          </div>

          <FormFooter
            isLoading={isLoading || isSubmitting}
            setOpenConfirmation={setOpenConfirmation}
          />
        </form>
      </FormProvider>
    </>
  );
};

export default CollectionForm;
