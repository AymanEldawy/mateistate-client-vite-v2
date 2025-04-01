import { CheckIcon } from '@/components/Icons'
import Btn from '@/components/shared/Btn'
import { usePopupForm } from '@/hook/usePopupForm'
import { useFormContext } from 'react-hook-form'

const ChequeFormBar = ({ pattern }) => {
  const { watch } = useFormContext()
  const { handleDispatchForm } = usePopupForm();

  return (
    <div className="flex text-gray-500 border-r-2">
      <Btn
        type="button"
        kind={watch("collection_status") ? "primary" : 'default'}
        disabled={watch("partial_collection_status")}
        containerClassName="!px-1 text-gray-500 !border !text-sm"
        onClick={() =>
          handleDispatchForm({
            table: 'op_collection',
            pattern,
            chequeValue: watch()
          })
        }
      >
        {watch('collection_status') ? (
          <span>
            <CheckIcon />
          </span>
        ) : null}
        collection
      </Btn>
      <Btn
        type="button"
        kind={watch("partial_collection_status") ? "info" : 'default'}
        disabled={watch("collection_status")}
        containerClassName="!px-1 text-gray-500 !border !text-sm"
        onClick={() =>
          handleDispatchForm({
            table: 'op_partial_collection',
            pattern,
            chequeValue: watch()

          })
        }
      >
        {watch('partial_collection_status') ? (
          <span>
            <CheckIcon />
          </span>
        ) : null}
        partial collection
      </Btn>
      <Btn
        type="button"
        kind={watch("return_status") ? "error" : 'default'}
        containerClassName="!px-1 text-gray-500 !border !text-sm"
        onClick={() =>
          handleDispatchForm({
            table: 'op_return',
            pattern,
            chequeValue: watch()
          })
        }
      >
        {watch('return_status') ? (
          <span>
            <CheckIcon />
          </span>
        ) : null}
        return
      </Btn>
    </div>
  )
}

export default ChequeFormBar