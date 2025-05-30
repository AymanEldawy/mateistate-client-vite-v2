
import { z } from 'zod';
import VALIDATION from '../VALIDATIONS';

export const entriesDefaultValues = {
  entry: {
    debit: 0,
    credit: 0,
    difference: 0,
    currencyVal: 1,
    note: '',
    createdFrom: null,
    currencyId: null,
    createdAt: new Date().toISOString(),
  },
  entryGridData: [
    {
      debit: 0,
      credit: 0,
      note: "",
      accountId: null,
      costCenterId: null
    },
  ]
}

const entrySchema = z.object({
  debit: z.number().min(1, { message: "Debit must be a non-negative number." }),
  credit: z.number().min(1, { message: "Credit must be a non-negative number." }),
  difference: z.number(),
  currencyVal: VALIDATION.OPTIONAL_NUMBER,
  note: VALIDATION.OPTIONAL_STRING,
  createdFrom: VALIDATION.OPTIONAL_STRING,
  currencyId: VALIDATION.OPTIONAL_STRING,
}).refine(
  (data) => data.difference === 0,
  {
    message: "Difference must be 0.",
    path: ["difference"],
  }
).refine(
  (data) => data.debit === data.credit,
  {
    message: "Debit and credit must be equal.",
    path: ["debit", "credit"],
  }
);

const entryGridItemSchema = z.object({
  debit: VALIDATION.OPTIONAL_NUMBER,
  credit: VALIDATION.OPTIONAL_NUMBER,
  note: VALIDATION.OPTIONAL_STRING,
  accountId: z.string(),
  costCenterId: VALIDATION.OPTIONAL_STRING,
}).refine(
  (data) => (data.debit !== 0 && data.credit === 0) || (data.debit === 0 && data.credit !== 0),
  {
    message: "Either debit or credit should be non-zero, but not both.",
  }
);

export const entriesValidationSchema = () => z.object({
  entry: entrySchema,
  entryGridData: z.array(entryGridItemSchema),
}).refine(
  (data) => {
    const debitAccounts = new Set();
    const creditAccounts = new Set();
    for (const item of data.entryGridData) {
      if (item.debit !== 0) {
        if (debitAccounts.has(item.accountId)) {
          return false;
        }
        debitAccounts.add(item.accountId);
      }
      if (item.credit !== 0) {
        if (creditAccounts.has(item.accountId)) {
          return false;
        }
        creditAccounts.add(item.accountId);
      }
    }
    return true;
  },
  {
    message: "Account IDs must be unique for debit and credit entries respectively.",
  }
);

