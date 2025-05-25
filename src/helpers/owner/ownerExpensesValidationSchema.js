import { z } from "zod"
import VALIDATION from "../VALIDATIONS"

export const ownerExpensesDefaultValues = {
  ownerExpense: {
    date: undefined,
    receiptNumber: undefined,
    buildingId: undefined,
    ownerId: undefined,
    note: undefined,
  },
  expenseDetails: [
    {
      date: undefined,
      amount: undefined,
      note: undefined,
      receiptNumber: undefined,
      number: undefined,
      expenseTypeId: undefined,
    }
  ]
}


const ownerExpensesSchema = z.object({
  date: VALIDATION.OPTIONAL_DATE,
  receiptNumber: VALIDATION.OPTIONAL_STRING,
  buildingId: VALIDATION.NON_EMPTY_STRING,
  ownerId: VALIDATION.NON_EMPTY_STRING,
  note: VALIDATION.OPTIONAL_STRING,
})

const ownerExpensesDetailsSchema = z.object({
  date: VALIDATION.OPTIONAL_DATE,
  amount: VALIDATION.NON_NEGATIVE_NUMBER,
  receiptNumber: VALIDATION.OPTIONAL_STRING,
  note: VALIDATION.OPTIONAL_STRING,
  expenseTypeId: VALIDATION.NON_EMPTY_STRING,
});

export const ownerExpensesValidationSchema = () => z.object({
  ownerExpense: ownerExpensesSchema,
  expenseDetails: z.array(ownerExpensesDetailsSchema),
});

