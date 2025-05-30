import { z } from "zod";
import VALIDATION from "../VALIDATIONS";

export const storeDefaultValue = {
  type: 0,
  name: "",
  address: "",
  warehouseman: "",
  note: "",
  ltnname: "",
  parentId: null,
  finalId: null

};

export const storeValidationSchema = () => z.object({
  type: z.number().min(0, "required"),
  name: z.string().nonempty({ message: "name is required" }),
  address: VALIDATION.OPTIONAL_STRING,
  warehouseman: VALIDATION.OPTIONAL_STRING,
  note: VALIDATION.OPTIONAL_STRING,
  ltnname: VALIDATION.OPTIONAL_STRING,
  parentIid: VALIDATION.OPTIONAL_STRING,
  finalId: VALIDATION.OPTIONAL_STRING,

});
