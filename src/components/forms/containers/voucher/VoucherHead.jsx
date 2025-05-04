import { RHFDatePicker, RHFInput, RHFTextarea } from "../../fields";
import { AccountField, CurrencyFieldGroup } from "../../global";
import UniqueFieldGroup from "../../global/UniqueFieldGroup";

export const VoucherHead = ({
  PATTERN_SETTINGS,
}) => {
  return (
    <div>
      <div className={`grid gap-y-2 gap-x-8 grid-cols-2 md:grid-cols-3`}>
        <RHFInput
          name="internal_number"
          label="internal_number"
        />
        <RHFDatePicker
          name="createdAt"
          label="createdAt"
        />
        <AccountField
          name="account_id"
          label="account_id"
        />
        {PATTERN_SETTINGS?.show_contract_field ? (
          <UniqueFieldGroup />
        ) : null}
        {PATTERN_SETTINGS?.show_currency ? (
          <CurrencyFieldGroup
            name="currency_id"
            label="currency_id"
          />
        ) : null}
      </div>
      <RHFTextarea
        name="note"
        label="note"
        containerClassName="col-span-full"
        className="border rounded-md !h-full w-full"
      />
    </div>
  );
};
