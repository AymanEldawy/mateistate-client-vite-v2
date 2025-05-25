import { z } from "zod";
import VALIDATION from "../VALIDATIONS";

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
    ltnname: VALIDATION.OPTIONAL_STRING,
    passport: VALIDATION.NON_EMPTY_STRING,
    passport_expiry_date: VALIDATION.OPTIONAL_STRING,
    id_card: VALIDATION.OPTIONAL_STRING,
    lessor_card: VALIDATION.OPTIONAL_STRING,
    cell_phone: VALIDATION.OPTIONAL_STRING,
    number: VALIDATION.OPTIONAL_STRING,
    address: VALIDATION.OPTIONAL_STRING,
    fax: VALIDATION.OPTIONAL_STRING,
    nationality: VALIDATION.OPTIONAL_STRING,
    mobile: VALIDATION.OPTIONAL_STRING,
    note: VALIDATION.OPTIONAL_STRING,
    mailbox: VALIDATION.OPTIONAL_STRING,
    email: z.string().email({ message: 'email is required' }),
    role: VALIDATION.OPTIONAL_STRING,
  });
