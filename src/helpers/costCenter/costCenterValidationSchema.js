import { z } from "zod";

export const costCenterDefaultValue = {
  code: 0,
  name: "",
  note: "",
  parent_id: null,
  ltnname: ""
};

export const costCenterValidationSchema = z.object({
  code: z.number().min(1, { message: "Code is required" }),
  name: z.string().min(3, { message: "Name is required" }),
});
