import React from 'react'
import TableForm from '../../wrapper/TableForm'
import { RHFInput, RHFInputAmount, RHFSelectField, RHFTableAsyncSelect } from '../../fields'
const MaterialFormMinimum = ({ stores }) => (
  <TableForm
    renderFields={(item, index) => (
      <>
        <td>
          <RHFSelectField
            name={`materialMinimums.${index}.storeId`}
            hideErrors
            options={stores}
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