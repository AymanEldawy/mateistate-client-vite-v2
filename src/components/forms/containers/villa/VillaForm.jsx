import { RHFAsyncSelectField, RHFDatePicker, RHFInput, RHFTableInput, RHFTextarea } from "../../fields";
import { VILLA_STEPS } from "@/data/constants";
import TableForm from "../../wrapper/TableForm";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
const VillaForm = ({ tab }) => {

  const VillaGeneralFields = (
    <FormFieldsGridContainer key="generalFields" >
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Basic Information</h5>
      <RHFInput name="complex_name" label="Complex Name" required />
      <RHFInput name="villa_no" label="Villa Number" required />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Location</h5>
      <RHFInput name="emirate" label="Emirate" />
      <RHFInput name="area" label="Area" />
      <RHFInput name="suburb" label="Suburb" />
      <RHFInput name="street" label="Street" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Documentation</h5>
      <RHFInput name="doc_type" label="Document Type" />
      <RHFInput name="doc_no" label="Document Number" />
      <RHFDatePicker name="doc_date" label="Document Date" />
      <RHFInput name="piece_no" label="Piece Number" />
      <RHFInput name="basin_no" label="Basin Number" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Utilities</h5>
      <RHFInput name="water_meter" label="Water Meter" type="number" />
      <RHFInput name="electricity_meter" label="Electricity Meter" type="number" />

      <RHFTextarea name="note" label="Note" containerClassName="col-span-2" />
    </FormFieldsGridContainer>
  )

  const VillaAssetsFields = (
    <FormFieldsGridContainer key="villaAssetsFields" >
      <RHFAsyncSelectField name="assets_id" table="assets" label="Assets" allowAdd />
      <RHFInput name="value" label="Value" type="number" />
      <RHFTextarea name="note" label="Note" containerClassName="col-span-2" />
    </FormFieldsGridContainer>
  )

  const VillaAccountsFields = (
    <FormFieldsGridContainer key="villaAccountsFields" >
      <RHFAsyncSelectField name="villa_account_id" table="account" label="Villa Account" allowAdd />
      <RHFAsyncSelectField name="cost_center_id" table="cost_center" label="Cost Center" allowAdd />
      <RHFAsyncSelectField name="account_bank_villa_id" table="account" label="Bank Account" allowAdd />
      <RHFAsyncSelectField name="cash_account_id" table="account" label="Cash Account" allowAdd />
      <RHFAsyncSelectField name="insurance_account_id" table="account" label="Insurance Account" allowAdd />
      <RHFAsyncSelectField name="lessor_id" table="lessor" label="Lessor" allowAdd />
    </FormFieldsGridContainer>
  )

  const VillaExteriorDetailsFields = (
    <FormFieldsGridContainer key="villaExteriorDetailsFields" >
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Wall Details</h5>
      <RHFInput name="wall" label="Wall" />
      <RHFInput name="wall_state" label="Wall State" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Lighting & Parking</h5>
      <RHFInput name="lighting_count" label="Lighting Count" type="number" />
      <RHFInput name="parking_count" label="Parking Count" type="number" />
      <RHFInput name="parking_area" label="Parking Area" />
      <RHFInput name="parking_shaded" label="Parking Shaded" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Pool Information</h5>
      <RHFInput name="pool_count" label="Pool Count" type="number" />
      <RHFInput name="pool_state" label="Pool State" />
      <RHFInput name="pool_system" label="Pool System" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Playground & Garden</h5>
      <RHFInput name="play_ground_count" label="Playground Count" type="number" />
      <RHFInput name="play_ground_area" label="Playground Area" />
      <RHFInput name="garden_count" label="Garden Count" type="number" />
      <RHFInput name="garden_area" label="Garden Area" />
      <RHFInput name="garden_state" label="Garden State" />
    </FormFieldsGridContainer>
  )

  const VillaInteriorDetailsFields = (
    <FormFieldsGridContainer key="villaInteriorDetailsFields" >
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Room Information</h5>
      <RHFInput name="room_state" label="Room State" />
      <RHFInput name="room_count" label="Room Count" type="number" />
      <RHFInput name="service_room_count" label="Service Room Count" type="number" />
      <RHFInput name="bath_room_count" label="Bathroom Count" type="number" />
      <RHFInput name="other_room_count" label="Other Room Count" type="number" />
      <RHFInput name="balcony_count" label="Balcony Count" type="number" />
      <RHFInput name="floor_count" label="Floor Count" />
      <RHFInput name="stairs_internal" label="Internal Stairs" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Area Details</h5>
      <RHFInput name="area_unit" label="Area Unit" containerClassName="col-span-2" />
      <RHFInput name="land_area" label="Land Area" />
      <RHFInput name="land_area_building" label="Building Area" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Property Status</h5>
      <RHFInput name="finishing_state" label="Finishing State" containerClassName="col-span-2" />
      <RHFInput name="security_system" label="Security System" />
      <RHFInput name="security_type" label="Security Type" type="number" />
    </FormFieldsGridContainer>
  )

  const VillaRentalPriceFields = (
    <div key="villaRentalPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`villa_rental_price.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput name={`villa_rental_price.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`villa_rental_price.${index}.currency_id`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`villa_rental_price.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"villa_rental_price"}
        headers={[
          "Date",
          "Price",
          "Currency",
          "Note",
        ]}
      />
    </div>
  )

  const VillaSellingPriceFields = (
    <div key="villaSellingPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`villa_selling_price.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput name={`villa_selling_price.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`villa_selling_price.${index}.currency_id`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`villa_selling_price.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"villa_selling_price"}
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
      case VILLA_STEPS.villa_general:
        return VillaGeneralFields
      case VILLA_STEPS.villa_accounts:
        return VillaAccountsFields
      case VILLA_STEPS.villa_assets:
        return VillaAssetsFields
      case VILLA_STEPS.villa_exterior_details:
        return VillaExteriorDetailsFields
      case VILLA_STEPS.villa_interior_details:
        return VillaInteriorDetailsFields
      case VILLA_STEPS.villa_rental_price:
        return VillaRentalPriceFields
      case VILLA_STEPS.villa_selling_price:
        return VillaSellingPriceFields

    }
  }

  return (
    <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
      {renderFields()}
    </div>
  )
}

export default VillaForm