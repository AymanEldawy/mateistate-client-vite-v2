import { ACCOUNT_ASSEMBLY_TYPE_NAME, ACCOUNT_DISTRIBUTIVE_TYPE_NAME } from "@/data/GENERATE_STARTING_DATA";
import { z } from "zod";

export const accountDefaultValue = {
  type: 1,
  account: {
    code: "",
    type: 1,
    name: "",
    note: "",
    parentId: null,
    finalId: null,
  },
  [ACCOUNT_ASSEMBLY_TYPE_NAME]: [
    { mainAccountId: null }
  ],
  [ACCOUNT_DISTRIBUTIVE_TYPE_NAME]: [
    { mainAccountId: null, percentage: 0 }
  ]
};

// Shared schemas
const accountAssemblySchema = z.object({
  mainAccountId: z.string().min(1, "Account ID is required").nullable(),
});

const accountDistributiveSchema = z.object({
  mainAccountId: z.string().min(1, "Account ID is required").nullable(),
  percentage: z.number()
    .min(0, "Percentage cannot be negative")
    .max(100, "Percentage cannot exceed 100"),
});

// Base schema with common fields
const baseSchema = z.object({
  account: z.object({
    code: z.string()
      .min(1, "Code is required"),
    name: z.string()
      .min(1, "Name is required")
      .max(100, "Name cannot exceed 100 characters"),
    note: z.string()
      .max(500, "Note cannot exceed 500 characters")
      .optional(),
    parentId: z.string()
      .min(1, "Parent ID must be positive")
      .nullable()
      .optional(),
    finalId: z.string()
      .min(1, "Final ID must be positive")
      .nullable()
      .optional(),
  })
});

// Type 1 schema (basic)
const type1Schema = baseSchema.extend({
  type: z.literal(1),
});

// Type 2 schema (with assembly accounts)
const type2Schema = baseSchema.extend({
  type: z.literal(3),
  [ACCOUNT_ASSEMBLY_TYPE_NAME]: z.array(accountAssemblySchema)
    .min(1, "At least one assembly account is required")
    .refine(
      accounts => accounts.every(acc => acc.mainAccountId !== null),
      "All assembly accounts must have valid IDs"
    ),
});

// Type 3 schema (with distributive accounts)
const type3Schema = baseSchema.extend({
  type: z.literal(4),
  [ACCOUNT_DISTRIBUTIVE_TYPE_NAME]: z.array(accountDistributiveSchema)
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

