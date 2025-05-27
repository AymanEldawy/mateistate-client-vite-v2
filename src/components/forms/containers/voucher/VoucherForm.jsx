import { reCalculateVouchersResult } from "@/helpers/voucher/voucherHelpers";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import VoucherFormGrid from "./VoucherFormGrid";
import { VoucherHead } from "./VoucherHead";
import { VoucherFooter } from "./VoucherFooter";

const VoucherForm = ({
  voucherName,
  voucherType,
  popupView,
  updateVoucherGrid,
  oldValues = null,
  outerClose,
  number,
  onClose,
  code,
}) => {
  const name = "voucher_main_data";
  const type = code;
  const [PATTERN_SETTINGS, setPATTERN_SETTINGS] = useState({});
  const {
    watch,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = useFormContext();

  useEffect(() => {
    if (oldValues && !oldValues?.number) {
      reset({ ...oldValues });
    }
  }, [oldValues?.number]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!type) return;
      if (name?.indexOf("grid.") === -1) return;
      let currentVal = watch(name);
      let subName = name?.split(".")?.at(-1);
      let row = name?.split(".")?.[1];
      if (subName === "credit" || subName === "debit") {
        // calculateVoucherAmount(row, value, column)
        reCalculateVouchersResult(watch, setValue)
      }

    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="">
      <VoucherHead
        PATTERN_SETTINGS={PATTERN_SETTINGS}
      />
      <VoucherFormGrid PATTERN_SETTINGS={PATTERN_SETTINGS} />
      <VoucherFooter
        PATTERN_SETTINGS={PATTERN_SETTINGS}
      />
    </div>

  );
};

export default VoucherForm;
