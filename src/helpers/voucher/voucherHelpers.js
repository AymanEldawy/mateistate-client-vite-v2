const CACHE_ROW_VALUE = {};

export const calculateVoucherAmount = (row, val, column, watch, setValue) => {
  let value = 0;
  let amountColumnName =
    column === "credit" ? "credit_amount" : "debit_amount";
  let totalColumnName = column === "credit" ? "debit_total" : "credit_total";

  if (CACHE_ROW_VALUE?.[row]) {
    let oldValue = CACHE_ROW_VALUE?.[row];
    let subValue = watch(amountColumnName) - oldValue;
    value = +val + subValue;
  } else {
    value = watch(amountColumnName) ? +val + +watch(amountColumnName) : +val;
  }
  CACHE_ROW_VALUE[row] = +val;

  setValue(amountColumnName, value);
  setValue(totalColumnName, value);
};


export const reCalculateVouchersResult = (watch, setValue) => {
  let grid = watch("grid");
  if (grid?.length) {
    let debit = 0
    let credit = 0
    for (const item of grid) {
      credit += +item?.credit || 0
      debit += +item?.debit || 0

    }
    setValue('debit_amount', debit)
    setValue('credit_total', debit)
    setValue('credit_amount', credit)
    setValue('debit_total', credit)
  }
}