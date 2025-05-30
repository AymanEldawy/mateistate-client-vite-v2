import { RHFAsyncSelectField, RHFTableAsyncSelect } from "../../fields"
import { AccountField } from "../../global"
import TableForm from "../../wrapper/TableForm"

const ContractFormLinkedParking = () => {
  return (
    <div>
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFTableAsyncSelect

                name={`contractLinkedParking.${index}.buildingId`}
              />
            </td>
            <td>
              <RHFTableAsyncSelect
                name={`contractLinkedParking.${index}.mainContractId`}
              />
            </td>
            <td>
              <AccountField
                name={`contractLinkedParking.${index}.accountId`}
              />
            </td>
           
          </>
        )}
        gridName={"contractLinkedParking"}
        headers={[
          "buildingId",
          "mainContractId",
          "accountId",
        ]}
      />
    </div>
  )
}

export default ContractFormLinkedParking