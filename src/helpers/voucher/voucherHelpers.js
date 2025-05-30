const CACHE_ROW_VALUE = {};

export const calculateVoucherAmount = (row, val, column, watch, setValue) => {
  let value = 0;
  let amountColumnName =
    column === "credit" ? "voucher.credit_amount" : "voucher.debit_amount";
  let totalColumnName = column === "credit" ? "voucher.debit_total" : "voucher.credit_total";

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
  let grid = watch("voucherGridData");
  if (grid?.length) {
    let debit = 0
    let credit = 0
    for (const item of grid) {
      credit += +item?.credit || 0
      debit += +item?.debit || 0

    }
    setValue('voucher.debitAmount', debit)
    setValue('voucher.creditAmount', credit)
    setValue('voucher.debitTotal', debit)
    setValue('voucher.creditTotal', credit)
  }
}