import { PARKING_STEPS } from "@/data/constants";
import {
  FLAT_PROPERTY_TYPE,
  PARKING_KIND_TYPE,
} from "@/helpers/DEFAULT_OPTIONS";
import {
  getSearchCostCenter,
  getSingleCostCenter,
} from "@/services/CostCenterService";
import { getSearchParking, getSingleParking } from "@/services/parkingService";
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
import { AccountLeaveField } from "../../global";
import BuildingField from "../../global/BuildingField";
import CostCenterField from "../../global/CostCenterField";
import TableForm from "../../wrapper/TableForm";

const ParkingForm = ({ tab }) => {
  const { t } = useTranslation();

  const ParkingGeneralFields = (
    <div className="grid grid-cols-2 gap-2">
      <RHFSelectField
        label="parking_kind"
        name="parking.parkingKind"
        options={PARKING_KIND_TYPE}
        required
      />
      <RHFInput name="parking.parkingNo" label="parking_number" />
      <BuildingField name="parking.buildingId" label="building" required />
      <RHFInput name="parking.floorNo" label="floor_number" />
      <RHFInput name="parking.area" label="area" />
      <RHFInput name="parking.areaUnit" label="area_unit" />
      <RHFTextarea
        name="parking.description"
        label="description"
        containerClassName="col-span-2"
      />

      <RHFColorPicker name="parking.hex" label="hex" />
      <AccountLeaveField
        name="parking.customerId"
        label="customer"
        allowAdd
        // containerClassName="col-span-2"
      />
      <RHFSelectField
        label="property_type"
        name="parking.propertyType"
        options={FLAT_PROPERTY_TYPE}
      />
      <RHFAsyncSelectField
        table="property_values"
        name="parking.propertyValuesId"
        label="property_values"
      />
      <RHFInput name="parking.view" label="view" />

      <CostCenterField
        name="parking.mainCostCenterId"
        label="main_cost_center"
        allowAdd
        getSearch={getSearchCostCenter}
        getSingle={getSingleCostCenter}
      />
      <CostCenterField
        name="parking.costCenterId"
        label="cost_center"
        allowAdd
        getSearch={getSearchCostCenter}
        getSingle={getSingleCostCenter}
      />
      <RHFDatePicker name="parking.purchaseDate" label="purchase_date" />
      <AccountLeaveField
        name="parking.flatOwnerId"
        label="flat_owner"
        allowAdd
      />
      <RHFTextarea
        name="parking.note"
        label="note"
        containerClassName="col-span-2"
      />
    </div>
  );
  const ParkingPicturesFields = (
    <div
      key="parkingPicturesFields"
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

  const ParkingAccumulateFields = (
    <div
      key="parkingAccumulateFields"
      className="grid grid-cols-1 gap-x-4 gap-y-4 "
    >
      <TableForm
        renderFields={(item, index) => (
          <td>
            <RHFAsyncSelectField
              table="parking"
              name={`accumulates.${index}.mainParkingId`}
              getSearch={getSearchParking}
              getSingle={getSingleParking}
            />
          </td>
        )}
        gridName={"accumulates"}
        headers={["parking"]}
      />
    </div>
  );

  const ParkingRentalPriceFields = (
    <div
      key="parkingRentalPriceFields"
      className="grid grid-cols-1 gap-x-4 gap-y-4 "
    >
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`rentalPrices.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput
                name={`rentalPrices.${index}.price`}
                label="price"
                type="number"
              />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`rentalPrices.${index}.currencyId`}
                table="currency"
                allowAdd
              />
            </td>
            <td>
              <RHFTableInput name={`rentalPrices.${index}.note`} label="note" />
            </td>
          </>
        )}
        gridName={"rentalPrices"}
        headers={["date", "price", "currency", "note"]}
      />
    </div>
  );

  const ParkingSellingPriceFields = (
    <div
      key="parkingSellingPriceFields"
      className="grid grid-cols-1 gap-x-4 gap-y-4 "
    >
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`sellingPrices.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput
                name={`sellingPrices.${index}.price`}
                label="price"
                type="number"
              />
            </td>
            <td>
              <RHFAsyncSelectField
                name={`sellingPrices.${index}.currencyId`}
                table="currency"
                allowAdd
              />
            </td>
            <td>
              <RHFTableInput
                name={`sellingPrices.${index}.note`}
                label="note"
              />
            </td>
          </>
        )}
        gridName={"sellingPrices"}
        headers={["date", "price", "currency", "note"]}
      />
    </div>
  );

  const renderFields = () => {
    switch (tab) {
      case PARKING_STEPS.parking_general:
        return ParkingGeneralFields;
      case PARKING_STEPS.parking_pictures:
        return ParkingPicturesFields;
      case PARKING_STEPS.parking_accumulate:
        return ParkingAccumulateFields;
      case PARKING_STEPS.parking_rental_price:
        return ParkingRentalPriceFields;
      case PARKING_STEPS.parking_selling_price:
        return ParkingSellingPriceFields;
    }
  };

  return (
    <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-auto min-w-[70%]">
      {renderFields()}
    </div>
  );
};

export default ParkingForm;
