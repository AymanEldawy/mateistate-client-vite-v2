import { z } from "zod";

export const materialGroupValidationSchema = () =>
  z.object({
    // code: z.string().nonempty({ message: "Code is Required" }),
    name: z.string().nonempty({ message: "Name is Required" }),
    // parentId: z.string().optional(),
    ltnname: z.string().optional(),
    note: z.string().optional(),
  });
