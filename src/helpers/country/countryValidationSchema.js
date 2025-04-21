import { z } from "zod";

export const countryValidationSchema = () =>
  z.object({
    code: z.number().optional(),
    name: z.string().nonempty({ message: "Name is Required" }),
    address: z.string().optional(),
  });
