import { SERVICE_STATUS, UNIT_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { RHFAsyncSelectField, RHFDatePicker, RHFInput, RHFSelectField } from "../../fields";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { UNIQUE_REF_TABLES } from "@/data/constants";
import { useFormContext } from "react-hook-form";
const ServiceForm = () => {
    const { watch } = useFormContext();

    const renderTable = () => {
        switch (watch("unit_type")) {
            case UNIT_TYPE.APARTMENT_ASSET_TYPE_CODE:
                return "apartment";
            case UNIT_TYPE.PARKING_ASSET_TYPE_CODE:
                return "parking";
            case UNIT_TYPE.SHOP_ASSET_TYPE_CODE:
                return "shop";
            case UNIT_TYPE.LAND_ASSET_TYPE_CODE:
                return "land";
            case UNIT_TYPE.VILLA_ASSET_TYPE_CODE:
                return "villa";
        }
    }

    return (
        <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
            <FormFieldsGridContainer key="generalFields">
                <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Reference</h5>

                <RHFSelectField
                    name="unit_type"
                    label="Unit Type"
                    options={UNIT_TYPE}
                />

                <RHFAsyncSelectField
                    name="unit_id"
                    label="Unit"
                    table={renderTable()}
                />

                <RHFAsyncSelectField
                    name="building_id"
                    label="Building"
                    table="building"
                    refCol="id"
                    containerClassName="col-span-2"
                />

                <RHFAsyncSelectField
                    name="owner_account_id"
                    label="Owner Account"
                    table={UNIQUE_REF_TABLES.suppliers}
                />

                <RHFAsyncSelectField
                    name="supervisor_user_id"
                    label="Supervisor"
                    table={UNIQUE_REF_TABLES.supervisor}
                />

                <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Details</h5>

                <RHFDatePicker
                    name="start_date"
                    label="Start Date"
                />
                <RHFDatePicker
                    name="end_date"
                    label="End Date"
                />

                <RHFInput
                    name="payment_method"
                    label="Payment Method"
                    type="number"
                    containerClassName="col-span-2"
                />

                <RHFInput
                    name="total"
                    label="Total"
                    type="number"
                    containerClassName="col-span-2"
                />

                <RHFSelectField
                    name="status"
                    label="Status"
                    options={SERVICE_STATUS}
                    containerClassName="col-span-2"
                />


            </FormFieldsGridContainer>
        </div>
    )
}

export default ServiceForm