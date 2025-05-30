
import { MATERIAL_TYPE } from '../DEFAULT_OPTIONS';
import FIELDS_STRUCTURE from './../FIELDS_STRUCTURE';

export const MATERIAL_GENERAL_FIELDS = [
  { label: "code", name: "code", type: "number", required: true },
  { label: "name", name: "name", type: "text", required: true },
  { label: "ltnname", name: "ltnname", type: "text", required: false },
  {
    label: "category_id",
    name: "categoryId",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "category",
    ref_col: "id",
  },
  {
    label: "material_group_id",
    name: "materialGroupId",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "material_group",
    ref_col: "id",
  },
  FIELDS_STRUCTURE.selectField({
    label: "material_type",
    name: "materialType",
    list: MATERIAL_TYPE,
  }),
  {
    label: "defaults1",
    name: "defaults1",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  { label: "unit1", name: "unit1", type: "text", required: false },
  { label: "barcode1", name: "barcode1", type: "text", required: false },
  { label: "unit2", name: "unit2", type: "text", required: false },
  { label: "exchange2", name: "exchange2", type: "number", required: false },
  { label: "barcode2", name: "barcode2", type: "text", required: false },
  {
    label: "defaults2",
    name: "defaults2",
    type: "checkbox",
    key: "switch",
    required: false,
  },
  { label: "unit3", name: "unit3", type: "text", required: false },
  { label: "exchange3", name: "exchange3", type: "number", required: false },
  { label: "barcode3", name: "barcode3", type: "text", required: false },
  {
    label: "defaults3",
    name: "defaults3",
    type: "checkbox",
    key: "switch",
    required: false,
  },

  { label: "note", name: "note", type: "text", required: false },
];
export const MATERIAL_BALANCE = [
  {
    label: "store_id",
    name: "storeId",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "store",
    ref_col: "id",
  },
  { label: "unit1", name: "unit1", type: "text", required: false },
  { label: "quality1", name: "quality1", type: "number", required: false },
  { label: "unit2", name: "unit2", type: "text", required: false },
  { label: "quality2", name: "quality2", type: "number", required: false },
  { label: "unit3", name: "unit3", type: "text", required: false },
  { label: "quality3", name: "quality3", type: "number", required: false },
];
export const MATERIAL_MINIMUM = [
  {
    label: "store_id",
    name: "storeId",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "store",
    ref_col: "id",
  },
  { label: "minimum", name: "minimum", type: "number", required: false },
  { label: "maximum", name: "maximum", type: "number", required: false },
  { label: "note", name: "note", type: "text", required: false },
];
export const MATERIAL_PRICES = [
  {
    label: "currency_id",
    name: "currencyId",
    type: "uuid",
    required: false,
    is_ref: true,
    ref_table: "currency",
    ref_col: "id",
  },
  {
    label: "currency_val",
    name: "currencyVal",
    type: "number",
    required: false,
  },
  { label: "vat_rate", name: "vatRate", type: "number", required: false },
  {
    label: "average_purchase",
    name: "averagePurchase",
    type: "number",
    required: false,
  },
  {
    label: "biggest_purchase",
    type: "number",
    required: false,
  },
  {
    label: "pricing_policy",
    name: "pricingPolicy",
    type: "number",
    required: false,
  },
  {
    label: "purchase_date",
    name: "purchaseDate",
    type: "date",
    required: false,
  },
  {
    label: "average_sales",
    name: "averageSales",
    type: "number",
    required: false,
  },
  {
    label: "largest_sales",
    name: "largestSales",
    type: "number",
    required: false,
  },
  { label: "last_price", name: "lastPrice", type: "number", required: false },
  { label: "sales_date", name: "salesDate", type: "date", required: false },
];
export const MATERIAL_PRICES_DETAILS = [
  { label: "price_type", name: "priceType", type: "number", required: false },
  { label: "unit1", name: "unit1", type: "number", required: false },
  { label: "unit2", name: "unit2", type: "number", required: false },
  { label: "unit3", name: "unit3", type: "number", required: false },
];
export const MATERIAL_SPECIFICATIONS = [
  {
    label: "specification",
    name: "specification",
    type: "text",
    required: false,
  },
  { label: "value", name: "value", type: "number", required: false },
  { label: "note", name: "note", type: "text", required: false },
];