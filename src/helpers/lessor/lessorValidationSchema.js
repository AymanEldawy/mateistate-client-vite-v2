import { z } from "zod";

export const lessorDefaultValue = {
  name: "",
  ltnname: "",
  passport: "",
  passport_expiry_date: "",
  id_card: "",
  lessor_card: "",
  cell_phone: "",
  number: "",
  address: "",
  fax: "",
  nationality: "",
  mobile: "",
  note: "",
  mailbox: "",
  email: "",
  role: "",
};

export const lessorValidationSchema = () =>
  z.object({
    name: z.string().nonempty({ message: "Name is Required" }),
    ltnname: z.string().optional(),
    passport: z.string().optional(),
    passport_expiry_date: z
      .string()
      .nonempty({ message: "passport expiry date is Required" }),
    id_card: z.string().optional(),
    lessor_card: z.string().optional(),
    cell_phone: z.string().optional(),
    number: z.string().optional(),
    address: z.string().optional(),
    fax: z.string().optional(),
    nationality: z.string().optional(),
    mobile: z.string().optional(),
    note: z.string().optional(),
    mailbox: z.string().optional(),
    email: z.string().email().optional(),
    role: z.string().optional(),
  });
