import { z } from "zod"
import VALIDATION from "../VALIDATIONS"

export const opReturnDefaultValues = {
  amount: 0,
  chequeId: null,
  connectWithChqId: null,
  costCenterId: null,
  createdAt: new Date(),
  creditAccountId: null,
  debitAccountId: null,
  note: "",
  reason: 0,
  genEntries: true,
}

export const opReturnValidationSchema = z.object({
  amount: VALIDATION.NON_NEGATIVE_NUMBER,
  chequeId: VALIDATION.NON_EMPTY_STRING,
  connectWithChqId: VALIDATION.OPTIONAL_STRING,
  costCenterId: VALIDATION.OPTIONAL_STRING,
  createdAt: z.date(),
  creditAccountId: VALIDATION.NON_EMPTY_STRING,
  debitAccountId: VALIDATION.NON_EMPTY_STRING,
  note: VALIDATION.OPTIONAL_STRING,
  reason: VALIDATION.NON_NEGATIVE_NUMBER,
  genEntries: VALIDATION.OPTIONAL_BOOLEAN
})