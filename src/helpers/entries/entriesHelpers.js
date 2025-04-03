export const validationEntriesAccounts = (watch, setError) => {
  let grid = watch("grid");
  for (let i = 0; i < grid.length; i++) {
    let current = grid?.[i]?.account_id;
    let next = grid?.[i + 1]?.account_id;
    if (current && next) {
      if (current === next) {
        // setError("The Accounts must be different");
        return;
      } else setError(``);
    }
  }
}

export const calculateEntriesDifferences = (watch, setValue) => {
  let grid = watch("grid");
  let credit = 0;
  let debit = 0;
  for (const item of grid) {
    if (item.credit) {
      credit += +item?.credit;
    }
    if (item.debit) {
      debit += +item?.debit;
    }
  }
  setValue("debit", debit);
  setValue("credit", credit);
  setValue("difference", debit - credit);
}