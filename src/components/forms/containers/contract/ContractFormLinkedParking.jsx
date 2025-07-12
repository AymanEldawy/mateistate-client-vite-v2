import { RHFTableAsyncSelect } from "../../fields";
import { AccountLeaveField } from "../../global";
import BuildingField from "../../global/BuildingField";
import TableForm from "../../wrapper/TableForm";

const ContractFormLinkedParking = () => {
  return (
    <div>
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <BuildingField
                name={`contractLinkedParking.${index}.buildingId`}
              />
            </td>
            <td>
              <RHFTableAsyncSelect
                name={`contractLinkedParking.${index}.mainContractId`}
              />
            </td>
            <td>
              <AccountLeaveField
                name={`contractLinkedParking.${index}.accountId`}
              />
            </td>
          </>
        )}
        gridName={"contractLinkedParking"}
        headers={["buildingId", "mainContractId", "accountId"]}
      />
    </div>
  );
};

export default ContractFormLinkedParking;
