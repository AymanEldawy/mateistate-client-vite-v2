import { z } from "zod";

export const categoryValidationSchema = () =>
  z.object({
    name: z.string().nonempty({ message: "Name is Required" }),
    description: z.string().optional(),
    // parent_id: z.string().optional(),
    // image: z.string().optional(),
    hex: z.string().optional(),
    ltnname: z.string().optional(),
  });
