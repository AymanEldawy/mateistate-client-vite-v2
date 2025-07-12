import { RHFInputAmount, RHFTableInput, RHFTableSelect } from "../../fields";
import { AccountLeaveField } from "../../global";
import TableForm from "../../wrapper/TableForm";

const EntryFormGrid = ({ accounts, costCenters }) => {
  return (
    <TableForm
      renderFields={(item, index) => {
        return (
          <>
            <td>
              <AccountLeaveField
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
              <RHFTableInput name={`entryGridData.${index}.note`} hideErrors />
            </td>
            <td>
              <AccountLeaveField
                name={`entryGridData.${index}.observeAccountId`}
                hideErrors
              />
            </td>
          </>
        );
      }}
      gridName="entryGridData"
      headers={[
        "account",
        "debit",
        "credit",
        "cost_center",
        "note",
        "observe_account_id",
        // 'currency',
      ]}
    />
  );
};

export default EntryFormGrid;
