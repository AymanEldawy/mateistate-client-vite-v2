import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount
} from "@/services/accountService";
import bankColumns from "@/helpers/bank/bankColumns";
import BankForm from "@/components/forms/containers/bank/BankForm";
import { createBank, deleteManyBanks, getAllBanks, getSingleBank, updateBank } from "@/services/bankService";
import { bankDefaultValues, bankValidationSchema } from "@/helpers/bank/bankValidationSchema";

const bankConfig = {
  formProps: {
    defaultValue: bankDefaultValues,
    validationSchema: bankValidationSchema,
    mutationAddFunction: createBank,
    mutationUpdateFunction: updateBank,
    getSingleFunction: getSingleBank,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <BankForm {...props} />,
  },
  formHeaderProps: {
    header: "bank",
  },
};

const Bank = () => {
  return (
    <PaperLayout
      name="bank"
      queryKey={QUERY_KEYS.Bank}
      queryFn={getAllBanks}
      handleDeleteSelected={deleteManyBanks}
      paperHeaderProps={{
        header: "bank",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: bankColumns,
      }}
      {...bankConfig}
    />
  );
};

export default Bank;
