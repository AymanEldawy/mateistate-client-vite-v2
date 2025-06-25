import { RHFInput, RHFInputAmount } from '../../fields'
import StoreField from '../../global/StoreField'
import TableForm from '../../wrapper/TableForm'
const MaterialFormMinimum = ({ stores }) => (
  <TableForm
    renderFields={(item, index) => (
      <>
        <td>
          <StoreField
            name={`materialMinimums.${index}.storeId`}
            hideErrors
          />
        </td>
        <td>
          <RHFInputAmount
            name={`materialMinimums.${index}.minimum`}
            hideErrors
          />

        </td>
        <td>
          <RHFInputAmount
            name={`materialMinimums.${index}.maximum`}
            hideErrors
          />
        </td>
        <td>
          <RHFInput
            name={`materialMinimums.${index}.note`}
            hideErrors
          />
        </td>
      </>
    )}
    gridName="materialMinimums"
    headers={[
      "storeId",
      "minimum",
      "maximum",
      "note",
    ]}
  />

)

export default MaterialFormMinimum