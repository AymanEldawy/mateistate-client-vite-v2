import { z } from "zod";

export const materialGroupDefaultValues = {
  code: null,
  name: "",
  parentId: null,
  note: "",
  ltnname: "",
}
export const materialGroupValidationSchema = () =>
  z.object({
    code: z.number({ message: "Code is Required" }),
    name: z.string().nonempty({ message: "Name is Required" }),
    parentId: z.string().optional(),
    ltnname: z.string().optional(),
    note: z.string().optional(),
  });
