import PaperLayout from '@/components/layout/paper/PaperLayout'
import QUERY_KEYS from '@/data/queryKeys'
import { userWorkTimeDefaultValues } from '@/helpers/user-work-times/userWorkTimesValidationSchema'
import userWorkTimeColumns from '@/helpers/userWorkTime/userWorkTimeColumns'
import { userWorkTimeValidationSchema } from '@/helpers/userWorkTime/userWorkTimeValidationSchema'
import { createUserWorkTime, deleteManyUserWorkTimes, deleteUserWorkTime, getAllUserWorkTimes, getSingleUserWorkTime, updateUserWorkTime } from '@/services/userWorkTimeService'
import { lazy } from 'react'
const UserWorkTimeForm = lazy(() => import("@/components/forms/containers/userWorkTime/UserWorkTimeForm"))

const userWorkTimeConfig = {
  formProps: {
    defaultValue: userWorkTimeDefaultValues,
    validationSchema: userWorkTimeValidationSchema,
    mutationAddFunction: createUserWorkTime,
    mutationUpdateFunction: updateUserWorkTime,
    getSingleFunction: getSingleUserWorkTime,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteUserWorkTime,
    RenderForm: (props) => <UserWorkTimeForm {...props} />
  },
  formHeaderProps: {
    header: "user_work_time",
  },
}

const UserWorkTime = () => {
  return (
    <PaperLayout
      name="userWorkTime"
      queryKey={QUERY_KEYS.USER_WORK_TIME}
      queryFn={getAllUserWorkTimes}
      handleDeleteSelected={deleteManyUserWorkTimes}
      paperHeaderProps={{
        header: "user_work_time"
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