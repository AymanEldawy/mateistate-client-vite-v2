import QUERY_KEYS from '@/data/queryKeys';
import { OP_RETURN_FIELDS } from '@/helpers/cheque/chequeOperationsFields';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import DynamicForm from '../../wrapper/DynamicForm';
import { createReturn, deleteReturn, getSingleReturn, updateReturn } from '@/services/opReturnService';
import { FormFooter, FormHeader } from '../../wrapper';
import ConfirmModal from '@/components/shared/ConfirmModal';
import Loading from '@/components/shared/Loading';
import { opReturnDefaultValues, opReturnValidationSchema } from '@/helpers/operations/opReturnValidationSchema';
import { toast } from 'react-toastify';
import { getLastOne } from '@/services/paginationService';

const mergePattern = async (
  pattern,
  chqValues,
  setValue,
) => {
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

const CollectionForm = ({
  popupFormConfig,
  outerClose
}) => {
  const methods = useForm({
    defaultValue: opReturnDefaultValues,
    mode: "onBlur",
    resolver: opReturnValidationSchema
  });

  const chequeId = popupFormConfig?.chequeValue?.id
  const { handleSubmit, watch, setValue, setError, clearErrors, reset, formState: { isLoading, isSubmitting } } = methods
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.COLLECTION, chequeId],
    queryFn: async () => {
      const response = await getLastOne('op_return', null, chequeId);
      if (response?.success) {
        const current = await getSingleReturn(response?.id)
        reset(current)
        return current;
      }
    },
    enabled: !!chequeId
  });
  const [openConfirmation, setOpenConfirmation] = useState(false)
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);


  useEffect(() => {
    mergePattern(popupFormConfig?.pattern, popupFormConfig?.chequeValue, setValue)
  }, [popupFormConfig, setValue])


  const onHandleDelete = async () => {
    setIsDeleteLoading(true)
    const response = await deleteReturn(data?.id);
    if (response?.success) {
      outerClose()
    }
    setIsDeleteLoading(false)
  }

  const onSubmit = async (values) => {
    const isUpdate = data?.id
    let response;
    if (isUpdate) {
      response = await updateReturn(data?.id, values)
    } else {
      response = await createReturn(values)
    }

    if (response?.success) {
      toast.success(`Successfully ${isUpdate ? 'updated' : 'inserted'} cheque return`)
    } else {
      toast.success(`Failed to ${isUpdate ? 'updated' : 'inserted'} cheque return`)
    }
  }

  console.log(watch(), 'wa');


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
          <DynamicForm containerClassName="p-4" fields={OP_RETURN_FIELDS} />
          <FormFooter
            isLoading={isLoading || isSubmitting}
            setOpenConfirmation={setOpenConfirmation}
          />
        </form>
      </FormProvider>
    </>
  )
}

export default CollectionForm