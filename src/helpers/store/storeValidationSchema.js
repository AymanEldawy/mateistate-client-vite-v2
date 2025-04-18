import { z } from "zod";

export const storeDefaultValue = {
  type: 0,
  name: "",
  address: "",
  warehouseman: "",
  note: "",
  ltnname: "",
  parent_id: null,
  final_id: null

};

export const storeValidationSchema = () => z.object({
  type: z.number().min(0, "required"),
  name: z.string().nonempty({ message: "name is required" }),
  address: z.string().optional(),
  warehouseman: z.string().optional(),
  note: z.string().optional(),
  ltnname: z.string().optional(),
  parent_id: z.string().optional().nullable(),
  final_id: z.string().optional().nullable(),

});
