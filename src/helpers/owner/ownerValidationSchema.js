import { z } from "zod";

export const ownerDefaultValue = {
  name: "",
  ltnname: "",
  idCard: "",
  cellPhone: "",
  mailbox: "",
  address: "",
  nationality: "",
};


export const ownerValidationSchema = z.object({
  name: z.string().nonempty({ message: "Name is Required" }),
  ltnname: z.string().optional(),
  idCard: z.string().optional(),
  cellPhone: z.string().optional(),
  mailbox: z.string().optional(),
  address: z.string().optional(),
  nationality: z.string().optional(),
});
