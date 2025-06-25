import { UNIQUE_REF_TABLES } from "@/data/constants";
import { LEVELS_TYPE, NATIONALITY_LISTS } from "./DEFAULT_OPTIONS";
import { getAccountSearch, getSingleAccount } from "@/services/accountService";
import { getAllCostCenters, getSingleCostCenter } from "@/services/CostCenterService";
import { getSearchUser, getSingleUser } from "@/services/userService";
import { getAllCurrencies, getSingleCurrency } from "@/services/currencyService";
import { getAllLessors, getSingleLessor } from "@/services/lessorService";
import { getSearchApartment, getSingleApartment } from "@/services/apartmentService";
import { getSearchShop, getSingleShop } from "@/services/shopService";
import { getSearchParking, getSingleParking } from "@/services/parkingService";
import { getSearchBuilding, getSingleBuilding } from "@/services/buildingService";
import { getSearchVilla, getSingleVilla } from "@/services/villaService";
import { getSearchLand, getSingleLand } from "@/services/landServices";
import { getSearchStore, getSingleStore } from "@/services/storeService";

const textField = (additional) => ({
  type: "text",
  required: false,
  ...additional,
});

const dateField = (additional) => ({
  name: 'date',
  type: "date",
  required: false,
  ...additional,
});

const dateTimeField = (additional) => ({
  name: 'date',
  type: "datetime-local",
  required: false,
  ...additional,
});

const feedback = (additional) => ({
  label: 'feedback',
  name: 'feedback',
  type: "checkbox",
  required: false,
  ...additional,
});

const checkboxField = (additional) => ({
  type: "checkbox",
  required: false,
  ...additional,
});

const gen_entries = (additional) => ({
  label: 'genEntries',
  name: 'genEntries',
  type: "checkbox",
  required: false,
  ...additional,
});

const lawsuit = (additional) => ({
  label: 'lawsuit',
  name: 'lawsuit',
  type: "checkbox",
  required: false,
  ...additional,
});

const numberField = (additional) => ({
  type: "number",
  required: false,
  ...additional,
});

const selectField = (additional) => ({
  key: "select",
  options: [],
  required: false,
  ...additional,
});

const uniqueField = (additional) => ({
  ref_id: "id",
  ref_name: "name",
  ...additional,
});

const number = (additional) => ({
  label: "number",
  name: "number",
  type: "number",
  ...additional,
});

const created_at = (additional) => ({
  label: "date",
  name: "createdAt",
  type: "date",
  defaultValue: new Date(),
  hide_in_form: true,
  ...additional,
});

const name = (additional) => ({
  label: "name",
  name: "name",
  type: "text",
  required: true,
  ...additional,
});

const level = (additional) => ({
  label: "level",
  name: "level",
  key: "select",
  options: LEVELS_TYPE,
  intValue: true,
  ...additional,
});

const note = (additional) => ({
  label: "note",
  name: "note",
  type: "text",
  ...additional,
});

const nationality = (additional) => ({
  label: "nationality",
  name: "nationality",
  key: "select",
  options: NATIONALITY_LISTS,

  ...additional,
});
const account = (additional) => ({
  label: "account_id",
  name: "accountId",
  is_ref: true,
  ref_table: "account",
  getSearch: getAccountSearch,
  getSingle: getSingleAccount,
  table: "account",
  ...additional,
});
const apartment = (additional) => ({
  label: "apartment_id",
  name: "apartment_id",
  table: "apartment",
  is_ref: true,
  optionValue: "id",
  optionLabel: "apartmentNo",
  ref_table: "apartment",
  getSearch: getSearchApartment,
  getSingle: getSingleApartment,
  ...additional,
});
const shop = (additional) => ({
  label: "shop_id",
  name: "shop_id",
  table: "shop",
  is_ref: true,
  ref_table: "shop",
  getSearch: getSearchShop,
  getSingle: getSingleShop,
  ...additional,
});
const parking = (additional) => ({
  label: "parking_id",
  name: "parking_id",
  table: "parking",
  is_ref: true,
  ref_table: "parking",
  getSearch: getSearchParking,
  getSingle: getSingleParking,
  ...additional,
});
const cost_center = (additional) => ({
  label: "cost_center_id",
  name: "costCenterId",
  table: "cost_center",
  is_ref: true,
  ref_table: "cost_center",
  getSearch: getAllCostCenters,
  getSingle: getSingleCostCenter,

  ...additional,
});

const building = (additional) => ({
  label: "building_id",
  name: "buildingId",
  table: "building",
  is_ref: true,
  ref_table: "building",
  getSearch: getSearchBuilding,
  getSingle: getSingleBuilding,
  ...additional,
});

const villa = (additional) => ({
  label: "villa_id",
  name: "villa_id",
  is_ref: true,
  table: "villa",
  ref_name: "villa_no",
  ref_table: "villa",
  getSearch: getSearchVilla,
  getSingle: getSingleVilla,
  ...additional,
});

const land = (additional) => ({
  label: "land_id",
  name: "land_id",
  table: "land",
  is_ref: true,
  ref_name: "land_no",
  ref_table: "land",
  getSearch: getSearchLand,
  getSingle: getSingleLand,
  ...additional,
});

const bank = (additional) => ({
  label: "bank_id",
  name: "bankId",
  table: "bank",
  ...additional,
});
const store = (additional) => ({
  label: "store_id",
  name: "store_id",
  table: "store",
  is_ref: true,
  ref_table: "store",
  getSearch: getSearchStore,
  getSingle: getSingleStore,
  ...additional,
});

const client = (additional) => ({
  label: "client_id",
  name: "clientId",
  is_ref: true,
  ref_table: UNIQUE_REF_TABLES.clients,
  getSearch: getSearchUser,
  getSingle: getSingleUser,
  table: UNIQUE_REF_TABLES.clients,
  ...additional,
});


const currency = (additional) => ({
  label: "currency_id",
  name: "currencyId",
  table: 'currency',
  is_ref: true,
  ref_table: "currency",
  getSearch: getAllCurrencies,
  getSingle: getSingleCurrency,
  ...additional,
});

const suppliers = (additional) => ({
  label: "owner_id",
  name: "ownerId",
  table: UNIQUE_REF_TABLES.suppliers,
  ...additional,
});

const lessor = (additional) => ({
  is_ref: true,
  ref_table: "lessor",
  getSearch: getAllLessors,
  getSingle: getSingleLessor,
  label: "lessor",
  name: "lessor_id",
  table: "lessor",
  ...additional,
});

const FIELDS_STRUCTURE = {
  number,
  created_at,
  level,
  name,
  account,
  note,
  nationality,
  cost_center,
  shop,
  parking,
  apartment,
  villa,
  land,
  client,
  currency,
  suppliers,
  bank,
  building,
  store,
  // Fields,
  // switchField,
  lessor,
  textField,
  dateField,
  dateTimeField,
  numberField,
  selectField,
  uniqueField,
  feedback,
  lawsuit,
  gen_entries,
  checkboxField,
};

export default FIELDS_STRUCTURE;
