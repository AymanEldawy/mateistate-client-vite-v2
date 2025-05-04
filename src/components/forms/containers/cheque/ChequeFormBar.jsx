import { CheckIcon } from '@/components/Icons'
import Btn from '@/components/shared/Btn'
import { usePopupForm } from '@/hook/usePopupForm'
import { useFormContext } from 'react-hook-form'

const ChequeFormBar = ({ pattern }) => {
  const { watch } = useFormContext()
  const { handleDispatchForm } = usePopupForm();

  return (
    <div className="flex text-gray-500 border-r-2 gap-2 items-center mt-2">
      <Btn
        type="button"
        kind={watch("collectionStatus") ? "primary" : 'default'}
        disabled={watch("partialCollectionStatus")}
        containerClassName="!px-1 text-gray-500 !border !text-sm"
        onClick={() =>
          handleDispatchForm({
            table: 'op_collection',
            pattern,
            chequeValue: watch()
          })
        }
      >
        {watch('collectionStatus') ? (
          <span>
            <CheckIcon />
          </span>
        ) : null}
        collection
      </Btn>
      <Btn
        type="button"
        kind={watch("partialCollectionStatus") ? "info" : 'default'}
        disabled={watch("collectionStatus")}
        containerClassName="!px-1 text-gray-500 !border !text-sm"
        onClick={() =>
          handleDispatchForm({
            table: 'op_partial_collection',
            pattern,
            chequeValue: watch()

          })
        }
      >
        {watch('partialCollectionStatus') ? (
          <span>
            <CheckIcon />
          </span>
        ) : null}
        partial collection
      </Btn>
      <Btn
        type="button"
        kind={watch("returnStatus") ? "error" : 'default'}
        containerClassName="!px-1 text-gray-500 !border !text-sm"
        onClick={() =>
          handleDispatchForm({
            table: 'op_return',
            pattern,
            chequeValue: watch()
          })
        }
      >
        {watch('returnStatus') ? (
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