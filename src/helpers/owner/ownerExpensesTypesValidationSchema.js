import { z } from "zod"
import VALIDATION from "../VALIDATIONS"

export const ownerExpensesTypesDefaultValues = {
  code: undefined,
  name: '',
  description: '',
  isActive: false,
}
export const ownerExpensesTypesValidationSchema = () => z.object({
  code: VALIDATION.OPTIONAL_NUMBER,
  name: VALIDATION.NON_EMPTY_STRING,
  description: VALIDATION.OPTIONAL_STRING,
  isActive: VALIDATION.OPTIONAL_BOOLEAN,
}) 