import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { RHFAsyncSelectField, RHFCheckbox, RHFDatePicker, RHFInput, RHFSelectField } from "../../fields";
import { CONTACT_PATTERN_ASSETS_TYPE } from "@/helpers/DEFAULT_OPTIONS";

const ReservationPropertyForm = () => {

    return (
        <div className="p-4 flex flex-col min-h-[400px] max-h-[80vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
            <FormFieldsGridContainer key="generalFields">
                <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">General Information</h5>
                <RHFDatePicker
                    name="created_at"
                    label="Date"
                />
                <RHFAsyncSelectField
                    name="account"
                    label="Account"
                    Table="account"
                    required
                    allowAdd
                />
                <RHFAsyncSelectField
                    name="building_id"
                    label="Building"
                    Table="building"
                    required
                    containerClassName="col-span-2"
                />
                <RHFSelectField
                    name="property_type"
                    label="Property Type"
                    options={CONTACT_PATTERN_ASSETS_TYPE}
                />
                <RHFInput
                    name="property_id"
                    label="Property ID"
                    type="text"
                    required
                />

                <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Booking Details</h5>
                <RHFDatePicker
                    name="book_date"
                    label="Book Date"
                />
                <RHFDatePicker
                    name="end_book_date"
                    label="End Book Date"
                />

                <RHFCheckbox
                    name="has_payment"
                    label="Has Payment"
                    containerClassName="col-span-2"
                />
                <RHFCheckbox
                    name="reservation_expired"
                    label="Reservation Expired"
                    containerClassName="col-span-2"
                />
            </FormFieldsGridContainer>

        </div>
    )
}

export default ReservationPropertyForm