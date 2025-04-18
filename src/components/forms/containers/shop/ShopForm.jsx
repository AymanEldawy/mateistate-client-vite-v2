import { RHFAsyncSelectField, RHFColorPicker, RHFDatePicker, RHFInput, RHFSelectField, RHFTableAsyncSelect, RHFTableInput, RHFTextarea } from "../../fields";
import { FLAT_PROPERTY_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { SHOP_STEPS } from "@/data/constants";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import TableForm from "../../wrapper/TableForm";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { getSearchBuilding, getSingleBuilding } from "@/services/buildingService";
const ShopForm = ({ tab }) => {

  const ShopGeneralFields = (
    <FormFieldsGridContainer key="generalFields" >
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Location</h5>
      <RHFAsyncSelectField
        table="building"
        name="shop.buildingId"
        label="Building"
        required
        getSearch={getSearchBuilding}
        getSingle={getSingleBuilding}
      />
      <RHFInput name="shop.floorNo" label="Floor Number" />
      <RHFInput name="shop.kind" label="Kind" />
      <RHFInput name="shop.shopNo" label="Shop Number" />
      <RHFTextarea name="shop.description" label="Description" containerClassName="col-span-2" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Details</h5>
      <RHFColorPicker required={false} name="shop.hex" label="Hex" containerClassName="col-span-2" />
      <RHFSelectField
        label="Property Type"
        name="shop.propertyType"
        options={FLAT_PROPERTY_TYPE}
        required={true}
      />
      <RHFAsyncSelectField
        table="property_values"
        name="shop.propertyValuesId"
        label="Property Values"
        allowAdd
      />
      <RHFInput name="shop.area" label="Area" type="number" />
      <RHFInput name="shop.areaUnit" label="Area Unit" />
      <RHFInput name="shop.view" label="View" containerClassName="col-span-2" />
      <RHFInput name="shop.waterMeter" label="Water Meter" />
      <RHFInput name="shop.electricityMeter" label="Electricity Meter" />
      <RHFAsyncSelectField
        table="account"
        name="shop.customerId"
        label="Customer"
      />
      <RHFAsyncSelectField
        table="owner"
        name="shop.customerOwnerId"
        label="Customer Owner"
      />
      <RHFAsyncSelectField
        table="account"
        name="shop.flatOwnerId"
        label="Flat Owner"
      />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Licenses & Documents</h5>
      <RHFInput name="shop.license1" label="License 1" />
      <RHFInput name="shop.license2" label="License 2" />
      <RHFInput name="shop.unifiedNum" label="Unified Number" />
      <RHFInput name="shop.bondType" label="Bond Type" />
      <RHFInput name="shop.bondNo" label="Bond Number" />
      <RHFDatePicker name="shop.bondDate" label="Bond Date" />


      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Cost Centers</h5>
      <RHFAsyncSelectField
        table="cost_center"
        name="shop.mainCostCenterId"
        label="Main Cost Center"
        allowAdd
      />
      <RHFAsyncSelectField
        table="cost_center"
        name="shop.costCenterId"
        label="Cost Center"
        allowAdd
      />

      <RHFTextarea name="shop.note" label="Note" containerClassName="col-span-2" />
    </FormFieldsGridContainer>
  )

  const ShopFixedAssetsFields = (

    <div key="shopRentalPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFTableAsyncSelect name={`shopFixedAssets.${index}.shopId`} label="shopId" />
            </td>
            <td>
              <RHFTableAsyncSelect name={`shopFixedAssets.${index}.assetId`} label="assetId" />
            </td>
            <td>
              <RHFTableInput name={`shopFixedAssets.${index}.value`} label="value" />
            </td>
            <td>
              <RHFTableInput name={`shopFixedAssets.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"shopFixedAssets"}
        headers={[
          "shopId",
          "assetId",
          "value",
          "note",
        ]}
      />
    </div>
  )

  const ShopPicturesFields = (
    <div key="shopPicturesFields" className="grid grid-cols-2 gap-x-4 gap-y-4 ">
      <RHFUploadFilesController name="shopPictures.pictures" accept="image/*" containerClassName="col-span-2" label="Pictures" required />
    </div>
  )

  const ShopAccumulateFields = (
    <div key="shopAccumulateFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <td>
            <RHFAsyncSelectField
              label="shopId"
              table="shop"
              name={`shopAccomulators.${index}.shopId`}
            />
          </td>
        )}
        gridName={"shopAccomulators"}
        headers={[
          "Shop",
        ]}
      />
    </div>
  )

  const ShopRentalPriceFields = (
    <div key="shopRentalPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`shopRentalPrices.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput name={`shopRentalPrices.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`shopRentalPrices.${index}.currencyId`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`shopRentalPrices.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"shopRentalPrices"}
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
    <div key="shopSellingPrices" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`shopSellingPrices.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput name={`shopSellingPrices.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`shopSellingPrices.${index}.currencyId`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`shopSellingPrices.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"shopSellingPrices"}
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
    <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
      {renderFields()}
    </div>
  )
}

export default ShopForm