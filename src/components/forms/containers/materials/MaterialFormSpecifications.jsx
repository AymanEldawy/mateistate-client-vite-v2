import { RHFInput } from "../../fields"
import TableForm from "../../wrapper/TableForm"




const MaterialFormSpecifications = () => (
  <TableForm
    renderFields={(item, index) => (
      <>
        <td>
          <RHFInput
            name={`materialSpecifications.${index}.name`}
            hideErrors
          />
        </td>
        <td>
          <RHFInput
            name={`materialSpecifications.${index}.value`}
            hideErrors
          />
        </td>
        <td>
          <RHFInput
            name={`materialSpecifications.${index}.description`}
            hideErrors
          />
        </td>
      </>
    )}
    gridName="materialSpecifications"
    headers={[
      "name",
      "value",
      "description",
    ]}
  />
)


export default MaterialFormSpecifications