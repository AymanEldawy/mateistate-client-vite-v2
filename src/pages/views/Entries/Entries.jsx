

import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import { lazy } from 'react'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import EntryBar from '@/components/shared/EntryBar'
import { createEntry, deleteEntry, deleteManyEntries, getAllEntries, getSearchEntry, getSingleEntry, updateEntry } from '@/services/entriesService'
import entriesColumns from '@/helpers/entries/entriesColumns'
import { entriesDefaultValues, entriesValidationSchema } from '@/helpers/entries/entriesValidationSchema'
import EntryOriginalLink from '@/components/EntryOriginalLink/EntryOriginalLink'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'

const EntriesForm = lazy(() => import("@/components/forms/containers/entries/EntriesForm"))


const entryConfig = {
  name: "entry_main_data",
  formProps: {
    defaultValue: entriesDefaultValues,
    validationSchema: entriesValidationSchema,
    mutationAddFunction: createEntry,
    mutationUpdateFunction: updateEntry,
    getSingleFunction: getSingleEntry,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteEntry,
    RenderForm: (props) => <EntriesForm {...props} />
  },
  formHeaderProps: {
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
  },
  formFooterProps: {
    additionalButtons: (data) => (
      <EntryOriginalLink
        data={data}
      />
    )
  }
}

const Entries = ({
  formOnly,
  outerClose,
  defaultNumber,
  popupFormConfig
}) => {

  if (formOnly) {
    return (
      <FormWrapper
        {...entryConfig}
        outerClose={outerClose}
        numberSearchParam={defaultNumber}
        oldValues={popupFormConfig?.oldValues}
      />
    )
  }

  return (
    <>
      <PaperLayout
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

        {...entryConfig}

      />
    </>

  )
}

export default Entries