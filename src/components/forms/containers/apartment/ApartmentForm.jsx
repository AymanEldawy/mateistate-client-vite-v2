import { RHFAsyncSelectField, RHFColorPicker, RHFDatePicker, RHFInput, RHFSelectField, RHFTableAsyncSelect, RHFTableInput, RHFTextarea } from "../../fields";
import { APARTMENT_FLAT_TYPE, FLAT_PROPERTY_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { APARTMENT_STEPS } from "@/data/constants";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import TableForm from "../../wrapper/TableForm";

const ApartmentForm = ({ tab }) => {

  const ApartmentGeneralFields = (
    <div key="generalFields" className="grid grid-cols-2 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw] w-full h-full">
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Location</h5>
      <RHFAsyncSelectField
        table="building"
        name="building_id"
        label="Building"
        required
      />
      <RHFInput name="floor_no" label="Floor Number" />
      <RHFSelectField
        label="Apartment Kind"
        name="apartment_kind"
        options={APARTMENT_FLAT_TYPE}
        required={true}
      />
      <RHFInput name="apartment_no" label="Apartment Number" required />
      <RHFTextarea name="description" label="Description" containerClassName="col-span-2" />
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Details</h5>
      <RHFInput name="category" label="Category" />
      <RHFInput name="kind" label="Kind" />
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
      <RHFColorPicker required={false} name="hex" label="Hex" containerClassName="col-span-2" />
      <RHFInput name="area" label="Area" type="number" />
      <RHFInput name="area_unit" label="Area Unit" />
      <RHFInput name="view" label="View" containerClassName="col-span-2" />
      <RHFInput name="bathroom_count" label="Bathroom Count" type="number" />
      <RHFInput name="balcony_count" label="Balcony Count" type="number" />
      <RHFInput name="room_count" label="Room Count" type="number" />
      <RHFInput name="water_meter" label="Water Meter" type="text" />
      <RHFInput name="electricity_meter" label="Electricity Meter" type="text" />
      <RHFInput name="statement" label="Statement" type="text" />
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Cost</h5>
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
      {/* // todo replace this with currency field group */}
      <RHFAsyncSelectField
        table="currency"
        name="cost_currency_id"
        label="Cost Currency"
        allowAdd
      />
      <RHFInput name="cost_price" label="Cost Price" type="number" />
      <RHFInput name="amount_paid" label="Amount Paid" type="number" containerClassName="col-span-2" />
      {/* // todo add this fields in another way */}
      {/* <RHFInput name="x_index" label="X Index" type="number" required />
      <RHFInput name="y_index" label="Y Index" type="number" required /> */}
      <RHFTextarea name="note" label="Note" containerClassName="col-span-2" />
    </div>
  )
  const ApartmentPropertyValuesFields = (
    <div key="propertyValuesFields" className="grid grid-cols-2 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw]">
      <RHFColorPicker required={false} name="hex" label="Hex" />
      <RHFInput name="unit_count" label="Unit Count" type="number" />
      <RHFSelectField label="Property Type" name="property_type" options={FLAT_PROPERTY_TYPE} containerClassName="col-span-2" />
      <RHFInput name="area" label="Area" type="number" />
      <RHFInput name="view" label="View" />
      <RHFTextarea name="description" label="Description" containerClassName="col-span-2" />
    </div>
  )

  const ApartmentPicturesFields = (
    <div key="apartmentPicturesFields" className="grid grid-cols-2 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw]">
      <RHFUploadFilesController name="pictures" accept="image/*" containerClassName="col-span-2" label="Pictures" required />
    </div>
  )

  const ApartmentAccumulateFields = (
    <div key="apartmentAccumulateFields" className="grid grid-cols-1 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw]">
      <TableForm
        renderFields={(item, index) => (
          <td>
            <RHFTableAsyncSelect
              label="apartment_id"
              table="apartment"
              name={`apartment_accumulate.${index}.apartment_id`}
            />
          </td>
        )}
        gridName={"apartment_accumulate"}
        headers={[
          "apartment_id",
        ]}
      />
    </div>
  )

  const ApartmentRentalPriceFields = (
    <div key="apartmentRentalPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw]">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`apartment_rental_price.${index}.date`} label="Date" type="date" />
            </td>
            <td>
              <RHFTableInput name={`apartment_rental_price.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFTableAsyncSelect name={`apartment_rental_price.${index}.currency_id`} label="Currency" table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`apartment_rental_price.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"apartment_rental_price"}
        headers={[
          "date",
          "price",
          "currency_id",
          "note",
        ]}
      />
    </div>
  )

  const ApartmentSellingPriceFields = (
    <div key="apartmentSellingPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 lg:w-[60vw] md:w-[90vw]">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`apartment_selling_price.${index}.date`} label="Date" type="date" />
            </td>
            <td>
              <RHFTableInput name={`apartment_selling_price.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFTableAsyncSelect name={`apartment_selling_price.${index}.currency_id`} label="Currency" table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`apartment_selling_price.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"apartment_selling_price"}
        headers={[
          "date",
          "price",
          "currency_id",
          "note",
        ]}
      />
    </div>
  )

  const renderFields = () => {
    switch (tab) {
      case APARTMENT_STEPS.apartment_general:
        return ApartmentGeneralFields
      case APARTMENT_STEPS.property_values:
        return ApartmentPropertyValuesFields
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
    <div className="p-4 flex flex-col min-h-[400px] max-h-[80vh] overflow-x-hidden overflow-y-scroll">
      {renderFields()}
    </div>
  )
}

export default ApartmentForm