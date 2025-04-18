import { z } from "zod";

export const sellerValidationSchema = () =>
  z.object({
    name: z.string().nonempty({ message: "Name is Required" }),
    ltnname: z.string().optional(),
    id_card: z.string().optional(),
    passport: z.number().optional(),
    work_card_number: z.number().optional(),
    mobile: z.string().optional(),
    cellPhone: z.string().optional(),
    mailbox: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    minimumCommission: z.number(),
    maximumDiscount: z.number(),
    statement: z.string().optional(),
  });
