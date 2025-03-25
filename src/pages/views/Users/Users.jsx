import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import userColumns from '@/helpers/user/userColumns'
import { createUser, deleteManyUsers, deleteUser, getAllUsers, updateUser } from '@/services/userService'
import { userValidationSchema } from '@/helpers/user/userValidationSchema'
import { lazy } from 'react'
const UserForm = lazy(() => import("@/components/forms/containers/user/UserForm"))

const defaultValue = {}

const userConfig = {
  formProps: {
    defaultValue,
    validationSchema: userValidationSchema,
    mutationAddFunction: createUser,
    mutationUpdateFunction: updateUser,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteUser,
    RenderForm: (props) => <UserForm {...props} />
  },
  formHeaderProps: {
    header: "user"
  },
  formPaginationProps: {
    name: 'user',
    number: 1
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
      queryKey={QUERY_KEYS.user}
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