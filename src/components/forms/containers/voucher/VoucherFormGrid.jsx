import React from 'react'
import TableForm from '../../wrapper/TableForm'
import { RHFAsyncSelectField, RHFInput, RHFTableAsyncSelect, RHFTableInput } from '../../fields'
import { AccountField } from '../../global'
import { getSearchCostCenter, getSingleCostCenter } from '@/services/CostCenterService'

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
                name={PATTERN_SETTINGS?.show_credit_field ? `voucherGridData.${index}.credit` : `voucherGridData.${index}.debit`}
                label={PATTERN_SETTINGS?.show_credit_field ? `credit` : `debit`}
                required={index === 0}
              />
            </td>
            <td>
              <AccountField
                label=""
                name={`voucherGridData.${index}.account_id`}
                required={index === 0}
              />
            </td>
            <td>
              <RHFTableAsyncSelect
                name={`voucherGridData.${index}.cost_center_id`}
                getSearch={getSearchCostCenter}
                getSingle={getSingleCostCenter}
                required={index === 0}
              />
            </td>
            <td>
              <RHFTableInput
                name={`voucherGridData.${index}.description`}
              />
            </td>
          </>
        )
      }}
      gridName="voucherGridData"
      headers={[
        PATTERN_SETTINGS?.show_credit_field ? `credit` : `debit`,
        "account",
        "cost_center",
        "note",
      ]}

    />
  )
}

export default VoucherFormGrid