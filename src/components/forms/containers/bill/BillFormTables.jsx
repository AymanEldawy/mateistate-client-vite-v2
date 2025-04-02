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
            // rowsCount={watch("bill_material_details")?.length}
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
                    name={`bill_material_details.${index}.material_id`}
                    options={[]}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`bill_material_details.${index}.unit`}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`bill_material_details.${index}.quantity`}
                    type="number"
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`bill_material_details.${index}.unit_price`}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`bill_material_details.${index}.vat_percentage`}
                    type="number"

                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`bill_material_details.${index}.vat_amount`}
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`bill_material_details.${index}.total_price`}
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`bill_material_details.${index}.net`}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`bill_material_details.${index}.note`}
                  />
                </td>
              </>
            )}

            gridName={"bill_material_details"}
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
                    name={`bill_discounts_details.${index}.account_id`}
                    options={[]}
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`bill_discounts_details.${index}.discount`}
                  />
                </td>
                <td>
                  <RHFInputAmount
                    name={`bill_discounts_details.${index}.extra`}
                  />
                </td>
                <td>
                  <RHFAsyncSelectField
                    name={`bill_discounts_details.${index}.cost_center_id`}
                  />
                </td>
                <td>
                  <AccountField
                    name={`bill_discounts_details.${index}.obverse_account_id`}
                    options={[]}
                  />
                </td>
                <td>
                  <RHFInput
                    name={`bill_discounts_details.${index}.note`}
                  />
                </td>
              </>
            )}

            gridName={"bill_discounts_details"}
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