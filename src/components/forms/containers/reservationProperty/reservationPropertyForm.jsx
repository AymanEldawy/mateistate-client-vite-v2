import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { RHFAsyncSelectField, RHFCheckbox, RHFDatePicker, RHFInput, RHFSelectField, RHFTextarea } from "../../fields";
import { CONTACT_PATTERN_ASSETS_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { useFormContext } from "react-hook-form";
const ReservationPropertyForm = () => {
    const { watch } = useFormContext();

    return (
        <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
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
                    name="reservation_expired"
                    label="Reservation Expired"
                    containerClassName="col-span-2"
                />

                <RHFCheckbox
                    name="has_payment"
                    label="Has Payment"
                    containerClassName="col-span-2"
                />

                {watch("has_payment") && (
                    <div className="col-span-2 border dark:border-dark-border bg-gray-50 dark:bg-dark-bg p-4 rounded-xl mt-8 relative">
                        <div className="absolute -top-5 ltr:left-6 rtl:right-6 flex items-center gap-4">
                            <h3 className="text-lg font-semibold border dark:border-dark-border rounded-xl min-w-[140px] text-center bg-gray-100 dark:bg-dark-bg px-4 py-2 text-blue-500">
                                Payment
                            </h3>
                        </div>
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mt-4">
                            <RHFInput
                                name="payment_amount"
                                label="Payment Amount"
                                type="number"
                            />

                            <RHFAsyncSelectField
                                name="currency_id"
                                label="Currency"
                                Table="currency"
                                allowAdd
                            />

                            <RHFAsyncSelectField
                                name="debit_account_id"
                                label="Debit Account"
                                Table="account"
                                allowAdd
                            />

                            <RHFAsyncSelectField
                                name="credit_account_id"
                                label="Credit Account"
                                Table="account"
                                allowAdd
                            />

                            <RHFAsyncSelectField
                                name="debit_cost_center_id"
                                label="Debit Cost Center"
                                Table="cost_center"
                                allowAdd
                            />

                            <RHFAsyncSelectField
                                name="credit_cost_center_id"
                                label="Credit Cost Center"
                                Table="cost_center"
                                allowAdd
                            />

                            <RHFTextarea
                                name="note"
                                label="Note"
                                containerClassName="col-span-2"
                            />
                        </div>
                    </div>
                )}

            </FormFieldsGridContainer>

        </div>
    )
}

export default ReservationPropertyForm