import { RHFAsyncSelectField, RHFDatePicker, RHFSelectField } from "../../fields";
import FormFieldsGridContainer from "@/components/shared/FormFieldsGridContainer";
const UserWorkTimeForm = () => {

    return (
        <div className="p-4 flex flex-col min-h-[400px] max-h-[75vh] overflow-x-hidden overflow-y-scroll lg:w-[60vw] md:w-[90vw]">
            <FormFieldsGridContainer key="generalFields" >
                <RHFAsyncSelectField
                    name="user_id"
                    label="User"
                    required
                    isReference
                    table="user"
                    containerClassName="col-span-2"
                />
                <RHFSelectField
                    name="repeat_type"
                    label="Repeat Type"
                    options={[
                        { name: "Day", id: 1 },
                        { name: "Week", id: 7 },
                        { name: "Month", id: 30 },
                        { name: "3 Month", id: 90 },
                    ]}
                    optionValue="id"
                />
                <RHFDatePicker
                    name="start_date"
                    label="Start Date"
                    required
                    type="datetime-local"
                />
                <RHFDatePicker
                    name="work_time_start"
                    label="Work Time Start"
                    required
                    type="datetime-local"
                    showTimeSelect={true}
                    showYearDropdown={false}
                    showDateSelect={false}
                    dateFormat={"h:mm aa"}
                    showTimeSelectOnly
                    showTimeCaption={false}
                />
                <RHFDatePicker
                    name="work_time_end"
                    label="Work Time End"
                    required
                    type="datetime-local"
                    showTimeSelect={true}
                    showDateSelect={false}
                    showYearDropdown={false}
                    dateFormat={"h:mm aa"}
                    showTimeSelectOnly
                    showTimeCaption={false}
                />
            </FormFieldsGridContainer>
        </div>
    )
}

export default UserWorkTimeForm