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

                name={`contract_linked_parking.${index}.building_id`}
              />
            </td>
            <td>
              <RHFTableAsyncSelect
                name={`contract_linked_parking.${index}.main_contract_id`}
              />
            </td>
            <td>
              <AccountField
                name={`contract_linked_parking.${index}.account_id`}
              />
            </td>
           
          </>
        )}
        gridName={"contract_linked_parking"}
        headers={[
          "building_id",
          "main_contract_id",
          "account_id",
        ]}
      />
    </div>
  )
}

export default ContractFormLinkedParking