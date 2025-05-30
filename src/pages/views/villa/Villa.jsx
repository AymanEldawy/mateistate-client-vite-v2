import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { deleteVilla, deleteManyVillas, getAllVillas, createVilla, updateVilla, getSingleVilla } from '@/services/villaService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import villaColumns from '@/helpers/villa/villaColumns'
import { lazy } from 'react'
import { VILLA_STEPS } from '@/data/constants'
import { villaDefaultValues, villaValidationSchema } from '@/helpers/villa/villaValidationSchema'
const VillaForm = lazy(() => import("@/components/forms/containers/villa/VillaForm"))


const villaConfig = {
  formProps: {
    defaultValue: villaDefaultValues,
    validationSchema: villaValidationSchema,
    mutationAddFunction: createVilla,
    mutationUpdateFunction: updateVilla,
    getSingleFunction: getSingleVilla,
    onSuccessAction: () => { },
    isSteps: true,
    onHandleDelete: deleteVilla,
    RenderForm: (props) => <VillaForm {...props} />
  },
  formSidebarProps: {
    list: Object.values(VILLA_STEPS)
  },
  formHeaderProps: {
    header: "Villa",
  },
}

const Villa = () => {
  return (
    <PaperLayout
      name="villa"
      queryKey={QUERY_KEYS.VILLA}
      queryFn={getAllVillas}
      handleDeleteSelected={deleteManyVillas}
      paperHeaderProps={{
        header: "villa"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: villaColumns
      }}
      {...villaConfig}

    />
  )
}

export default Villa