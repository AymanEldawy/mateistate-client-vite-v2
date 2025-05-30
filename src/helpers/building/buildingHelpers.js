import { getSingleBuilding } from "@/services/buildingService";

export const FLATS = {
  apartmentCount: 0,
  penthouseCount: 0,
  parkingCount: 0,
  mezzanineCount: 0,
  officeCount: 0,
  storeCount: 0,
  warehouseCount: 0,
  shopCount: 0,
  undergroundParking: 0,
};

export const FLAT_PROPERTY_COLORS = {
  apartment_1: "#864AF9",
  apartment_2: "#F8E559",
  apartment_3: "#43766C",
  apartment_4: "#DC84F3",
  apartment_5: "#FF004D",
  apartment_6: "#86B6F6",
  apartment_7: "#F6F7C4",
  shop_1: "#FB8B24",
  shop_2: "#3498DB",
  parking_1: "#200E3A",
  parking_2: "#9A031E",
};
export const FLAT_PROPERTY_TYPES = {
  apartment_1: "apartment",
  apartment_2: "mezzanine",
  apartment_3: "office",
  apartment_4: "penthouse",
  apartment_5: "warehouse",
  apartment_6: "driver flats",
  apartment_7: "servant flats",
  shop_1: "shop",
  shop_2: "store",
  parking_1: "parking",
  parking_2: "underground parking",
};

export const FLAT_PROPERTY_TABS = {
  apartment: {
    tabName: "apartment",
    x: "apartmentFloor",
    y: "apartmentCount",
    no: "apartmentNo",
    type: 1,
    type_col_name: "apartmentKind",
    table: "apartment",
    prefix: "",
    start: 101,
  },
  mezzanine: {
    tabName: "mezzanine",
    x: "mezzanineFloor",
    y: "mezzanineCount",
    no: "apartmentNo",
    type: 2,
    type_col_name: "apartmentKind",
    table: "apartment",
    prefix: "M",
    start: "01",
  },
  office: {
    tabName: "office",
    x: "officeFloor",
    y: "officeCount",
    no: "apartmentNo",
    type: 3,
    type_col_name: "apartmentKind",
    table: "apartment",
    prefix: "O",
    start: "101",
  },
  store: {
    tabName: "store",
    x: "storeCount",
    y: "",
    no: "shopNo",
    type_col_name: "shopKind",
    type: 2,
    table: "shop",
    prefix: "S",
    start: "01",
  },
  shop: {
    tabName: "shop",
    x: "shopCount",
    y: "",
    no: "shopNo",
    type: 1,
    type_col_name: "shopKind",
    table: "shop",
    prefix: "SH",
    start: "01",
  },
  parking: {
    tabName: "parking",
    x: "parkingFloor",
    y: "parkingCount",
    no: "parkingNo",
    type: 1,
    type_col_name: "parkingKind",
    table: "parking",
    prefix: "P",
    start: "01",
  },
  penthouse: {
    tabName: "penthouse",
    x: "penthouseFloor",
    y: "penthouseCount",
    no: "apartmentNo",
    type: 4,
    type_col_name: "apartmentKind",
    table: "apartment",
    prefix: "PH",
    start: "101",
  },
  "underground parking": {
    tabName: "underground parking",
    x: "undergroundParking",
    y: "",
    no: "parkingNo",
    type: 2,
    type_col_name: "parkingKind",
    table: "parking",
    prefix: "UP",
    start: "01",
  },
  warehouse: {
    tabName: "warehouse",
    x: "warehouseCount",
    y: "",
    no: "apartmentNo",
    type: 5,
    type_col_name: "apartmentKind",
    table: "apartment",
    prefix: "W",
    start: "01",
  },
};

export const FLATS_TABLE_NAME = {
  "underground parking": "parking",
  parking: "parking",
  shop: "shop",
  store: "shop",
  apartment: "apartment",
};

export const findListNew = async (
  type,
  key = 'apartmentKind',
  setFlatsDetails,
  COLLECTION_COUNTS,
  setUNITS_COLORED_COUNT,
  data
) => {

  if (!data.length) return

  let newType = "";
  let hashApartmentTypes = {};
  for (const row of data) {
    let assetsType = `${type}_${row?.[key]}`

    newType = FLAT_PROPERTY_TYPES[assetsType];
    hashApartmentTypes[newType] = {
      ...hashApartmentTypes?.[newType],
      [row?.assetHash]: row,
    };
    COLLECTION_COUNTS[row?.assetHash] = row?.hex;
  }

  setFlatsDetails((prev) => ({
    ...prev,
    ...hashApartmentTypes,
  }));
  console.log(hashApartmentTypes?.[newType], newType, hashApartmentTypes, 'hashApartmentTypes');
  setUNITS_COLORED_COUNT((prev) => ({
    ...prev,
    [newType]: Object.keys(hashApartmentTypes?.[newType]),
  }));



}

export const refetchBuildingAssets = (
  list,
  setFlatsDetails,
  COLLECTION_COUNTS,
  setUNITS_COLORED_COUNT,
) => {
  setFlatsDetails(() => {});
  setUNITS_COLORED_COUNT({});
  COLLECTION_COUNTS = {};
  for (const asset of ["apartment", "shop", "parking"]) {
    findListNew(
      asset,
      `${asset}Kind`,
      setFlatsDetails,
      COLLECTION_COUNTS,
      setUNITS_COLORED_COUNT,
      list?.[asset]
    );
  }
};

export const getPrefix = (tab) => {
  if (tab === "penthouse") return "PH";
  let tabSplit = tab?.split(" ");
  if (tabSplit?.length > 1)
    return `${tabSplit?.[0]?.[0]?.toUpperCase()}${tabSplit?.[1]?.[0]?.toUpperCase()}`;
  else return tab[0]?.toUpperCase();
};

export function generateFlatHashName(tab, setting, yIndex, xIndex) {
  switch (tab) {
    case "apartment":
      return `0${xIndex + 1}0${yIndex + 1}`;
    case "parking":
    case "mezzanine":
      return `${setting.prefix} ${xIndex}${yIndex + 1}`;
    case "office":
    case "penthouse":
      return `${setting.prefix} ${xIndex + 1}0${yIndex + 1}`;
    case "driver flats":
    case "servant flats":
      return `${setting.prefix} ${yIndex + 1}0${xIndex + 1}`;
    case "stores":
      return;
    case "warehouse":
    case "shop":
    case "underground parking":
      return `${setting.prefix} ${yIndex}${xIndex + 1}`;
    default:
      return `${setting.prefix} ${xIndex + 1}0${yIndex + 1}`;
  }
}

export const getAlphabetSortingView = (index) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return alphabet[index - 1];
};

export const hexToDecimal = (hex) => parseInt(hex, 16);
export const decimalToHex = (dec) =>
  (dec + Math.pow(16, 6)).toString(16).substr(-6);

export const getValueOfInputColor = (val) => {
  if (typeof val === "number") {
    return `#${decimalToHex(val)}`;
  }
};

export const DEFAULT_COLORS = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#000000", // Black
  "#FFFFFF", // White
  "#FFA500", // Orange
  "#800080", // Purple
  "#008000", // Dark Green
  "#FFC0CB", // Pink
  "#FFD700", // Gold
  "#A52A2A", // Brown
  "#008080", // Teal
  "#FF4500", // Orange Red
  "#6A5ACD", // Slate Blue
  "#D2691E", // Chocolate
  "#2E8B57", // Sea Green
  "#7B68EE", // Medium Slate Blue
];
