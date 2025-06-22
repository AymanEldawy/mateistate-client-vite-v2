import { getSingleApartment } from "@/services/apartmentService";
import { getSingleBuilding } from "@/services/buildingService";
import { getSingleParking } from "@/services/parkingService";
import { getSingleShop } from "@/services/shopService";
import { FLAT_PROPERTY_TYPES } from "../building/buildingHelpers";

export function getNextYear() {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  return new Date(date.setFullYear(date.getFullYear() + 1))
}
export function getUnitType(contract, value) {
  let type = contract?.parkingId
    ? "parking"
    : contract?.shopId
      ? "shop"
      : "apartment";

  return FLAT_PROPERTY_TYPES[`${type}${value}`];
}

export function dividePrice(
  start_date,
  price,
  numbers,
  duration,
  each_duration
) {
  const monthlyPrice = (price / numbers).toFixed(2);
  // const remainingPrice = price % numbers;

  const result = [];

  let currentDate = new Date(start_date);
  for (let i = 0; i < numbers; i++) {
    const formattedDate = currentDate?.toISOString()?.substring(0, 10);

    // increase weeks
    if (duration === 1) {
      currentDate = new Date(
        currentDate.setDate(currentDate.getDate() + parseInt(each_duration) * 7)
      );
    }
    // increase months
    if (duration === 2) {
      currentDate = new Date(
        currentDate.setMonth(currentDate.getMonth() + parseInt(each_duration))
      );
    }
    // increase year
    if (duration === 3) {
      currentDate = new Date(
        currentDate.setFullYear(
          currentDate.getFullYear() + parseInt(each_duration)
        )
      );
    }

    let end = new Date(currentDate.getTime() - 86400000)
      ?.toISOString()
      ?.substring(0, 10);
    result.push({ month: formattedDate, price: monthlyPrice, end });
  }

  return result;
}



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

export const DESPATCH_TABLES_NAME = {
  CHEQUE: "CHEQUE",
  VOUCHER: "VOUCHER",
  USER: "USER",
  ACCOUNT: "ACCOUNT",
};

export const CONTRACT_STATUS_NAMES = {
  1: { status: "Valid", parentClass: "bg-orange-400" },
  2: { status: "Terminate and Evacuated", parentClass: "bg-blue-500" },
  3: { status: "Expired and not renewed", parentClass: "bg-red-500" },
  4: { status: "Expired and renewed", parentClass: "bg-purple-500" },
};

export const CONTRACT_STATUS = {
  Valid: 1,
  Terminate_and_Evacuated: 2,
  Expired_and_not_renewed: 3,
  Expired_and_renewed: 4,
};

export async function fetchAndMergeBuildingInfo(buildingId, setValue) {
  const data = await getSingleBuilding(buildingId);
  if (data?.success) {
    if (data?.lessorId)
      setValue(`contract.lessorId`, data?.lessorId);
    if (data?.commissionRate) {
      setValue(
        "contractCommission.commissionPercentage",
        data?.commissionRate
      );
      setValue(
        "contractCommission.commissionFromOwnerAccountId",
        data?.ownerAccountId
      );
      setValue("contractCommission.commissionAccountId", data?.buildingRevenueAccountId);
    }
    if (data?.buildingRevenueAccountId)
      setValue(`contract.revenueAccountId`, data?.buildingRevenueAccountId);
    if (data?.buildingDiscountAccountId)
      setValue(
        `contract.discountAccountId`,
        data?.buildingDiscountAccountId
      );
    if (data?.buildingInsuranceAccountId)
      setValue(
        `contract.insuranceAccountId`,
        data?.buildingInsuranceAccountId
      );
  }
}

export async function fetchAndMergeAssetInfo(asset, assetId, setValue) {
  let response = null
  switch (asset) {
    case 2: // Parking Unit
      response = await getSingleParking(assetId);
      break
    case 3: // shop
      response = await getSingleShop(assetId);
      break
    default:
      response = await getSingleApartment(assetId);
  }

  if (response?.success) {
    setValue(`contract.lawsuit`, response?.hasLawsuit);
    setValue(`contract.description`, response?.description);
    setValue(`contract.costCenterId`, response?.costCenterId);
  }
}

