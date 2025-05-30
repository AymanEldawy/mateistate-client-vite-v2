import React from 'react'
import { RHFInput, RHFSelectField } from '../../fields'
import TableForm from '../../wrapper/TableForm'
 const MaterialFormPricesDetails = () => (
    <TableForm
      renderFields={(item, index) => (
        <>
          <td>
            <RHFSelectField
              name={`materialPriceDetails.${index}.priceType`}
              hideErrors
              options={[]}
            />
          </td>
          <td>
            <RHFInput
              name={`materialPriceDetails.${index}.unit1`}
              hideErrors
            />
          </td>
          <td>
            <RHFInput
              name={`materialPriceDetails.${index}.unit2`}
              hideErrors
            />
          </td>

          <td>
            <RHFInput
              name={`materialPriceDetails.${index}.unit3`}
              hideErrors
            />
          </td>
        </>

      )}
      gridName="materialPriceDetails"
      headers={[
        'priceType',
        'unit1',
        'unit2',
        'unit3',
      ]}
    />
  )


export default MaterialFormPricesDetails