import { FLAT_PROPERTY_TYPES } from "@/data/constants";

export function getUnitType(contract, value) {
  let type = contract?.parking_id
    ? "parking_"
    : contract?.shop_id
      ? "shop_"
      : "apartment_";

  return FLAT_PROPERTY_TYPES[`${type}${value}`];
}


export function getNameFromList(list, value) {
  return list?.find(
    (c) => c.id === value
  )?.name || 'unknown';
}

export const getCreatedFromUrl = () => {

}