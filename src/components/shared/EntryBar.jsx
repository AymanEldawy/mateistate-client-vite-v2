import { RHFCheckbox } from '../forms/fields';
import { ViewEntry } from './ViewEntry';

const EntryBar = ({ isView, entryId, tab, created_from }) => {
  return (
    <div className='flex gap-2'>
      <RHFCheckbox containerClassName="!gap-1" labelClassName="!w-fit" name={tab ? `${tab}.feedback` : "feedback"} label="feedback" />
      <RHFCheckbox containerClassName="!gap-1" labelClassName="!w-fit whitespace-nowrap" name={tab ? `${tab}.genEntries` : "genEntries"} label="gen_entries" />
      {entryId ? (
        <ViewEntry id={entryId} created_from={created_from} />
      ) : null}
    </div>
  )
}

export default EntryBar