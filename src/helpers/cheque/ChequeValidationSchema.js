import { z } from "zod";

export const chequeDefaultValue = {
  type: 1,
  currencyId: "",
  accountId: "",
  observeAccountId: "",
  patternId: "",
  note: "",
  code: "",
  amount: 0,
  currencyVal: 1,
  beneficiaryName: "",
  costCenterId: "",
  observeCostCenterId: "",
  bankId: "",
  date: new Date().toISOString(),
};

export const chequeValidationSchema = () =>
  z.object({
    type: z.number().min(1),
    currencyId: z.string().optional(),
    accountId: z.string().optional(),
    observeAccountId: z.string().optional(),
    patternId: z.string().optional(),
    note: z.string().optional(),
    code: z.number().or(z.string()),
    amount: z.number().min(0),
    currencyVal: z.number().min(0),
    beneficiaryName: z.string().optional(),
    costCenterId: z.string().optional(),
    observeCostCenterId: z.string().optional(),
    bankId: z.string().optional(),
    date: z.string().or(z.date()),
  });
