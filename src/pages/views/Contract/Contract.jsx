

import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import contractColumns from '@/helpers/contract/contractColumns'
import { createContract, deleteContract, deleteManyContracts, getAllContracts, getSearchContract, getSingleContract, updateContract } from '@/services/contractService'
import { contractDefaultValues, contractValidationSchema } from '@/helpers/contract/contractValidationSchema'
import { lazy, useState } from 'react'
import ContractFormFooter from '@/components/forms/containers/contract/ContractFormFooter'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import EntryBar from '@/components/shared/EntryBar'
import Modal from '@/components/shared/Modal'
import BtnGroups from '@/components/shared/BtnGroups'
import useCustomSearchParams from '@/hook/useCustomSearchParams'
import useUpdateSearchParams from '@/hook/useUpdateSearchParams'
import SEARCH_PARAMS from '@/data/searchParamsKeys'
import { APARTMENTS_CONTRACT_STEPS, GLOBAL_CONTRACT_STEPS } from '@/helpers/contract/contractSteps'
import { getAllContractPatterns } from '@/services/contractPatternsService'

const ContractForm = lazy(() => import("@/components/forms/containers/contract/ContractForm"))

const Contract = () => {
  const searchParamsSelectedCode = useCustomSearchParams(SEARCH_PARAMS.CODE);
  const [openFormType, setOpenFormType] = useState(false);

  return (
    <>
      <Modal containerClassName="!z-[100]" open={openFormType} onClose={() => setOpenFormType(false)}>
        <BtnGroups
          queryKey={QUERY_KEYS.CONTRACT_PATTERN}
          queryFn={getAllContractPatterns}
          onClose={() => setOpenFormType(false)}
        />
      </Modal>
      <PaperLayout
        name="contract"
        queryKey={QUERY_KEYS.CONTRACT}
        queryFn={getAllContracts}
        handleDeleteSelected={deleteManyContracts}
        paperHeaderProps={{
          header: "contract"
        }}
        paperBarProps={{
          onClickPrint: true,
          onClickAdd: true,
          customAdd: () => setOpenFormType(true),
        }}
        tableProps={{
          columns: contractColumns
        }}
        formProps={{
          defaultValue: contractDefaultValues,
          validationSchema: contractValidationSchema,
          mutationAddFunction: createContract,
          mutationUpdateFunction: updateContract,
          getSingleFunction: getSingleContract,
          onSuccessAction: () => { },
          isSteps: true,
          onHandleDelete: deleteContract,
          RenderForm: (props) => (
            <ContractForm
              code={searchParamsSelectedCode?.code}
              {...props}
            />
          )
        }}
        formHeaderProps={{
          header: "contract",
          ExtraContentBar: ({ values }) => (
            <>
              <FormHeaderSearchBar
                getOptionLabel={option => option?.name}
                getOptionValue={option => option?.id}
                getSearch={getSearchContract}
                queryKey={QUERY_KEYS.CONTRACT}
              />
              <EntryBar entryId={values?.id} />
            </>
          )
        }}
        formSidebarProps={{
          list: Object.keys(GLOBAL_CONTRACT_STEPS)
        }}
        formFooterProps={{
          additionalButtons: (data) => (
            <ContractFormFooter data={data} />
          )
        }}

      />
    </>

  )
}

export default Contract