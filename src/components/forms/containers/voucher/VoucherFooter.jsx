import { useTranslation } from "react-i18next";
import { RHFInput, RHFInputAmount, RHFUploadFilesController } from "../../fields";
import { useFormContext } from "react-hook-form";

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
              name="debit_amount"
            // label="debit_amount"
            />
          </div>
          <div className="w-[100px] shrink-0">
            <RHFInputAmount
              readOnly
              name="credit_amount"
            // label="credit_amount"
            />
          </div>
          <div className=" whitespace-nowrap">Total current amount</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[100px] shrink-0">
            <RHFInputAmount
              readOnly
              name="debit_total"
            // label="debit_total"
            />
          </div>
          <div className="w-[100px] shrink-0">
            <RHFInputAmount
              readOnly
              name="credit_total"
            // label="credit_total"
            />
          </div>
          <div className=" whitespace-nowrap">Final amount</div>
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
