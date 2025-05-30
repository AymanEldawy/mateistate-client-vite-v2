import { CHQ_RECEIVED_CODE } from '@/data/GENERATE_STARTING_DATA';
import QUERY_KEYS from '@/data/queryKeys';
import { OP_RETURN_FIELDS } from '@/helpers/cheque/chequeOperationsFields';
import { getSingleCollection } from '@/services/opCollectionService';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import DynamicForm from '../../wrapper/DynamicForm';
import { getSingleReturn } from '@/services/opReturnService';
import { FormFooter, FormHeader } from '../../wrapper';
import ConfirmModal from '@/components/shared/ConfirmModal';

const defaultValue = {}

const mergePattern = async (
  pattern,
  chqValues,
  setValue,
) => {
  setValue("amount", chqValues?.amount);
  setValue("cheque_id", chqValues?.id);

  if (pattern?.returnable_gen_entries) setValue("gen_entries", true);
  if (pattern?.returnable_credit_account_id) {
    setValue("credit_account_id", pattern?.returnable_credit_account_id);
  }
  if (pattern?.return_default_observe_account_is_client) {
    setValue("credit_account_id", chqValues?.account_id);
  }
  setValue("debit_account_id", chqValues?.account_id);
  // if (pattern?.returnable_default_account_is_client) {
  //   setValue("debit_account_id", chqValues?.account_id);
  // }

  if (pattern?.returnable_debit_account_id) {
    setValue("debit_account_id", pattern?.returnable_debit_account_id);
  }

  // if(pattern?.returnable_active_operations)

  if (pattern?.returnable_default_date === 2) {
    setValue("createdAt", chqValues?.due_date);
  } else {
    setValue("createdAt", new Date());
  }

  if (pattern?.returnable_default_observe_account_is_building_bank) {
    //  get building bank
  }

  if (
    pattern?.returnable_move_cost_center_credit ||
    pattern?.returnable_move_cost_center_debit
  )
    setValue("cost_center_id", chqValues?.cost_center_id);


  // const buildingAccounts = await getBuildingBank(chqValues);
  // setValue("debit_account_id", buildingAccounts?.bank_id);
  // setValue("credit_account_id", buildingAccounts?.cheque_id);
  // setRefresh(p => !p);
};

const CollectionForm = ({
  popupFormConfig,
  outerClose
}) => {
  const methods = useForm({
    defaultValue
  });
  const chequeId = popupFormConfig?.chequeValue?.id
  const { handleSubmit, watch, setValue, setError, clearErrors, reset, formState: { isLoading, isSubmitting } } = methods
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.COLLECTION, chequeId],
    queryFn: () => getSingleReturn({ id: chequeId }),
    enabled: !!chequeId
  });
  const [openConfirmation, setOpenConfirmation] = useState(false)


  useEffect(() => {
    mergePattern(popupFormConfig?.pattern, popupFormConfig?.chequeValue, setValue)
  }, [popupFormConfig, setValue])


  const onHandleDelete = async () => { }

  const onSubmit = async () => {

  }

  return (
    <>
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