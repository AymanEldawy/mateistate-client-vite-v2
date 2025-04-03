import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { EntryFooter } from "./EntryFooter";
import { EntryHead } from "./EntryHead";
import EntryFormGrid from "./EntryFormGrid";
import { calculateEntriesDifferences, validationEntriesAccounts } from "@/helpers/entries/entriesHelpers";

const EntriesForm = ({
  oldValue = null,
}) => {
  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (oldValue) {
      reset(oldValue);
    }
  }, [oldValue]);

  // useEffect(() => {
  //   if (formPagination?.currentNumber > formPagination.lastNumber) {
  //     setValue('number', formPagination?.currentNumber)
  //   }
  // }, [formPagination?.currentNumber])

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name?.indexOf(`grid.`) === -1) return;
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
      if (subName === "account_id" && value) {
        validationEntriesAccounts(watch, setError);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="">
      <EntryHead />
      <EntryFormGrid />
      <EntryFooter />
    </div>

  );
};

export default EntriesForm;
