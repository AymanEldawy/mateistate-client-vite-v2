import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount
} from "@/services/accountService";
import bankColumns from "@/helpers/bank/bankColumns";
import BankForm from "@/components/forms/containers/bank/BankForm";
import { createBank, deleteManyBanks, getAllBanks, getSingleBank, updateBank } from "@/services/bankService";
// import QUERY_KEYS from './../../../data/queryKeys';
import { z } from 'zod';

const bankValidationSchema = () => z.object({
  name: z.string().nonempty({ message: 'Name is Required' }),
  address: z.string().optional(),
});

const defaultValue = {
  name: '',
  address: '',
};

const bankConfig = {
  formProps: {
    defaultValue,
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
    header: "Bank",
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
