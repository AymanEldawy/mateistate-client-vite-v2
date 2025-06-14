import { z } from 'zod';
import VALIDATION from '../VALIDATIONS';

// Contract Schema
const ContractSchema = z.object({
  feedback: z.boolean(),
  lawsuit: z.boolean(),
  govNumber: z.number().nullable(),
  contractsNumberPrev: z.number().int().nonnegative(),
  issueDate: z.date().optional(),
  contractValue: VALIDATION.NON_NEGATIVE_NUMBER,
  priceBeforeVat: z.number().nullable(),
  finalPrice: VALIDATION.POSITIVE_NUMBER,
  description: z.string().optional(),
  discountRate: z.number().nullable(),
  vatRate: z.number().nullable(),
  currentSecuringValue: z.number().nullable(),
  contractDuration: VALIDATION.NON_NEGATIVE_NUMBER,
  startDurationDate: z.date().optional(),
  endDurationDate: z.date().optional(),
  discountValue: z.number().nullable(),
  vatValue: z.number().nullable(),
  previousSecuring: z.number().nullable(),
  propertyDeliveryDate: z.date().nullable(),
  clientId: VALIDATION.NON_EMPTY_STRING,
  lessorId: VALIDATION.OPTIONAL_UUID,
  revenueAccountId: VALIDATION.NON_EMPTY_STRING,
  discountAccountId: VALIDATION.OPTIONAL_UUID,
  insuranceAccountId: VALIDATION.OPTIONAL_UUID,
  vatAccountId: VALIDATION.OPTIONAL_UUID,
  paidType: z.number().int().positive(),
  note: z.string().optional(),
  contractType: VALIDATION.NON_NEGATIVE_NUMBER,
  flatType: VALIDATION.NON_NEGATIVE_NUMBER,
  status: z.number().optional().nullable(),
  contractPatternId: VALIDATION.NON_EMPTY_STRING,
  isArchived: VALIDATION.OPTIONAL_BOOLEAN,
  isDeleted: VALIDATION.OPTIONAL_BOOLEAN,
  code: VALIDATION.NON_NEGATIVE_NUMBER,
  apartmentId: VALIDATION.OPTIONAL_UUID,
  buildingId: VALIDATION.OPTIONAL_UUID,
  shopId: VALIDATION.OPTIONAL_UUID,
  parkingId: VALIDATION.OPTIONAL_UUID,
});

// Contract Commission Schema
const ContractCommissionSchema = z.object({
  commissionPercentage: z.number().nullable(),
  commissionValue: z.number().nullable(),
  commissionAccountId: z.number().nullable(),
  commissionNote: z.string().nullable(),
  commissionFromOwnerPercentage: z.number().nullable(),
  commissionFromOwnerValue: z.number().nullable(),
  commissionFromOwnerAccountId: z.number().nullable(),
  commissionFromOwnerNote: z.string().nullable(),
});

// Contract Cycle Schema
const ContractCycleSchema = z.object({
  contractCertifyingBody: z.string().nullable(),
  commissionFromOwnerValue: z.number().nullable(),
  municipalLicenseFrom: z.date().nullable(),
  municipalLicenseTo: z.date().nullable(),
  licenseNum: z.string().nullable(),
  licenseFrom: z.date().nullable(),
  licenseTo: z.date().nullable(),
  civilLicenseNum: z.string().nullable(),
  civilLicenseFrom: z.date().nullable(),
  civilLicenseTo: z.date().nullable(),
  contractDocumented: z.boolean().nullable(),
  contractCertifying: z.boolean().nullable(),
  contractDelivered: z.boolean().nullable(),
  contractSigned: z.boolean().nullable(),
});

// Contract Linked Parking Schema
const ContractLinkedParkingSchema = z.object({
  buildingId: z.number().nullable(),
  mainContractId: z.number().nullable(),
  accountId: z.number().nullable(),
});

