import { CHQ_RECEIVED_CODE } from '@/data/GENERATE_STARTING_DATA';
import QUERY_KEYS from '@/data/queryKeys';
import { getSingleCollection } from '@/services/opCollectionService';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';


const defaultValues = {}

const mergePattern = async (
  pattern,
  chqValues,
  setValue,
) => {
  setValue("amount", chqValues?.amount);
  setValue("cheque_id", chqValues?.id);
  if (pattern?.commission_credit_account_id) {
    setValue("commission_cost_center_id", chqValues?.cost_center_id);
    setValue('commission_credit_id', pattern?.commission_credit_account_id)
  }

  if (pattern?.commission_debit_account_id) {
    setValue('commission_debit_id', pattern?.commission_debit_account_id)
  }
  // if (
  //   pattern?.collection_move_cost_center_credit ||
  //   pattern?.collection_move_cost_center_debit
  // ) {
  // }

  setValue("note", pattern?.statement_collection);

  if (+pattern?.code === CHQ_RECEIVED_CODE) {
    setValue("credit_account_id", pattern?.collection_credit_account_id);
  }

  if (+pattern?.code === CHQ_RECEIVED_CODE) {
    setValue("debit_account_id", pattern?.collection_debit_account_id);
  }

  if (pattern?.collection_gen_entries) setValue("gen_entries", true);
  if (pattern?.collection_default_date === 2) {
    setValue("created_at", chqValues?.due_date);
  } else {
    setValue("created_at", new Date());
  }

  if (pattern?.collection_default_observe_account_is_client) {
    setValue("credit_account_id", chqValues?.account_id, { shouldDirty: true });
  }

  if (
    pattern?.collection_move_cost_center_credit ||
    pattern?.collection_move_cost_center_debit
  ) {
    setValue("cost_center_id", chqValues?.cost_center_id);
  }

  if (pattern?.collection_default_account_is_building_bank) {
    // get building bank
  }

  // const buildingAccounts = await getBuildingBank(chqValues);
  // setValue("debit_account_id", buildingAccounts?.bank_id);
  // setValue("credit_account_id", buildingAccounts?.cheque_id);
  // setRefresh(p => !p);
};

const CollectionForm = ({
  popupFormConfig
}) => {
  const methods = useForm({
    defaultValues
  });
  const chequeId = popupFormConfig?.chequeId
  const { handleSubmit, watch, setValue, setError, clearErrors, reset } = methods

  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.COLLECTION, chequeId],
    queryFn: () => getSingleCollection({ id: chequeId }),
    enabled: !!chequeId
  });

  useEffect(() => {
    mergePattern(popupFormConfig?.pattern, popupFormConfig?.chequeValue, setValue)
  }, [popupFormConfig, setValue])

  const onSubmit = async () => {

  }

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="p-4">

        </form>
      </FormProvider>
    </div>
  )
}

export default CollectionForm