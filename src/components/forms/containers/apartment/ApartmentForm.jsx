import { APARTMENT_STEPS } from "@/data/constants";
import {
  APARTMENT_FLAT_TYPE,
  FLAT_PROPERTY_TYPE,
} from "@/helpers/DEFAULT_OPTIONS";
import {
  getSearchCostCenter,
  getSingleCostCenter,
} from "@/services/CostCenterService";
import {
  getSearchApartment,
  getSingleApartment,
} from "@/services/apartmentService";
import { useTranslation } from "react-i18next";
import {
  RHFAsyncSelectField,
  RHFColorPicker,
  RHFDatePicker,
  RHFInput,
  RHFSelectField,
  RHFTableInput,
  RHFTextarea,
} from "../../fields";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import BuildingField from "../../global/BuildingField";
import CostCenterField from "../../global/CostCenterField";
import TableForm from "../../wrapper/TableForm";

const ApartmentForm = ({ tab }) => {
  const { t } = useTranslation();
  const ApartmentGeneralFields = (
    <div className="grid grid-cols-2 gap-4">
      <BuildingField name="apartment.buildingId" label="building_id" required />
      <RHFInput name="apartment.floorNo" label="floor_number" />
      <RHFSelectField
        label="apartment_kind"
        name="apartment.apartmentKind"
        options={APARTMENT_FLAT_TYPE}
        required={true}
      />
      <RHFInput
        name="apartment.apartmentNo"
        label="apartment_number"
        required
      />
      <RHFTextarea
        name="apartment.description"
        label="description"
        containerClassName="col-span-2"
      />
      <RHFInput name="apartment.category" label="category" />
      <RHFInput name="apartment.kind" label="kind" />
      <RHFSelectField
        label="property_type"
        name="apartment.propertyType"
        options={FLAT_PROPERTY_TYPE}
        required={true}
      />
      <RHFAsyncSelectField
        table="property_values"
        name="apartment.propertyValuesId"
        label="property_values"
        allowAdd
      />
      <RHFColorPicker name="apartment.hex" label="hex" />
      <RHFInput name="apartment.area" label="area" type="number" />
      <RHFInput name="apartment.areaUnit" label="area_unit" />
      <RHFInput name="apartment.view" label="view" />
      <RHFInput
        name="apartment.bathroomCount"
        label="bathroom_count"
        type="number"
      />
      <RHFInput
        name="apartment.balconyCount"
        label="balcony_count"
        type="number"
      />
      <RHFInput name="apartment.roomCount" label="room_count" type="number" />
      <RHFInput name="apartment.water_meter" label="water_meter" type="text" />
      <RHFInput
        name="apartment.electricityMeter"
        label="electricity_meter"
        type="text"
      />
      <RHFInput name="apartment.statement" label="statement" type="text" />
      <CostCenterField
        name="apartment.mainCostCenterId"
        label="main_cost_center"
        allowAdd
        getSearch={getSearchCostCenter}
        getSingle={getSingleCostCenter}
      />
      <CostCenterField
        name="apartment.costCenterId"
        label="cost_center"
        allowAdd
        getSearch={getSearchCostCenter}
        getSingle={getSingleCostCenter}
      />
      {/* // todo replace this with currency field group */}
      <RHFAsyncSelectField
        table="currency"
        name="apartment.costCurrencyId"
        label="cost_currency"
        allowAdd
      />
      <RHFInput name="apartment.costPrice" label="cost_price" type="number" />
      <RHFInput name="apartment.amountPaid" label="amount_paid" type="number" />
      {/* // todo add this fields in another way */}
      {/* <RHFInput name="apartment.xIndex" label="X Index" type="number" required />
      <RHFInput name="apartment.yIndex" label="Y Index" type="number" required /> */}
      <RHFTextarea
        name="apartment.note"
        label="note"
        containerClassName="col-span-2"
      />
    </div>
  );

  const ApartmentPicturesFields = (
    <div
      key="apartmentPicturesFields"
      className="grid grid-cols-2 gap-x-4 gap-y-4 "
    >
      <RHFUploadFilesController
        name="pictures"
        accept="image/*"
        containerClassName="col-span-2"
        label="pictures"
        required
      />
    </div>
  );

  const ApartmentAccumulateFields = (
    <TableForm
      renderFields={(item, index) => (
        <td>
          <RHFAsyncSelectField
            label="apartment_id"
            table="apartment"
            name={`apartmentAccumulators.${index}.apartmentId`}
            getSearch={getSearchApartment}
            getSingle={getSingleApartment}
          />
        </td>
      )}
      gridName={"apartmentAccumulators"}
      headers={["apartment_id"]}
    />
  );

  const ApartmentRentalPriceFields = (
    <TableForm
      renderFields={(item, index) => (
        <>
          <td>
            <RHFDatePicker
              name={`apartmentRentalPrices.${index}.date`}
              type="date"
            />
          </td>
          <td>
            <RHFTableInput
              name={`apartmentRentalPrices.${index}.price`}
              label="price"
              type="number"
            />
          </td>
          <td>
            <RHFAsyncSelectField
              name={`apartmentRentalPrices.${index}.currencyId`}
              table="currency"
              allowAdd
            />
          </td>
          <td>
            <RHFTableInput
              name={`apartmentRentalPrices.${index}.note`}
              label="note"
            />
          </td>
        </>
      )}
      gridName={"apartmentRentalPrices"}
      headers={["date", "price", "currency", "note"]}
    />
  );

  const ApartmentSellingPriceFields = (
    <TableForm
      renderFields={(item, index) => (
        <>
          <td>
            <RHFDatePicker
              name={`apartmentSellingPrices.${index}.date`}
              type="date"
            />
          </td>
          <td>
            <RHFTableInput
              name={`apartmentSellingPrices.${index}.price`}
              label="price"
              type="number"
            />
          </td>
          <td>
            <RHFAsyncSelectField
              name={`apartmentSellingPrices.${index}.currencyId`}
              table="currency"
              allowAdd
            />
          </td>
          <td>
            <RHFTableInput
              name={`apartmentSellingPrices.${index}.note`}
              label="note"
            />
          </td>
        </>
      )}
      gridName={"apartmentSellingPrices"}
      headers={["date", "price", "currency", "note"]}
    />
  );

  const renderFields = () => {
    switch (tab) {
      case APARTMENT_STEPS.apartment_general:
        return ApartmentGeneralFields;
      case APARTMENT_STEPS.apartment_pictures:
        return ApartmentPicturesFields;
      case APARTMENT_STEPS.apartment_accumulate:
        return ApartmentAccumulateFields;
      case APARTMENT_STEPS.apartment_rental_price:
        return ApartmentRentalPriceFields;
      case APARTMENT_STEPS.apartment_selling_price:
        return ApartmentSellingPriceFields;
    }
  };

  return (
    <div className="flex flex-col min-h-[400px] max-h-[75vh] overflow-auto ">
      {renderFields()}
    </div>
  );
};

export default ApartmentForm;
