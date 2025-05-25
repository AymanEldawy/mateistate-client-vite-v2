import { z } from "zod";
import VALIDATION from "../VALIDATIONS";

export const landDefaultValues = {
  land: {
    // type: null,
    name: null,
    landNo: null,
    city: null,
    region: null,
    space: null,
    area: null,
    areaUnit: null,
    price: null,
    licenseNo: null,
    license: null,
    licenseDate: null,
    details: null,
    landType: null,
    side: null,
    streetName: null,
    streetCount: null,
    buildable: true,
    landowner: null,
    beginLandValue: null,
    currencyBeginLandId: null,
    currencyValBeginLand: null,
    beginLandCostCenterId: null,
    currencyPurchaseId: null,
    currencyValPurchase: null,
    purchaseNote: null,
    accountId: null,
    cuownerId: null,
    costCenterId: null,
    bankAccountId: null,
    commissionPercent: null,
    commissionIncomeAccountId: null,
    customerOwnerId: null,
    ownerAccountId: null,
    identityValue: null,
    currencyIdentityId: null,
    currencyValidEntity: null,
    identityBeginDate: null,
    identityEndDate: null,
    createEntryInvestment: null,
    identityNote: null,
    ban: null
  },
  landRentalPrices: [
    // {
    //   price: null,
    //   date: null,
    //   currencyId: null,
    //   note: null,
    //   number: 1
    // }
  ],
  landSellingPrices: [
    // {
    //   price: null,
    //   date: null,
    //   currencyId: null,
    //   note: null,
    //   number: 1
    // }
  ],
  landWallets: [
    // {
    //   // number: "W-001",
    //   mainCost: null,
    //   expense: null,
    //   beginDate: null,
    //   contractId: null,
    // }
  ],
  landAccumulates: [
    // {
    //   number: 1,
    //   landId: null
    // }
  ]
};


const landRentalPriceSchema = z.object({
  price: VALIDATION.OPTIONAL_NUMBER,
  date: VALIDATION.OPTIONAL_DATE,
  currencyId: VALIDATION.OPTIONAL_STRING,
  note: VALIDATION.OPTIONAL_STRING,
  // number: VALIDATION.OPTIONAL_NUMBER
});

const landSellingPriceSchema = z.object({
  price: VALIDATION.OPTIONAL_NUMBER,
  date: VALIDATION.OPTIONAL_DATE,
  currencyId: VALIDATION.OPTIONAL_STRING,
  note: VALIDATION.OPTIONAL_STRING,
  // number: VALIDATION.OPTIONAL_NUMBER
});

const landWalletSchema = z.object({
  number: VALIDATION.OPTIONAL_STRING,
  mainCost: VALIDATION.OPTIONAL_NUMBER,
  expense: VALIDATION.OPTIONAL_NUMBER,
  beginDate: VALIDATION.OPTIONAL_DATE,
  contractId: VALIDATION.OPTIONAL_STRING
});

const landAccumulateSchema = z.object({
  // number: VALIDATION.OPTIONAL_NUMBER,
  landId: VALIDATION.OPTIONAL_STRING
});

const landSchema = z.object({
  // type: VALIDATION.OPTIONAL_NUMBER,
  name: VALIDATION.OPTIONAL_STRING,
  landNo: VALIDATION.OPTIONAL_STRING,
  city: VALIDATION.OPTIONAL_STRING,
  region: VALIDATION.OPTIONAL_STRING,
  space: VALIDATION.OPTIONAL_STRING,
  area: VALIDATION.OPTIONAL_NUMBER,
  areaUnit: VALIDATION.OPTIONAL_STRING,
  price: VALIDATION.OPTIONAL_NUMBER,
  licenseNo: VALIDATION.OPTIONAL_STRING,
  license: VALIDATION.OPTIONAL_STRING,
  licenseDate: VALIDATION.OPTIONAL_STRING,
  details: VALIDATION.OPTIONAL_STRING,
  landType: VALIDATION.OPTIONAL_STRING,
  side: VALIDATION.OPTIONAL_STRING,
  streetName: VALIDATION.OPTIONAL_STRING,
  streetCount: VALIDATION.OPTIONAL_NUMBER,
  buildable: VALIDATION.OPTIONAL_BOOLEAN,
  landowner: VALIDATION.OPTIONAL_NUMBER,
  beginLandValue: VALIDATION.OPTIONAL_NUMBER,
  currencyBeginLandId: VALIDATION.OPTIONAL_STRING,
  currencyValBeginLand: VALIDATION.OPTIONAL_NUMBER,
  beginLandCostCenterId: VALIDATION.OPTIONAL_STRING,
  currencyPurchaseId: VALIDATION.OPTIONAL_STRING,
  currencyValPurchase: VALIDATION.OPTIONAL_NUMBER,
  purchaseNote: VALIDATION.OPTIONAL_STRING,
  accountId: VALIDATION.OPTIONAL_STRING,
  cuownerId: VALIDATION.OPTIONAL_STRING,
  costCenterId: VALIDATION.OPTIONAL_STRING,
  bankAccountId: VALIDATION.OPTIONAL_STRING,
  commissionPercent: VALIDATION.OPTIONAL_NUMBER,
  commissionIncomeAccountId: VALIDATION.OPTIONAL_STRING,
  customerOwnerId: VALIDATION.OPTIONAL_STRING,
  ownerAccountId: VALIDATION.OPTIONAL_STRING,
  identityValue: VALIDATION.OPTIONAL_NUMBER,
  currencyIdentityId: VALIDATION.OPTIONAL_STRING,
  currencyValidEntity: VALIDATION.OPTIONAL_NUMBER,
  identityBeginDate: VALIDATION.OPTIONAL_STRING,
  identityEndDate: VALIDATION.OPTIONAL_STRING,
  createEntryInvestment: VALIDATION.OPTIONAL_BOOLEAN,
  identityNote: VALIDATION.OPTIONAL_STRING,
  ban: VALIDATION.OPTIONAL_BOOLEAN
});

export const landValidationSchema = () => z.object({
  land: landSchema,
  landRentalPrices: z.array(landRentalPriceSchema),
  landSellingPrices: z.array(landSellingPriceSchema),
  landWallets: z.array(landWalletSchema),
  landAccumulates: z.array(landAccumulateSchema)
});

