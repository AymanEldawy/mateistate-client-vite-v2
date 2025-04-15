import { z } from "zod";

// export const accountValidationSchema = () => z.object({
//   code: z.number({
//     required_error: "code is required",
//     invalid_type_error: "Must be a number",
//   }),
//   name: z.string().nonempty({ message: "Name is required" }).min(3, { message: "Must be at least 3 characters" }),
//   type: z.number(),
//   parent_id: z.string().nullable().optional(),
//   final_id: z.string().nullable().optional(),
// }).refine((data) => {

// }, {

// })

export const accountDefaultValue = {
  code: "",
  type: 1,
  name: "",
  note: "",
  parent_id: null,
  final_id: null,
  account_assembly: [
    { account_id: null }
  ],
  account_distributive: [
    { account_id: null, percentage: 0 }
  ]
};

// Shared schemas
const accountAssemblySchema = z.object({
  account_id: z.string().min(1, "Account ID is required").nullable(),
});

const accountDistributiveSchema = z.object({
  account_id: z.string().min(1, "Account ID is required").nullable(),
  percentage: z.number()
    .min(0, "Percentage cannot be negative")
    .max(100, "Percentage cannot exceed 100"),
});

// Base schema with common fields
const baseSchema = z.object({
  code: z.number()
    .min(1, "Code is required"),
  name: z.string()
    .min(1, "Name is required")
    .max(100, "Name cannot exceed 100 characters"),
  note: z.string()
    .max(500, "Note cannot exceed 500 characters")
    .optional(),
  parent_id: z.string()
    .min(1, "Parent ID must be positive")
    .nullable()
    .optional(),
  final_id: z.string()
    .min(1, "Final ID must be positive")
    .nullable()
    .optional(),
});

// Type 1 schema (basic)
const type1Schema = baseSchema.extend({
  type: z.literal(1),
});

// Type 2 schema (with assembly accounts)
const type2Schema = baseSchema.extend({
  type: z.literal(3),
  account_assembly: z.array(accountAssemblySchema)
    .min(1, "At least one assembly account is required")
    .refine(
      accounts => accounts.every(acc => acc.account_id !== null),
      "All assembly accounts must have valid IDs"
    ),
});

// Type 3 schema (with distributive accounts)
const type3Schema = baseSchema.extend({
  type: z.literal(4),
  account_distributive: z.array(accountDistributiveSchema)
    .min(1, "At least one distributive account is required")
    .refine(
      accounts => accounts.reduce((sum, acc) => sum + acc.percentage, 0) === 100,
      "Distributive percentages must sum to 100%"
    ),
});

// Final discriminated union
export const accountValidationSchema = () => z.discriminatedUnion("type", [
  type1Schema,
  type2Schema,
  type3Schema
]);

