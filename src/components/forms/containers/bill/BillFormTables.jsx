import Btn from '@/components/shared/Btn'
import { RHFAsyncSelectField, RHFInput, RHFInputAmount, RHFTableSelect } from '../../fields'
import { AccountField } from '../../global'
import TableForm from '../../wrapper/TableForm'

const BillFormTables = ({
  setActiveTab,
  activeTab,
  PATTERN_SETTINGS
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
                  <RHFTableSelect
                    name={`billMaterialDetails.${index}.materialId`}
                    options={[]}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`billMaterialDetails.${index}.unit`}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`billMaterialDetails.${index}.quantity`}
                    type="number"
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billMaterialDetails.${index}.unitPrice`}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`billMaterialDetails.${index}.vatPercentage`}
                    type="number"

                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billMaterialDetails.${index}.vatAmount`}
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billMaterialDetails.${index}.totalPrice`}
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billMaterialDetails.${index}.net`}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`billMaterialDetails.${index}.note`}
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
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billDiscountDetails.${index}.discount`}
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billDiscountDetails.${index}.extra`}
                  />
                </td>
                <td>
                  <RHFAsyncSelectField
                    name={`billDiscountDetails.${index}.costCenterId`}
                  />
                </td>
                <td>
                  <AccountField
                    name={`billDiscountDetails.${index}.obverseAccountId`}
                    options={[]}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`billDiscountDetails.${index}.note`}
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