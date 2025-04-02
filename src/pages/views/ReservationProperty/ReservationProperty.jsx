import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { deleteReservationProperty, deleteManyReservationProperties, getAllReservationProperties } from '@/services/reservationPropertyService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import reservationPropertyColumns from '@/helpers/reservationProperty/reservationPropertyColumns'
import { lazy } from 'react'
const ReservationPropertyForm = lazy(() => import("@/components/forms/containers/reservationProperty/reservationPropertyForm"))

const defaultValue = {}

const validationSchema = () => { }

const reservationPropertyConfig = {
    formProps: {
        defaultValue,
        validationSchema,
        mutationAddFunction: () => { },
        mutationUpdateFunction: () => { },
        onSuccessAction: () => { },
        isSteps: false,
        onHandleDelete: deleteReservationProperty,
        RenderForm: (props) => <ReservationPropertyForm {...props} />
    },
    formPaginationProps: {
        name: 'reservationProperty',
        number: 1
    },
    formHeaderProps: {
        header: "Reservation Property",
    },
}

const ReservationProperty = ({ formOnly, outerClose }) => {

    if (formOnly) {
        return (
            <FormWrapper
                {...reservationPropertyConfig}
                outerClose={outerClose}
            />
        )
    }

    return (
        <PaperLayout
            name="reservationProperty"
            queryKey={QUERY_KEYS.RESERVATION_PROPERTY}
            queryFn={getAllReservationProperties}
            handleDeleteSelected={deleteManyReservationProperties}
            paperHeaderProps={{
                header: "reservationProperty"
            }}
            paperBarProps={{
                onClickPrint: true,
                onClickAdd: true,
            }}
            tableProps={{
                columns: reservationPropertyColumns
            }}
            {...reservationPropertyConfig}
        />
    )
}

export default ReservationProperty