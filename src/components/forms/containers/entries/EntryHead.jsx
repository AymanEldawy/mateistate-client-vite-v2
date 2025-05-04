import { RHFInput, RHFTextarea } from "../../fields";
import { CurrencyFieldGroup } from "../../global";

export const EntryHead = ({
  onlyView,
}) => {
  return (
    <div className="">
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4`}>
        <RHFInput
          name="internal_number"
          label="internal_number"
          // className="border-0 !rounded-none !h-full"
          // containerClassName="!flex-col !gap-1"
        />
        <RHFInput
          name="createdAt"
          label="createdAt"
          // className="border-0 !rounded-none !h-full"
          // containerClassName="!flex-col !gap-1"
          readOnly={onlyView}
        />
        <CurrencyFieldGroup
          // className="min-w-[170px] border-0 !rounded-none !h-full"
          table={"currency"}
          name="currency_id"
          readOnly={onlyView}
        />
      </div>
      <RHFTextarea
        name="note"
        label="note"
        containerClassName="col-span-full mt-1"
        labelClassName={"h-6"}
        className="border rounded-md !h-full"
        readOnly={onlyView}
      />
    </div>
  );
};
