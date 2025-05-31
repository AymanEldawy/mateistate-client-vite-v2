import { CHQ_RECEIVED_CODE } from '@/data/GENERATE_STARTING_DATA';
import QUERY_KEYS from '@/data/queryKeys';
import { createCollection, deleteCollection, getSingleCollection, updateCollection } from '@/services/opCollectionService';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import DynamicForm from '../../wrapper/DynamicForm';
import { OP_COLLECTION_FIELDS } from '@/helpers/cheque/chequeOperationsFields';
import { FormFooter, FormHeader } from '../../wrapper';
import ConfirmModal from '@/components/shared/ConfirmModal';
import Loading from '@/components/shared/Loading';
import { opCollectionDefaultValues, opCollectionValidationSchema } from '@/helpers/operations/opCollectionValidationSchema';
import { toast } from 'react-toastify';
import { getLastOne } from '@/services/paginationService';

const mergePattern = async (
  pattern,
  chqValues,
  setValue,
) => {
  setValue("amount", chqValues?.amount);
  setValue("chequeId", chqValues?.id);
  if (pattern?.commissionCreditAccountId) {
    setValue("commissionCostCenterId", chqValues?.costCenterId);
    setValue('commissionCreditId', pattern?.commissionCreditAccountId)
  }

  if (pattern?.commissionDebitAccountId) {
    setValue('commissionDebitId', pattern?.commissionDebitAccountId)
  }
  // if (
  //   pattern?.collectionMoveCostCenterCredit ||
  //   pattern?.collectionMoveCostCenterDebit
  // ) {
  // }

  setValue("note", pattern?.statementCollection);

  if (+pattern?.code === CHQ_RECEIVED_CODE) {
    setValue("creditAccountId", pattern?.collectionCreditAccountId);
  }

  if (+pattern?.code === CHQ_RECEIVED_CODE) {
    setValue("debitAccountId", pattern?.collectionDebitAccountId);
  }

  if (pattern?.collectionGenEntries) setValue("genEntries", true);
  if (pattern?.collectionDefaultDate === 2) {
    setValue("createdAt", chqValues?.dueDate);
  } else {
    setValue("createdAt", new Date());
  }

  if (pattern?.collectionDefaultObserveAccountIsClient) {
    setValue("creditAccountId", chqValues?.accountId, { shouldDirty: true });
  }

  if (
    pattern?.collectionMoveCostCenterCredit ||
    pattern?.collectionMoveCostCenterDebit
  ) {
    setValue("costCenterId", chqValues?.costCenterId);
  }

  if (pattern?.collectionDefaultAccountIsBuildingBank) {
    // get building bank
  }

  // const buildingAccounts = await getBuildingBank(chqValues);
  // setValue("debitAccountId", buildingAccounts?.bank_id);
  // setValue("creditAccountId", buildingAccounts?.cheque_id);
  // setRefresh(p => !p);
};

const CollectionForm = ({
  popupFormConfig,
  outerClose
}) => {
  const methods = useForm({
    defaultValue: opCollectionDefaultValues,
    mode: "onBlur",
    resolver: opCollectionValidationSchema
  });
  const chequeId = popupFormConfig?.chequeValue?.id
  const { handleSubmit, watch, setValue, setError, clearErrors, reset, formState: { isLoading, isSubmitting } } = methods

  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.COLLECTION, chequeId],
    queryFn: async () => {
      const response = await getLastOne('op_collection', null, chequeId);
      if (response?.success) {
        const current = await getSingleCollection(response?.id)
        reset(current)
        return current;
      }
    },
    enabled: !!chequeId
  });

  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  useEffect(() => {
    mergePattern(popupFormConfig?.pattern, popupFormConfig?.chequeValue, setValue)
  }, [popupFormConfig, setValue])


  const onHandleDelete = async () => {
    setIsDeleteLoading(true)
    const response = await deleteCollection(data?.id);
    if (response?.success) {
      outerClose()
    }
    setIsDeleteLoading(false)
  }

  const onSubmit = async (values) => {
    const isUpdate = data?.id
    let response;
    if (isUpdate) {
      response = await updateCollection(data?.id, values)
    } else {
      response = await createCollection(values)
    }

    if (response?.success) {
      toast.success(`Successfully ${isUpdate ? 'updated' : 'inserted'} cheque collection`)
    } else {
      toast.success(`Failed to ${isUpdate ? 'updated' : 'inserted'} cheque collection`)
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
      <div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate >
            <FormHeader header="collection" onClose={outerClose} />
            <DynamicForm containerClassName="p-4" fields={OP_COLLECTION_FIELDS} />
            <FormFooter
              isLoading={isLoading || isSubmitting}
              setOpenConfirmation={setOpenConfirmation}
            />
          </form>
        </FormProvider>
      </div>
    </>

  )
}

export default CollectionForm