

import QUERY_KEYS from '@/data/queryKeys'
import PaperLayout from '../../../components/layout/paper/PaperLayout'
import contractColumns from '@/helpers/contract/contractColumns'
import ContractForm from '@/components/forms/containers/contract/ContractForm'
import { deleteContract, deleteManyContracts, getAllContracts } from '@/services/contractService'
// import { useState } from 'react'
import { APARTMENT_STEPS_CONTRACT } from '@/data/constants'
import { contractValidationSchema } from '@/helpers/contract/contractValidationSchema'
import { useState } from 'react'
import ContractFormFooter from '@/components/forms/containers/contract/ContractFormFooter'

const defaultValue = {}


const Contract = () => {
  const [isInstallmentOpen, setIsInstallmentOpen] = useState(false)
  // const [list, setList] = useState(APARTMENT_STEPS_CONTRACT)

  return (
    <>



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
        }}
        tableProps={{
          columns: contractColumns
        }}
        formProps={{
          defaultValue,
          validationSchema: contractValidationSchema,
          mutationAddFunction: () => { },
          mutationUpdateFunction: () => { },
          onSuccessAction: () => { },
          isSteps: true,
          onHandleDelete: deleteContract,
          RenderForm: (props) => <ContractForm isInstallmentOpen={isInstallmentOpen} {...props} list={APARTMENT_STEPS_CONTRACT} />
        }}
        formHeaderProps={{
          header: "contract"
        }}
        formSidebarProps={{
          list: APARTMENT_STEPS_CONTRACT
        }}
        formPaginationProps={{
          name: 'contract',
          number: 1,
          code: 1
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