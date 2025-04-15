import { RHFCheckbox } from '../forms/fields'
import { ViewEntry } from './ViewEntry'

const EntryBar = ({ isView, entryId }) => {
  return (
    <div className='flex gap-2'>
      <RHFCheckbox containerClassName="!gap-1" labelClassName="!w-fit"  name="feedback" label="feedback" />
      <RHFCheckbox containerClassName="!gap-1" labelClassName="!w-fit whitespace-nowrap"  name="gen_entries" label="gen_entries" />
      {isView ? (
        <ViewEntry id={entryId} />
      ) : null}
    </div>
  )
}

export default EntryBar