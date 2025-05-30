import { RHFInput, RHFSelectField, RHFTableAsyncSelect } from "../../fields"
import TableForm from "../../wrapper/TableForm"

const MaterialFormBalance = ({ stores }) => (
  <TableForm
    renderFields={(item, index) => (
      <>
        <td>
          <RHFSelectField
            name={`materialBalances.${index}.storeId`}
            hideErrors
            options={stores}
          />
        </td>
        <td>
          <RHFInput
            name={`materialBalances.${index}.unit1`}
            hideErrors
          />
        </td>
        <td>
          <RHFInput
            name={`materialBalances.${index}.quality1`}
            type="number"
            hideErrors
          />
        </td>
        <td>
          <RHFInput
            name={`materialBalances.${index}.unit2`}
            hideErrors
          />
        </td>
        <td>
          <RHFInput
            name={`materialBalances.${index}.quality2`}
            type="number"
            hideErrors
          />
        </td>
        <td>
          <RHFInput
            name={`materialBalances.${index}.unit3`}
            hideErrors
          />
        </td>
        <td>
          <RHFInput
            name={`materialBalances.${index}.quality3`}
            type="number"
            hideErrors
          />
        </td>
        <td>
          <RHFInput
            name={`materialBalances.${index}.note`}
            hideErrors
          />
        </td>
      </>
    )}
    gridName="materialBalances"
    headers={[
      'storeId',
      'unit1',
      'quality1',
      'unit2',
      'quality2',
      'unit3',
      'quality3',
      'note',
    ]}
  />
)

export default MaterialFormBalance