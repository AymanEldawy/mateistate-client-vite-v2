import numberToText from "number-to-text";

export const calculateMaterialsTotal = (watch, setValue) => {
  const billMaterialDetails = watch("billMaterialDetails");
  let taxable = 0;
  let vatAmount = 0;
  let total = 0;
  let quantities = 0;
  for (let i = 0; i < billMaterialDetails?.length; i++) {
    let quantity = billMaterialDetails?.[i].quantity || 0;
    let percentage = billMaterialDetails?.[i].vatPercentage || 0;
    let unitPrice = billMaterialDetails?.[i].unitPrice || 0;
    let currentTotal = quantity * unitPrice;

    taxable += +billMaterialDetails?.[i].vatPercentage;
    total += currentTotal || 0;
    quantities += +quantity || 0;

    let amount = percentage ? (currentTotal * percentage) / 100 : 0;

    setValue(`billMaterialDetails.${i}.totalPrice`, currentTotal);
    setValue(`billMaterialDetails.${i}.net`, currentTotal + amount);
    setValue(`billMaterialDetails.${i}.vatAmount`, amount);
    vatAmount += amount;
  }
  setValue("bill.totalQuantities", parseInt(quantities));
  setValue("bill.subtotal", total);
  setValue("bill.taxable", taxable);
  setValue("bill.vatAmount", vatAmount);
  calculateTotal(watch, setValue);
};

export const calculateVatAndDiscounts = (watch, setValue, pattern) => {
  const billDiscountsDetails = watch("billDiscountsDetails");
  let discounts = 0;
  let extras = 0;
  for (let i = 0; i < billDiscountsDetails?.length; i++) {
    discounts += +billDiscountsDetails?.[i]?.discount || 0;
    if (
      +billDiscountsDetails?.[i]?.discount &&
      !billDiscountsDetails?.[i]?.accountId &&
      pattern?.discountAccountId
    ) {
      setValue(
        `billDiscountsDetails.${i}.accountId`,
        pattern?.discountAccountId
      );
    }
    if (
      +billDiscountsDetails?.[i]?.extra &&
      !billDiscountsDetails?.[i]?.accountId &&
      pattern?.extraAccountId
    ) {
      setValue(
        `billDiscountsDetails.${i}.accountId`,
        pattern?.extraAccountId
      );
    }

    extras += +billDiscountsDetails?.[i].extra || 0;
  }
  setValue("bill.discounts", +discounts);
  setValue("bill.extras", +extras);

  calculateTotal(watch, setValue);
};

export const calculateTotal = (watch, setValue) => {
  const vatPercentage = watch("bill.taxable") || 0;
  const subtotal = watch("bill.subtotal") || 0;
  const discounts = watch("bill.discounts") || 0;
  const extras = watch("bill.extras") || 0;
  // total always is calc all materials price
  let total = subtotal + (extras || 0);
  const vatAmount = (total * vatPercentage) / 100;
  let newTotal = total - discounts;
  newTotal += vatAmount;

  // setValue("bill.vatAmount", vatAmount);
  setValue("bill.total", newTotal);
  // setValue("bill.net", newTotal - subtotal);
  setValue("bill.billTotalText", numberToText.convertToText(total));
};



export async function mergePatternWithBillData(pattern, setValue, setRefresh) {
  setValue("bill.code", +pattern?.code);
  setValue("bill.billKind", pattern?.billType);
  setValue("bill.billPatternId", pattern?.id);

  if (pattern?.paymentMethod) {
    setValue("bill.paymentMethod", pattern?.paymentMethod);
  }
  if (pattern?.paymentMethod) {
    setValue("bill.taxable", pattern?.vatPercentage);
  }
  if (pattern?.costCenterId) {
    setValue("bill.costCenterId", pattern?.costCenterId);
  }
  if (pattern?.defaultStoreId) {
    setValue("bill.storeId", pattern?.defaultStoreId);
  }

  if (pattern?.materialAccountId) {
    setValue("bill.materialAccountId", pattern?.materialAccountId);
  }

  // if (pattern?.vatAccountId) {
  //   setValue("bill.vatAccountId", pattern?.vatAccountId);
  // }
  setRefresh((p) => !p);
}