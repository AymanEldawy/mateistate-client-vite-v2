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
  FIELDS_STRUCTURE.textField({ label: "partNumber", name: "partNumber" }),
  FIELDS_STRUCTURE.textField({ label: "basinNumber", name: "basinNumber" }),
  FIELDS_STRUCTURE.textField({ label: "bondNumber", name: "bondNumber" }),
  FIELDS_STRUCTURE.textField({ label: "bondType", name: "bondType" }),
  FIELDS_STRUCTURE.dateField({ label: "bondDate", name: "bondDate" }),
  
  FIELDS_STRUCTURE.uniqueField({ label: 'ownerId', name: 'ownerId', table: "owner" }),
  FIELDS_STRUCTURE.textField({ label: "statement", name: "statement" }),
  FIELDS_STRUCTURE.uniqueField({ label: 'lessorId', name: 'lessorId', table: "lessor" }),
  FIELDS_STRUCTURE.textField({ label: 'bankAccountNumber', name: 'bankAccountNumber',}),
  FIELDS_STRUCTURE.dateField({ label: 'purchaseDate', name: 'purchaseDate'}),
  FIELDS_STRUCTURE.checkboxField({ label: 'display', name: 'display'}),

];

export const BUILDING_UNITS_FIELDS = [
  {
    label: "apartmentFloor",
    name: "apartmentFloor",
    type: "number",
  },
  {
    label: "apartmentCountEachFloor",
    name: "apartmentCount",
    type: "number",
  },
  {
    label: "shopCount",
    name: "shopCount",
    type: "number",
  },
  {
    label: "parkingFloor",
    name: "parkingFloor",
    type: "number",
  },

  {
    label: "parkingCountEachFloor",
    name: "parkingCount",
    type: "number",
  },
  {
    label: "undergroundParking",
    name: "undergroundParking",
    type: "number",
  },
  {
    label: "storeCount",
    name: "storeCount",
    type: "number",
  },
  {
    label: "penthouseFloor",
    name: "penthouseFloor",
    type: "number",
  },
  {
    label: "penthouseCountEachFloor",
    name: "penthouseCount",
    type: "number",
  },

  {
    label: "mezzanineFloor",
    name: "mezzanineFloor",
    type: "number",
  },
  {
    label: "mezzanineCountEachFloor",
    name: "mezzanineCount",
    type: "number",
  },

  {
    label: "officeFloor",
    name: "officeFloor",
    type: "number",
  },
  {
    label: "officeCountEachFloor",
    name: "officeCount",
    type: "number",
  },

  {
    label: "warehouseCount",
    name: "warehouseCount",
    type: "number",
  },
];

export const BUILDING_BUYING_FIELDS = [
  {
    label: "supplierAccountId",
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
    label: "buildingCost",
    name: "buildingCost",
    type: "number",
  },
  {
    label: "commissionRate",
    name: "entryCommissionRate",
    type: "number",
  },
  {
    label: "vatRate",
    name: "entryEatRate",
    type: "number",
  },
  FIELDS_STRUCTURE.account({
    label: "vatAccountId",
    name: "entryEatAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "landlordAccountId",
    name: "entryLandlordAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "commissionFromOwnerAccountId",
    name: "entryCommissionFromOwnerAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "revenueAccountId",
    name: "entryRevenueAccountId",
  }),
];

export const BUILDING_INVESTMENT_FIELDS = [

  {
    label: "ownerAccountId",
    name: "investmentOwnerAccountId",
    table: "account",
  },
  {
    label: "investmentValue",
    name: "investmentValue",
    type: "number",
  },
  {
    label: "investmentStartDate",
    name: "investmentStartDate",
    type: "date",
  },
  {
    label: "investmentEndDate",
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
    label: "rentersInsurance",
    name: "rentersInsurance",
    key: "checkbox",
  },

  {
    label: "genEntries",
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
    label: "receivedNote",
    name: "receivedNote",
  }),
  {
    label: "receivedDate",
    name: "receivedDate",
    type: "date",
  },
  FIELDS_STRUCTURE.note(),

  {
    label: "buildingReceipt",
    name: "buildingReceipt",
    type: "checkbox",
    key: "checkbox",
  },
];

export const BUILDING_REAL_ESTATE_MANAGEMENT_FIELDS = [

  FIELDS_STRUCTURE.account({
    label: "ownerAccountId",
    name: "ownerAccountId",
    // table: UNIQUE_REF_TABLES.suppliers,
    table: "account"
  }),
  {
    label: "commissionRate",
    name: "commissionRate",
    type: "number",
  },
  {
    label: "buildingRevenueAccountId",
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
    label: "buildingInsuranceAccountId",
    name: "buildingInsuranceAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "buildingDiscountAccountId",
    name: "buildingDiscountAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "buildingBankAccountId",
    name: "buildingBankAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "buildingCashAccountId",
    name: "buildingCashAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "buildingDepositAccountId",
    name: "buildingDepositAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "buildingChequeAccountId",
    name: "buildingChequeAccountId",
  }),

  FIELDS_STRUCTURE.account({ label: "vatAccountId", name: "vatAccountId" }),

  FIELDS_STRUCTURE.account({
    label: "deferredEatAccountId",
    name: "deferredEatAccountId",
  }),
  FIELDS_STRUCTURE.account({
    label: "ownerBalance",
    name: "ownerBalance",
  }),

  FIELDS_STRUCTURE.account({
    label: "ownerTaxAccountId",
    name: "ownerTaxAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "commissionExpenseAccountId",
    name: "commissionExpenseAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "realestateCompanyAccountId",
    name: "realestateCompanyAccountId",
  }),

  FIELDS_STRUCTURE.account({
    label: "customersMainAccountId",
    name: "customersMainAccountId",
  }),
];