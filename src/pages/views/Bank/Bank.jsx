import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount,
  deleteManyAccounts,
  getAllAccounts,
} from "@/services/accountService";
import { bankValidationSchema } from "@/helpers/bank/bankValidationSchema";
import bankColumns from "@/helpers/bank/bankColumns";
import BankForm from "@/components/forms/containers/bank/BankForm";
import { createBank, deleteManyBanks, getAllBanks, updateBank } from "@/services/bankService";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {};

const bankConfig = {
  formProps: {
    defaultValue,
    validationSchema: bankValidationSchema,
    mutationAddFunction: createBank,
    mutationUpdateFunction: updateBank,
    onSuccessAction: () => {},
    isSteps: false,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <BankForm {...props} />,
  },
  formHeaderProps: {
    header: "Bank",
  },
  formPaginationProps: {
    name: "Bank",
    number: 1,
  },
};

const Bank = () => {
  return (
    <PaperLayout
      name="Bank"
      queryKey={QUERY_KEYS.Bank}
      queryFn={getAllBanks} //
      handleDeleteSelected={deleteManyBanks} //
      paperHeaderProps={{
        header: "Bank",
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
