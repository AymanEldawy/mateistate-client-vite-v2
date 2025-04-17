import { FLAT_PROPERTY_TYPES } from "../building/buildingHelpers";

export function getUnitType(contract, value) {
  let type = contract?.parking_id
    ? "parking_"
    : contract?.shop_id
      ? "shop_"
      : "apartment_";

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
