import Btn from '@/components/shared/Btn'

const ContractFormFooter = ({ data, setIsInstallmentOpen }) => {
  return (
    <div>
      <Btn disabled={!data?.id} onClick={() => setIsInstallmentOpen(true)} kind="info" type="button">installment</Btn>
    </div>
  )
}

export default ContractFormFooter