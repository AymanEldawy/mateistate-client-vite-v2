import { z } from "zod"
import VALIDATION from "../VALIDATIONS"

export const opReturnDefaultValues = {
  amount: null,
  cheque_id: null,
  connectWithChqId: null,
  costCenterId: null,
  createdAt: new Date(),
  creditAccountId: null,
  debitAccountId: null,
  note: "",
  reason: 0,
}

export const opReturnValidationSchema = z.object({
  amount: VALIDATION.NON_NEGATIVE_NUMBER,
  cheque_id: VALIDATION.NON_EMPTY_STRING,
  connectWithChqId: null,
  costCenterId: null,
  createdAt: new Date(),
  creditAccountId: VALIDATION.NON_EMPTY_STRING,
  debitAccountId: VALIDATION.NON_EMPTY_STRING,
  note: "",
  reason: VALIDATION.NON_NEGATIVE_NUMBER,
})