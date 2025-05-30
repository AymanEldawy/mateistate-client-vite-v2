import TableForm from '../../wrapper/TableForm'
import { RHFInputAmount, RHFSelectField, RHFTableAsyncSelect, RHFTableInput, RHFTableSelect } from '../../fields'
import { AccountField } from '../../global'
import { useQuery } from '@tanstack/react-query';
import { getLeavesAccounts } from '@/services/accountService';
import useFetchData from '@/hook/useFetchQuery';
import QUERY_KEYS from '@/data/queryKeys';

const EntryFormGrid = ({
  accounts,
  costCenters,
}) => {

  return (
    <TableForm
      renderFields={(item, index) => {
        return (
          <>

            <td>
              <RHFTableSelect
                label=""
                name={`entryGridData.${index}.accountId`}
                hideErrors
                options={accounts}
              />
            </td>
            <td>
              <RHFInputAmount
                name={`entryGridData.${index}.debit`}
                label=""
                hideErrors
              />
            </td>
            <td>
              <RHFInputAmount
                name={`entryGridData.${index}.credit`}
                label=""
                hideErrors
              />
            </td>

            <td>
              <RHFTableSelect
                name={`entryGridData.${index}.costCenterId`}
                hideErrors
                options={costCenters}
              />
            </td>
            <td>
              <RHFTableInput
                name={`entryGridData.${index}.note`}
                hideErrors
              />
            </td>
            <td>
              <AccountField
                name={`entryGridData.${index}.observeAccountId`}
                hideErrors
              />
            </td>
          </>
        )
      }}
      gridName="entryGridData"
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