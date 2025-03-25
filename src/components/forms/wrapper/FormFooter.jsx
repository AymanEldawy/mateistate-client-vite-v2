import Btn from '@/components/shared/Btn'
import FormStepPagination from './FormStepPagination'
import { EditIcon, TrashIcon } from '@/components/Icons'
import { useFormContext } from 'react-hook-form'

const FormFooter = ({
  paginationForm,
  additionalButtons,
  setOpenConfirmation,
  isLoading
}) => {
  const { watch } = useFormContext()
  return (
    <div className='flex items-center justify-between gap-4 p-2  bg-gray-200 border-t border-t-gray-300 z-10 relative'>
      <FormStepPagination {...paginationForm} />
      <div className="flex gap-2 items-center">
        {additionalButtons && additionalButtons(watch())}
        {paginationForm?.currentId ? (
          <Btn
            type="button"
            kind="error"
            onClick={() => setOpenConfirmation(true)}
          >
            <TrashIcon className="h-5 w-5" />
            Delete
          </Btn>
        ) : null}

        <Btn
          isLoading={isLoading}
          // disabled={!isDirty || disabledSubmit}
          kind="primary"
        >
          <EditIcon className="h-5 w-5" />
          Save
        </Btn>
      </div>
    </div>
  )
}

export default FormFooter