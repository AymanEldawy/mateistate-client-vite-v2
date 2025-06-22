

import ContractFormFooter from '@/components/forms/containers/contract/ContractFormFooter'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import BtnGroups from '@/components/shared/BtnGroups'
import EntryBar from '@/components/shared/EntryBar'
import Modal from '@/components/shared/Modal'
import { CREATED_FROM_CONTRACT } from '@/data/GENERATE_STARTING_DATA'
import QUERY_KEYS from '@/data/queryKeys'
import SEARCH_PARAMS from '@/data/searchParamsKeys'
import contractColumns from '@/helpers/contract/contractColumns'
import { GLOBAL_CONTRACT_STEPS } from '@/helpers/contract/contractSteps'
import { contractDefaultValues, contractValidationSchema } from '@/helpers/contract/contractValidationSchema'
import useCustomSearchParams from '@/hook/useCustomSearchParams'
import { getAllContractPatterns, getContractPatternByCode } from '@/services/contractPatternsService'
import { createContract, deleteContract, deleteManyContracts, getAllContracts, getSearchContract, getSingleContract, updateContract } from '@/services/contractService'
import { useQuery } from '@tanstack/react-query'
import { lazy, useState } from 'react'
import PaperLayout from '../../../components/layout/paper/PaperLayout'

const ContractForm = lazy(() => import("@/components/forms/containers/contract/ContractForm"))

const Contract = () => {
  const searchParamsSelectedCode = useCustomSearchParams(SEARCH_PARAMS.CODE);
  const [openFormType, setOpenFormType] = useState(false);

  const { data: pattern } = useQuery({
    queryKey: [QUERY_KEYS.CONTRACT_PATTERN, searchParamsSelectedCode],
    queryFn: async () => {
      const response = await getContractPatternByCode(searchParamsSelectedCode)
      return response
    },
    enabled: !!searchParamsSelectedCode
  })

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
          header: pattern?.name || "contract"
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
              code={searchParamsSelectedCode}
              pattern={pattern}
              {...props}
            />
          )
        }}
        formHeaderProps={{
          header: pattern?.name || "contract",
          ExtraContentBar: ({ values }) => (
            <>
              <FormHeaderSearchBar
                getOptionLabel={option => option?.name}
                getOptionValue={option => option?.id}
                getSearch={getSearchContract}
                queryKey={QUERY_KEYS.CONTRACT}
              />
              <EntryBar values={values} entryId={values?.contract?.id} tab="contract" created_from={CREATED_FROM_CONTRACT} />
            </>
          )
        }}
        formSidebarProps={{
          list: Object.keys(GLOBAL_CONTRACT_STEPS)
        }}
        formFooterProps={{
          additionalButtons: (data) => (
            <ContractFormFooter data={data} pattern={pattern} />
          )
        }}

      />
    </>

  )
}

export default Contract