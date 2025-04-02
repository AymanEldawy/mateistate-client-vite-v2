import { RHFAsyncSelectField, RHFColorPicker, RHFDatePicker, RHFInput, RHFSelectField, RHFTableInput, RHFTextarea } from "../../fields";
import { FLAT_PROPERTY_TYPE, PARKING_KIND_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { PARKING_STEPS } from "@/data/constants";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import TableForm from "../../wrapper/TableForm";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";

const ParkingForm = ({ tab }) => {

    const ParkingGeneralFields = (
        <FormFieldsGridContainer key="generalFields" >
            <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Location</h5>
            <RHFSelectField
                label="Parking Kind"
                name="parking_kind"
                options={PARKING_KIND_TYPE}
                required
            />
            <RHFInput name="parking_no" label="Parking Number" />
            <RHFAsyncSelectField
                table="building"
                name="building_id"
                label="Building"
                required
            />
            <RHFInput name="floor_no" label="Floor Number" />
            <RHFInput name="area" label="Area" />
            <RHFInput name="area_unit" label="Area Unit" />
            <RHFTextarea name="description" label="Description" containerClassName="col-span-2" />

            <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Details</h5>
            <RHFColorPicker name="hex" label="Hex" />
            <RHFAsyncSelectField
                table="account"
                name="customer_id"
                label="Customer"
                allowAdd
                containerClassName="col-span-2"
            />
            <RHFSelectField
                label="Property Type"
                name="property_type"
                options={FLAT_PROPERTY_TYPE}
            />
            <RHFAsyncSelectField
                table="property_values"
                name="property_values_id"
                label="Property Values"
            />
            <RHFInput name="view" label="View" containerClassName="col-span-2" />

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
            <RHFDatePicker
                name="purchase_date"
                label="Purchase Date"
            />
            <RHFAsyncSelectField
                table="account"
                name="flat_owner_id"
                label="Flat Owner"
                allowAdd
            />
            <RHFTextarea name="note" label="Note" containerClassName="col-span-2" />
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
                            name={`parking_accumulate.${index}.parking_id`}
                        />
                    </td>
                )}
                gridName={"parking_accumulate"}
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
                            <RHFDatePicker name={`parking_rental_price.${index}.date`} type="date" />
                        </td>
                        <td>
                            <RHFTableInput name={`parking_rental_price.${index}.price`} label="Price" type="number" />
                        </td>
                        <td>
                            <RHFAsyncSelectField name={`parking_rental_price.${index}.currency_id`} table="currency" allowAdd />
                        </td>
                        <td>
                            <RHFTableInput name={`parking_rental_price.${index}.note`} label="Note" />
                        </td>
                    </>
                )}
                gridName={"parking_rental_price"}
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
                            <RHFDatePicker name={`parking_selling_price.${index}.date`} type="date" />
                        </td>
                        <td>
                            <RHFTableInput name={`parking_selling_price.${index}.price`} label="Price" type="number" />
                        </td>
                        <td>
                            <RHFAsyncSelectField name={`parking_selling_price.${index}.currency_id`} table="currency" allowAdd />
                        </td>
                        <td>
                            <RHFTableInput name={`parking_selling_price.${index}.note`} label="Note" />
                        </td>
                    </>
                )}
                gridName={"parking_selling_price"}
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