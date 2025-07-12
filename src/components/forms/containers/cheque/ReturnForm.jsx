import ConfirmModal from "@/components/shared/ConfirmModal";
import EntryBar from "@/components/shared/EntryBar";
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
  RHFSelectField,
} from "../../fields";
import { AccountLeaveField } from "../../global";
import CostCenterField from "../../global/CostCenterField";
import { FormFooter, FormHeader } from "../../wrapper";

const mergePattern = (pattern, chqValues, reset) => {
  const data = {
    amount: chqValues?.amount,
    chequeId: chqValues?.id,
    createdAt: new Date(),
  };
  console.log("pattern in return form", pattern);

  if (pattern?.returnableGenEntries) data.genEntries = true;
  if (pattern?.returnableCreditAccountId) {
    data.creditAccountId = pattern?.returnableCreditAccountId;
  }
  if (pattern?.returnDefaultObserveAccountIsClient) {
    data.creditAccountId = chqValues?.accountId;
  }
  data.debitAccountId = chqValues?.accountId;
  // if (pattern?.returnableDefaultAccountIsClient) {
  //   data.debitAccountId = chqValues?.accountId
  // }

  if (pattern?.returnableDebitAccountId) {
    data.debitAccountId = pattern?.returnableDebitAccountId;
  }

  // if(pattern?.returnableActiveOperations)

  if (pattern?.returnableDefaultDate === 2) {
    data.createdAt = chqValues?.dueDate;
  } else {
    data.createdAt = new Date();
  }

  if (pattern?.returnableDefaultObserveAccountIsBuildingBank) {
    //  get building bank
  }

  if (
    pattern?.returnableMoveCostCenterCredit ||
    pattern?.returnableMoveCostCenterDebit
  )
    data.costCenterId = chqValues?.costCenterId;

  // const buildingAccounts = await getBuildingBank(chqValues);
  // setValue("debitAccountId =  buildingAccounts?.bankId);
  // setValue("creditAccountId", buildingAccounts?.chequeId);
  // setRefresh(p => !p);
  reset(data);
};

const ReturnForm = ({ popupFormConfig, outerClose, refetchCheque }) => {
  console.log(refetchCheque, "refetchCheque,");

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
        reset(response?.data);
        return response?.data;
      }
    },
    enabled: !!chequeId,
  });
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  useEffect(() => {
    if (!popupFormConfig?.pattern && !data?.id) return;
    console.log(popupFormConfig, "popupFormConfig in return form");
    mergePattern(popupFormConfig?.pattern, popupFormConfig?.chequeValue, reset);
  }, [popupFormConfig]);

  const onHandleDelete = async () => {
    setIsDeleteLoading(true);
    const response = await deleteReturn(data?.id);
    if (response?.success) {
      outerClose();
      refetchCheque();
    }
    setIsDeleteLoading(false);
  };

  console.log(watch(), "watch in return form");

  const onSubmit = async (values) => {
    const isUpdate = data?.id;
    let response;

    setValue("chequeId", chequeId);
    if (isUpdate) {
      response = await updateReturn(data?.id, values);
    } else {
      response = await createReturn(values);
    }

    if (response?.success) {
      refetchCheque();
      reset(response);
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
          <FormHeader
            header="return"
            onClose={outerClose}
            ExtraContentBar={() => <EntryBar entryId={data?.id} />}
          />
          <div className="grid grid-cols-2 gap-4 p-4">
            <RHFDatePicker label="createdAt" name="createdAt" />
            <RHFInput label="amount" name="amount" type="amount" readOnly />
            <AccountLeaveField label="creditAccountId" name="creditAccountId" />
            <AccountLeaveField
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

export default ReturnForm;