// Contract Termination Schema
const ContractTerminationSchema = z.object({
  terminated: z.boolean().nullable(),
  genEntries: z.boolean().nullable(),
  terminationDate: z.date().nullable(),
  ownerTotalAmount: z.number().nullable(),
  ownerRestAmount: z.number().nullable(),
  roundTo: z.number().nullable(),
  revenueNote: z.string().nullable(),
  evacuationRequest: z.boolean().nullable(),
  evacuationDate: z.date().nullable(),
  clearancePrinted: z.boolean().nullable(),
  clearancePrintedDate: z.date().nullable(),
});

// Contract Fines Grid Schema
const ContractFinesGridSchema = z.object({
  createdAt: z.date().nullable(),
  fee_amount: z.number().nullable(),
  account_id: z.number().nullable(),
  notes: z.string().nullable(),
});

// Contract Other Fees Schema
const ContractOtherFeesSchema = z.object({
  date: z.date().nullable(),
  feeAmount: z.number().nullable(),
  accountId: z.number().nullable(),
  notes: z.string().nullable(),
});

// Combined Schema for the entire form
export const contractValidationSchema = () => z.object({
  contract: ContractSchema,
  contractCommission: ContractCommissionSchema.optional().nullable(),
  contractCycle: ContractCycleSchema.optional().nullable(),
  contractLinkedParking: ContractLinkedParkingSchema.array().optional(),
  contractTermination: ContractTerminationSchema.optional().nullable(),
  contractFinesGrid: ContractFinesGridSchema.array().optional(),
  contractOtherFees: ContractOtherFeesSchema.array().optional(),
});

// Utility function to clean form data

// React Hook Form Default Values
export const contractDefaultValues = {
  contract: {
    genEntries: true,
    feedback: false,
    lawsuit: false,
    govNumber: null,
    contractType: 1,
    flatType: 1,
    contractsNumberPrev: 0,
    issueDate: new Date().toISOString(),
    contractValue: null,
    priceBeforeVat: null,
    finalPrice: null,
    description: '',
    discountRate: null,
    vatRate: null,
    contractPatternId: null,
    status: 1,
    currentSecuringValue: null,
    contractDuration: 3,
    startDurationDate: new Date().toISOString(),
    endDurationDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
    discountValue: null,
    vatValue: null,
    previousSecuring: null,
    propertyDeliveryDate: null,
    lessorId: null,
    revenueAccountId: null,
    discountAccountId: null,
    insuranceAccountId: null,
    vatAccountId: null,
    paidType: 1,
    note: '',
    isArchived: false,
    isDeleted: false,
    apartmentId: null,
    buildingId: null,
    shopId: null,
    parkingId: null,
  },
  contractCommission: {
    commissionPercentage: null,
    commissionValue: null,
    commissionAccountId: null,
    commissionNote: null,
    commissionFromOwnerPercentage: null,
    commissionFromOwnerValue: null,
    commissionFromOwnerAccountId: null,
    commissionFromOwnerNote: null,
  },
  contractCycle: {
    contractCertifyingBody: null,
    commissionFromOwnerValue: null,
    municipalLicenseFrom: null,
    municipalLicenseTo: null,
    licenseNum: null,
    licenseFrom: null,
    licenseTo: null,
    civilLicenseNum: null,
    civilLicenseFrom: null,
    civilLicenseTo: null,
    contractDocumented: null,
    contractCertifying: null,
    contractDelivered: null,
    contractSigned: null,
  },
  contractLinkedParking: [{
    buildingId: null,
    mainContractId: null,
    accountId: null,
  }],
  contractTermination: {
    terminated: null,
    genEntries: null,
    terminationDate: null,
    ownerTotalAmount: null,
    ownerRestAmount: null,
    roundTo: null,
    revenueNote: null,
    evacuationRequest: null,
    evacuationDate: null,
    clearancePrinted: null,
    clearancePrintedDate: null,
  },
  contractFinesGrid: [{
    createdAt: null,
    fee_amount: null,
    account_id: null,
    notes: null,
  }],
  contractOtherFees: [{
    date: null,
    feeAmount: null,
    accountId: null,
    notes: null,
  }],
};