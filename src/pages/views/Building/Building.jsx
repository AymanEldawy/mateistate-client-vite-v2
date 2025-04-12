import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy } from 'react'
import { createBuilding, deleteBuilding, deleteManyBuildings, getAllBuildings, updateBuilding } from '@/services/buildingService'
import { buildingDefaultValues, buildingValidationSchema } from '@/helpers/building/buildingValidationSchema'
import buildingColumns from '@/helpers/building/buildingColumns'
import { useNavigate } from 'react-router-dom'
import { BUILDING_STEPS } from '@/helpers/building/buildingSteps'
const BuildingForm = lazy(() => import("@/components/forms/containers/building/BuildingForm"))


const Building = () => {
  const navigate = useNavigate();

  return (
    <PaperLayout
      name="building"
      queryKey={QUERY_KEYS.BUILDING}
      queryFn={getAllBuildings}
      handleDeleteSelected={deleteManyBuildings}
      paperHeaderProps={{
        header: "building"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: buildingColumns
      }}
      formProps={{
        defaultValue: buildingDefaultValues,
        validationSchema: buildingValidationSchema,
        mutationAddFunction: createBuilding,
        mutationUpdateFunction: updateBuilding,
        onSuccessAction: (data) => {
        navigate(`/building/details/${data?.id}`)
        },
        isSteps: true,
        onHandleDelete: deleteBuilding,
        RenderForm: (props) => <BuildingForm {...props} />
      }}
      formHeaderProps={{
        header: "building"
      }}
      formSidebarProps={{
        list: Object.values(BUILDING_STEPS)
      }}
      formPaginationProps={{
        name: 'building',
        number: 1
      }}

    />
  )
}

export default Building