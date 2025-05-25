import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { deleteParking, deleteManyParkings, getAllParkings, createParking, updateParking, getSingleParking } from '@/services/parkingService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import parkingColumns from '@/helpers/parking/parkingColumns'
import { lazy } from 'react'
import { PARKING_STEPS } from '@/data/constants'
import { RHFCheckbox } from '@/components/forms/fields'
import { parkingDefaultValues, parkingValidationSchema } from '@/helpers/parking/parkingValidationSchema'
const ParkingForm = lazy(() => import("@/components/forms/containers/parking/ParkingForm"))

const parkingConfig = {
  formProps: {
    defaultValue: parkingDefaultValues,
    validationSchema: parkingValidationSchema,
    mutationAddFunction: createParking,
    mutationUpdateFunction: updateParking,
    getSingleFunction: getSingleParking,
    onSuccessAction: () => { },
    isSteps: true,
    onHandleDelete: deleteParking,
    RenderForm: (props) => <ParkingForm {...props} />
  },
  formSidebarProps: {
    list: Object.values(PARKING_STEPS)
  },
  formHeaderProps: {
    header: "parking",
    ExtraContentBar: () => (
      <>
        <RHFCheckbox name="parking.hasLawsuit" label="has_lawsuit" type="checkbox" />
        <RHFCheckbox name="parking.blocked" label="blocked" type="checkbox" />
      </>
    )
  },
}

const Parking = () => {
  return (
    <PaperLayout
      name="parking"
      queryKey={QUERY_KEYS.PARKING}
      queryFn={getAllParkings}
      handleDeleteSelected={deleteManyParkings}
      paperHeaderProps={{
        header: "parking"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: parkingColumns
      }}
      {...parkingConfig}
    />
  )
}

export default Parking