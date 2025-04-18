import { RHFCheckbox } from '../forms/fields'
import { ViewEntry } from './ViewEntry'

const EntryBar = ({ isView, entryId, tab }) => {
  return (
    <div className='flex gap-2'>
      <RHFCheckbox containerClassName="!gap-1" labelClassName="!w-fit" name={tab ? `${tab}.feedback` : "feedback"} label="feedback" />
      <RHFCheckbox containerClassName="!gap-1" labelClassName="!w-fit whitespace-nowrap" name={tab ? `${tab}.gen_entries` : "gen_entries"} label="gen_entries" />
      {isView ? (
        <ViewEntry id={entryId} />
      ) : null}
    </div>
  )
}

export default EntryBar