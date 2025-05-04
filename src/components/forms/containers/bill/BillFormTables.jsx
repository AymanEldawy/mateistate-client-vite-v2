import Btn from '@/components/shared/Btn'
import TableForm from '../../wrapper/TableForm'
import { RHFAsyncSelectField, RHFInput, RHFInputAmount, RHFSelectField, RHFTableSelect } from '../../fields'
import { AccountField } from '../../global'

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
            // rowsCount={watch("bilMaterialDetails")?.length}
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
                    name={`bilMaterialDetails.${index}.materialId`}
                    options={[]}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`bilMaterialDetails.${index}.unit`}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`bilMaterialDetails.${index}.quantity`}
                    type="number"
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`bilMaterialDetails.${index}.unitPrice`}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`bilMaterialDetails.${index}.vatPercentage`}
                    type="number"

                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`bilMaterialDetails.${index}.vatAmount`}
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`bilMaterialDetails.${index}.totalPrice`}
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`bilMaterialDetails.${index}.net`}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`bilMaterialDetails.${index}.note`}
                  />
                </td>
              </>
            )}

            gridName={"bilMaterialDetails"}
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
                    name={`billDiscountsDetails.${index}.accountId`}
                    options={[]}
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billDiscountsDetails.${index}.discount`}
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`billDiscountsDetails.${index}.extra`}
                  />
                </td>
                <td>
                  <RHFAsyncSelectField
                    name={`billDiscountsDetails.${index}.costCenterId`}
                  />
                </td>
                <td>
                  <AccountField
                    name={`billDiscountsDetails.${index}.obverseAccountId`}
                    options={[]}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`billDiscountsDetails.${index}.note`}
                  />
                </td>
              </>
            )}

            gridName={"billDiscountsDetails"}
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