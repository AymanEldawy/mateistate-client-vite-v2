import QUERY_KEYS from "@/data/queryKeys";
import { getAllOwners } from "@/services/ownerService";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  RHFDatePicker,
  RHFInput,
  RHFInputAmount,
  RHFSelectField,
  RHFTableInput,
} from "../../fields";
import BuildingField from "../../global/BuildingField";
import TableForm from "../../wrapper/TableForm";
import { getAllOwnerExpensesTypes } from "./../../../../services/ownerExpensesTypesService";

const OwnerExpensesForm = () => {
  const { watch, reset, setValue, control } = useFormContext();

  const { data: expensesTypes } = useQuery({
    queryKey: [QUERY_KEYS.OWNER_EXPENSES_TYPES],
    queryFn: async () => {
      const response = await getAllOwnerExpensesTypes();
      return response?.data || [];
    },
  });

  const { data: owners } = useQuery({
    queryKey: [QUERY_KEYS.Owner],
    queryFn: async () => {
      const response = await getAllOwners();
      return response?.data || [];
    },
  });

  useEffect(() => {
    if (expensesTypes?.length > 0) {
      let grid = [];
      for (let i = 0; i < expensesTypes.length; i++) {
        const expenseType = expensesTypes[i];
        if (expenseType?.isActive) {
          setValue(`expenseDetails.${i}.expenseTypeId`, expenseType.id);
          grid.push({
            date: null,
            expenseTypeId: expenseType.id,
            amount: null,
            note: null,
            receiptNumber: null,
          });
        }
      }
      if (grid.length > 0) {
        reset({
          expenseDetails: grid,
        });
      }
    }
  }, [expensesTypes]);

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-3 gap-4">
        <RHFDatePicker label="date" name={`ownerExpense.date`} />
        <RHFInput label="receiptNumber" name={`ownerExpense.receiptNumber`} />
        <BuildingField
          label="buildingId"
          name={`ownerExpense.buildingId`}
          required
          hideErrors
        />
        <RHFSelectField
          label="ownerId"
          name={`ownerExpense.ownerId`}
          options={owners}
          required
        />
        <RHFInput label="note" name={`ownerExpense.note`} hideErrors />
      </div>

      <TableForm
        gridName={"expenseDetails"}
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`expenseDetails.${index}.date`} />
            </td>
            <td>
              <RHFSelectField
                name={`expenseDetails.${index}.expenseTypeId`}
                options={expensesTypes}
                hideErrors
              />
            </td>
            <td>
              <RHFInputAmount
                name={`expenseDetails.${index}.amount`}
                hideErrors
              />
            </td>
            <td>
              <RHFTableInput name={`expenseDetails.${index}.note`} />
            </td>
            <td>
              <RHFTableInput name={`expenseDetails.${index}.receiptNumber`} />
            </td>
          </>
        )}
        headers={["date", "owner_types", "amount", "note", "receipt_number"]}
      />
    </div>
  );
};

export default OwnerExpensesForm;
