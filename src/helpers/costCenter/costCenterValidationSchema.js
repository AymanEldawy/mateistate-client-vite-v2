import { z } from "zod";

export const costCenterDefaultValue = {
  code: "",
  name: "",
  note: "",
  parent_id: null,
  ltnname: ""
};

export const costCenterValidationSchema = z.object({
  code: z.string().min(1, { message: "Code is required" }),
  name: z.string().min(3, { message: "Name is required" }),
});
