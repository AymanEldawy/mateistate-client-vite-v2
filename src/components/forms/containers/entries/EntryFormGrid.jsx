import TableForm from '../../wrapper/TableForm'
import { RHFTableAsyncSelect, RHFTableInput } from '../../fields'
import { AccountField } from '../../global'

const EntryFormGrid = () => {
  return (
    <TableForm
      renderFields={(item, index) => {
        return (
          <>

            <td>
              <AccountField
                label=""
                name={`grid.${index}.account_id`}
              />
            </td>
            <td>
              <RHFTableInput
                name={`grid.${index}.debit`}
                label={`debit`}
              />
            </td>
            <td>
              <RHFTableInput
                name={`grid.${index}.credit`}
                label={`credit`}
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
            <td>
              <AccountField
                name={`grid.${index}.observe_account_id`}
              />
            </td>
          </>
        )
      }}
      gridName="grid"
      headers={[
        'account',
        'debit',
        'credit',
        'cost_center',
        'note',
        'observe_account_id',
        // 'currency',
      ]}

    />
  )
}

export default EntryFormGrid