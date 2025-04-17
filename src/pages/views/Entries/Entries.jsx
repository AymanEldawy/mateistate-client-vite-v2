

import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy } from 'react'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import EntryBar from '@/components/shared/EntryBar'
import { createEntry, deleteEntry, deleteManyEntries, getAllEntries, getSearchEntry, updateEntry } from '@/services/entriesService'
import entriesColumns from '@/helpers/entries/entriesColumns'
import { entriesValidationSchema } from '@/helpers/entries/entriesValidationSchema'
import EntryOriginalLink from '@/components/EntryOriginalLink/EntryOriginalLink'
const EntriesForm = lazy(() => import("@/components/forms/containers/entries/EntriesForm"))

const defaultValue = {}

const Entries = () => {

  return (
    <>
      <PaperLayout
        name="entries"
        queryKey={QUERY_KEYS.ENTRIES}
        queryFn={getAllEntries}
        handleDeleteSelected={deleteManyEntries}
        paperHeaderProps={{
          header: "entries"
        }}
        paperBarProps={{
          onClickPrint: true,
          onClickAdd: true,
        }}
        tableProps={{
          columns: entriesColumns
        }}
        formProps={{
          defaultValue,
          validationSchema: entriesValidationSchema,
          mutationAddFunction: createEntry,
          mutationUpdateFunction: updateEntry,
          onSuccessAction: () => { },
          isSteps: false,
          onHandleDelete: deleteEntry,
          RenderForm: (props) => <EntriesForm {...props} />
        }}
        formHeaderProps={{
          header: "entry",
          ExtraContentBar: ({ values }) => (
            <>
              <FormHeaderSearchBar
                getOptionLabel={option => option?.name}
                getOptionValue={option => option?.id}
                getSearch={getSearchEntry}
                queryKey={QUERY_KEYS.ENTRIES}
              />
              <EntryBar entryId={values?.id} />
            </>
          )
        }}
        formFooterProps={{
          additionalButtons: (data) => (
            <EntryOriginalLink
              data={data}
            />
          )
        }}
      />
    </>

  )
}

export default Entries