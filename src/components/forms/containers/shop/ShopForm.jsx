import { SHOP_STEPS } from "@/data/constants";
import { FLAT_PROPERTY_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { useTranslation } from "react-i18next";
import { RHFAsyncSelectField, RHFColorPicker, RHFDatePicker, RHFInput, RHFSelectField, RHFTableAsyncSelect, RHFTableInput, RHFTextarea } from "../../fields";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import BuildingField from "../../global/BuildingField";
import TableForm from "../../wrapper/TableForm";
const ShopForm = ({ tab }) => {
  const { t } = useTranslation();

  const ShopGeneralFields = (
    <div className="grid grid-cols-2 gap-2">
      <BuildingField
        name="shop.buildingId"
        label="building"
        required
      />
      <RHFInput name="shop.floorNo" label="floor_number" />
      <RHFInput name="shop.kind" label="kind" />
      <RHFInput name="shop.shopNo" label="shop_number" />
      <RHFTextarea name="shop.description" label="description" containerClassName="col-span-2" />

      <RHFColorPicker required={false} name="shop.hex" label="hex" />
      <RHFSelectField
        label="property_type"
        name="shop.propertyType"
        options={FLAT_PROPERTY_TYPE}
        required={true}
      />
      <RHFAsyncSelectField
        table="property_values"
        name="shop.propertyValuesId"
        label="property_values"
        allowAdd
      />
      <RHFInput name="shop.area" label="area" type="number" />
      <RHFInput name="shop.areaUnit" label="area_unit" />
      <RHFInput name="shop.view" label="view" />
      <RHFInput name="shop.waterMeter" label="water_meter" />
      <RHFInput name="shop.electricityMeter" label="electricity_meter" />
      <RHFAsyncSelectField
        table="account"
        name="shop.customerId"
        label="customer"
      />
      <RHFAsyncSelectField
        table="owner"
        name="shop.customerOwnerId"
        label="customer_owner"
      />
      <RHFAsyncSelectField
        table="account"
        name="shop.flatOwnerId"
        label="flat_owner"
      />

      <RHFInput name="shop.license1" label="license1" />
      <RHFInput name="shop.license2" label="license2" />
      <RHFInput name="shop.unifiedNum" label="unified_number" />
      <RHFInput name="shop.bondType" label="bond_type" />
      <RHFInput name="shop.bondNo" label="bond_number" />
      <RHFDatePicker name="shop.bondDate" label="bond_date" />


      <RHFAsyncSelectField
        table="cost_center"
        name="shop.mainCostCenterId"
        label="main_cost_center"
        allowAdd
      />
      <RHFAsyncSelectField
        table="cost_center"
        name="shop.costCenterId"
        label="cost_center"
        allowAdd
      />

      <RHFTextarea name="shop.note" label="note" containerClassName="col-span-2" />
    </div>
  )

  const ShopFixedAssetsFields = (

    <div key="shopRentalPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFTableAsyncSelect name={`shopFixedAssets.${index}.shopId`} label="shop_id" />
            </td>
            <td>
              <RHFTableAsyncSelect name={`shopFixedAssets.${index}.assetId`} label="asset_id" />
            </td>
            <td>
              <RHFTableInput name={`shopFixedAssets.${index}.value`} label="value" />
            </td>
            <td>
              <RHFTableInput name={`shopFixedAssets.${index}.note`} label="note" />
            </td>
          </>
        )}
        gridName={"shopFixedAssets"}
        headers={[
          "shop_id",
          "asset_id",
          "value",
          "note",
        ]}
      />
    </div>
  )

  const ShopPicturesFields = (
    <div key="shopPicturesFields" className="grid grid-cols-2 gap-x-4 gap-y-4 ">
      <RHFUploadFilesController name="shopPictures.pictures" accept="image/*" containerClassName="col-span-2" label="pictures" required />
    </div>
  )

  const ShopAccumulateFields = (
    <div key="shopAccumulateFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <td>
            <RHFAsyncSelectField
              label="shop_id"
              table="shop"
              name={`shopAccomulators.${index}.shopId`}
            />
          </td>
        )}
        gridName={"shopAccomulators"}
        headers={[
          "shop_id",
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
              <RHFTableInput name={`shopRentalPrices.${index}.price`} label="price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`shopRentalPrices.${index}.currencyId`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`shopRentalPrices.${index}.note`} label="note" />
            </td>
          </>
        )}
        gridName={"shopRentalPrices"}
        headers={[
          "date",
          "price",
          "currency",
          "note",
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
              <RHFTableInput name={`shopSellingPrices.${index}.price`} label="price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`shopSellingPrices.${index}.currencyId`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`shopSellingPrices.${index}.note`} label="note" />
            </td>
          </>
        )}
        gridName={"shopSellingPrices"}
        headers={[
          "date",
          "price",
          "currency",
          "note",
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
    <div className="p-4 flex flex-col min-h-[400px] overflow-auto max-h-[75vh] min-w-[70%]">
      {renderFields()}
    </div>
  )
}

export default ShopForm