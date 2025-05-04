import { z } from "zod";
import VALIDATION from "../VALIDATIONS";
export const userDefaultValue = {
  user: {
    name: "",
    email: "",
    password: "",
    phone: "",
    user_type: 1,
    card_type: 1,
    passport_number: "",
    national_id: "",
    address: "",
    barcode: undefined,
    profession: undefined,
    work_phone: "",
    fax: "",
    mailbox: "",
    sponsor: undefined,
    sponsor_data: "",
    statement: "",
    bank_id: "",
    bank_account: "",
    nationality: "",
    trn_number: undefined,
    avatar: "",
    category_id: "",
    phone_code: "",
    ltnName: ""
  },
  workerBuildings: [
    {
      buildingId: ""
    }
  ],
  workerCategories: [
    {
      categoryId: ""
    }
  ]
}

const userSchema = z.object({
  name: VALIDATION.NON_EMPTY_STRING,
  email: VALIDATION.OPTIONAL_STRING,
  // password: z.string().min(8, "Password must be at least 8 characters"),
  phone: VALIDATION.NON_EMPTY_STRING,
  user_type: VALIDATION.OPTIONAL_NUMBER,
  card_type: z.number().int().min(1).max(4),
  passport_number: VALIDATION.OPTIONAL_STRING,
  national_id: VALIDATION.OPTIONAL_STRING,
  address: VALIDATION.OPTIONAL_STRING,
  barcode: VALIDATION.OPTIONAL_STRING,
  profession: VALIDATION.OPTIONAL_STRING,
  work_phone: VALIDATION.OPTIONAL_STRING,
  fax: VALIDATION.OPTIONAL_STRING,
  mailbox: VALIDATION.OPTIONAL_STRING,
  sponsor: VALIDATION.OPTIONAL_NUMBER,
  sponsor_data: VALIDATION.OPTIONAL_STRING,
  statement: VALIDATION.OPTIONAL_STRING,
  bank_id: VALIDATION.OPTIONAL_STRING,
  bank_account: VALIDATION.OPTIONAL_STRING,
  nationality: VALIDATION.OPTIONAL_STRING,
  trn_number: VALIDATION.OPTIONAL_STRING,
  avatar: VALIDATION.OPTIONAL_STRING,
  category_id: VALIDATION.OPTIONAL_STRING,
  phone_code: VALIDATION.OPTIONAL_STRING,
  ltnName: VALIDATION.OPTIONAL_STRING
});

const workerBuildingSchema = z.object({
  buildingId: z.string().uuid()
});

const workerCategorySchema = z.object({
  categoryId: z.string().uuid()
});

export const userValidationSchema = z.object({
  user: userSchema,
  workerBuildings: z.array(workerBuildingSchema),
  workerCategories: z.array(workerCategorySchema)
}).superRefine((data, ctx) => {
  if (data.user.card_type === 3 && data.workerCategories.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "At least one category is required for card type supervisor",
      path: ["workerCategories"]
    });
  }

  if (data.user.card_type === 4) {
    if (data.workerBuildings.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one building is required for card type worker",
        path: ["workerBuildings"]
      });
    }
    if (data.workerCategories.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "At least one category is required for card type 4",
        path: ["workerCategories"]
      });
    }
  }
});
