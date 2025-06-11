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
    accountId: null,
    currencyId: null,
    voucherPatternId: null,
    contractId: null
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
// "voucher.currencyId must be a UUID",
// "voucher.sellerId must be a UUID",
// "voucher.voucherPatternId must be a UUID",
// "voucher.contractId must be a UUID",
// "voucherGridData.0.accountId must be a UUID",
// "voucherGridData.0.costCenterId must be a UUID"

const voucherGridDataSchema = z.object({
  debit: z.number().optional(),
  credit: z.number().optional(),
  description: z.string().optional(),
  accountId: z.string().optional(),
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
  accountId: z.string().optional(),
  currencyId: z.string().optional().nullable(),
  voucherPatternId: z.string(),
  contractId: z.string().optional().nullable()
});

export const voucherValidationSchema = () => z.object({
  voucher: voucherSchema,
  voucherGridData: z.array(voucherGridDataSchema),
  voucherPictures: z.array(voucherPictureSchema)
});
