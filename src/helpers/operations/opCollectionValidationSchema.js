import { z } from "zod"
import VALIDATION from "../VALIDATIONS"

export const opCollectionDefaultValues = {
  amount: 0,
  chequeId: null,
  commissionCostCenterId: null,
  commissionCreditId: null,
  commissionDebitId: null,
  commissionNote: null,
  commissionPercentage: null,
  commissionValue: null,
  costCenterId: null,
  createdAt: new Date(),
  creditAccountId: null,
  debitAccountId: null,
  note: '',
}

export const opCollectionValidationSchema = z.object({
  amount: VALIDATION.NON_NEGATIVE_NUMBER,
  chequeId: VALIDATION.NON_EMPTY_STRING,
  commissionCostCenterId: VALIDATION.OPTIONAL_UUID,
  commissionCreditId: VALIDATION.OPTIONAL_UUID,
  commissionDebitId: VALIDATION.OPTIONAL_UUID,
  commissionNote: VALIDATION.OPTIONAL_STRING,
  commissionPercentage: VALIDATION.OPTIONAL_NUMBER,
  commissionValue: VALIDATION.OPTIONAL_NUMBER,
  costCenterId: VALIDATION.OPTIONAL_UUID,
  createdAt: VALIDATION.OPTIONAL_DATE,
  creditAccountId: VALIDATION.NON_EMPTY_STRING,
  debitAccountId: VALIDATION.NON_EMPTY_STRING,
  note: VALIDATION.OPTIONAL_STRING,

})