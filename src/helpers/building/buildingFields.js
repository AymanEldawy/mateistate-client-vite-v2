import FIELDS_STRUCTURE from "../FIELDS_STRUCTURE";

export const BUILDING_FIELDS = [

  // {  label: 'number', name: "number", type: "text", required: true },
  FIELDS_STRUCTURE.name(),
  { label: "ltnname", name: "ltnname", type: "text", required: false },

  FIELDS_STRUCTURE.textField({
    label: "city",
    name: "city",
  }),
  FIELDS_STRUCTURE.textField({
    label: "emirate",
    name: "emirate",
  }),
  FIELDS_STRUCTURE.textField({ label: "suburb", name: "suburb" }),
  FIELDS_STRUCTURE.textField({ label: "area", name: "area" }),
  FIELDS_STRUCTURE.textField({ label: "street", name: "street" }),
  FIELDS_STRUCTURE.textField({ label: "part_number", name: "partNumber" }),
  FIELDS_STRUCTURE.textField({ label: "basin_number", name: "basinNumber" }),
  FIELDS_STRUCTURE.textField({ label: "bond_number", name: "bondNumber" }),
  FIELDS_STRUCTURE.textField({ label: "bond_type", name: "bondType" }),
  FIELDS_STRUCTURE.dateField({ label: "bond_date", name: "bondDate" }),
  
  FIELDS_STRUCTURE.uniqueField({ label: 'owner_id', name: 'ownerId', table: "owner" }),
  FIELDS_STRUCTURE.textField({ label: "statement", name: "statement" }),
  FIELDS_STRUCTURE.uniqueField({ label: 'lessor_id', name: 'lessorId', table: "lessor" }),
  FIELDS_STRUCTURE.textField({ label: 'bank_account_number', name: 'bankAccountNumber',}),
  FIELDS_STRUCTURE.dateField({ label: 'purchase_date', name: 'purchaseDate'}),
  FIELDS_STRUCTURE.checkboxField({ label: 'display', name: 'display'}),

];

export const BUILDING_UNITS_FIELDS = [
  {
    label: "apartment_floor",
    name: "apartmentFloor",
    type: "number",
  },
  {
    label: "apartment_count_each_floor",
    name: "apartmentCount",
    type: "number",
  },
  {
    label: "shop_count",
    name: "shopCount",
    type: "number",
  },
  {
    label: "parking_floor",
    name: "parkingFloor",
    type: "number",
  },

  {
    label: "parking_count_each_floor",
    name: "parkingCount",
    type: "number",
  },
  {
    label: "underground_parking",
    name: "undergroundParking",
    type: "number",
  },
  {
    label: "store_count",
    name: "storeCount",
    type: "number",
  },
  {
    label: "penthouse_floor",
    name: "penthouseFloor",
    type: "number",
  },
  {
    label: "penthouse_count_each_floor",
    name: "penthouseCount",
    type: "number",
  },

  {
    label: "mezzanine_floor",
    name: "mezzanineFloor",
    type: "number",
  },
  {
    label: "mezzanine_count_each_floor",
    name: "mezzanineCount",
    type: "number",
  },

  {
    label: "office_floor",
    name: "officeFloor",
    type: "number",
  },
  {
    label: "office_count_each_floor",
    name: "officeCount",
    type: "number",
  },

  {
    label: "warehouse_count",
    name: "warehouseCount",
    type: "number",
  },
];

export const BUILDING_BUYING_FIELDS = [
  {
    label: "supplier_account_id",
    name: "supplierAccountId",
    table: "account",
  },
  {
    label: "statement",
    name: "statement",
    type: "text",
  },
  // {
  //   label: "genEntries",
  //   name: "genEntries",
  //   type: "checkbox",
  //   key: "checkbox",
  // },
];

export const BUILDING_EDITORIAL_FIELDS = [

  FIELDS_STRUCTURE.created_at(),
  {
    label: "building_cost",
    name: "buildingCost",
    type: "number",
  },
  {
    label: "commission_rate",
    name: "entryCommissionRate",
    type: "number",
  },
  {
    label: "vat_rate",
    name: "entryEatRate",
    type: "number",
  },
  FIELDS_STRUCTURE.account({
    label: "vat_account_id",
    name: "entryEatAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "landlord_account_id",
    name: "entryLandlordAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "commission_from_owner_account_id",
    name: "entryCommissionFromOwnerAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "revenue_account_id",
    name: "entryRevenueAccountId",
  }),
];

