import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import userColumns from '@/helpers/user/userColumns'
import { createUser, deleteManyUsers, deleteUser, getAllUsers, getSingleUser, updateUser } from '@/services/userService'
import { userDefaultValue, userValidationSchema } from '@/helpers/user/userValidationSchema'
import { lazy } from 'react'
const UserForm = lazy(() => import("@/components/forms/containers/user/UserForm"))


const userConfig = {
  formProps: {
    defaultValue: userDefaultValue,
    validationSchema: userValidationSchema,
    mutationAddFunction: createUser,
    mutationUpdateFunction: updateUser,
    getSingleFunction: getSingleUser,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteUser,
    RenderForm: (props) => <UserForm {...props} />
  },
  formHeaderProps: {
    header: "user"
  },
}

const Users = ({ formOnly, outerClose }) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...userConfig}
        outerClose={outerClose}
      />
    )
  }

  return (
    <PaperLayout
      name="user"
      queryKey={QUERY_KEYS.USER}
      queryFn={getAllUsers}
      handleDeleteSelected={deleteManyUsers}
      paperHeaderProps={{
        header: "user"
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: userColumns
      }}
      {...userConfig}

    />
  )
}

export default Users