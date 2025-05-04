import { RHFAsyncSelectField, RHFColorPicker, RHFDatePicker, RHFInput, RHFSelectField, RHFTableInput, RHFTextarea } from "../../fields";
import { FLAT_PROPERTY_TYPE, PARKING_KIND_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { PARKING_STEPS } from "@/data/constants";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import TableForm from "../../wrapper/TableForm";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { getSearchBuilding, getSingleBuilding } from "@/services/buildingService";
import { getSearchCostCenter, getSingleCostCenter } from "@/services/CostCenterService";
import { getSearchParking, getSingleParking } from "@/services/parkingService";

const ParkingForm = ({ tab }) => {

  const ParkingGeneralFields = (
    <FormFieldsGridContainer key="generalFields" >
      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Location</h5>
      <RHFSelectField
        label="Parking Kind"
        name="parking.parkingKind"
        options={PARKING_KIND_TYPE}
        required
      />
      <RHFInput name="parking.parkingNo" label="Parking Number" />
      <RHFAsyncSelectField
        table="building"
        name="parking.buildingId"
        label="Building"
        required
        getSearch={getSearchBuilding}
        getSingle={getSingleBuilding}
      />
      <RHFInput name="parking.floorNo" label="Floor Number" />
      <RHFInput name="parking.area" label="Area" />
      <RHFInput name="parking.areaUnit" label="Area Unit" />
      <RHFTextarea name="parking.description" label="Description" containerClassName="col-span-2" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Details</h5>
      <RHFColorPicker name="parking.hex" label="Hex" />
      <RHFAsyncSelectField
        table="account"
        name="parking.customerId"
        label="Customer"
        allowAdd
        containerClassName="col-span-2"
      />
      <RHFSelectField
        label="Property Type"
        name="parking.propertyType"
        options={FLAT_PROPERTY_TYPE}
      />
      <RHFAsyncSelectField
        table="property_values"
        name="parking.propertyValuesId"
        label="Property Values"
      />
      <RHFInput name="parking.view" label="View" containerClassName="col-span-2" />

      <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Cost</h5>
      <RHFAsyncSelectField
        table="cost_center"
        name="parking.mainCostCenterId"
        label="Main Cost Center"
        allowAdd
        getSearch={getSearchCostCenter}
        getSingle={getSingleCostCenter}
      />
      <RHFAsyncSelectField
        table="cost_center"
        name="parking.costCenterId"
        label="Cost Center"
        allowAdd
        getSearch={getSearchCostCenter}
        getSingle={getSingleCostCenter}
      />
      <RHFDatePicker
        name="parking.purchaseDate"
        label="Purchase Date"
      />
      <RHFAsyncSelectField
        table="account"
        name="parking.flatOwnerId"
        label="Flat Owner"
        allowAdd
      />
      <RHFTextarea name="parking.note" label="Note" containerClassName="col-span-2" />
    </FormFieldsGridContainer>
  )
  const ParkingPicturesFields = (
    <div key="parkingPicturesFields" className="grid grid-cols-2 gap-x-4 gap-y-4 ">
      <RHFUploadFilesController name="pictures" accept="image/*" containerClassName="col-span-2" label="Pictures" required />
    </div>
  )

  const ParkingAccumulateFields = (
    <div key="parkingAccumulateFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
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
        headers={[
          "parking",
        ]}
      />
    </div>
  )

  const ParkingRentalPriceFields = (
    <div key="parkingRentalPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`rentalPrices.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput name={`rentalPrices.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`rentalPrices.${index}.currencyId`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`rentalPrices.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"rentalPrices"}
        headers={[
          "Date",
          "Price",
          "Currency",
          "Note",
        ]}
      />
    </div>
  )

  const ParkingSellingPriceFields = (
    <div key="parkingSellingPriceFields" className="grid grid-cols-1 gap-x-4 gap-y-4 ">
      <TableForm
        renderFields={(item, index) => (
          <>
            <td>
              <RHFDatePicker name={`sellingPrices.${index}.date`} type="date" />
            </td>
            <td>
              <RHFTableInput name={`sellingPrices.${index}.price`} label="Price" type="number" />
            </td>
            <td>
              <RHFAsyncSelectField name={`sellingPrices.${index}.currencyId`} table="currency" allowAdd />
            </td>
            <td>
              <RHFTableInput name={`sellingPrices.${index}.note`} label="Note" />
            </td>
          </>
        )}
        gridName={"sellingPrices"}
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
      case PARKING_STEPS.parking_general:
        return ParkingGeneralFields
      case PARKING_STEPS.parking_pictures:
        return ParkingPicturesFields
      case PARKING_STEPS.parking_accumulate:
        return ParkingAccumulateFields
      case PARKING_STEPS.parking_rental_price:
        return ParkingRentalPriceFields
      case PARKING_STEPS.parking_selling_price:
        return ParkingSellingPriceFields

    }
  }

  return (
    <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
      {renderFields()}
    </div>
  )
}

export default ParkingForm