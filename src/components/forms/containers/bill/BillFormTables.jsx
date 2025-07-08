import Btn from '@/components/shared/Btn'
import { RHFInput, RHFInputAmount, RHFSelectField } from '../../fields'
import { AccountField } from '../../global'
import CostCenterField from '../../global/CostCenterField'
import TableForm from '../../wrapper/TableForm'

const BillFormTables = ({
  setActiveTab,
  activeTab,
  materials
}) => {
  return (

    <div className="mt-4">
      <div className="flex items-center bg-gray-100 border">
        <Btn type="button" onClick={() => setActiveTab(1)} containerClassName="!rounded-none" kind={activeTab === 1 ? 'info' : "default"} isActive={activeTab === 1}>Materials </Btn>
        <Btn type="button" onClick={() => setActiveTab(2)} containerClassName="!rounded-none" kind={activeTab === 2 ? 'info' : "default"} isActive={activeTab === 2}>Accounts </Btn>
      </div>
      {
        activeTab === 1 ? (
          <TableForm
            // rowsCount={watch("billMaterialDetails")?.length}
            // rowStyles={(index) => ({
            //   background:
            //     index % 2
            //       ? PATTERN_SETTINGS?.table_color1
            //       : PATTERN_SETTINGS?.table_color2,
            // })}
            formBodyProps={{
              trClassName: ''
            }}
            formWrapperProps={{
              tableClassName: 'bg-white'
            }}
            renderFields={(item, index) => (
              <>
                <td>
                  <RHFSelectField
                    name={`billMaterialDetails.${index}.materialId`}
                    options={materials}
                    hideErrors
                  />
                </td>
                <td>
                  <RHFInput
                    name={`billMaterialDetails.${index}.unit`}
                    hideErrors
                  />
                </td>
                <td>
                  <RHFInput
                    name={`billMaterialDetails.${index}.quantity`}
                    hideErrors
                    type="number"
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billMaterialDetails.${index}.unitPrice`}
                    hideErrors
                  />
                </td>
                <td>
                  <RHFInput
                    name={`billMaterialDetails.${index}.vatPercentage`}
                    hideErrors
                    type="number"

                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billMaterialDetails.${index}.vatAmount`}
                    hideErrors
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billMaterialDetails.${index}.totalPrice`}
                    hideErrors
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billMaterialDetails.${index}.net`}
                    hideErrors
                  />
                </td>
                <td>
                  <RHFInput
                    name={`billMaterialDetails.${index}.note`}
                    hideErrors
                  />
                </td>
              </>
            )}

            gridName={"billMaterialDetails"}
            headers={[
              'material_id',
              'unit',
              'quantity',
              'unit_price',
              'vat_percentage',
              'vat_amount',
              'total_price',
              'net',
              'note',
            ]}
          />
        ) : (
          <TableForm
            // rowStyles={(index) => ({
            //   background:
            //     index % 2
            //       ? PATTERN_SETTINGS?.table_color1
            //       : PATTERN_SETTINGS?.table_color2,
            // })}

            formWrapperProps={{
              tableClassName: 'bg-white'
            }}
            renderFields={(item, index) => (
              <>

                <td>
                  <AccountField
                    name={`billDiscountDetails.${index}.accountId`}
                    hideErrors
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billDiscountDetails.${index}.discount`}
                    hideErrors
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billDiscountDetails.${index}.extra`}
                    hideErrors
                  />
                </td>
                <td>
                  <CostCenterField
                    name={`billDiscountDetails.${index}.costCenterId`}
                    hideErrors
                  />
                </td>
                <td>
                  <AccountField
                    name={`billDiscountDetails.${index}.obverseAccountId`}
                    hideErrors
                  />
                </td>
                <td>
                  <RHFInput
                    name={`billDiscountDetails.${index}.note`}
                    hideErrors
                  />
                </td>
              </>
            )}

            gridName={"billDiscountDetails"}
            headers={[
              'account_id',
              'discount',
              'extra',
              'cost_center_id',
              'obverse_account_id',
              'note',
            ]}
          />
        )
      }
    </div>
  )
}

export default BillFormTables