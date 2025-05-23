import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { createApartment, deleteApartment, deleteManyApartments, getAllApartments, getSingleApartment, updateApartment } from '@/services/apartmentService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import apartmentColumns from '@/helpers/apartment/apartmentColumns'
import { lazy } from 'react'
import { APARTMENT_STEPS } from '@/data/constants'
import { RHFCheckbox } from '@/components/forms/fields'
import { apartmentDefaultValues, apartmentValidationSchema } from '@/helpers/apartment/apartmentValidationSchema'
const ApartmentForm = lazy(() => import("@/components/forms/containers/apartment/ApartmentForm"))

const apartmentConfig = {
  formProps: {
    defaultValue: apartmentDefaultValues,
    validationSchema: apartmentValidationSchema,
    mutationAddFunction: createApartment,
    mutationUpdateFunction: updateApartment,
    getSingleFunction: getSingleApartment,
    onSuccessAction: () => { },
    isSteps: true,
    onHandleDelete: deleteApartment,
    RenderForm: (props) => <ApartmentForm {...props} />
  },
  formSidebarProps: {
    list: Object.values(APARTMENT_STEPS)
  },
  formHeaderProps: {
    header: "Apartment",
    ExtraContentBar: () => (
      <>
        <RHFCheckbox name="apartments.has_lawsuit" label="Has Lawsuit" type="checkbox" />
        <RHFCheckbox name="apartments.blocked" label="Blocked" type="checkbox" />
      </>
    )
  },
}

const Apartment = () => {

  return (
    <PaperLayout
      name="apartment"
      queryKey={QUERY_KEYS.APARTMENT}
      queryFn={getAllApartments}
      handleDeleteSelected={deleteManyApartments}
      paperHeaderProps={{
        header: "apartment"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: apartmentColumns
      }}
      {...apartmentConfig}

    />
  )
}

export default Apartment