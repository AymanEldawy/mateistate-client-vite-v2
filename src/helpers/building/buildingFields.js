import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const BUILDING_FIELDS = [

  // {  label: 'number', name: "number", type: "text", required: true },
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  FIELDS_STRUCTURE.textField({
    label: "city",
    name: "city",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({
    label: "emirate",
    name: "emirate",
    type: "text",
  }),
  FIELDS_STRUCTURE.textField({ label: "suburb", name: "suburb", type: "text" }),
  FIELDS_STRUCTURE.textField({ label: "area", name: "area", type: "text" }),
  FIELDS_STRUCTURE.textField({ label: "street", name: "street", type: "text" }),
  {
    label: "building_number",
    name: "building_number",
    type: "number",
    hide_in_form: true,
  },
  {
    label: "part_number",
    name: "part_number",
    type: "text",
  },
  {
    label: "basin_number",
    name: "basin_number",
    type: "text",
  },
  {
    label: "bond_number",
    name: "bond_number",
    type: "text",
  },
  {
    label: "bond_type",
    name: "bond_type",
    type: "text",
  },
  {
    label: "bond_date",
    name: "bond_date",
    type: "date",
  },
  {
    label: "owner_id",
    name: "owner_id",
    table: "owner",
  },
  {
    label: "statement",
    name: "statement",
    type: "text",
  },
  {
    label: "lessor_id",
    name: "lessor_id",
    table: "lessor",
  },
  {
    label: "bank_account_number",
    name: "bank_account_number",
    type: "text",
  },
  {
    label: "purchase_date",
    name: "purchase_date",
    type: "date",
  },

  // FIELDS_STRUCTURE.currency({
  //   name: "building_currency_id",
  //   hideValue: false,
  // }),
  { label: "display", name: "display", type: "checkbox", key: "checkbox" },

];

export const BUILDING_UNITS_FIELDS = [
  {
    label: "apartment_floor",
    name: "apartment_floor",
    type: "number",
  },
  {
    label: "apartment_count_each_floor",
    name: "apartment_count",
    type: "number",
  },
  {
    label: "shop_count",
    name: "shop_count",
    type: "number",
  },
  {
    label: "parking_floor",
    name: "parking_floor",
    type: "number",
  },

  {
    label: "parking_count_each_floor",
    name: "parking_count",
    type: "number",
  },
  {
    label: "underground_parking",
    name: "underground_parking",
    type: "number",
  },
  {
    label: "store_count",
    name: "store_count",
    type: "number",
  },
  {
    label: "penthouse_floor",
    name: "penthouse_floor",
    type: "number",
  },
  {
    label: "penthouse_count_each_floor",
    name: "penthouse_count",
    type: "number",
  },

  {
    label: "mezzanine_floor",
    name: "mezzanine_floor",
    type: "number",
  },
  {
    label: "mezzanine_count_each_floor",
    name: "mezzanine_count",
    type: "number",
  },

  {
    label: "office_floor",
    name: "office_floor",
    type: "number",
  },
  {
    label: "office_count_each_floor",
    name: "office_count",
    type: "number",
  },

  {
    label: "warehouse_count",
    name: "warehouse_count",
    type: "number",
  },
];

export const BUILDING_BUYING_FIELDS = [
  {
    label: "supplier_account_id",
    name: "supplier_account_id",
    table: "account",
  },
  {
    label: "statement",
    name: "statement",
    type: "text",
  },
  // {
  //   label: "gen_entries",
  //   name: "gen_entries",
  //   type: "checkbox",
  //   key: "checkbox",
  // },
];

export const BUILDING_EDITORIAL_FIELDS = [

  FIELDS_STRUCTURE.created_at(),
  {
    label: "building_cost",
    name: "building_cost",
    type: "number",
  },
  {
    label: "commission_rate",
    name: "entry_commission_rate",
    type: "number",
  },
  {
    label: "vat_rate",
    name: "entry_vat_rate",
    type: "number",
  },
  FIELDS_STRUCTURE.account({
    label: "vat_account_id",
    name: "entry_vat_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "landlord_account_id",
    name: "entry_landlord_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "commission_from_owner_account_id",
    name: "entry_commission_from_owner_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "revenue_account_id",
    name: "entry_revenue_account_id",
  }),
];

export const BUILDING_INVESTMENT_FIELDS = [

  {
    label: "owner_account_id",
    name: "investment_owner_account_id",
    table: "account",
  },
  {
    label: "investment_value",
    name: "investment_value",
    type: "number",
  },
  {
    label: "investment_start_date",
    name: "investment_start_date",
    type: "date",
  },
  {
    label: "investment_end_date",
    name: "investment_end_date",
    type: "date",
  },

  // FIELDS_STRUCTURE.currency({
  //   name: "investment_currency_id",
  // }),
  {
    label: "tenants",
    name: "tenants",
    table: "account",
  },
  {
    label: "renters_insurance",
    name: "renters_insurance",
    table: "account",
    key: "checkbox",
  },

  {
    label: "gen_entries",
    name: "investment_gen_entries",
    type: "checkbox",
    key: "checkbox",
  },
];

// export const building_pictures = [

//   FIELDS_STRUCTURE.created_at(),
//   {
//     label: "picture",
//     name: "picture",
//     type: "file",

//     key: "image",
//     multiple: true,
//   },
// ];

export const BUILDING_REAL_ESTATE_DEVELOPMENT_FIELDS = [

  FIELDS_STRUCTURE.account({
    name: "received_account_id",
  }),
  {
    label: "amount",
    name: "received_amount",
    type: "number",
  },

  // FIELDS_STRUCTURE.currency({
  //   name: "received_currency_id",
  // }),
  FIELDS_STRUCTURE.textField({
    label: "received_note",
    name: "received_note",
  }),
  {
    label: "received_date",
    name: "received_date",
    type: "date",
  },
  FIELDS_STRUCTURE.note(),

  {
    label: "building_receipt",
    name: "building_receipt",
    type: "checkbox",
    key: "checkbox",
  },
];

export const BUILDING_REAL_ESTATE_MANAGEMENT_FIELDS = [

  FIELDS_STRUCTURE.account({
    label: "owner_account_id",
    name: "owner_account_id",
    // table: UNIQUE_REF_TABLES.suppliers,
    table:"account"
  }),
  {
    label: "commission_rate",
    name: "commission_rate",
    type: "number",
  },
  {
    label: "building_revenue_account_id",
    name: "building_revenue_account_id",
    table: "account",
  },
];

export const BUILDING_DEFAULT_ACCOUNTS_FIELDS = [
  // FIELDS_STRUCTURE.account({
  //   label: "building_account_id",
  //   name: "building",
  //   disabledCondition: "building.create_into_account",
  // }),
  // {
  //   label: "create_into_account",
  //   name: "create_into_account",
  //   type: "checkbox",
  //
  //   key: "checkbox",
  //   readOnlyValue: "building.name",
  // },
  // FIELDS_STRUCTURE.account({
  //   label: "create_into_account_id",
  //   name: "create_into_account_id",
  // }),
  // FIELDS_STRUCTURE.cost_center({
  //   label: "main_cost_center_id",
  //   name: "main_cost_center_id",
  //   disabledCondition: "building.create_into_cost_center",
  // }),
  // {
  //   label: "create_into_cost_center",
  //   name: "create_into_cost_center",
  //   type: "checkbox",
  //
  //   key: "checkbox",
  //   readOnlyValue: "building.name",
  // },
  // {
  //   label: "create_into_cost_center_id",
  //   name: "create_into_cost_center_id",
  //
  //
  //   table: "create_into_cost_center",
  //
  // },
  FIELDS_STRUCTURE.account({
    label: "building_insurance_account_id",
    name: "building_insurance_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "building_discount_account_id",
    name: "building_discount_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "building_bank_account_id",
    name: "building_bank_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "building_cash_account_id",
    name: "building_cash_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "building_deposit_account_id",
    name: "building_deposit_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "building_cheque_account_id",
    name: "building_cheque_account_id",
  }),

  FIELDS_STRUCTURE.account({ label: "vat_account_id", name: "vat_account_id" }),

  FIELDS_STRUCTURE.account({
    label: "deferred_vat_account_id",
    name: "deferred_vat_account_id",
  }),
  FIELDS_STRUCTURE.account({
    label: "owner_balance",
    name: "owner_balance",
  }),

  FIELDS_STRUCTURE.account({
    label: "owner_tax_account_id",
    name: "owner_tax_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "commission_expense_account_id",
    name: "commission_expense_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "realestate_company_account_id",
    name: "realestate_company_account_id",
  }),

  FIELDS_STRUCTURE.account({
    label: "customers_main_account_id",
    name: "customers_main_account_id",
  }),
];