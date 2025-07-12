import { LAND_STEPS } from "@/data/constants";
import { useTranslation } from "react-i18next";
import {
  RHFAsyncSelectField,
  RHFDatePicker,
  RHFInput,
  RHFTableInput,
  RHFTextarea,
} from "../../fields";
import { AccountLeaveField } from "../../global";
import CostCenterField from "../../global/CostCenterField";
import UserField from "../../global/UserField";
import TableForm from "../../wrapper/TableForm";
const LandForm = ({ tab }) => {
  const { t } = useTranslation();
  // todo: rethink this after client feedback
  const LandGeneralFields = (
    <div className="grid grid-cols-2 gap-2">
      <RHFInput name="name" label="name" required />
      {/* <RHFInput name="type" label="Type" type="number" /> */}
      <RHFInput name="landNo" label="land_number" />
      <RHFInput name="lastName" label="last_name" />
      <RHFInput name="number" label="number" required />
      <RHFDatePicker name="date" label="date" type="date" />
      <RHFInput name="city" label="city" />
      <RHFInput name="region" label="region" />
      <RHFInput name="space" label="space" />
      <RHFInput name="side" label="side" />
      <RHFInput name="streetCount" label="street_count" type="number" />
      <RHFInput name="streetName" label="street_name" />

      <RHFInput name="area" label="area" type="number" />
      <RHFInput name="areaUnit" label="area_unit" />
      <RHFInput name="landType" label="land_type" type="number" />
      <RHFInput name="landowner" label="land_owner" type="number" />
      <RHFInput name="buildble" label="buildable" type="checkbox" />

      <RHFInput name="licenseNo" label="license_number" />
      <RHFInput name="license" label="license" />
      <RHFDatePicker
        name="licenseDate"
        label="license_date"
        containerClassName="col-span-2"
      />
      <RHFTextarea
        name="details"
        label="details"
        containerClassName="col-span-2"
      />

      <RHFInput name="beginLandValue" label="begin_land_value" type="number" />
      <RHFAsyncSelectField
        table="currency"
        name="currencyBeginLandId"
        label="begin_land_currency"
        allowAdd
      />
      <RHFInput
        name="currencyValBeginLand"
        label="currency_value_begin_land"
        type="number"
      />
      <CostCenterField
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
      <RHFInput
        name="currencyValPurchase"
        label="currency_value_purchase"
        type="number"
      />
      <RHFInput
        name="purchaseNote"
        label="purchase_note"
        containerClassName="col-span-2"
      />
      <CostCenterField name="costCenterId" label="cost_center" allowAdd />
      <AccountLeaveField name="bankAccountId" label="bank_account" allowAdd />
      <AccountLeaveField
        name="accountCommIncomeId"
        label="account_comm_income"
        allowAdd
      />

      <RHFInput name="rent" label="Rent" type="number" />
      <AccountLeaveField
        table="currency"
        name="rentCurrencyId"
        label="rent_currency"
        allowAdd
      />

      <AccountLeaveField name="accountId" label="account_id" allowAdd />
      <UserField
        table="user"
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
      <AccountLeaveField
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

      <RHFInput name="identityValue" label="Identity Value" type="number" />
      <RHFAsyncSelectField
        table="currency"
        name="currencyIdentityId"
        label="currency_identity_id"
        allowAdd
      />
      <RHFInput
        name="currencyValidEntity"
        label="currency_valid_entity"
        type="number"
      />
      <RHFDatePicker
        name="identityBeginDate"
        label="identity_begin_date"
        type="date"
      />
      <RHFDatePicker
        name="identityEndDate"
        label="identity_end_date"
        type="date"
      />
      <RHFAsyncSelectField
        table="identity_entry"
        name="identityEntryId"
        label="identity_entry_id"
        allowAdd
      />
      <RHFTextarea
        name="identityNote"
        label="identity_note"
        containerClassName="col-span-2"
      />

      <RHFInput name="ltnname" label="LTN Name" />
      <RHFInput name="ltnLandType" label="LTN Land Type" type="text" />
      <RHFInput name="ltnCity" label="LTN City" type="text" />
      <RHFInput name="ltnRegion" label="LTN Region" type="text" />
      <RHFInput name="ltnSpace" label="LTN Space" type="text" />
      <RHFInput name="ltnLicense" label="LTN License" type="text" />
      <RHFInput name="ltnSide" label="LTN Side" type="text" />

      <RHFInput name="ban" label="Ban" type="checkbox" />
      <RHFInput
        name="commissionPercent"
        label="Commission Percent"
        type="number"
      />
      <RHFInput name="usedEndDate" label="Used End Date" type="checkbox" />
      <RHFInput
        name="createEntryInvestment"
        label="Create Entry Investment"
        type="checkbox"
      />
    </div>
  );

  const LandAccumulateFields = (
    <div
      key="landAccumulateFields"
      className="grid grid-cols-1 gap-x-4 gap-y-4"
    >
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
        headers={["land_id"]}
      />
    </div>
  );

  const LandRentalPriceFields = (
    <div
      key="landRentalPriceFields"
      className="grid grid-cols-1 gap-x-4 gap-y-4"
    >
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker
                name={`landRentalPrices.${index}.date`}
                type="date"
              />
            </td>
            <td>
              <RHFTableInput
                name={`landRentalPrices.${index}.price`}
                label="price"
                type="number"
              />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`landRentalPrices.${index}.currencyId`}
                table="currency"
                allowAdd
              />
            </td>
            <td>
              <RHFTableInput
                name={`landRentalPrices.${index}.note`}
                label="note"
              />
            </td>
          </>
        )}
        gridName={"landRentalPrices"}
        headers={["date", "price", "currency", "note"]}
      />
    </div>
  );

  const LandSellingPriceFields = (
    <div
      key="landSellingPriceFields"
      className="grid grid-cols-1 gap-x-4 gap-y-4"
    >
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker
                name={`landSellingPrices.${index}.date`}
                type="date"
              />
            </td>
            <td>
              <RHFTableInput
                name={`landSellingPrices.${index}.price`}
                label="price"
                type="number"
              />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`landSellingPrices.${index}.currencyId`}
                table="currency"
                allowAdd
              />
            </td>
            <td>
              <RHFTableInput
                name={`landSellingPrices.${index}.note`}
                label="note"
              />
            </td>
          </>
        )}
        gridName={"landSellingPrices"}
        headers={["date", "price", "currency", "note"]}
      />
    </div>
  );

  const renderFields = () => {
    switch (tab) {
      case LAND_STEPS.land_general:
        return LandGeneralFields;
      case LAND_STEPS.land_accumulate:
        return LandAccumulateFields;
      case LAND_STEPS.land_rental_price:
        return LandRentalPriceFields;
      case LAND_STEPS.land_selling_price:
        return LandSellingPriceFields;
    }
  };

  return (
    <div className="p-4 flex flex-col min-h-[400px] max-h-[70lvh] overflow-auto ">
      {renderFields()}
    </div>
  );
};

export default LandForm;
