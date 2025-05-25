import { z } from "zod";

const nonEmptyString = z.string().min(1, "Cannot be empty");
const positiveNumber = z.number().positive();
const nonNegativeNumber = z.number().nonnegative();
const optionalNumber = z.number().optional().nullable()
const optionalString = z.string().optional().nullable()
const optionalBoolean = z.boolean().optional().nullable()
const optionalId = z.string().uuid().optional().nullable()
const dateString = z.date().optional().nullable();

const VALIDATION = {
  OPTIONAL_BOOLEAN: optionalBoolean,
  OPTIONAL_STRING: optionalString,
  OPTIONAL_NUMBER: optionalNumber,
  POSITIVE_NUMBER: positiveNumber,
  NON_EMPTY_STRING: nonEmptyString,
  NON_NEGATIVE_NUMBER: nonNegativeNumber,
  OPTIONAL_DATE: dateString,
  OPTIONAL_UUID: optionalId

}

export default VALIDATION