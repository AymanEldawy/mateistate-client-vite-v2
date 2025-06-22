import { RHFDatePicker, RHFSelectField } from "../../fields";
import UserField from "../../global/UserField";
const UserWorkTimeForm = () => {

  return (
    <div className="p-4 flex flex-col gap-2 min-w-[700px]">
      <UserField
        name="userId"
        label="User"
        required
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
    </div>
  )
}

export default UserWorkTimeForm