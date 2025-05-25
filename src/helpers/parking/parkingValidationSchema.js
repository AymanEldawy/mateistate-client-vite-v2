
import { z } from "zod";
import VALIDATION from "../VALIDATIONS";

export const parkingDefaultValues = {
  "parking": {
    parkingNo: "",
    floorNo: "",
    description: "",
    area: undefined,
    areaUnit: "",
    parkingKind: 1,
    view: "",
    customerId: null,
    hasLawsuit: false,
    costCenterId: null,
    note: "",
    flatOwnerId: "",
    xIndex: undefined,
    yIndex: undefined,
    hex: "",
    propertyValuesId: null,
    propertyType: undefined,
    rowIndex: undefined,
    assetHash: "",
    mainCostCenterId: null,
    code: undefined,
    blocked: false,
    buildingId: null,
  },
  "rentalPrices": [
    {
      "price": null,
      "date": null,
      "number": null,
      "currencyId": null,
      "note": ""
    }
  ],
  "sellingPrices": [
    {
      "price": null,
      "date": null,
      "currencyId": null,
      "number": null,
      "note": ""
    }
  ]
}

const parkingRentalPriceSchema = z.object({
  price: VALIDATION.OPTIONAL_NUMBER,
  date: VALIDATION.OPTIONAL_STRING, // z.date().optional().nullable(),
  // number: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  currencyId: VALIDATION.OPTIONAL_STRING,
  note: VALIDATION.OPTIONAL_STRING
});

const parkingSellingPriceSchema = z.object({
  price: VALIDATION.OPTIONAL_NUMBER,
  date: VALIDATION.OPTIONAL_STRING, // z.date().optional().nullable(),
  currencyId: VALIDATION.OPTIONAL_STRING,
  // number: z.union([VALIDATION.OPTIONAL_NUMBER, z.null()]),
  note: VALIDATION.OPTIONAL_STRING
});

const parkingSchema = z.object({
  parkingNo: VALIDATION.NON_EMPTY_STRING,
  floorNo: VALIDATION.POSITIVE_STRING,
  description: VALIDATION.POSITIVE_STRING,
  area: VALIDATION.OPTIONAL_NUMBER,
  areaUnit: VALIDATION.POSITIVE_STRING,
  parkingKind: VALIDATION.POSITIVE_NUMBER,
  view: VALIDATION.POSITIVE_STRING,
  customerId: VALIDATION.OPTIONAL_STRING,
  hasLawsuit: VALIDATION.OPTIONAL_BOOLEAN,
  costCenterId: VALIDATION.OPTIONAL_STRING,
  note: VALIDATION.POSITIVE_STRING,
  flatOwnerId: VALIDATION.POSITIVE_STRING,
  xIndex: VALIDATION.OPTIONAL_NUMBER,
  yIndex: VALIDATION.OPTIONAL_NUMBER,
  hex: VALIDATION.POSITIVE_STRING,
  propertyValuesId: VALIDATION.OPTIONAL_STRING,
  propertyType: VALIDATION.OPTIONAL_NUMBER,
  rowIndex: VALIDATION.OPTIONAL_NUMBER,
  assetHash: VALIDATION.POSITIVE_STRING,
  mainCostCenterId: VALIDATION.OPTIONAL_STRING,
  code: VALIDATION.OPTIONAL_NUMBER,
  blocked: VALIDATION.OPTIONAL_BOOLEAN,
  buildingId: VALIDATION.NON_EMPTY_STRING,
});

export const parkingValidationSchema = () => z.object({
  parking: parkingSchema,
  parkingRentalPrices: z.array(parkingRentalPriceSchema).nullable(),
  parkingSellingPrices: z.array(parkingSellingPriceSchema).nullable(),
});
