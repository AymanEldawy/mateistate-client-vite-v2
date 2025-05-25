import { z } from "zod";
import VALIDATION from "../VALIDATIONS";

export const sellerDefaultValue = {
  name: "",
  ltnname: "",
  id_card: "",
  passport: 0,
  work_card_number: 0,
  mobile: "",
  cellPhone: "",
  mailbox: "",
  email: "",
  address: "",
  minimumCommission: 0, // 
  maximumDiscount: 0, // 
  statement: "",
};

export const sellerValidationSchema = () =>
  z.object({
    name: z.string().nonempty({ message: "Name is Required" }),
    ltnname: VALIDATION.OPTIONAL_STRING,
    id_card: VALIDATION.OPTIONAL_STRING,
    passport: VALIDATION.OPTIONAL_NUMBER,
    work_card_number: VALIDATION.OPTIONAL_NUMBER,
    mobile: VALIDATION.OPTIONAL_STRING,
    cellPhone: VALIDATION.OPTIONAL_STRING,
    mailbox: VALIDATION.OPTIONAL_STRING,
    email: z.string().email().nullable(),
    address: VALIDATION.OPTIONAL_STRING,
    minimumCommission: VALIDATION.POSITIVE_NUMBER,
    maximumDiscount: VALIDATION.POSITIVE_NUMBER,
    statement: VALIDATION.OPTIONAL_STRING,
  });
