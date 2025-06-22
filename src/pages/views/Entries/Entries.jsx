

import EntryOriginalLink from '@/components/EntryOriginalLink/EntryOriginalLink'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import FormWrapper from '@/components/forms/wrapper/FormWrapper'
import EntryBar from '@/components/shared/EntryBar'
import QUERY_KEYS from '@/data/queryKeys'
import entriesColumns from '@/helpers/entries/entriesColumns'
import { entriesDefaultValues, entriesValidationSchema } from '@/helpers/entries/entriesValidationSchema'
import { createEntry, deleteEntry, deleteManyEntries, getAllEntries, getSearchEntry, getSingleEntry, updateEntry } from '@/services/entriesService'
import { lazy } from 'react'
import PaperLayout from '../../../components/layout/paper/PaperLayout'

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
        <EntryBar entryId={values?.id} tab="entry" />
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

  console.log(popupFormConfig, 'popupFormConfig in Entries');
  
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