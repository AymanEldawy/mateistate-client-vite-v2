import { getAccountReceivable } from "@/services/accountService";
import { dividePrice } from "./contractHelpers";

export const COUNTER_CHQ_NUMBER = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
  "thirteenth",
  "fourteenth",
  "fifteenth",
  "sixteenth",
  "seventeenth",
  "eighteenth",
  "nineteenth",
  "twentieth",
  "twenty-first",
  "twenty-second",
  "twenty-third",
  "twenty-fourth",
  "twenty-fifth",
  "twenty-sixth",
  "twenty-seventh",
  "twenty-eighth",
  "twenty-ninth",
  "thirtieth",
  "thirty-first",
  "thirty-second",
  "thirty-third",
  "thirty-fourth",
  "thirty-fifth",
  "thirty-sixth",
  "thirty-seventh",
  "thirty-eighth",
  "thirty-ninth",
  "fortieth",
];

export async function mergeInstallmentAndFirstTabData(firstTabData, setValue, watch) {
  let total = firstTabData?.final_price;
  let date = firstTabData?.start_duration_date || firstTabData?.property_delivery_date;

  if (!watch('installment.each_number')) {
    setValue("installment.each_number", 3);
  }

  if (!watch('installment.installments_numbers')) {
    setValue("installment.installments_numbers", 4);
  }

  if (total) {
    setValue("installment.total_amount", total);
  }

  if (date) {
    setValue(
      `installment.first_installment_date`,
      new Date(date)?.toISOString()?.substring(0, 10)
    );
  }


}


export const generatePaymentBatches = async (
  watch,
  setValue,
  CACHE_LIST,
  assetType
) => {
  const rest_amount = watch("installment.rest_amount");
  const each_duration = watch("installment.each_duration");
  const each_number = watch("installment.each_number");
  const first_installment_date = watch("installment.first_installment_date");
  const installments_numbers = watch("installment.installments_numbers");
  const begin_number = watch("installment.begin_number");
  const beneficiary_name = watch("installment.beneficiary_name");
  const account_id = watch(`contract.client_id`);
  let observe_account_id = await getAccountReceivable(watch(`contract.building_id`))
  const client = CACHE_LIST?.client?.find(
    (c) => c.id === watch(`contract.client_id`)
  );
  const bank_id = watch("installment.bank_id");
  const bank = CACHE_LIST?.bank?.find((c) => c.id === bank_id);

  const result = dividePrice(
    new Date(first_installment_date),
    rest_amount,
    installments_numbers,
    each_duration,
    each_number
  );

  let cheques = [];

  for (let i = 0; i < result.length; i++) {
    let dueDate = new Date(result[i]?.month)?.toLocaleDateString("en-UK");
    let endDueDate = new Date(result[i]?.end)?.toLocaleDateString("en-UK");
    let internal_number = +(begin_number || 1) + i;
    const note2 = `${COUNTER_CHQ_NUMBER?.[i]} Payment (${i + 1})`;
    const note1 = `received chq number ${internal_number} from mr ${client?.name} ${result[i]?.price} due date ${dueDate} end date ${endDueDate} bank name ${bank?.name}`;

    cheques.push({
      internal_number,
      created_at: new Date(),
      due_date: result[i]?.month,
      amount: result[i]?.price,
      end_due_date: result[i]?.end,
      bank_id,
      account_id,
      observe_account_id: observe_account_id,
      beneficiary_name,
      cost_center_id: watch("cost_center_id"),
      observe_cost_center_id: watch("cost_center_id"),
      note1,
      note2,
      [`${assetType}_id`]: watch(`contract.${assetType}_id`),
    });
  }
  setValue("installment_grid", cheques);
};