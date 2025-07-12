import { RHFTableInput } from "../../fields";
import { AccountLeaveField } from "../../global";
import CostCenterField from "../../global/CostCenterField";
import TableForm from "../../wrapper/TableForm";

// rowStyles={(index) => {
//   if (PATTERN_SETTINGS?.even_table_color && index % 2 === 0) {
//     return { background: PATTERN_SETTINGS?.even_table_color };
//   } else if (PATTERN_SETTINGS?.odd_table_color && index % 2 !== 0) {
//     return { background: PATTERN_SETTINGS?.odd_table_color };
//   }
// }}

const VoucherFormGrid = ({ PATTERN_SETTINGS }) => {
  return (
    <TableForm
      renderFields={(item, index) => {
        return (
          <>
            <td>
              <RHFTableInput
                type="number"
                name={
                  PATTERN_SETTINGS?.show_credit_field
                    ? `voucherGridData.${index}.credit`
                    : `voucherGridData.${index}.debit`
                }
                label={PATTERN_SETTINGS?.show_credit_field ? `credit` : `debit`}
                required={index === 0}
              />
            </td>
            <td>
              <AccountLeaveField
                label=""
                name={`voucherGridData.${index}.accountId`}
                required={index === 0}
              />
            </td>
            <td>
              <CostCenterField
                name={`voucherGridData.${index}.costCenterId`}
                required={index === 0}
              />
            </td>
            <td>
              <RHFTableInput name={`voucherGridData.${index}.description`} />
            </td>
          </>
        );
      }}
      gridName="voucherGridData"
      headers={[
        PATTERN_SETTINGS?.showCreditField ? `credit` : `debit`,
        "account",
        "cost_center",
        "note",
      ]}
    />
  );
};

export default VoucherFormGrid;
