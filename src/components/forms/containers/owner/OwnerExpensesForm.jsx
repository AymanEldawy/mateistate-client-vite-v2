import { RHFAsyncSelectField, RHFDatePicker, RHFInput, RHFInputAmount, RHFTableInput } from "../../fields";
import TableForm from "../../wrapper/TableForm";
import { getSearchBuilding, getSingleBuilding } from "@/services/buildingService";
import { getSearchOwner, getSingleOwner } from "@/services/ownerService";
import { getSearchOwnerExpensesTypes, getSingleOwnerExpensesTypes } from './../../../../services/ownerExpensesTypesService';

const OwnerExpensesForm = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-3 gap-4">
        <RHFDatePicker
          label="date"
          name={`ownerExpense.date`}
        />
        <RHFInput
          label="receiptNumber"
          name={`ownerExpense.receiptNumber`}
          type="number"
        />
        <RHFAsyncSelectField
          label="buildingId"
          name={`ownerExpense.buildingId`}
          getSingle={getSingleBuilding}
          getSearch={getSearchBuilding}
          required
        />
        <RHFAsyncSelectField
          label="ownerId"
          name={`ownerExpense.ownerId`}
          getSingle={getSingleOwner}
          getSearch={getSearchOwner}
          required
        />
        <RHFInput
          label="note"
          name={`ownerExpense.note`}
        />
      </div>

      <TableForm
        gridName={"expenseDetails"}
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker
                name={`expenseDetails.${index}.date`}
              />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`expenseDetails.${index}.expenseTypeId`}
                getSingle={getSingleOwnerExpensesTypes}
                getSearch={getSearchOwnerExpensesTypes}
              />
            </td>
            <td>
              <RHFInputAmount
                name={`expenseDetails.${index}.amount`}
              />
            </td>
            <td>
              <RHFTableInput
                name={`expenseDetails.${index}.note`}
              />
            </td>
            <td>
              <RHFTableInput
                name={`expenseDetails.${index}.receiptNumber`}
                type="number"
              />
            </td>
          </>
        )}
        headers={[
          'date',
          'owner_types',
          'amount',
          'note',
          'receipt_number',
        ]}

      />
    </div>
  );
};

export default OwnerExpensesForm;
