import { RHFAsyncSelectField, RHFColorPicker, RHFDatePicker, RHFInput, RHFSelectField, RHFTableInput, RHFTextarea } from "../../fields";
import { APARTMENT_FLAT_TYPE, FLAT_PROPERTY_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { APARTMENT_STEPS } from "@/data/constants";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import TableForm from "../../wrapper/TableForm";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";

const ApartmentForm = ({ tab }) => {

  const ApartmentGeneralFields = (
    <FormFieldsGridContainer key="generalFields" >
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Location</h5>
      <RHFAsyncSelectField
        table="building"
        name="apartment.buildingId"
        label="Building"
        required
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
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Details</h5>
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
      <RHFColorPicker required={false} name="apartment.hex" label="Hex" containerClassName="col-span-2" />
      <RHFInput name="apartment.area" label="Area" type="number" />
      <RHFInput name="apartment.areaUnit" label="Area Unit" />
      <RHFInput name="apartment.view" label="View" containerClassName="col-span-2" />
      <RHFInput name="apartment.bathroomCount" label="Bathroom Count" type="number" />
      <RHFInput name="apartment.balconyCount" label="Balcony Count" type="number" />
      <RHFInput name="apartment.roomCount" label="Room Count" type="number" />
      <RHFInput name="apartment.water_meter" label="Water Meter" type="text" />
      <RHFInput name="apartment.electricityMeter" label="Electricity Meter" type="text" />
      <RHFInput name="apartment.statement" label="Statement" type="text" />
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Cost</h5>
      <RHFAsyncSelectField
        table="cost_center"
        name="apartment.mainCostCenterId"
        label="Main Cost Center"
        allowAdd
      />
      <RHFAsyncSelectField
        table="cost_center"
        name="apartment.costCenterId"
        label="Cost Center"
        allowAdd
      />
      {/* // todo replace this with currency field group */}
      <RHFAsyncSelectField
        table="currency"
        name="apartment.costCurrencyId"
        label="Cost Currency"
        allowAdd
      />
      <RHFInput name="apartment.costPrice" label="Cost Price" type="number" />
      <RHFInput name="apartment.amountPaid" label="Amount Paid" type="number" containerClassName="col-span-2" />
      {/* // todo add this fields in another way */}
      {/* <RHFInput name="apartment.xIndex" label="X Index" type="number" required />
      <RHFInput name="apartment.yIndex" label="Y Index" type="number" required /> */}
      <RHFTextarea name="apartment.note" label="Note" containerClassName="col-span-2" />
    </FormFieldsGridContainer>
  )

  const ApartmentPicturesFields = (
    <div key="apartmentPicturesFields" className="grid grid-cols-2 gap-x-4 gap-y-4 ">
      <RHFUploadFilesController name="pictures" accept="image/*" containerClassName="col-span-2" label="Pictures" required />
    </div>
  )

  const ApartmentAccumulateFields = (
    <div key="apartmentAccumulateFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <td>
            <RHFAsyncSelectField
              label="apartmentId"
              table="apartment"
              name={`apartmentAccumulators.${index}.apartmentId`}
            />
          </td>
        )}
        gridName={"apartmentAccumulators"}
        headers={[
          "apartmentId",
        ]}
      />
    </div>
  )

  const ApartmentRentalPriceFields = (
    <div key="apartmentRentalPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
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
    </div>
  )

  const ApartmentSellingPriceFields = (
    <div key="apartmentSellingPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
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
    </div>
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
    <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
      {renderFields()}
    </div>
  )
}

export default ApartmentForm