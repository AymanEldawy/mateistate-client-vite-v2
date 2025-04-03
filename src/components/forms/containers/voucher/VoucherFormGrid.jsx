import React from 'react'
import TableForm from '../../wrapper/TableForm'
import { RHFAsyncSelectField, RHFInput, RHFTableAsyncSelect, RHFTableInput } from '../../fields'
import { AccountField } from '../../global'

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
                name={PATTERN_SETTINGS?.show_credit_field ? `grid.${index}.credit` : `grid.${index}.debit`}
                label={PATTERN_SETTINGS?.show_credit_field ? `credit` : `debit`}
              />
            </td>
            <td>
              <AccountField
                label=""
                name={`grid.${index}.account_id`}
              />
            </td>
            <td>
              <RHFTableAsyncSelect
                name={`grid.${index}.cost_center_id`}
              />
            </td>
            <td>
              <RHFTableInput
                name={`grid.${index}.note`}
              />
            </td>
          </>
        )
      }}
      gridName="grid"
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