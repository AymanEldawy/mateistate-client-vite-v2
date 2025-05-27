import { z } from "zod";

export const voucherDefaultValues = {
  voucher: {
    voucherType: 1,
    connectWith: 0,
    debitAmount: 0,
    creditAmount: 0,
    debitTotal: 0,
    creditTotal: 0,
    currencyVal: 1,
    note: "",
    feedback: false,
    genEntires: false,
    isFirstBatch: true,
    accountId: "",
    currencyId: "",
    sellerId: "",
    voucherPatternId: "",
    contractId: ""
  },
  voucherGridData: [
    {
      debit: 0,
      credit: 0,
      description: "",
      accountId: "",
      costCenterId: ""
    }
  ],
  voucherPictures: [
    {
      picture: ""
    }
  ]
};

const voucherGridDataSchema = z.object({
  debit: z.number().min(0),
  credit: z.number().min(0),
  description: z.string().optional(),
  accountId: z.string().min(1),
  costCenterId: z.string().optional()
});

const voucherPictureSchema = z.object({
  picture: z.string().optional()
});

const voucherSchema = z.object({
  voucherType: z.number().min(1),
  connectWith: z.number().optional(),
  debitAmount: z.number().min(0),
  creditAmount: z.number().min(0),
  debitTotal: z.number().min(0),
  creditTotal: z.number().min(0),
  currencyVal: z.number().min(0),
  note: z.string().optional(),
  feedback: z.boolean().optional(),
  genEntires: z.boolean().optional(),
  isFirstBatch: z.boolean().optional(),
  accountId: z.string().min(1),
  currencyId: z.string().min(1),
  sellerId: z.string().min(1),
  voucherPatternId: z.string().min(1),
  contractId: z.string().min(1)
});

export const voucherValidationSchema = () => z.object({
  voucher: voucherSchema,
  voucherGridData: z.array(voucherGridDataSchema),
  voucherPictures: z.array(voucherPictureSchema)
});