export const BUILDING_INVESTMENT_FIELDS = [

  {
    label: "owner_account_id",
    name: "investmentOwnerAccountId",
    table: "account",
  },
  {
    label: "investment_value",
    name: "investmentValue",
    type: "number",
  },
  {
    label: "investment_start_date",
    name: "investmentStartDate",
    type: "date",
  },
  {
    label: "investment_end_date",
    name: "investmentEndDate",
    type: "date",
  },

  // FIELDS_STRUCTURE.currency({
  //   name: "investment_currencyId",
  // }),
  {
    label: "tenants",
    name: "tenants",
    table: "account",
  },
  {
    label: "renters_insurance",
    name: "rentersInsurance",
    key: "checkbox",
  },

  {
    label: "gen_entries",
    name: "investmentGenEntries",
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
    name: "receivedAccountId",
  }),
  {
    label: "amount",
    name: "receivedAmount",
    type: "number",
  },

  // FIELDS_STRUCTURE.currency({
  //   name: "received_currencyId",
  // }),
  FIELDS_STRUCTURE.textField({
    label: "received_note",
    name: "receivedNote",
  }),
  {
    label: "received_date",
    name: "receivedDate",
    type: "date",
  },
  FIELDS_STRUCTURE.note(),

  {
    label: "building_receipt",
    name: "buildingReceipt",
    type: "checkbox",
    key: "checkbox",
  },
];

export const BUILDING_REAL_ESTATE_MANAGEMENT_FIELDS = [

  FIELDS_STRUCTURE.account({
    label: "owner_account_id",
    name: "ownerAccountId",
    // table: UNIQUE_REF_TABLES.suppliers,
    table: "account"
  }),
  {
    label: "commission_rate",
    name: "commissionRate",
    type: "number",
  },
  {
    label: "building_revenue_account_id",
    name: "buildingRevenueAccountId",
    table: "account",
  },
];

export const BUILDING_DEFAULT_ACCOUNTS_FIELDS = [
  // FIELDS_STRUCTURE.account({
  //   label: "buildingAccountId",
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
  //   label: "create_intoAccountId",
  //   name: "create_intoAccountId",
  // }),
  // FIELDS_STRUCTURE.cost_center({
  //   label: "mainCost_centerId",
  //   name: "mainCost_centerId",
  //   disabledCondition: "building.create_intoCost_center",
  // }),
  // {
  //   label: "create_intoCost_center",
  //   name: "create_intoCost_center",
  //   type: "checkbox",
  //
  //   key: "checkbox",
  //   readOnlyValue: "building.name",
  // },
  // {
  //   label: "create_intoCost_centerId",
  //   name: "create_intoCost_centerId",
  //
  //
  //   table: "create_intoCost_center",
  //
  // },
  FIELDS_STRUCTURE.account({
    label: "building_insurance_account_id",
    name: "buildingInsuranceAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "building_discount_account_id",
    name: "buildingDiscountAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "building_bank_account_id",
    name: "buildingBankAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "building_cash_account_id",
    name: "buildingCashAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "building_deposit_account_id",
    name: "buildingDepositAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "building_cheque_account_id",
    name: "buildingChequeAccountId",
  }),

  FIELDS_STRUCTURE.account({ label: "vat_account_id", name: "vatAccountId" }),

  FIELDS_STRUCTURE.account({
    label: "deferred_eat_account_id",
    name: "deferredEatAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "owner_balance",
    name: "ownerBalance",
  }),

  FIELDS_STRUCTURE.account({
    label: "owner_tax_account_id",
    name: "ownerTaxAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "commission_expense_account_id",
    name: "commissionExpenseAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "realestate_company_account_id",
    name: "realestateCompanyAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "customers_main_account_id",
    name: "customersMainAccountId",
  }),
];