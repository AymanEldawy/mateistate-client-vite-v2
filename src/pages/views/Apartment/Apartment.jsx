import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { deleteApartment, deleteManyApartments, getAllApartments } from '@/services/apartmentService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import apartmentColumns from '@/helpers/apartment/apartmentColumns'
import { lazy } from 'react'
import { APARTMENT_STEPS } from '@/data/constants'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import { RHFCheckbox, RHFInput } from '@/components/forms/fields'
const ApartmentForm = lazy(() => import("@/components/forms/containers/apartment/ApartmentForm"))

const defaultValue = {}

const validationSchema = () => { }

const apartmentConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationAddFunction: () => { },
    mutationUpdateFunction: () => { },
    onSuccessAction: () => { },
    isSteps: true,
    onHandleDelete: deleteApartment,
    RenderForm: (props) => <ApartmentForm {...props} />
  },
  formPaginationProps: {
    name: 'apartment',
    number: 1
  },
  formSidebarProps: {
    list: Object.values(APARTMENT_STEPS)
  },
  formHeaderProps: {
    header: "Apartment",
    ExtraContentBar: ({ values }) => (
      <>
        <RHFCheckbox name="has_lawsuit" label="Has Lawsuit" type="checkbox" />
        <RHFCheckbox name="blocked" label="Blocked" type="checkbox" />
      </>
    )
  },
}

const Apartment = ({ formOnly, outerClose }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...apartmentConfig}
        outerClose={outerClose}
      />
    )
  }

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