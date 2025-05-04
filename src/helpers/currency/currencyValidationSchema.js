import { z } from "zod"

export const currencyDefaultValue = {
  id: '',
  code: '',
  name: '',
  ltnname: '',
  rate: 1,
}

export const currencyValidationSchema = () => z.object({
  id: z.string(),
  code: z.string().nonempty({ message: 'Code is Required' }),
  name: z.string().nonempty({ message: 'name is Required' }),
  ltnname: z.string().optional(),
  rate: z.number().min(0, { message: 'Rate must be greater than 0' }),
})