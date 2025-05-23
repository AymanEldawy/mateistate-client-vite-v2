import { z } from "zod";

export const categoryProblemDefaultValue = {
  description: "",
  ltndescription: "",
  isAvailable: true,
  minutes: 0,
  price: 0,
  categoryId: "",
};

export const categoryProblemValidationSchema = () =>
  z.object({
    description: z.string().nonempty({ message: "description is Required" }),
    ltndescription: z.string().nonempty({ message: "description is Required" }),
    isAvailable: z.boolean().optional(),
    minutes: z.number(),
    price: z.number().optional(),
    categoryId: z.string().uuid({ message: "categoryId must be a valid UUID" }),
  });
