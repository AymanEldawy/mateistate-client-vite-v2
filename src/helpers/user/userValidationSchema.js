import { z } from "zod";
import VALIDATION from "../VALIDATIONS";
export const userDefaultValue = {
  user: {
    name: "",
    email: "",
    password: "",
    phone: "",
    userType: 1,
    cardType: 1,
    passport_number: "",
    nationalId: "",
    address: "",
    barcode: undefined,
    profession: undefined,
    workPhone: "",
    fax: "",
    mailbox: "",
    sponsor: undefined,
    sponsorData: "",
    statement: "",
    bankId: null,
    bankAccount: "",
    nationality: "",
    trnNumber: undefined,
    avatar: "",
    categoryId: null,
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
  userType: VALIDATION.OPTIONAL_NUMBER,
  cardType: z.number().int().min(1).max(4),
  passport_number: VALIDATION.OPTIONAL_STRING,
  nationalId: VALIDATION.OPTIONAL_STRING,
  address: VALIDATION.OPTIONAL_STRING,
  barcode: VALIDATION.OPTIONAL_NUMBER,
  profession: VALIDATION.OPTIONAL_NUMBER,
  workPhone: VALIDATION.OPTIONAL_STRING,
  fax: VALIDATION.OPTIONAL_STRING,
  mailbox: VALIDATION.OPTIONAL_STRING,
  sponsor: VALIDATION.OPTIONAL_NUMBER,
  sponsorData: VALIDATION.OPTIONAL_STRING,
  statement: VALIDATION.OPTIONAL_STRING,
  bankId: VALIDATION.OPTIONAL_STRING,
  bankAccount: VALIDATION.OPTIONAL_STRING,
  nationality: VALIDATION.OPTIONAL_STRING,
  trnNumber: VALIDATION.OPTIONAL_NUMBER,
  avatar: VALIDATION.OPTIONAL_STRING,
  categoryId: VALIDATION.OPTIONAL_STRING,
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
  if (data.user.cardType === 3 && data.workerCategories.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "At least one category is required for card type supervisor",
      path: ["workerCategories"]
    });
  }

  if (data.user.cardType === 4) {
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
