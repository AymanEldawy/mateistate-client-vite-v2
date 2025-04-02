import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { deleteUserWorkTime, deleteManyUserWorkTimes, getAllUserWorkTimes } from '@/services/userWorkTimeService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import userWorkTimeColumns from '@/helpers/userWorkTime/userWorkTimeColumns'
import { lazy } from 'react'
const UserWorkTimeForm = lazy(() => import("@/components/forms/containers/userWorkTime/UserWorkTimeForm"))

const defaultValues = {
    repeat_type: 1
}

const validationSchema = () => { }

const userWorkTimeConfig = {
    formProps: {
        defaultValues,
        validationSchema,
        mutationAddFunction: () => { },
        mutationUpdateFunction: () => { },
        onSuccessAction: () => { },
        isSteps: false,
        onHandleDelete: deleteUserWorkTime,
        RenderForm: (props) => <UserWorkTimeForm {...props} />
    },
    formPaginationProps: {
        name: 'userWorkTime',
        number: 1
    },
    formHeaderProps: {
        header: "User Work Time",
    },
}

const UserWorkTime = ({ formOnly, outerClose }) => {

    if (formOnly) {
        return (
            <FormWrapper
                {...userWorkTimeConfig}
                outerClose={outerClose}
            />
        )
    }

    return (
        <PaperLayout
            name="userWorkTime"
            queryKey={QUERY_KEYS.USER_WORK_TIME}
            queryFn={getAllUserWorkTimes}
            handleDeleteSelected={deleteManyUserWorkTimes}
            paperHeaderProps={{
                header: "userWorkTime"
            }}
            paperBarProps={{
                onClickPrint: true,
                onClickAdd: true,
            }}
            tableProps={{
                columns: userWorkTimeColumns
            }}
            {...userWorkTimeConfig}
        />
    )
}

export default UserWorkTime