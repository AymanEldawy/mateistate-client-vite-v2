import { reCalculateVouchersResult } from "@/helpers/voucher/voucherHelpers";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { VoucherFooter } from "./VoucherFooter";
import VoucherFormGrid from "./VoucherFormGrid";
import { VoucherHead } from "./VoucherHead";

const VoucherForm = ({
  oldValues = null,
  code,
  pattern,
  ...props
}) => {
  const {
    watch,
    reset,
    setValue,
  } = useFormContext();

  useEffect(() => {
    if(!pattern) return;
    setValue("voucher.voucherType", +code);
    setValue("voucher.voucherPatternId", pattern?.id);
  }, [code]);

  useEffect(() => {
    if (oldValues && !oldValues?.number) {
      reset({ ...oldValues });
    }
  }, [oldValues?.number]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!type) return;
      if (name?.indexOf("voucherGridData.") === -1) return;
      let subName = name?.split(".")?.at(-1);
      if (subName === "credit" || subName === "debit") {
        // calculateVoucherAmount(row, value, column)
        reCalculateVouchersResult(watch, setValue)
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="">
      <VoucherHead PATTERN_SETTINGS={pattern} />
      <VoucherFormGrid PATTERN_SETTINGS={pattern} />
      <VoucherFooter PATTERN_SETTINGS={pattern} />
    </div>

  );
};

export default VoucherForm;
