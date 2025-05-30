import { RHFInputAmount } from "../../fields";

export const EntryFooter = ({
  PATTERN_SETTINGS,
}) => {

  return (
    <div className="flex max-w-[300px]  w-full gap-4 mt-4 items-end">
      <RHFInputAmount
        readOnly
        name="entry.debit"
        label="debit"
        containerClassName="!items-start !flex-col !gap-1"
      />
      <RHFInputAmount
        readOnly
        name="entry.credit"
        label="credit"
        containerClassName="!items-start !flex-col !gap-1"
      />
      <RHFInputAmount
        readOnly
        name="entry.difference"
        label="difference"
        containerClassName="!items-start !flex-col !gap-1"
      />
    </div>
  );
};
