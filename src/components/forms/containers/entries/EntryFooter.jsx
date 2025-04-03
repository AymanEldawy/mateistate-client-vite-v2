import { RHFInputAmount } from "../../fields";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

export const EntryFooter = ({
  PATTERN_SETTINGS,
}) => {
  return (
    <div className="flex max-w-[300px]  w-full gap-4 mt-4 items-end">
      <RHFInputAmount
        readOnly
        name="debit"
        label="debit"
        containerClassName="!items-start !flex-col !gap-1"
      />
      <RHFInputAmount
        readOnly
        name="credit"
        label="credit"
        containerClassName="!items-start !flex-col !gap-1"
      />
      <RHFInputAmount
        readOnly
        name="difference"
        label="difference"
        containerClassName="!items-start !flex-col !gap-1"
      />
    </div>
  );
};
