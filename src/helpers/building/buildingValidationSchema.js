import { z } from "zod";
import { FLATS } from "./buildingHelpers";
import { BUILDING_STEPS } from "./buildingSteps";

export const buildingDefaultValues = {
  apartmentCount: 0,
  apartmentFloor: 0,
  area: null,
  bankAccountNumber: null,
  basinNumber: null,
  bondDate: null,
  bondNumber: null,
  bondType: null,
  buildingBankAccountId: null,
  buildingCashAccountId: null,
  buildingChequeAccountId: null,
  buildingCost: null,
  buildingDepositAccountId: null,
  buildingDiscountAccountId: null,
  buildingInsuranceAccountId: null,
  buildingNumber: null,
  buildingReceipt: null,
  buildingRevenueAccountId: null,
  city: null,
  commissionExpenseAccountId: null,
  commissionRate: null,
  createdAt: null,
  customersMainAccountId: null,
  deferredVatAccountId: null,
  display: null,
  emirate: null,
  entryCommissionFromOwnerAccountId: null,
  entryCommissionRate: null,
  entryLandlordAccountId: null,
  entryRevenueAccountId: null,
  entryVatAccountId: null,
  entryVatRate: null,
  investmentEndDate: null,
  investmentGenEntries: false,
  investmentOwnerAccountId: null,
  investmentStartDate: null,
  investmentValue: null,
  lessorId: null,
  ltnname: null,
  mezzanineCount: 0,
  mezzanineFloor: 0,
  name: null,
  note: null,
  officeCount: 0,
  officeFloor: 0,
  ownerAccountId: null,
  ownerBalance: null,
  ownerId: null,
  ownerTaxAccountId: null,
  parkingCount: 0,
  parkingFloor: 0,
  partNumber: null,
  penthouseCount: 0,
  penthouseFloor: 0,
  purchaseDate: null,
  realestateCompanyAccountId: null,
  receivedAccountId: null,
  receivedAmount: null,
  receivedDate: null,
  receivedNote: null,
  rentersInsurance: null,
  shopCount: 0,
  statement: null,
  storeCount: 0,
  street: null,
  suburb: null,
  supplierAccountId: null,
  tenants: null,
  undergroundParking: null,
  vatAccountId: null,
  warehouseCount: 0,
}


export const buildingValidationSchema = (tab, setTab) => {
  return z.object({
    name: z.string().min(1, { message: "building name is required" }),
    apartmentCount: z.number().optional().nullable(),
    apartmentFloor: z.number().optional().nullable(),
    area: z.string().nullable().optional(),
    bankAccountNumber: z.string().nullable().optional(),
    basinNumber: z.string().nullable().optional(),
    bondDate: z.string().nullable().optional(),
    bondNumber: z.string().nullable().optional(),
    bondType: z.string().nullable().optional(),
    buildingBankAccountId: z.string().nullable().optional(),
    buildingCashAccountId: z.string().nullable().optional(),
    buildingChequeAccountId: z.string().nullable().optional(),
    buildingCost: z.string().nullable().optional(),
    buildingDepositAccountId: z.string().nullable().optional(),
    buildingDiscountAccountId: z.string().nullable().optional(),
    buildingInsuranceAccountId: z.string().nullable().optional(),
    buildingNumber: z.string().nullable().optional(),
    buildingReceipt: z.string().nullable().optional(),
    buildingRevenueAccountId: z.string().nullable().optional(),
    city: z.string().nullable().optional(),
    commissionExpenseAccountId: z.string().nullable().optional(),
    commissionRate: z.string().nullable().optional(),
    createdAt: z.string().nullable().optional(),
    customersMainAccountId: z.string().nullable().optional(),
    deferredVatAccountId: z.string().nullable().optional(),
    display: z.string().nullable().optional(),
    emirate: z.string().nullable().optional(),
    entryCommissionFromOwnerAccountId: z.string().nullable().optional(),
    entryCommissionRate: z.string().nullable().optional(),
    entryLandlordAccountId: z.string().nullable().optional(),
    entryRevenueAccountId: z.string().nullable().optional(),
    entryVatAccountId: z.string().nullable().optional(),
    entryVatRate: z.string().nullable().optional(),
    investmentEndDate: z.string().nullable().optional(),
    investmentGenEntries: z.boolean(),
    investmentOwnerAccountId: z.string().nullable().optional(),
    investmentStartDate: z.string().nullable().optional(),
    investmentValue: z.string().nullable().optional(),
    lessorId: z.string().nullable().optional(),
    ltnname: z.string().nullable().optional(),
    mezzanineCount: z.number().optional().nullable(),
    mezzanineFloor: z.number().optional().nullable(),
    note: z.string().nullable().optional(),
    officeCount: z.number().optional().nullable(),
    officeFloor: z.number().optional().nullable(),
    ownerAccountId: z.string().nullable().optional(),
    ownerBalance: z.string().nullable().optional(),
    ownerId: z.string().nullable().optional(),
    ownerTaxAccountId: z.string().nullable().optional(),
    parkingCount: z.number().optional().nullable(),
    parkingFloor: z.number().optional().nullable(),
    partNumber: z.string().nullable().optional(),
    penthouseCount: z.number().optional().nullable(),
    penthouseFloor: z.number().optional().nullable(),
    purchaseDate: z.string().nullable().optional(),
    realestateCompanyAccountId: z.string().nullable().optional(),
    receivedAccountId: z.string().nullable().optional(),
    receivedAmount: z.string().nullable().optional(),
    receivedDate: z.string().nullable().optional(),
    receivedNote: z.string().nullable().optional(),
    rentersInsurance: z.string().nullable().optional(),
    shopCount: z.number().optional().nullable(),
    statement: z.string().nullable().optional(),
    storeCount: z.number().optional().nullable(),
    street: z.string().nullable().optional(),
    suburb: z.string().nullable().optional(),
    supplierAccountId: z.string().nullable().optional(),
    tenants: z.string().nullable().optional(),
    undergroundParking: z.number().optional().nullable(),
    vatAccountId: z.string().nullable().optional(),
    warehouseCount: z.number().optional().nullable(),
  }).refine((data) => {
    for (const key of Object.keys(FLATS)) {
      if (data[key]) {
        return true
      }
    }
    setTab(BUILDING_STEPS.building_units)
    return false
  }, {
    message: 'units are required',
    path: ['apartmentCount'],
  })
}