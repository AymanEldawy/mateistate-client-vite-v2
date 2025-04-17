

import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import contractColumns from '@/helpers/contract/contractColumns'
// import ContractForm from '@/components/forms/containers/contract/ContractForm'
import { createContract, deleteContract, deleteManyContracts, getAllContracts, getSearchContract, updateContract } from '@/services/contractService'
// import { useState } from 'react'
import { APARTMENT_STEPS_CONTRACT } from '@/data/constants'
import { contractValidationSchema } from '@/helpers/contract/contractValidationSchema'
import { lazy, useState } from 'react'
import ContractFormFooter from '@/components/forms/containers/contract/ContractFormFooter'
import { FormHeaderSearchBar } from '@/components/forms/wrapper'
import EntryBar from '@/components/shared/EntryBar'
import Modal from '@/components/shared/Modal'
import BtnGroups from '@/components/shared/BtnGroups'
import useCustomSearchParams from '@/hook/useCustomSearchParams'
import useUpdateSearchParams from '@/hook/useUpdateSearchParams'
import SEARCH_PARAMS from '@/data/searchParamsKeys'
const ContractForm = lazy(() => import("@/components/forms/containers/contract/ContractForm"))

const defaultValue = {}


const Contract = () => {
  const [isInstallmentOpen, setIsInstallmentOpen] = useState(false);
  const searchParamsSelectedCode = useCustomSearchParams(SEARCH_PARAMS.CODE);
  const updateSearchParams = useUpdateSearchParams();
  const [openFormType, setOpenFormType] = useState(false);

  const handleChangeCode = (code) => {
    updateSearchParams([{ name: SEARCH_PARAMS.CODE, value: code }]);
  }

  return (
    <>
      <Modal containerClassName="!z-[100]" open={openFormType} onClose={() => setOpenFormType(false)}>
        {/* get all chq patterns and display them */}
        <BtnGroups
          list={[
            {
              name: 'received', onClick: () => {
                handleChangeCode(1)
                setOpenFormType(false)
              }
            },
            {
              name: 'paid', onClick: () => {
                handleChangeCode(2)
                setOpenFormType(false)
              }
            }
          ]}
        />
        {/* setCode */}
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
          defaultValue,
          validationSchema: contractValidationSchema,
          mutationAddFunction: createContract,
          mutationUpdateFunction: updateContract,
          onSuccessAction: () => { },
          isSteps: true,
          onHandleDelete: deleteContract,
          RenderForm: (props) => (
            <ContractForm
              isInstallmentOpen={isInstallmentOpen}
              setIsInstallmentOpen={setIsInstallmentOpen}
              list={APARTMENT_STEPS_CONTRACT}
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
          list: APARTMENT_STEPS_CONTRACT
        }}
        formFooterProps={{
          additionalButtons: (data) => (
            <ContractFormFooter data={data}
              isInstallmentOpen={isInstallmentOpen}
              setIsInstallmentOpen={setIsInstallmentOpen}
            />
          )
        }}

      />
    </>

  )
}

export default Contract