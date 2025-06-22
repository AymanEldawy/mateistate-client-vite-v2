export const calculateEntriesDifferences = (watch, setValue) => {  
  let grid = watch("entryGridData");
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
  setValue("entry.debit", debit);
  setValue("entry.credit", credit);
  setValue("entry.difference", debit - credit);
}