export function onWatchChangesInTab1(name, setValue, watch) {
  switch (name) {
    case 'contractValue': {
      setValue('contract.priceBeforeVat', watch('contract.contractValue'))
      setValue('contract.finalPrice', watch('contract.contractValue'))
      return;
    }

    // case 'buildingId': {
    //   ['apartment_id', 'parking_id', 'shop_id']?.forEach(flat => {

    //     if (watch(`contract.${flat}`)) {
    //       setValue(`contract.${flat}`, undefined)
    //     }
    //   })
    //   return;
    // }
    case "vatRate": {
      let discount = watch(`contract.vatRate`) || 0;
      let price_before_vat = +watch(`contract.priceBeforeVat`);
      let vatValue = (discount / 100) * price_before_vat || 0;
      let newFinalPrice = price_before_vat + vatValue;

      setValue(`contract.finalPrice`, newFinalPrice);
      setValue("installment.totalAmount", newFinalPrice);
      setValue(`contract.vatValue`, vatValue);
      return
    }
    case "discountRate": {
      let discount = watch(`contract.discountRate`) || 0;
      let price = watch(`contract.contractValue`);
      let finalPrice = price - (discount / 100) * price;
      let discountValue = price - finalPrice;

      setValue(`contract.finalPrice`, finalPrice);
      setValue(`contract.priceBeforeVat`, finalPrice);
      setValue("installment.totalAmount", price);
      if (discount)
        setValue(`contract.discountValue`, discountValue?.toFixed(2));

      // if Contract has Real state management
      if (watch("contractCommission.commissionPercentage")) {
        let commissionPrice = price - (discount / 100) * price;
        let commissionValue = price - commissionPrice;
        setValue(`contractCommission.commissionValue`, commissionValue);
      }

      return;
    }

    case "startDurationDate":
    case "contractDuration":
      calculateContractDuration(watch, setValue);
      return;
    default:
      return;
  }
}

export const calculateContractDuration = (
  watch,
  setValue,
) => {
  let duration = watch(`contract.contractDuration`);
  let date = new Date(watch(`contract.startDurationDate`));

  let first_installment_date = null;
  if (date) {
    first_installment_date = new Date(date)?.toISOString()?.substring(0, 10);
    setValue(`installment.firstInstallmentDate`, first_installment_date);
  }

  let end_duration_date = null;
  if (duration === 4) {
    setValue(`contract.endDurationDate`, new Date());
    return
  }

  switch (duration) {
    case 1:
      date = new Date(date.setMonth(date.getMonth() + 3))
      break;
    case 2:
      date = new Date(date.setMonth(date.getMonth() + 6))
      break;
    case 3:
      date = new Date(date.setFullYear(date.getFullYear() + 1))
      break;
    default:
      break;
  }
  let subDate = new Date(date)
  // subDate.setDate(subDate.getDate() - 1);
  subDate.setDate(subDate.getDate() - 1);
  setValue(`contract.endDurationDate`, new Date(subDate));
};

export async function mergeInstallmentAndFirstTabData(firstTabData, setValue, watch) {
  let total = firstTabData?.finalPrice;
  let date = firstTabData?.startDurationDate || firstTabData?.propertyDeliveryDate;

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

export async function mergePatternWithContractData(
  pattern,
  watch,
  setValue,
) {

console.log('called pattern merge', pattern);



  setValue('contract.contractType', pattern?.contractType);
  setValue('contract.contractPatternId', pattern?.id);
  setValue('contract.code', +pattern?.code);
  setValue('contract.flatType', pattern?.assetsType);
  if (pattern?.defaultRevenueAccountId)
    setValue(
      `contract.revenueAccountId`,
      pattern?.defaultRevenueAccountId
    );
  if (pattern?.defaultInsuranceAccountId)
    setValue(
      `contract.insuranceAccountId`,
      pattern?.defaultInsuranceAccountId
    );
  if (pattern?.defaultDiscountAccountId)
    setValue(
      `contract.discountAccountId`,
      pattern?.defaultDiscountAccountId
    );
  if (pattern?.defaultVatAccountId)
    setValue(
      `contract.vatAccountId`,
      pattern?.defaultVatAccountId
    );
  if (pattern?.vatRate)
    setValue(
      `contract.vatRate`,
      pattern?.vatRate
    );
  if (pattern?.genEntries)
    setValue(`contract.genEntries`, pattern?.genEntries);

  for (let i = 1; i <= 10; i++) {
    let account = pattern?.[`defaultFeesAccountId${i}`]
    if (account)
      setValue(`contractFinesGrid.${i - 1}.accountId`, account)
  }
}

export const onWatchChangesTerminationTab = (name, value, watch, setValue) => {
  switch (name) {
    case "terminated":
    case "terminationDate":
    case "roundTo":
      if (watch("contractTermination.terminated")) {
        let terminationDate = watch("contractTermination.terminationDate");
        if (!terminationDate) {
          terminationDate = new Date();
          setValue("contractTermination.terminationDate", terminationDate);
        }
        let price = watch(`contract.contractValue`);
        let start = watch(`contract.startDurationDate`);
        let end = watch(`contract.endDurationDate`);
        let { totalPrice, restPrice } = calculateModifiedPrice(
          price,
          start,
          end,
          terminationDate
        );

        let roundTo = watch("contractTermination.roundTo");
        switch (roundTo) {
          case 0:
            totalPrice = totalPrice?.toFixed(0);
            restPrice = restPrice?.toFixed(0);
            break;
          default:
            totalPrice = totalPrice?.toFixed(2);
            restPrice = restPrice?.toFixed(2);
            break;
        }
        setValue("contractTermination.ownerTotalAmount", totalPrice);
        setValue("contractTermination.ownerRestAmount", restPrice);
      }
      break;
    default:
      break;
  }
};

function calculateModifiedPrice(price, startDate, endDate, terminationDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let termination = new Date(terminationDate);
  let modifiedPrice = 0;
  let diffDays = 0;
  let totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));
  let priceInDay = price / totalDays;
  let totalPrice = 0;
  let restPrice = 0;

  if (termination > end) {
    diffDays = Math.floor((termination - end) / (1000 * 60 * 60 * 24));
    modifiedPrice = totalDays + diffDays;
  } else if (termination < end) {
    diffDays = Math.floor((end - termination) / (1000 * 60 * 60 * 24));
    modifiedPrice = totalDays - diffDays;
  }

  totalPrice = modifiedPrice * priceInDay;
  restPrice = price - totalPrice;

  return { totalPrice, restPrice };
}

