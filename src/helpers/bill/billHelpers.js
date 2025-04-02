import numberToText from "number-to-text";

export const calculateMaterialsTotal = (watch, setValue) => {
  const bill_material_details = watch("bill_material_details");
  let taxable = 0;
  let vat_amount = 0;
  let total = 0;
  let quantities = 0;
  for (let i = 0; i < bill_material_details?.length; i++) {
    let quantity = bill_material_details?.[i].quantity || 0;
    let percentage = bill_material_details?.[i].vat_percentage || 0;
    let unit_price = bill_material_details?.[i].unit_price || 0;
    let currentTotal = quantity * unit_price;

    taxable += +bill_material_details?.[i].vat_percentage;
    total += currentTotal || 0;
    quantities += +quantity || 0;

    let amount = percentage ? (currentTotal * percentage) / 100 : 0;

    setValue(`bill_material_details.${i}.total_price`, currentTotal);
    setValue(`bill_material_details.${i}.net`, currentTotal + amount);
    setValue(`bill_material_details.${i}.vat_amount`, amount);
    vat_amount += amount;
  }
  setValue("bill.total_quantities", parseInt(quantities));
  setValue("bill.subtotal", total);
  setValue("bill.taxable", taxable);
  setValue("bill.vat_amount", vat_amount);
  calculateTotal(watch, setValue);
};

export const calculateVatAndDiscounts = (watch, setValue, pattern) => {
  const bill_discounts_details = watch("bill_discounts_details");
  let discounts = 0;
  let extras = 0;
  for (let i = 0; i < bill_discounts_details?.length; i++) {
    discounts += +bill_discounts_details?.[i]?.discount || 0;
    if (
      +bill_discounts_details?.[i]?.discount &&
      !bill_discounts_details?.[i]?.account_id &&
      pattern?.discount_account_id
    ) {
      setValue(
        `bill_discounts_details.${i}.account_id`,
        pattern?.discount_account_id
      );
    }
    if (
      +bill_discounts_details?.[i]?.extra &&
      !bill_discounts_details?.[i]?.account_id &&
      pattern?.extra_account_id
    ) {
      setValue(
        `bill_discounts_details.${i}.account_id`,
        pattern?.extra_account_id
      );
    }

    extras += +bill_discounts_details?.[i].extra || 0;
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

  // setValue("bill.vat_amount", vatAmount);
  setValue("bill.total", newTotal);
  // setValue("bill.net", newTotal - subtotal);
  setValue("bill.bill_total_text", numberToText.convertToText(total));
};