
import { z } from "zod";
import VALIDATION from "../VALIDATIONS";

export const apartmentDefaultValues = {
  "apartment": {
    "apartmentNo": "",
    "floorNo": "",
    "description": "",
    "category": "",
    "area": null,
    "areaUnit": "",
    "view": "",
    "bathroomCount": null,
    "balconyCount": null,
    "hasLawsuit": false,
    "mainCostCenterId": "",
    "costCenterId": "",
    "propertyType": "",
    "waterMeter": "",
    "electricityMeter": "",
    "statement": "",
    "xIndex": null,
    "yIndex": null,
    "roomCount": null,
    "propertyValueId": "",
    "hex": "",
    "costPrice": null,
    "amountPaid": null,
    "costCurrencyId": "",
    "note": "",
    "apartmentKind": null,
    "rowIndex": null,
    "assetHash": "",
    "code": null,
    "blocked": false,
    "kind": "",
    "buildingId": ""
  },
  "apartmentAccumulators": [
    {
      "number": 1,
      "apartmentId": null
    }
  ],
  "apartmentRentalPrices": [
    {
      "price": null,
      "number": null,
      "currencyId": "",
      "note": ""
    }
  ],
  "apartmentSellingPrices": [
    {
      "price": null,
      "currencyId": "",
      "number": null,
      "note": ""
    }
  ]
}


const apartmentAccumulatorSchema = z.object({
  number: VALIDATION.OPTIONAL_NUMBER,
  apartmentId: VALIDATION.OPTIONAL_STRING
});

const apartmentRentalPriceSchema = z.object({
  price: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  number: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  currencyId: VALIDATION.OPTIONAL_STRING,
  note: VALIDATION.OPTIONAL_STRING
});

const apartmentSellingPriceSchema = z.object({
  price: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  currencyId: VALIDATION.OPTIONAL_STRING,
  number: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  note: VALIDATION.OPTIONAL_STRING
});

const apartmentSchema = z.object({
  apartmentNo: VALIDATION.NON_EMPTY_STRING,
  floorNo: VALIDATION.OPTIONAL_STRING,
  description: VALIDATION.OPTIONAL_STRING,
  category: VALIDATION.OPTIONAL_STRING,
  area: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  areaUnit: VALIDATION.OPTIONAL_STRING,
  view: VALIDATION.OPTIONAL_STRING,
  bathroomCount: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  balconyCount: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  hasLawsuit: z.boolean(),
  mainCostCenterId: VALIDATION.OPTIONAL_STRING,
  costCenterId: VALIDATION.OPTIONAL_STRING,
  propertyType: VALIDATION.OPTIONAL_STRING,
  waterMeter: VALIDATION.OPTIONAL_STRING,
  electricityMeter: VALIDATION.OPTIONAL_STRING,
  statement: VALIDATION.OPTIONAL_STRING,
  xIndex: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  yIndex: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  roomCount: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  propertyValueId: VALIDATION.OPTIONAL_STRING,
  hex: VALIDATION.OPTIONAL_STRING,
  costPrice: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  amountPaid: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  costCurrencyId: VALIDATION.OPTIONAL_STRING,
  note: VALIDATION.OPTIONAL_STRING,
  apartmentKind: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  rowIndex: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  assetHash: VALIDATION.OPTIONAL_STRING,
  code: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  blocked: VALIDATION.OPTIONAL_BOOLEAN,
  kind: VALIDATION.OPTIONAL_STRING,
  buildingId: VALIDATION.NON_EMPTY_STRING
});

export const apartmentValidationSchema = () => z.object({
  apartment: apartmentSchema,
  apartmentAccumulators: z.array(apartmentAccumulatorSchema),
  apartmentRentalPrices: z.array(apartmentRentalPriceSchema),
  apartmentSellingPrices: z.array(apartmentSellingPriceSchema),
});
