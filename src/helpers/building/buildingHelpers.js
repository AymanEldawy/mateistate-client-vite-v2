import { getSingleBuilding } from "@/services/buildingService";

export const FLATS = {
  apartment_count: 0,
  penthouse_count: 0,
  parking_count: 0,
  mezzanine_count: 0,
  office_count: 0,
  store_count: 0,
  warehouse_count: 0,
  shop_count: 0,
  underground_parking: 0,
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

export function getUnitType(contract, value) {
  let type = contract?.parking_id
    ? "parking_"
    : contract?.shop_id
      ? "shop_"
      : "apartment_";

  return FLAT_PROPERTY_TYPES[`${type}${value}`];
}


export const FLAT_PROPERTY_TABS = {
  apartment: {
    tabName: "apartment",
    x: "apartment_floor",
    y: "apartment_count",
    no: "apartment_no",
    type: 1,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "",
    start: 101,
  },
  mezzanine: {
    tabName: "mezzanine",
    x: "mezzanine_floor",
    y: "mezzanine_count",
    no: "apartment_no",
    type: 2,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "M",
    start: "01",
  },
  office: {
    tabName: "office",
    x: "office_floor",
    y: "office_count",
    no: "apartment_no",
    type: 3,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "O",
    start: "101",
  },
  store: {
    tabName: "store",
    x: "store_count",
    y: "",
    no: "shop_no",
    type_col_name: "shop_kind",
    type: 2,
    table: "shop",
    prefix: "S",
    start: "01",
  },
  shop: {
    tabName: "shop",
    x: "shop_count",
    y: "",
    no: "shop_no",
    type: 1,
    type_col_name: "shop_kind",
    table: "shop",
    prefix: "SH",
    start: "01",
  },
  parking: {
    tabName: "parking",
    x: "parking_floor",
    y: "parking_count",
    no: "parking_no",
    type: 1,
    type_col_name: "parking_kind",
    table: "parking",
    prefix: "P",
    start: "01",
  },
  penthouse: {
    tabName: "penthouse",
    x: "penthouse_floor",
    y: "penthouse_count",
    no: "apartment_no",
    type: 4,
    type_col_name: "apartment_kind",
    table: "apartment",
    prefix: "PH",
    start: "101",
  },
  "underground parking": {
    tabName: "underground parking",
    x: "underground_parking",
    y: "",
    no: "parking_no",
    type: 2,
    type_col_name: "parking_kind",
    table: "parking",
    prefix: "UP",
    start: "01",
  },
  warehouse: {
    tabName: "warehouse",
    x: "warehouse_count",
    y: "",
    no: "apartment_no",
    type: 5,
    type_col_name: "apartment_kind",
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

export const findList = async (
  type,
  id,
  setFlatsDetails,
  COLLECTION_COUNTS,
  setUNITS_COLORED_COUNT
) => {
  let name = FLAT_PROPERTY_TABS[type]?.no;
  const response = await getSingleBuilding({ id })

  let data = response?.result;
  let hashApartmentTypes = {};
  let newType = "";
  if (data?.length) {
    for (const row of data) {
      let assetsType =
        type === "apartment"
          ? `${type}_${row?.apartment_kind}`
          : type === "parking"
            ? `${type}_${row?.parking_kind}`
            : type === "shop"
              ? `${type}_${row?.shop_kind}`
              : type;

      newType = FLAT_PROPERTY_TYPES[assetsType];
      hashApartmentTypes[newType] = {
        ...hashApartmentTypes?.[newType],
        [row?.asset_hash]: row,
      };
      COLLECTION_COUNTS[row?.asset_hash] = row?.hex;
    }

    setFlatsDetails((prev) => ({
      ...prev,
      ...hashApartmentTypes,
    }));

    setUNITS_COLORED_COUNT((prev) => ({
      ...prev,
      [newType]: Object.keys(hashApartmentTypes?.[newType]),
    }));
  }
};


export const refetchBuildingAssets = (
  id,
  setFlatsDetails,
  COLLECTION_COUNTS,
  setUNITS_COLORED_COUNT
) => {
  setFlatsDetails({});
  setUNITS_COLORED_COUNT({});
  COLLECTION_COUNTS = {};
  for (const asset of ["apartment", "shop", "parking"]) {
    findList(
      asset,
      id,
      setFlatsDetails,
      COLLECTION_COUNTS,
      setUNITS_COLORED_COUNT
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
