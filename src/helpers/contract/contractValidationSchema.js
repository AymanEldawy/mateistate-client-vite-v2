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
  contractDuration: z.number().int().positive(),
  startDurationDate: z.date().optional(),
  endDurationDate: z.date().optional(),
  discountValue: z.number().nullable(),
  vatValue: z.number().nullable(),
  previousSecuring: z.number().nullable(),
  propertyDeliveryDate: z.date().nullable(),
  lessorId: z.number().nullable(),
  revenueAccountId: VALIDATION.NON_EMPTY_STRING,
  discountAccountId: VALIDATION.OPTIONAL_UUID,
  insuranceAccountId: VALIDATION.OPTIONAL_UUID,
  vatAccountId: VALIDATION.OPTIONAL_UUID,
  paidType: z.number().int().positive(),
  note: z.string().optional(),
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
  contractCommission: ContractCommissionSchema.optional(),
  contractCycle: ContractCycleSchema.optional(),
  contractLinkedParking: ContractLinkedParkingSchema.array().optional(),
  contractTermination: ContractTerminationSchema.optional(),
  contractFinesGrid: ContractFinesGridSchema.array().optional(),
  contractOtherFees: ContractOtherFeesSchema.array().optional(),
});

// Utility function to clean form data
export const cleanContractFormData = (data) => {
  const isEmptyObject = (obj, defaults) => {
    return Object.keys(obj).every((key) => {
      const defaultsKey = Object.keys(defaults).find(k => k.toLowerCase() === key.toLowerCase()) || key;
      const value = obj[key];
      const defaultValue = defaults[defaultsKey];
      return value === defaultValue || value === null || value === '' || value === undefined;
    });
  };

  const cleanedData = { ...data };

  // Clean contractLinkedParking
  cleanedData.contractLinkedParking = data.contractLinkedParking.filter(
    (item) =>
      !isEmptyObject(item, {
        buildingId: null,
        mainContractId: null,
        accountId: null,
      })
  );

  // Clean contractFinesGrid
  cleanedData.contractFinesGrid = data.contractFinesGrid.filter(
    (item) =>
      !isEmptyObject(item, {
        createdAt: null,
        fee_amount: null,
        account_id: null,
        notes: null,
      })
  );

  // Clean contractOtherFees
  cleanedData.contractOtherFees = data.contractOtherFees.filter(
    (item) =>
      !isEmptyObject(item, {
        date: null,
        feeAmount: null,
        accountId: null,
        notes: null,
      })
  );

  // Clean contractCommission if all fields are default
  if (
    isEmptyObject(data.contractCommission, {
      commissionPercentage: null,
      commissionValue: null,
      commissionAccountId: null,
      commissionNote: null,
      commissionFromOwnerPercentage: null,
      commissionFromOwnerValue: null,
      commissionFromOwnerAccountId: null,
      commissionFromOwnerNote: null,
    })
  ) {
    delete cleanedData.contractCommission;
  }

  // Clean contractCycle if all fields are default
  if (
    isEmptyObject(data.contractCycle, {
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
    })
  ) {
    delete cleanedData.contractCycle;
  }

  // Clean contractTermination if all fields are default
  if (
    isEmptyObject(data.contractTermination, {
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
    })
  ) {
    delete cleanedData.contractTermination;
  }

  return cleanedData;
};

// React Hook Form Default Values
export const contractDefaultValues = {
  contract: {
    govNumber: null,
    contractsNumberPrev: 0,
    issueDate: new Date().toISOString(),
    contractValue: null,
    priceBeforeVat: null,
    finalPrice: null,
    description: '',
    discountRate: null,
    vatRate: null,
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
  },
  // contractCommission: {
  //   commissionPercentage: null,
  //   commissionValue: null,
  //   commissionAccountId: null,
  //   commissionNote: null,
  //   commissionFromOwnerPercentage: null,
  //   commissionFromOwnerValue: null,
  //   commissionFromOwnerAccountId: null,
  //   commissionFromOwnerNote: null,
  // },
  // contractCycle: {
  //   contractCertifyingBody: null,
  //   commissionFromOwnerValue: null,
  //   municipalLicenseFrom: null,
  //   municipalLicenseTo: null,
  //   licenseNum: null,
  //   licenseFrom: null,
  //   licenseTo: null,
  //   civilLicenseNum: null,
  //   civilLicenseFrom: null,
  //   civilLicenseTo: null,
  //   contractDocumented: null,
  //   contractCertifying: null,
  //   contractDelivered: null,
  //   contractSigned: null,
  // },
  // contractLinkedParking: [{
  //   buildingId: null,
  //   mainContractId: null,
  //   accountId: null,
  // }],
  // contractTermination: {
  //   terminated: null,
  //   genEntries: null,
  //   terminationDate: null,
  //   ownerTotalAmount: null,
  //   ownerRestAmount: null,
  //   roundTo: null,
  //   revenueNote: null,
  //   evacuationRequest: null,
  //   evacuationDate: null,
  //   clearancePrinted: null,
  //   clearancePrintedDate: null,
  // },
  // contractFinesGrid: [{
  //   createdAt: null,
  //   fee_amount: null,
  //   account_id: null,
  //   notes: null,
  // }],
  // contractOtherFees: [{
  //   date: null,
  //   feeAmount: null,
  //   accountId: null,
  //   notes: null,
  // }],
};