export function getAssetType(name) {
  switch (name) {
    case "parking":
      return "parking";
    case "shop":
      return "shop";
    default:
      return "apartment";
  }
}

// export const getContractPayments = async (contract_id, setValue) => {
//   const chqResponse = await ApiActions.read("cheque", {
//     conditions: [
//       { type: "and", conditions: [["connect_with_id", "=", contract_id]] },
//     ],
//   });
//   setValue("installment_grid", chqResponse?.result);
//   const vouchersResponse = await ApiActions.read("voucher_main_data", {
//     conditions: [
//       { type: "and", conditions: [["connect_with_id", "=", contract_id]] },
//     ],
//     joins: [
//       {
//         type: "leftJoin",
//         table: "voucher_grid_data",
//         conditions: {
//           "voucher_main_data.id": "voucher_grid_data.voucher_main_data_id",
//         },
//       },
//     ],
//   });
//   setValue("voucher_grid", vouchersResponse?.result);
// };

// export const getOldContracts = async (setOldContracts) => {
//   const response = await ApiActions.read("contract");

//   if (response?.success) {
//     setOldContracts(response?.result);
//   }
// };

// export const fetchContractRestData = async (index, tabs, watch, setValue) => {
//   let contract_id = watch("contract.id");
//   let currentTabName = tabs?.[index];

//   if (watch(currentTabName)) return;

//   const res = await fetchData(currentTabName, "contract_id", contract_id);
//   if (!res?.success) return;

//   switch (currentTabName) {
//     case "contractCommission":
//     case "contractTerms":
//     case "contractCycle":
//     case "contractTermination":
//       setValue(currentTabName, res?.result?.at(0) || {});
//       return;
//     case "contractPictures":
//     case "contractOtherFees":
//     case "contractFixedAssets":
//     case "contractLinkedParking":
//     case "contractReceiptNumber":
//       setValue(currentTabName, res?.result || []);
//       return;
//     default:
//       return;
//   }
// };

// export const onChangeContractStatus = async (col, watch, setValue) => {
//   let id = watch("contract.id");
//   if (!id) return;
//   let value = watch(`contract.${col}`);

//   const response = await changeRowStatus("contract", id, col, !value);
//   if (response?.success) setValue(`contract.${col}`, !value);
// };

// export const contractValidation = (contract) => {
//   let isValid = true;

//   if (parseInt(contract.currentSecuringValue) > 0 && !contract.insuranceAccountId) {
//     isValid = false;
//     toast.error(`Insurance account is Required`);
//   }
//   if (contract.discountValue && !contract.discountAccountId) {
//     isValid = false;
//     toast.error(`Discount account is Required`);
//   }
//   if (!contract.contractValue) {
//     isValid = false;
//     toast.error(`Contract value is required`);
//   }

//   return isValid;
// };
