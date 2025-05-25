import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '@/components/layout/paper/PaperLayout'
import { deleteUserWorkTime, deleteManyUserWorkTimes, getAllUserWorkTimes, createUserWorkTime, updateUserWorkTime, getSingleUserWorkTime } from '@/services/userWorkTimeService'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import userWorkTimeColumns from '@/helpers/userWorkTime/userWorkTimeColumns'
import { lazy } from 'react'
const UserWorkTimeForm = lazy(() => import("@/components/forms/containers/userWorkTime/UserWorkTimeForm"))

const defaultValue = {
  repeat_type: 1
}

const validationSchema = () => { }

const userWorkTimeConfig = {
  formProps: {
    defaultValue,
    validationSchema,
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