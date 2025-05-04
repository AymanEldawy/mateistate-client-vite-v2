import { RHFAsyncSelectField, RHFDatePicker, RHFInput, RHFTableInput, RHFTextarea } from "../../fields";
import { LAND_STEPS } from "@/data/constants";
import TableForm from "../../wrapper/TableForm";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";

const LandForm = ({ tab }) => {

  // todo: rethink this after client feedback
  const LandGeneralFields = (
    <FormFieldsGridContainer key="generalFields" >
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Basic Information</h5>
      <RHFInput name="name" label="Name" required />
      <RHFInput name="type" label="Type" type="number" />
      <RHFInput name="landNo" label="Land Number" />
      <RHFInput name="lastName" label="Last Name" />
      <RHFInput name="number" label="Number" required />
      <RHFDatePicker name="date" label="Date" type="date" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Location Details</h5>
      <RHFInput name="city" label="City" />
      <RHFInput name="region" label="Region" />
      <RHFInput name="space" label="Space" />
      <RHFInput name="side" label="Side" />
      <RHFInput name="streetCount" label="Street Count" type="number" />
      <RHFInput name="streetName" label="Street Name" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Property Details</h5>
      <RHFInput name="area" label="Area" type="number" />
      <RHFInput name="areaUnit" label="Area Unit" />
      <RHFInput name="landType" label="Land Type" type="number" />
      <RHFInput name="landowner" label="Land Owner" type="number" />
      <RHFInput name="buildble" label="Buildable" type="checkbox" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">License Information</h5>
      <RHFInput name="licenseNo" label="License Number" />
      <RHFInput name="license" label="License" />
      <RHFDatePicker name="licenseDate" label="License Date" containerClassName="col-span-2" />
      <RHFTextarea name="details" label="Details" containerClassName="col-span-2" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Financial Information</h5>
      <RHFInput name="beginLandValue" label="Begin Land Value" type="number" />
      <RHFAsyncSelectField
        table="currency"
        name="currencyBeginLandId"
        label="Begin Land Currency"
        allowAdd
      />
      <RHFInput name="currencyValBeginLand" label="Currency Value Begin Land" type="number" />
      <RHFAsyncSelectField
        table="cost_center"
        name="beginLandCostCenterId"
        label="Begin Land Cost Center"
        allowAdd
      />
      <RHFAsyncSelectField
        table="currency"
        name="currencyPurchaseId"
        label="Purchase Currency"
        allowAdd
      />
      <RHFInput name="currencyValPurchase" label="Currency Value Purchase" type="number" />
      <RHFInput name="purchaseNote" label="Purchase Note" containerClassName="col-span-2" />
      <RHFAsyncSelectField
        table="cost_center"
        name="costCenterId"
        label="Cost Center"
        allowAdd
      />
      <RHFAsyncSelectField
        table="account"
        name="bankAccountId"
        label="Bank Account"
        allowAdd
      />
      <RHFAsyncSelectField
        table="account"
        name="accountCommIncomeId"
        label="Account Comm Income"
        allowAdd
      />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Rental Information</h5>
      <RHFInput name="rent" label="Rent" type="number" />
      <RHFAsyncSelectField
        table="currency"
        name="rentCurrencyId"
        label="Rent Currency"
        allowAdd
      />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">References</h5>
      <RHFAsyncSelectField
        table="account"
        name="accountId"
        label="Account"
        allowAdd
      />
      <RHFAsyncSelectField
        table="account"
        name="customerId"
        label="Customer"
        required
        allowAdd
      />
      <RHFAsyncSelectField
        table="owner"
        name="cuownerId"
        label="Current Owner"
      />
      <RHFAsyncSelectField
        table="account"
        name="bankAccountId"
        label="Bank Account"
        allowAdd
      />
      <RHFAsyncSelectField
        table="owner"
        name="customerOwnerId"
        label="Customer Owner"
      />
      <RHFAsyncSelectField
        table="owner"
        name="ownerAccountId"
        label="Owner Account"
      />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Identity Information</h5>
      <RHFInput name="identityValue" label="Identity Value" type="number" />
      <RHFAsyncSelectField
        table="currency"
        name="currencyIdentityId"
        label="Currency Identity"
        allowAdd
      />
      <RHFInput name="currencyValidEntity" label="Currency Valid Entity" type="number" />
      <RHFDatePicker name="identityBeginDate" label="Identity Begin Date" type="date" />
      <RHFDatePicker name="identityEndDate" label="Identity End Date" type="date" />
      <RHFAsyncSelectField
        table="identity_entry"
        name="identityEntryId"
        label="Identity Entry"
        allowAdd
      />
      <RHFTextarea name="identityNote" label="Identity Note" containerClassName="col-span-2" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">LTN Information</h5>
      <RHFInput name="ltnname" label="LTN Name" />
      <RHFInput name="ltnLandType" label="LTN Land Type" type="text" />
      <RHFInput name="ltnCity" label="LTN City" type="text" />
      <RHFInput name="ltnRegion" label="LTN Region" type="text" />
      <RHFInput name="ltnSpace" label="LTN Space" type="text" />
      <RHFInput name="ltnLicense" label="LTN License" type="text" />
      <RHFInput name="ltnSide" label="LTN Side" type="text" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Additional Settings</h5>
      <RHFInput name="ban" label="Ban" type="checkbox" />
      <RHFInput name="commissionPercent" label="Commission Percent" type="number" />
      <RHFInput name="usedEndDate" label="Used End Date" type="checkbox" />
      <RHFInput name="createEntryInvestment" label="Create Entry Investment" type="checkbox" />
    </FormFieldsGridContainer>
  )

  const LandAccumulateFields = (
    <div key="landAccumulateFields" className="grid grid-cols-1 gap-x-4 gap-y-4">
      <TableForm
        renderFields={(item, index) => (
          <td>
            <RHFAsyncSelectField
              label="Land"
              table="land"
              name={`landAccumulates.${index}.landId`}
            />
          </td>
        )}
        gridName={"landAccumulates"}
        headers={[
          "Land",
        ]}
      />
    </div>
  )

  const LandRentalPriceFields = (
    <div key="landRentalPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`landRentalPrices.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput name={`landRentalPrices.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`landRentalPrices.${index}.currencyId`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`landRentalPrices.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"landRentalPrices"}
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
    <div key="landSellingPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`landSellingPrices.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput name={`landSellingPrices.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`landSellingPrices.${index}.currencyId`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`landSellingPrices.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"landSellingPrices"}
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
    <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
      {renderFields()}
    </div>
  )
}

export default LandForm