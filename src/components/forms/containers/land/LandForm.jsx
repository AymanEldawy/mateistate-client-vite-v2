import { RHFAsyncSelectField, RHFColorPicker, RHFDatePicker, RHFInput, RHFSelectField, RHFTableInput, RHFTextarea } from "../../fields";
import { APARTMENT_FLAT_TYPE, FLAT_PROPERTY_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { LAND_STEPS } from "@/data/constants";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import TableForm from "../../wrapper/TableForm";

const LandForm = ({ tab }) => {

  // todo: rethink this after client feedback
  const LandGeneralFields = (
    <div key="generalFields" className="grid grid-cols-2 gap-x-4 gap-y-4 w-full h-full">
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Basic Information</h5>
      <RHFInput name="name" label="Name" required />
      <RHFInput name="type" label="Type" type="number" />
      <RHFInput name="land_no" label="Land Number" />
      <RHFInput name="last_name" label="Last Name" />
      <RHFInput name="number" label="Number" required />
      <RHFDatePicker name="date" label="Date" type="date" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Location Details</h5>
      <RHFInput name="city" label="City" />
      <RHFInput name="region" label="Region" />
      <RHFInput name="space" label="Space" />
      <RHFInput name="side" label="Side" />
      <RHFInput name="street_count" label="Street Count" type="number" />
      <RHFInput name="street_name" label="Street Name" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Property Details</h5>
      <RHFInput name="area" label="Area" type="number" />
      <RHFInput name="area_unit" label="Area Unit" />
      <RHFInput name="land_type" label="Land Type" type="number" />
      <RHFInput name="landowner" label="Land Owner" type="number" />
      <RHFInput name="buildble" label="Buildable" type="checkbox" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">License Information</h5>
      <RHFInput name="license_no" label="License Number" />
      <RHFInput name="license" label="License" />
      <RHFDatePicker name="license_date" label="License Date" containerClassName="col-span-2" />
      <RHFTextarea name="details" label="Details" containerClassName="col-span-2" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Financial Information</h5>
      <RHFInput name="begin_land_value" label="Begin Land Value" type="number" />
      <RHFAsyncSelectField
        table="currency"
        name="currency_begin_land_id"
        label="Begin Land Currency"
        allowAdd
      />
      <RHFInput name="currency_val_begin_land" label="Currency Value Begin Land" type="number" />
      <RHFAsyncSelectField
        table="cost_center"
        name="begin_land_cost_center_id"
        label="Begin Land Cost Center"
        allowAdd
      />
      <RHFAsyncSelectField
        table="currency"
        name="currency_purchase_id"
        label="Purchase Currency"
        allowAdd
      />
      <RHFInput name="currency_val_purchase" label="Currency Value Purchase" type="number" />
      <RHFInput name="purchase_note" label="Purchase Note" containerClassName="col-span-2" />
      <RHFAsyncSelectField
        table="cost_center"
        name="cost_center_id"
        label="Cost Center"
        allowAdd
      />
      <RHFAsyncSelectField
        table="account"
        name="bank_account_id"
        label="Bank Account"
        allowAdd
      />
      <RHFAsyncSelectField
        table="account"
        name="account_comm_income_id"
        label="Account Comm Income"
        allowAdd
      />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Rental Information</h5>
      <RHFInput name="rent" label="Rent" type="number" />
      <RHFAsyncSelectField
        table="currency"
        name="rent_currency_id"
        label="Rent Currency"
        allowAdd
      />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">References</h5>
      <RHFAsyncSelectField
        table="account"
        name="account_id"
        label="Account"
        allowAdd
      />
      <RHFAsyncSelectField
        table="account"
        name="customer_id"
        label="Customer"
        required
        allowAdd
      />
      <RHFAsyncSelectField
        table="owner"
        name="cuowner_id"
        label="Current Owner"
      />
      <RHFAsyncSelectField
        table="account"
        name="bank_account_id"
        label="Bank Account"
        allowAdd
      />
      <RHFAsyncSelectField
        table="owner"
        name="customer_owner_id"
        label="Customer Owner"
      />
      <RHFAsyncSelectField
        table="owner"
        name="owner_account_id"
        label="Owner Account"
      />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Identity Information</h5>
      <RHFInput name="identity_value" label="Identity Value" type="number" />
      <RHFAsyncSelectField
        table="currency"
        name="currency_identity_id"
        label="Currency Identity"
        allowAdd
      />
      <RHFInput name="currency_valid_entity" label="Currency Valid Entity" type="number" />
      <RHFDatePicker name="identity_begin_date" label="Identity Begin Date" type="date" />
      <RHFDatePicker name="identity_end_date" label="Identity End Date" type="date" />
      <RHFAsyncSelectField
        table="identity_entry"
        name="identity_entry_id"
        label="Identity Entry"
        allowAdd
      />
      <RHFTextarea name="identity_note" label="Identity Note" containerClassName="col-span-2" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">LTN Information</h5>
      <RHFInput name="ltnname" label="LTN Name" />
      <RHFInput name="ltn_land_type" label="LTN Land Type" type="text" />
      <RHFInput name="ltn_city" label="LTN City" type="text" />
      <RHFInput name="ltn_region" label="LTN Region" type="text" />
      <RHFInput name="ltn_space" label="LTN Space" type="text" />
      <RHFInput name="ltn_license" label="LTN License" type="text" />
      <RHFInput name="ltn_side" label="LTN Side" type="text" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Additional Settings</h5>
      <RHFInput name="ban" label="Ban" type="checkbox" />
      <RHFInput name="commission_percent" label="Commission Percent" type="number" />
      <RHFInput name="used_end_date" label="Used End Date" type="checkbox" />
      <RHFInput name="create_entry_investment" label="Create Entry Investment" type="checkbox" />
    </div>
  )

  const LandAccumulateFields = (
    <div key="landAccumulateFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <td>
            <RHFAsyncSelectField
              label="Land"
              table="land"
              name={`land_accumulate.${index}.land_id`}
            />
          </td>
        )}
        gridName={"land_accumulate"}
        headers={[
          "Land",
        ]}
      />
    </div>
  )

  const LandRentalPriceFields = (
    <div key="landRentalPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`land_rental_price.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput name={`land_rental_price.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`land_rental_price.${index}.currency_id`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`land_rental_price.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"land_rental_price"}
        headers={[
          "Date",
          "Price",
          "Currency",
          "Note",
        ]}
      />
    </div>
  )

  const LandSellingPriceFields = (
    <div key="landSellingPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`land_selling_price.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput name={`land_selling_price.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`land_selling_price.${index}.currency_id`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`land_selling_price.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"land_selling_price"}
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
      case LAND_STEPS.land_general:
        return LandGeneralFields
      case LAND_STEPS.land_accumulate:
        return LandAccumulateFields
      case LAND_STEPS.land_rental_price:
        return LandRentalPriceFields
      case LAND_STEPS.land_selling_price:
        return LandSellingPriceFields

    }
  }

  return (
    <div className="p-4 flex flex-col min-h-[400px] max-h-[80vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
      {renderFields()}
    </div>
  )
}

export default LandForm