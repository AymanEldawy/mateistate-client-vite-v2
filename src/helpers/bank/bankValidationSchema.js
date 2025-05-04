import { z } from "zod";

export const bankDefaultValues = {
  name: '',
  address: '',
}
export const bankValidationSchema = () => z.object({
  name: z.string().nonempty({ message: 'Name is Required' }),
  address: z.string().optional(),
});
