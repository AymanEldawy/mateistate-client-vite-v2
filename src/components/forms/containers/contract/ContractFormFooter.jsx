import Btn from "@/components/shared/Btn";
import { usePopupForm } from "@/hook/usePopupForm";
import { renewContract } from "@/services/contractService";

const ContractFormFooter = ({ data, pattern }) => {
  const { handleDispatchForm } = usePopupForm();

  const openInstallmentPanel = () => {
    handleDispatchForm({
      contract: data?.contract,
      table: "installment",
      pattern,
    });
  };

  const handleRenewContract = async () => {
    const response = await renewContract(data?.contract?.id, data);
  };

  return (
    <div className="flex items-center gap-2">
      <Btn
        disabled={!data?.contract?.id}
        onClick={handleRenewContract}
        kind="primary"
        type="button"
      >
        renew
      </Btn>
      <Btn
        disabled={!data?.contract?.id}
        onClick={openInstallmentPanel}
        kind="info"
        type="button"
      >
        installment
      </Btn>
    </div>
  );
};

export default ContractFormFooter;
