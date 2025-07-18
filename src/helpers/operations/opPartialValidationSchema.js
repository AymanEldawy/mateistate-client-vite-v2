import { z } from "zod";
import VALIDATION from "../VALIDATIONS";

export const opPartialDefaultValues = {
  chequeId: null,
  createdAt: new Date(),
  amount: 0,
  totalValue: 0,
  totalSumPrev: 0,
  totalSum: 0,
  rest: 0,
  debitAccountId: null,
  creditAccountId: null,
  costCenterId: null,
  note: '',
  commissionDebitId: null,
  commission_credit_id: null,
  commissionCostCenterId: null,
  commissionPercentage: 0,
  commissionValue: 0,
  commissionNote: '',
  genEntries: true,
  number: 1,
}

export const opPartialValidationSchema = z.object({
  number: VALIDATION.NON_NEGATIVE_NUMBER,
  chequeId: VALIDATION.NON_EMPTY_STRING,
  createdAt: VALIDATION.OPTIONAL_DATE,
  amount: VALIDATION.NON_NEGATIVE_NUMBER,
  totalValue: VALIDATION.NON_NEGATIVE_NUMBER,
  totalSumPrev: VALIDATION.OPTIONAL_NUMBER,
  totalSum: VALIDATION.NON_NEGATIVE_NUMBER,
  rest: VALIDATION.OPTIONAL_NUMBER,
  debitAccountId: VALIDATION.NON_EMPTY_STRING,
  creditAccountId: VALIDATION.NON_EMPTY_STRING,
  currencyId: VALIDATION.NON_EMPTY_STRING,
  costCenterId: VALIDATION.OPTIONAL_STRING,
  note: VALIDATION.OPTIONAL_STRING,
  commissionDebitId: VALIDATION.OPTIONAL_STRING,
  commissionCreditId: VALIDATION.OPTIONAL_STRING,
  commissionCostCenterId: VALIDATION.OPTIONAL_STRING,
  commissionPercentage: VALIDATION.OPTIONAL_NUMBER,
  commissionValue: VALIDATION.OPTIONAL_NUMBER,
  commissionNote: VALIDATION.OPTIONAL_STRING,
  genEntries: VALIDATION.OPTIONAL_BOOLEAN,
  number: z.number()
});
