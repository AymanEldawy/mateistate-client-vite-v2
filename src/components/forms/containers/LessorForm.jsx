import { RHFDatePicker, RHFInput } from '../fields'

const LessorForm = () => {
  return (
    <div>
      <RHFInput
        name="name"
        label="full_name"
      />
      <RHFInput
        name="ltnname"
        label="ltnname"
      />
      <RHFInput
        name="passport"
        label="passport"
      />
      <RHFDatePicker
        name="passport_expiry_date"
        label="passport_expiry_date"
      />
    </div>
  )
}

export default LessorForm