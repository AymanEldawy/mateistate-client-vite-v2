import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
import { RHFInput } from "../../fields";

const CurrencyForm = () => {

    return (
        <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
            <FormFieldsGridContainer key="generalFields" >
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
            </FormFieldsGridContainer>
        </div>
    )
}

export default CurrencyForm