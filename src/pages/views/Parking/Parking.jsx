import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { deleteParking, deleteManyParkings, getAllParkings } from '@/services/parkingService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import parkingColumns from '@/helpers/parking/parkingColumns'
import { lazy } from 'react'
import { PARKING_STEPS } from '@/data/constants'
import { RHFCheckbox } from '@/components/forms/fields'
const ParkingForm = lazy(() => import("@/components/forms/containers/parking/ParkingForm"))

const defaultValue = {}

const validationSchema = () => { }

const parkingConfig = {
    formProps: {
        defaultValue,
        validationSchema,
        mutationAddFunction: () => { },
        mutationUpdateFunction: () => { },
        onSuccessAction: () => { },
        isSteps: true,
        onHandleDelete: deleteParking,
        RenderForm: (props) => <ParkingForm {...props} />
    },
    formPaginationProps: {
        name: 'parking',
        number: 1
    },
    formSidebarProps: {
        list: Object.values(PARKING_STEPS)
    },
    formHeaderProps: {
        header: "Parking",
        ExtraContentBar: () => (
            <>
                <RHFCheckbox name="has_lawsuit" label="Has Lawsuit" type="checkbox" />
                <RHFCheckbox name="blocked" label="Blocked" type="checkbox" />
            </>
        )
    },
}

const Parking = ({ formOnly, outerClose }) => {

    if (formOnly) {
        return (
            <FormWrapper
                {...parkingConfig}
                outerClose={outerClose}
            />
        )
    }

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