import { z } from "zod";

export const ownerDefaultValue = {
  accountId: "",
  name: "",
  ltnname: "",
  id_card: "",
  cell_phone: "",
  mailbox: "",
  address: "",
  nationality: "",
};


export const ownerValidationSchema = z.object({
  accountId: z.string().nonempty({ message: "accountId is Required" }),
  name: z.string().nonempty({ message: "Name is Required" }),
  ltnname: z.string().optional(),
  id_card: z.string().optional(),
  cell_phone: z.string().optional(),
  mailbox: z.string().optional(),
  address: z.string().optional(),
  nationality: z.string().optional(),
});
