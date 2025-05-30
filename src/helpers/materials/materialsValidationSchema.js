
import { z } from 'zod';
import VALIDATION from '../VALIDATIONS';

export const materialsDefaultValue = {
  material: {
    code: null,
    name: '',
    ltnname: '',
    categoryId: '',
    materialGroupId: '',
    materialType: '',
    defaults1: true,
    unit1: '',
    barcode1: '',
    unit2: '',
    exchange2: null,
    barcode2: '',
    defaults2: false,
    unit3: '',
    exchange3: null,
    barcode3: '',
    defaults3: false,
    note: '',
  },
  materialBalances: [{
    storeId: '',
    unit1: '',
    quality1: null,
    unit2: '',
    quality2: null,
    unit3: '',
    quality3: null,
  }],
  materialMinimums: [{
    storeId: '',
    minimum: null,
    maximum: null,
    note: '',
  }],
  materialPrice: {
    currencyId: '',
    currencyVal: null,
    vatRate: null,
    averagePurchase: null,
    biggestPurchase: null,
    pricingPolicy: null,
    purchaseDate: '',
    averageSales: null,
    largestSales: null,
    lastPrice: null,
    salesDate: '',
  },
  materialPriceDetails: [{
    priceType: null,
    unit1: null,
    unit2: null,
    unit3: null,
  }],
  materialSpecifications: [{
    name: '',
    value: null,
    description: '',
  }],
};

// MATERIAL_GENERAL_FIELDS Schema
const MaterialGeneralSchema = z.object({
  code: z.number({ required_error: 'Code is required' }).int().positive(),
  name: z.string({ required_error: 'Name is required' }).min(1, 'Name is required'),
  ltnname: VALIDATION.OPTIONAL_STRING,
  categoryId: VALIDATION.OPTIONAL_UUID,
  materialGroupId: z.string().uuid(),
  materialType: z.number({ required_error: 'materialType is required' }).int().positive(), // Assuming MATERIAL_TYPE is an array of strings
  defaults1: VALIDATION.OPTIONAL_BOOLEAN,
  unit1: VALIDATION.OPTIONAL_STRING,
  barcode1: VALIDATION.OPTIONAL_STRING,
  unit2: VALIDATION.OPTIONAL_STRING,
  exchange2: VALIDATION.OPTIONAL_NUMBER,
  barcode2: VALIDATION.OPTIONAL_STRING,
  defaults2: VALIDATION.OPTIONAL_BOOLEAN,
  unit3: VALIDATION.OPTIONAL_STRING,
  exchange3: VALIDATION.OPTIONAL_NUMBER,
  barcode3: VALIDATION.OPTIONAL_STRING,
  defaults3: VALIDATION.OPTIONAL_BOOLEAN,
  note: VALIDATION.OPTIONAL_STRING,
});

// MATERIAL_BALANCE Schema
const MaterialBalanceSchema = z.object({
  storeId: VALIDATION.OPTIONAL_UUID,
  unit1: VALIDATION.OPTIONAL_STRING,
  quality1: VALIDATION.OPTIONAL_NUMBER,
  unit2: VALIDATION.OPTIONAL_STRING,
  quality2: VALIDATION.OPTIONAL_NUMBER,
  unit3: VALIDATION.OPTIONAL_STRING,
  quality3: VALIDATION.OPTIONAL_NUMBER,
});

// MATERIAL_MINIMUM Schema
const MaterialMinimumSchema = z.object({
  storeId: VALIDATION.OPTIONAL_UUID,
  minimum: VALIDATION.OPTIONAL_NUMBER,
  maximum: VALIDATION.OPTIONAL_NUMBER,
  note: VALIDATION.OPTIONAL_STRING,
});

// MATERIAL_PRICES Schema
const MaterialPricesSchema = z.object({
  currencyId: VALIDATION.OPTIONAL_UUID,
  currencyVal: VALIDATION.OPTIONAL_NUMBER,
  vatRate: VALIDATION.OPTIONAL_NUMBER,
  averagePurchase: VALIDATION.OPTIONAL_NUMBER,
  biggestPurchase: VALIDATION.OPTIONAL_NUMBER,
  pricingPolicy: VALIDATION.OPTIONAL_NUMBER,
  purchaseDate: VALIDATION.OPTIONAL_DATE,
  averageSales: VALIDATION.OPTIONAL_NUMBER,
  largestSales: VALIDATION.OPTIONAL_NUMBER,
  lastPrice: VALIDATION.OPTIONAL_NUMBER,
  salesDate: VALIDATION.OPTIONAL_DATE,
});

// MATERIAL_PRICES_DETAILS Schema
const MaterialPricesDetailsSchema = z.object({
  priceType: VALIDATION.OPTIONAL_NUMBER,
  unit1: VALIDATION.OPTIONAL_NUMBER,
  unit2: VALIDATION.OPTIONAL_NUMBER,
  unit3: VALIDATION.OPTIONAL_NUMBER,
});

// MATERIAL_SPECIFICATIONS Schema
const MaterialSpecificationsSchema = z.object({
  name: VALIDATION.OPTIONAL_STRING,
  value: VALIDATION.OPTIONAL_NUMBER,
  description: VALIDATION.OPTIONAL_STRING,
});

// Combined Schema for the entire form
export const materialsValidationSchema = () => z.object({
  material: MaterialGeneralSchema,
  materialBalances: MaterialBalanceSchema.array().optional(),
  materialMinimums: MaterialMinimumSchema.array().optional(),
  materialPrice: MaterialPricesSchema,
  materialPriceDetails: MaterialPricesDetailsSchema.array().optional(),
  materialSpecifications: MaterialSpecificationsSchema.array().optional(),
});





