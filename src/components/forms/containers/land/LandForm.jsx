import { RHFAsyncSelectField, RHFDatePicker, RHFInput, RHFTableInput, RHFTextarea } from "../../fields";
import { LAND_STEPS } from "@/data/constants";
import TableForm from "../../wrapper/TableForm";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { useTranslation } from "react-i18next";
const LandForm = ({ tab }) => {
  const { t } = useTranslation();
  // todo: rethink this after client feedback
  const LandGeneralFields = (
    <FormFieldsGridContainer key="generalFields" >
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">{t('basic_information')}</h5>
      <RHFInput name="name" label="name" required />
      <RHFInput name="type" label="type" type="number" />
      <RHFInput name="landNo" label="land_number" />
      <RHFInput name="lastName" label="last_name" />
      <RHFInput name="number" label="number" required />
      <RHFDatePicker name="date" label="date" type="date" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">{t('location_details')}</h5>
      <RHFInput name="city" label="city" />
      <RHFInput name="region" label="region" />
      <RHFInput name="space" label="space" />
      <RHFInput name="side" label="side" />
      <RHFInput name="streetCount" label="street_count" type="number" />
      <RHFInput name="streetName" label="street_name" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">{t('property_details')}</h5>
      <RHFInput name="area" label="area" type="number" />
      <RHFInput name="areaUnit" label="area_unit" />
      <RHFInput name="landType" label="land_type" type="number" />
      <RHFInput name="landowner" label="land_owner" type="number" />
      <RHFInput name="buildble" label="buildable" type="checkbox" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">{t('license_information')}</h5>
      <RHFInput name="licenseNo" label="license_number" />
      <RHFInput name="license" label="license" />
      <RHFDatePicker name="licenseDate" label="license_date" containerClassName="col-span-2" />
      <RHFTextarea name="details" label="details" containerClassName="col-span-2" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">{t('financial_information')}</h5>
      <RHFInput name="beginLandValue" label="begin_land_value" type="number" />
      <RHFAsyncSelectField
        table="currency"
        name="currencyBeginLandId"
        label="begin_land_currency"
        allowAdd
      />
      <RHFInput name="currencyValBeginLand" label="currency_value_begin_land" type="number" />
      <RHFAsyncSelectField
        table="cost_center"
        name="beginLandCostCenterId"
        label="begin_land_cost_center"
        allowAdd
      />
      <RHFAsyncSelectField
        table="currency"
        name="currencyPurchaseId"
        label="purchase_currency"
        allowAdd
      />
      <RHFInput name="currencyValPurchase" label="currency_value_purchase" type="number" />
      <RHFInput name="purchaseNote" label="purchase_note" containerClassName="col-span-2" />
      <RHFAsyncSelectField
        table="cost_center"
        name="costCenterId"
        label="cost_center"
        allowAdd
      />
      <RHFAsyncSelectField
        table="account"
        name="bankAccountId"
        label="bank_account"
        allowAdd
      />
      <RHFAsyncSelectField
        table="account"
        name="accountCommIncomeId"
        label="account_comm_income"
        allowAdd
      />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">{t('rental_information')}</h5>
      <RHFInput name="rent" label="rent" type="number" />
      <RHFAsyncSelectField
        table="currency"
        name="rentCurrencyId"
        label="rent_currency"
        allowAdd
      />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">{t('references')}</h5>
      <RHFAsyncSelectField
        table="account"
        name="accountId"
        label="account_id"
        allowAdd
      />
      <RHFAsyncSelectField
        table="account"
        name="customerId"
        label="customer_id"
        required
        allowAdd
      />
      <RHFAsyncSelectField
        table="owner"
        name="currentOwnerId"
        label="current_owner_id"
      />
      <RHFAsyncSelectField
        table="account"
        name="bankAccountId"
        label="bank_account_id"
        allowAdd
      />
      <RHFAsyncSelectField
        table="owner"
        name="customerOwnerId"
        label="customer_owner_id"
      />
      <RHFAsyncSelectField
        table="owner"
        name="ownerAccountId"
        label="owner_account_id"
      />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Identity Information</h5>
      <RHFInput name="identityValue" label="Identity Value" type="number" />
      <RHFAsyncSelectField
        table="currency"
        name="currencyIdentityId"
        label="currency_identity_id"
        allowAdd
      />
      <RHFInput name="currencyValidEntity" label="currency_valid_entity" type="number" />
      <RHFDatePicker name="identityBeginDate" label="identity_begin_date" type="date" />
      <RHFDatePicker name="identityEndDate" label="identity_end_date" type="date" />
      <RHFAsyncSelectField
        table="identity_entry"
        name="identityEntryId"
        label="identity_entry_id"
        allowAdd
      />
      <RHFTextarea name="identityNote" label="identity_note" containerClassName="col-span-2" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">LTN Information</h5>
      <RHFInput name="ltnname" label="ltn_name" />
      <RHFInput name="ltnLandType" label="ltn_land_type" type="text" />
      <RHFInput name="ltnCity" label="ltn_city" type="text" />
      <RHFInput name="ltnRegion" label="ltn_region" type="text" />
      <RHFInput name="ltnSpace" label="ltn_space" type="text" />
      <RHFInput name="ltnLicense" label="ltn_license" type="text" />
      <RHFInput name="ltnSide" label="ltn_side" type="text" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Additional Settings</h5>
      <RHFInput name="ban" label="ban" type="checkbox" />
      <RHFInput name="commissionPercent" label="commission_percent" type="number" />
      <RHFInput name="usedEndDate" label="used_end_date" type="checkbox" />
      <RHFInput name="createEntryInvestment" label="create_entry_investment" type="checkbox" />
    </FormFieldsGridContainer>
  )

  const LandAccumulateFields = (
    <div key="landAccumulateFields" className="grid grid-cols-1 gap-x-4 gap-y-4">
      <TableForm
        renderFields={(item, index) => (
          <td>
            <RHFAsyncSelectField
              label="land_id"
              table="land"
              name={`landAccumulates.${index}.landId`}
            />
          </td>
        )}
        gridName={"landAccumulates"}
        headers={[
          "land_id",
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
              <RHFTableInput name={`landRentalPrices.${index}.price`} label="price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`landRentalPrices.${index}.currencyId`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`landRentalPrices.${index}.note`} label="note" />
            </td>
          </>
        )}
        gridName={"landRentalPrices"}
        headers={[
          "date",
          "price",
          "currency",
          "note",
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
              <RHFTableInput name={`landSellingPrices.${index}.price`} label="price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`landSellingPrices.${index}.currencyId`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`landSellingPrices.${index}.note`} label="note" />
            </td>
          </>
        )}
        gridName={"landSellingPrices"}
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