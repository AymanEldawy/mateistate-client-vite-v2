import { RHFDatePicker, RHFInput, RHFTextarea } from "../../fields";
import { AccountLeaveField, CurrencyFieldGroup } from "../../global";
import UniqueFieldGroup from "../../global/UniqueFieldGroup";

export const VoucherHead = ({ PATTERN_SETTINGS }) => {
  return (
    <div>
      <div className={`grid gap-y-2 gap-x-8 grid-cols-2 md:grid-cols-3`}>
        <RHFInput name="voucher.internalNumber" label="internalNumber" />
        <RHFDatePicker name="voucher.createdAt" label="created_at" />
        <AccountLeaveField
          name="voucher.accountId"
          label="account_id"
          required
        />
        {PATTERN_SETTINGS?.show_contract_field ? <UniqueFieldGroup /> : null}
        {PATTERN_SETTINGS?.show_currency ? (
          <CurrencyFieldGroup
            name="voucher.currencyId"
            label="currency_id"
            required
          />
        ) : null}
      </div>
      <RHFTextarea
        name="voucher.note"
        label="note"
        containerClassName="col-span-full"
        className="border rounded-md !h-full w-full"
      />
    </div>
  );
};
