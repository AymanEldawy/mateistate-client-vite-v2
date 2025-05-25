import { RHFAsyncSelectField, RHFColorPicker, RHFDatePicker, RHFInput, RHFSelectField, RHFTableInput, RHFTextarea } from "../../fields";
import { APARTMENT_FLAT_TYPE, FLAT_PROPERTY_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { APARTMENT_STEPS } from "@/data/constants";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import TableForm from "../../wrapper/TableForm";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { getSearchBuilding, getSingleBuilding } from './../../../../services/buildingService';
import { getSearchCostCenter, getSingleCostCenter } from "@/services/CostCenterService";
import { getSearchApartment, getSingleApartment } from "@/services/apartmentService";

const ApartmentForm = ({ tab }) => {

  const ApartmentGeneralFields = (
    <div className="grid grid-cols-2 gap-4">
      <RHFAsyncSelectField
        table="building"
        name="apartment.buildingId"
        label="Building"
        required
        getSearch={getSearchBuilding}
        getSingle={getSingleBuilding}
      />
      <RHFInput name="apartment.floorNo" label="Floor Number" />
      <RHFSelectField
        label="Apartment Kind"
        name="apartment.apartmentKind"
        options={APARTMENT_FLAT_TYPE}
        required={true}
      />
      <RHFInput name="apartment.apartmentNo" label="Apartment Number" required />
      <RHFTextarea name="apartment.description" label="Description" containerClassName="col-span-2" />
      <RHFInput name="apartment.category" label="Category" />
      <RHFInput name="apartment.kind" label="Kind" />
      <RHFSelectField
        label="Property Type"
        name="apartment.propertyType"
        options={FLAT_PROPERTY_TYPE}
        required={true}
      />
      <RHFAsyncSelectField
        table="property_values"
        name="apartment.propertyValuesId"
        label="Property Values"
        allowAdd
      />
      <RHFColorPicker name="apartment.hex" label="Hex" />
      <RHFInput name="apartment.area" label="Area" type="number" />
      <RHFInput name="apartment.areaUnit" label="Area Unit" />
      <RHFInput name="apartment.view" label="View" />
      <RHFInput name="apartment.bathroomCount" label="Bathroom Count" type="number" />
      <RHFInput name="apartment.balconyCount" label="Balcony Count" type="number" />
      <RHFInput name="apartment.roomCount" label="Room Count" type="number" />
      <RHFInput name="apartment.water_meter" label="Water Meter" type="text" />
      <RHFInput name="apartment.electricityMeter" label="Electricity Meter" type="text" />
      <RHFInput name="apartment.statement" label="Statement" type="text" />
      <RHFAsyncSelectField
        table="cost_center"
        name="apartment.mainCostCenterId"
        label="Main Cost Center"
        allowAdd
        getSearch={getSearchCostCenter}
        getSingle={getSingleCostCenter}
      />
      <RHFAsyncSelectField
        table="cost_center"
        name="apartment.costCenterId"
        label="Cost Center"
        allowAdd
        getSearch={getSearchCostCenter}
        getSingle={getSingleCostCenter}
      />
      {/* // todo replace this with currency field group */}
      <RHFAsyncSelectField
        table="currency"
        name="apartment.costCurrencyId"
        label="Cost Currency"
        allowAdd
      />
      <RHFInput name="apartment.costPrice" label="Cost Price" type="number" />
      <RHFInput name="apartment.amountPaid" label="Amount Paid" type="number" />
      {/* // todo add this fields in another way */}
      {/* <RHFInput name="apartment.xIndex" label="X Index" type="number" required />
      <RHFInput name="apartment.yIndex" label="Y Index" type="number" required /> */}
      <RHFTextarea name="apartment.note" label="Note" containerClassName="col-span-2" />
    </div>
  )

  const ApartmentPicturesFields = (
    <div key="apartmentPicturesFields" className="grid grid-cols-2 gap-x-4 gap-y-4 ">
      <RHFUploadFilesController name="pictures" accept="image/*" containerClassName="col-span-2" label="Pictures" required />
    </div>
  )

  const ApartmentAccumulateFields = (

    <TableForm
      renderFields={(item, index) => (
        <td>
          <RHFAsyncSelectField
            label="apartmentId"
            table="apartment"
            name={`apartmentAccumulators.${index}.apartmentId`}
            getSearch={getSearchApartment}
            getSingle={getSingleApartment}
          />
        </td>
      )}
      gridName={"apartmentAccumulators"}
      headers={[
        "apartmentId",
      ]}
    />
  )

  const ApartmentRentalPriceFields = (
    <TableForm
      renderFields={(item, index) => (
        <>
          <td>
            <RHFDatePicker name={`apartmentRentalPrices.${index}.date`} type="date" />
          </td>
          <td>
            <RHFTableInput name={`apartmentRentalPrices.${index}.price`} label="Price" type="number" />
          </td>
          <td>
            <RHFAsyncSelectField name={`apartmentRentalPrices.${index}.currencyId`} table="currency" allowAdd />
          </td>
          <td>
            <RHFTableInput name={`apartmentRentalPrices.${index}.note`} label="Note" />
          </td>
        </>
      )}
      gridName={"apartmentRentalPrices"}
      headers={[
        "Date",
        "Price",
        "Currency",
        "Note",
      ]}
    />
  )

  const ApartmentSellingPriceFields = (
    <TableForm
      renderFields={(item, index) => (
        <>
          <td>
            <RHFDatePicker name={`apartmentSellingPrices.${index}.date`} type="date" />
          </td>
          <td>
            <RHFTableInput name={`apartmentSellingPrices.${index}.price`} label="Price" type="number" />
          </td>
          <td>
            <RHFAsyncSelectField name={`apartmentSellingPrices.${index}.currencyId`} table="currency" allowAdd />
          </td>
          <td>
            <RHFTableInput name={`apartmentSellingPrices.${index}.note`} label="Note" />
          </td>
        </>
      )}
      gridName={"apartmentSellingPrices"}
      headers={[
        "Date",
        "Price",
        "Currency",
        "Note",
      ]}
    />
  )

  const renderFields = () => {
    switch (tab) {
      case APARTMENT_STEPS.apartment_general:
        return ApartmentGeneralFields
      case APARTMENT_STEPS.apartment_pictures:
        return ApartmentPicturesFields
      case APARTMENT_STEPS.apartment_accumulate:
        return ApartmentAccumulateFields
      case APARTMENT_STEPS.apartment_rental_price:
        return ApartmentRentalPriceFields
      case APARTMENT_STEPS.apartment_selling_price:
        return ApartmentSellingPriceFields

    }
  }

  return (
    <div className="flex flex-col min-h-[400px] max-h-[75vh] overflow-auto min-w-[700px]">
      {renderFields()}
    </div>
  )
}

export default ApartmentForm