import { z } from "zod";


export const chequeDefaultValue = {
  accountId: null,
  amount: 0,
  bankId: null,
  beneficiaryName: null,
  costCenterId: null,
  createdAt: new Date(),
  customerId: null,
  depositStatus: false,
  dueDate: new Date(),
  endDueDate: new Date(),
  feedback: false,
  genEntries: true,
  internalNumber: null,
  note1: "",
  note2: "",
  observeAccountId: null,
  observeCostCenterId: null,
  withoutDueDate: false,
  parkingId: null,
  apartmentId: null,
  shopId: null,
  connectWithId: null,
  connectWith: null,
};


export const chequeValidationSchema = () => {
  return z.object({
    accountId: z.string().nonempty({ message: "Account is required" }),
    amount: z.number().min(0, { message: "Amount must be greater than 0" }),
    bankId: z.string().nullable().optional(),
    beneficiaryName: z.string().nullable().optional(),
    costCenterId: z.string(),
    createdAt: z.date().optional(),
    customerId: z.string().nullable().optional(),
    depositStatus: null,
    dueDate: z.date().optional(),
    endDueDate: z.date().optional(),
    feedback: z.boolean().optional(),
    genEntries: z.boolean(),
    internalNumber: z.number().nullable().optional(),
    note1: z.string().nullable().optional(),
    note2: z.string().nullable().optional(),
    observeAccountId: z.string(),
    observeCostCenterId: z.string().nullable().optional(),
    withoutDueDate: z.boolean().optional(),
    // parkingId: z.string().nullable().optional(),
    // apartmentId: z.string().nullable().optional(),
    // shopId: z.string().nullable().optional(),
    // connectWithId: z.string().nullable().optional(),
    // connectWith: z.number().nullable().optional(),
  })
}
