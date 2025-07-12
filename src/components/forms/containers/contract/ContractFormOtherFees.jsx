import { ViewEntry } from "@/components/shared/ViewEntry";
import { CREATED_FROM_CONTRACT_FEES } from "@/data/GENERATE_STARTING_DATA";
import { useFormContext } from "react-hook-form";
import { RHFDatePicker, RHFInput, RHFInputAmount } from "../../fields";
import { AccountLeaveField } from "../../global";
import TableForm from "../../wrapper/TableForm";

const ContractFormOtherFees = () => {
  const { watch } = useFormContext();

  return (
    <div className="p-4">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`contractOtherFees.${index}.date`} />
            </td>
            <td>
              <RHFInputAmount name={`contractOtherFees.${index}.feeAmount`} />
            </td>
            <td>
              <AccountLeaveField
                name={`contractOtherFees.${index}.accountId`}
              />
            </td>
            <td>
              <RHFInput name={`contractOtherFees.${index}.notes`} />
            </td>
          </>
        )}
        gridName={"contractOtherFees"}
        headers={["date", "feeAmount", "accountId", "notes"]}
      />
      {watch("contractOtherFees.0.id") && (
        <ViewEntry
          id={watch("contract.id")}
          created_from={CREATED_FROM_CONTRACT_FEES}
        />
      )}
    </div>
  );
};

export default ContractFormOtherFees;
