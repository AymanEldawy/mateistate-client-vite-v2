import { z } from 'zod';

export const shopDefaultValue = {
  shop: {
    shopNo: "",
    description: "",
    xIndex: 0,
    yIndex: 0,
    costCenterId: "",
    kind: "",
    area: 0,
    areaUnit: "",
    view: "",
    license1: "",
    license2: "",
    unifiedNum: "",
    hasLawsuit: false,
    waterMeter: "",
    electricityMeter: "",
    bondType: "",
    bondNo: "",
    bondDate: null,
    note: "",
    hex: "",
    floortNo: "",
    propertyType: 0,
    rowIndex: 0,
    assetHash: "",
    mainCostCenterId: "",
    shopKind: 0,
    code: 0,
    blocked: false,
    floorNo: "",
    buildingId: "",
    customerId: "",
    customerOwnerId: "",
    propertyValuesId: ""
  },
  shopPictures: {},
  shopAccomulators: [
    // {
    //   accumulatorName: "",
    //   lastReading: 0,
    //   currentReading: 0,
    //   unit: "",
    //   date: null
    // }
  ],
  shopFixedAssets: [
    // {
    //   fixedAssetName: "",
    //   fixedAssetValue: 0,
    //   currencyId: "",
    //   description: "",
    //   date: null
    // }
  ],
  shopRentalPrices: [
    // {
    //   rentalPrice: 0,
    //   currencyId: "",
    //   startDate: null,
    //   endDate: null,
    //   priceType: 0,
    //   // interval: null
    // }
  ],
  shopSellingPrices: [
    // {
    //   sellingPrice: 0,
    //   currencyId: "",
    //   date: null,
    //   priceType: 0
    // }
  ],
}

export const shopValidationSchema = () => z.object({
  shop: z.object({
    shopNo: z.string().min(1, "Shop number is required"),
    description: z.string().optional(),
    xIndex: z.number().optional(),
    yIndex: z.number().optional(),
    costCenterId: z.string().optional(),
    kind: z.string().optional(),
    area: z.number().optional(),
    areaUnit: z.string().optional(),
    view: z.string().optional(),
    license1: z.string().optional(),
    license2: z.string().optional(),
    unifiedNum: z.string().optional(),
    hasLawsuit: z.boolean().optional(),
    waterMeter: z.string().optional(),
    electricityMeter: z.string().optional(),
    bondType: z.string().optional(),
    bondNo: z.string().optional(),
    bondDate: z.date().nullable().optional(),
    note: z.string().optional(),
    hex: z.string().optional(),
    floortNo: z.string().optional(),
    propertyType: z.number().min(0).max(3).default(0),
    rowIndex: z.number().default(0),
    assetHash: z.string().optional(),
    mainCostCenterId: z.string().optional(),
    shopKind: z.number().min(0).max(3).default(0),
    code: z.number().default(0),
    blocked: z.boolean().default(false),
    buildingId: z.string().uuid(),
  }),
  shopPictures: z.object({}).optional(),
  shopAccomulators: z.array(
    z.object({
      accumulatorName: z.string().optional(),
      lastReading: z.number().optional(),
      currentReading: z.number().optional(),
      unit: z.string().optional(),
      date: z.date().nullable().optional()
    })
  ).optional(),
  shopFixedAssets: z.array(
    z.object({
      fixedAssetName: z.string().optional(),
      fixedAssetValue: z.number().optional(),
      currencyId: z.string().optional(),
      description: z.string().optional(),
      date: z.date().nullable().optional()
    })
  ).optional(),
  shopRentalPrices: z.array(
    z.object({
      rentalPrice: z.number().optional(),
      currencyId: z.string().optional(),
      startDate: z.date().nullable().optional(),
      endDate: z.date().nullable().optional(),
      priceType: z.number().min(0).max(3).default(0),
      // interval: z.number().optional()
    })
  ).optional(),
  shopSellingPrices: z.array(
    z.object({
      sellingPrice: z.number().optional(),
      currencyId: z.string().optional(),
      date: z.date().nullable().optional(),
      priceType: z.number().min(0).max(3).default(0)
    })
  ).optional()

})
