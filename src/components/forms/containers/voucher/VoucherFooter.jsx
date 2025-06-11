import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { RHFInputAmount, RHFUploadFilesController } from "../../fields";

export const VoucherFooter = ({
  PATTERN_SETTINGS,
}) => {
  const { t } = useTranslation();
  const { watch } = useFormContext()

  return (
    <div className="flex justify-between items-end text-sm">
      <div className="w-1/3 flex flex-col mt-4 capitalize">
        <div className="flex mb-1">
          <div className="w-[100px] shrink-0 text-center">{t("debit")}</div>
          <div className="w-[100px] shrink-0 text-center">{t("credit")}</div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-[100px] shrink-0">
            <RHFInputAmount
              readOnly
              name="voucher.debitAmount"
            // label="debit_amount"
            />
          </div>
          <div className="w-[100px] shrink-0">
            <RHFInputAmount
              readOnly
              name="voucher.creditAmount"
            // label="credit_amount"
            />
          </div>
          <div className=" whitespace-nowrap">{t("total_current_amount")}</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[100px] shrink-0">
            <RHFInputAmount
              readOnly
              name="voucher.debitTotal"
            // label="debit_total"
            />
          </div>
          <div className="w-[100px] shrink-0">
            <RHFInputAmount
              readOnly
              name="voucher.creditTotal"
            // label="credit_total"
            />
          </div>
          <div className=" whitespace-nowrap">{t("final_amount")}</div>
        </div>
      </div>
      <div className="flex gap-4 items-end">
        {watch('id') ? (
          <RHFUploadFilesController name="" />
        ) : null}
      </div>
    </div>
  );
};
