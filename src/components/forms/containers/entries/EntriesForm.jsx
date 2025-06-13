import QUERY_KEYS from "@/data/queryKeys";
import { calculateEntriesDifferences } from "@/helpers/entries/entriesHelpers";
import { getAllCostCenters } from "@/services/CostCenterService";
import { getLeavesAccounts } from "@/services/accountService";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { EntryFooter } from "./EntryFooter";
import EntryFormGrid from "./EntryFormGrid";
import { EntryHead } from "./EntryHead";

const EntriesForm = ({
  oldValues = null,
}) => {
  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useFormContext();

  const { data: accounts } = useQuery({
    queryKey: [QUERY_KEYS.ACCOUNT, 'leave'],
    queryFn: async () => {
      const response = await getLeavesAccounts();
      return response?.data || [];
    },
  });

  const { data: costCenters } = useQuery({
    queryKey: [QUERY_KEYS.Cost_center, 'leave'],
    queryFn: async () => {
      const response = await getAllCostCenters();
      return response?.data || [];
    },
  });


  useEffect(() => {
    if (oldValues) {
      reset(oldValues);
    }
  }, [oldValues]);

  // useEffect(() => {
  //   if (formPagination?.currentNumber > formPagination.lastNumber) {
  //     setValue('number', formPagination?.currentNumber)
  //   }
  // }, [formPagination?.currentNumber])

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name?.indexOf(`entryGridData.`) === -1) return;
      let subName = name?.split(".")?.at(-1);
      let row = name?.split(".")?.slice(0, 2)?.join(".");

      if (watch(`${row}.debit`) && watch(`${row}.credit`)) {
        if (subName === "debit") {
          setValue(`${row}.credit`, 0);
        }
        if (subName === "credit") {
          setValue(`${row}.debit`, 0);
        }
      }

      if (subName === "credit" || subName === "debit") {
        calculateEntriesDifferences(watch, setValue);
      }
      // if (subName === "account_id" && value) {
      //   validationEntriesAccounts(watch, setError);
      // }
    });

    return () => subscription.unsubscribe();
  }, [watch]);


  return (
    <div className="">
      <EntryHead />
      <EntryFormGrid
        accounts={accounts}
        costCenters={costCenters}
      />
      <EntryFooter />
    </div>

  );
};

export default EntriesForm;
