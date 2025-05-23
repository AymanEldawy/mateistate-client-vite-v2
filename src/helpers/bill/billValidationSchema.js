import { z } from "zod";

export const billDefaultValue = {
  bill: {
    issueDate: new Date().toISOString(),
    billDate: new Date().toISOString(),
    billKind: 1,
    clientAccountId: "",
    currencyId: "",
    currencyVal: 1.0,
    paymentMethod: 1,
    note: "",
    receiptNumber: "",
    costCenterId: "",
    connectWith: 1,
    connectWithId: "",
    storeId: "",
    customerAccountId: "",
    materialAccountId: "",
    kind: "purchase",
    totalQuantities: 0,
    totalQuantitiesPercentage: 0,
    totalQuantitiesPercentage2: 0,
    refundedTaxableAmount: 0,
    nonRefundedTaxableAmount: 0,
    notTaxable: 0,
    taxable: 0,
    total: 0,
    discounts: 0,
    discountsExtra: 0,
    nonRefundableVat: 0,
    nonRefundableVat2: 0,
    grandTotal: 0,
    net: 0,
    billTotalText: "",
    billPatternId: "",
    code: "",
    vatAccountId: "",
    extras: 0,
    vatAmount: 0,
    customerId: "",
    subtotal: 0
  },
  billDiscountDetails: [
    {
      accountId: "",
      discount: 0,
      extra: 0,
      currencyId: "",
      currencyVal: 1,
      costCenterId: "",
      obverseAccountId: "",
      note: ""
    }
  ],
  billMaterialDetails: [
    {
      materialId: "",
      quantity: 0,
      unitPrice: 0,
      totalPrice: 0,
      note: ""
    }
  ]
};

const billDiscountDetailSchema = z.object({
  accountId: z.string().optional(),
  discount: z.number().min(0),
  extra: z.number().min(0),
  currencyId: z.string().optional(),
  currencyVal: z.number().min(0),
  costCenterId: z.string().optional(),
  obverseAccountId: z.string().optional(),
  note: z.string().optional()
});

const billMaterialDetailSchema = z.object({
  materialId: z.string().optional(),
  quantity: z.number().min(0),
  unitPrice: z.number().min(0),
  totalPrice: z.number().min(0),
  note: z.string().optional()
});

const billSchema = z.object({
  issueDate: z.string().or(z.date()),
  billDate: z.string().or(z.date()),
  billKind: z.number().min(1),
  clientAccountId: z.string().optional(),
  currencyId: z.string().optional(),
  currencyVal: z.number().min(0),
  paymentMethod: z.number().min(1),
  note: z.string().optional(),
  receiptNumber: z.string().or(z.number()).optional(),
  costCenterId: z.string().optional(),
  connectWith: z.number().optional(),
  connectWithId: z.string().optional(),
  storeId: z.string().optional(),
  customerAccountId: z.string().optional(),
  materialAccountId: z.string().optional(),
  kind: z.string().optional(),
  totalQuantities: z.number().min(0),
  totalQuantitiesPercentage: z.number().min(0),
  totalQuantitiesPercentage2: z.number().min(0),
  refundedTaxableAmount: z.number().min(0),
  nonRefundedTaxableAmount: z.number().min(0),
  notTaxable: z.number().min(0),
  taxable: z.number().min(0),
  total: z.number().min(0),
  discounts: z.number().min(0),
  discountsExtra: z.number().min(0),
  nonRefundableVat: z.number().min(0),
  nonRefundableVat2: z.number().min(0),
  grandTotal: z.number().min(0),
  net: z.number().min(0),
  billTotalText: z.string().optional(),
  billPatternId: z.string().optional(),
  code: z.string().or(z.number()).optional(),
  vatAccountId: z.string().optional(),
  extras: z.number().min(0),
  vatAmount: z.number().min(0),
  customerId: z.string().optional(),
  subtotal: z.number().min(0)
});

export const billValidationSchema = () => z.object({
  bill: billSchema,
  billDiscountDetails: z.array(billDiscountDetailSchema),
  billMaterialDetails: z.array(billMaterialDetailSchema)
});
