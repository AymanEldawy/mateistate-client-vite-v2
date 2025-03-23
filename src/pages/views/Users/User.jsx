import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import UserForm from '@/components/forms/containers/UserForm'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import userColumns from '@/helpers/user/userColumns'
import { deleteManyUsers, deleteUser, getAllUsers } from '@/services/userService'
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {}

const validationSchema = () => { }

const userConfig = {
  formProps: {
    defaultValue,
    validationSchema,
    mutationAddFunction: () => { },
    mutationUpdateFunction: () => { },
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

const User = ({ formOnly, outerClose }) => {

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

export default User