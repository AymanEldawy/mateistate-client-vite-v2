import { RHFAsyncSelectField, RHFColorPicker, RHFDatePicker, RHFInput, RHFSelectField, RHFTableInput, RHFTextarea } from "../../fields";
import { FLAT_PROPERTY_TYPE, PARKING_KIND_TYPE } from "@/helpers/DEFAULT_OPTIONS";
import { PARKING_STEPS } from "@/data/constants";
import RHFUploadFilesController from "../../fields/RHFUploadFiles";
import TableForm from "../../wrapper/TableForm";

const CurrencyForm = () => {

    return (
        <div className="p-4 flex flex-col min-h-[400px] max-h-[80vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
            <div key="generalFields" className="grid grid-cols-2 gap-x-4 gap-y-4  w-full h-full">
                <h5 className="col-span-2 text-lg font-bold text-primary border-b border-primary pb-2 mb-0">Currency Details</h5>
                <RHFInput
                    name="name"
                    label="Name"
                    required
                />
                <RHFInput
                    name="ltnname"
                    label="Latin Name"
                />
                <RHFInput
                    name="code"
                    label="Code"
                />
                <RHFInput
                    name="rate"
                    label="Rate"
                    type="number"
                />
            </div>
        </div>
    )
}

export default CurrencyForm