import Btn from '@/components/shared/Btn'
import { usePopupForm } from '@/hook/usePopupForm'

const ContractFormFooter = ({ data, setIsInstallmentOpen }) => {
  const { handleDispatchForm } = usePopupForm()

  const openInstallmentPanel = () => {

    handleDispatchForm({
      contract: data?.contract,
      table: "installment",
    })
  }

  return (
    <div>
      <Btn disabled={!data?.contract?.id} onClick={openInstallmentPanel} kind="info" type="button">installment</Btn>
    </div>
  )
}

export default ContractFormFooter