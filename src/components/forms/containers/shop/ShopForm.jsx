import { RHFAsyncSelectField, RHFColorPicker, RHFDatePicker, RHFInput, RHFSelectField, RHFTableInput, RHFTextarea } from "../../fields";
import { FLAT_PROPERTY_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { SHOP_STEPS } from "@/data/constants";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import TableForm from "../../wrapper/TableForm";

const ShopForm = ({ tab }) => {

  const ShopGeneralFields = (
    <div key="generalFields" className="grid grid-cols-2 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw] w-full h-full">
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Location</h5>
      <RHFAsyncSelectField
        table="building"
        name="building_id"
        label="Building"
        required
      />
      <RHFInput name="floor_no" label="Floor Number" />
      <RHFInput name="kind" label="Kind" />
      <RHFInput name="shop_no" label="Shop Number" />
      <RHFTextarea name="description" label="Description" containerClassName="col-span-2" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Details</h5>
      <RHFColorPicker required={false} name="hex" label="Hex" containerClassName="col-span-2" />
      <RHFSelectField
        label="Property Type"
        name="property_type"
        options={FLAT_PROPERTY_TYPE}
        required={true}
      />
      <RHFAsyncSelectField
        table="property_values"
        name="property_values_id"
        label="Property Values"
        allowAdd
      />
      <RHFInput name="area" label="Area" type="number" />
      <RHFInput name="area_unit" label="Area Unit" />
      <RHFInput name="view" label="View" containerClassName="col-span-2" />
      <RHFInput name="water_meter" label="Water Meter" />
      <RHFInput name="electricity_meter" label="Electricity Meter" />
      <RHFAsyncSelectField
        table="account"
        name="customer_id"
        label="Customer"
      />
      <RHFAsyncSelectField
        table="owner"
        name="customer_owner_id"
        label="Customer Owner"
      />
      <RHFAsyncSelectField
        table="account"
        name="flat_owner_id"
        label="Flat Owner"
      />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Licenses & Documents</h5>
      <RHFInput name="license1" label="License 1" />
      <RHFInput name="license2" label="License 2" />
      <RHFInput name="unified_num" label="Unified Number" />
      <RHFInput name="bond_type" label="Bond Type" />
      <RHFInput name="bond_no" label="Bond Number" />
      <RHFDatePicker name="bond_date" label="Bond Date" />


      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Cost Centers</h5>
      <RHFAsyncSelectField
        table="cost_center"
        name="main_cost_center_id"
        label="Main Cost Center"
        allowAdd
      />
      <RHFAsyncSelectField
        table="cost_center"
        name="cost_center_id"
        label="Cost Center"
        allowAdd
      />

      <RHFTextarea name="note" label="Note" containerClassName="col-span-2" />
    </div>
  )

  const ShopFixedAssetsFields = (
    <div key="ShopFixedAssetsFields" className="grid grid-cols-2 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw]">
      <RHFAsyncSelectField label="Shop" name="shop_id" table="shop" containerClassName="col-span-2" />
      <RHFAsyncSelectField label="Asset" name="asset_id" table="asset" containerClassName="col-span-2" />
      <RHFInput name="value" label="Value" type="number" containerClassName="col-span-2" />
      <RHFTextarea name="note" label="Note" containerClassName="col-span-2" />
    </div>
  )

  const ShopPicturesFields = (
    <div key="shopPicturesFields" className="grid grid-cols-2 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw]">
      <RHFUploadFilesController name="pictures" accept="image/*" containerClassName="col-span-2" label="Pictures" required />
    </div>
  )

  const ShopAccumulateFields = (
    <div key="shopAccumulateFields" className="grid grid-cols-1 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw]">
      <TableForm
        renderFields={(item, index) => (
          <td>
            <RHFAsyncSelectField
              label="shop_id"
              table="shop"
              name={`shop_accumulate.${index}.shop_id`}
            />
          </td>
        )}
        gridName={"shop_accumulate"}
        headers={[
          "Shop",
        ]}
      />
    </div>
  )

  const ShopRentalPriceFields = (
    <div key="shopRentalPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw]">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`shop_rental_price.${index}.date`} label="Date" type="date" />
            </td>
            <td>
              <RHFTableInput name={`shop_rental_price.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`shop_rental_price.${index}.currency_id`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`shop_rental_price.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"shop_rental_price"}
        headers={[
          "Date",
          "Price",
          "Currency",
          "Note",
        ]}
      />
    </div>
  )

  const ShopSellingPriceFields = (
    <div key="shopSellingPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw]">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`shop_selling_price.${index}.date`} label="Date" type="date" />
            </td>
            <td>
              <RHFTableInput name={`shop_selling_price.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`shop_selling_price.${index}.currency_id`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`shop_selling_price.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"shop_selling_price"}
        headers={[
          "Date",
          "Price",
          "Currency",
          "Note",
        ]}
      />
    </div>
  )

  const renderFields = () => {
    switch (tab) {
      case SHOP_STEPS.shop_general:
        return ShopGeneralFields
      case SHOP_STEPS.shop_fixed_assets:
        return ShopFixedAssetsFields
      case SHOP_STEPS.shop_pictures:
        return ShopPicturesFields
      case SHOP_STEPS.shop_accumulate:
        return ShopAccumulateFields
      case SHOP_STEPS.shop_rental_price:
        return ShopRentalPriceFields
      case SHOP_STEPS.shop_selling_price:
        return ShopSellingPriceFields

    }
  }

  return (
    <div className="p-4 flex flex-col min-h-[400px] max-h-[80vh] overflow-x-hidden overflow-y-scroll">
      {renderFields()}
    </div>
  )
}

export default ShopForm