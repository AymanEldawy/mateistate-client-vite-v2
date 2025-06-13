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
  console.log('called mergeInstallmentAndFirstTabData with firstTabData:', firstTabData);
  
  let total = firstTabData?.final_price;
  let date = firstTabData?.start_duration_date || firstTabData?.property_delivery_date;

  if (!watch('installment.eachNumber')) {
    setValue("installment.eachNumber", 3);
  }

  if (!watch('installment.installmentsNumbers')) {
    setValue("installment.installmentsNumbers", 4);
  }

  if (total) {
    setValue("installment.totalAmount", total);
  }

  if (date) {
    setValue(
      `installment.firstInstallmentDate`,
      new Date(date)?.toISOString()?.substring(0, 10)
    );
  }


}


export const generatePaymentBatches = async (
  watch,
  setValue,
  CACHE_LIST,
  unitId
) => {
  const rest_amount = watch("installment.restAmount");
  const each_duration = watch("installment.eachDuration");
  const each_number = watch("installment.eachNumber");
  const first_installment_date = watch("installment.firstInstallmentDate");
  const installments_numbers = watch("installment.installmentsNumbers");
  const begin_number = watch("installment.beginNumber");
  const beneficiaryName = watch("installment.beneficiaryName");
  const accountId = watch(`contract.clientId`);
  let observeAccountId = await getAccountReceivable(watch(`contract.buildingId`))
  const client = CACHE_LIST?.client?.find(
    (c) => c.id === accountId
  );
  const bankId = watch("installment.bankId");
  const bank = CACHE_LIST?.bank?.find((c) => c.id === bankId);

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
    let internalNumber = +(begin_number || 1) + i;
    const note2 = `${COUNTER_CHQ_NUMBER?.[i]} Payment (${i + 1})`;
    const note1 = `received chq number ${internalNumber} from mr ${client?.name} ${result[i]?.price} due date ${dueDate} end date ${endDueDate} bank name ${bank?.name}`;

    cheques.push({
      internalNumber,
      createdAt: new Date(),
      dueDate: result[i]?.month,
      amount: result[i]?.price,
      endDueDate: result[i]?.end,
      bankId,
      accountId,
      observeAccountId: observeAccountId,
      beneficiaryName,
      costCenterId: watch("costCenterId"),
      observeCostCenterId: watch("costCenterId"),
      note1,
      note2,
      [unitId]: watch(`contract.${unitId}`),
    });
  }
  setValue("installment_grid", cheques);
};



export function onWatchChangesInstallmentTab(name, value, setValue, watch) {
  switch (name) {
    case "totalAmount": {

      let first_batch = watch(`installment.firstBatch`) || 0;
      setValue(`installment.restAmount`, value - +first_batch);
      break;
    }
    case "firstBatch": {

      let totalAmount = watch(`installment.totalAmount`);
      setValue(`installment.restAmount`, totalAmount - (value || 0));

      return;
    }

    case "hasFirstBatch":
      if (!value) {
        setValue("installment.paymentDate", null);
        setValue("installment.firstBatch", 0);
      }
      return;

    default:
      return;
  }
}

export function onWatchChangesInstallmentGridTab(name, setValue, watch, cache) {
  let row = name?.split(".").slice(0, 2).join(".");
  let note1 = ``;

  switch (name?.split(".")?.at(-1)) {
    case "dueDate":
    case "number":
    case "amount":
    case "bankId":
    case "endDueDate": {

      const number = watch(`${row}.number`);
      const clientId = watch(`contract.clientId`);
      const amount = watch(`${row}.amount`);

      const dueDate = new Date(watch(`${row}.dueDate`)).toLocaleDateString(
        "en-UK"
      );

      const endDueDate = new Date(
        watch(`${row}.endDueDate`)
      ).toLocaleDateString("en-UK");

      // const bank = getCacheRowData(cache, "bank", watch(`${row}.bank_id`));
      const bank = {};
      const client = {};
      // const client = getCacheRowData(
      //   cache,
      //   UNIQUE_REF_TABLES.clients,
      //   clientId
      // );

      note1 = `received chq number ${number} from mr ${client?.name} ${amount} due date ${dueDate} end date ${endDueDate} bank name ${bank?.name}`;
    }
      break;
    default:
      break;
  }
  setValue(`${row}.note1`, note1);
}