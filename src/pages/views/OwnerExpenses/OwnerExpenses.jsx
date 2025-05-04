
// import QUERY_KEYS from './../../../data/queryKeys';

import PaperLayout from "@/components/layout/paper/PaperLayout";
import QUERY_KEYS from "@/data/queryKeys";
import ownerExpensesColumns from "@/helpers/owner/ownerExpensesColumns";
import { ownerExpensesValidationSchema } from "@/helpers/owner/ownerExpensesTypesValidationSchema";
import { ownerExpensesDefaultValues } from "@/helpers/owner/ownerExpensesValidationSchema";
import { createOwnerExpenses, deleteManyOwnerExpenses, deleteOwnerExpenses, getAllOwnerExpenses, getSingleOwnerExpenses, updateOwnerExpenses } from "@/services/ownerExpensesService";
import { lazy } from "react";
const OwnerExpenseForm = lazy(() => import('@/components/forms/containers/owner/OwnerExpensesForm'));

const ownerConfig = {
  formProps: {
    defaultValue: ownerExpensesDefaultValues,
    validationSchema: ownerExpensesValidationSchema,
    mutationAddFunction: createOwnerExpenses,
    mutationUpdateFunction: updateOwnerExpenses,
    getSingleFunction: getSingleOwnerExpenses,
    onSuccessAction: () => {},
    isSteps: false,
    onHandleDelete: deleteOwnerExpenses,
    RenderForm: (props) => <OwnerExpenseForm {...props} />,
  },
  formHeaderProps: {
    header: "owner_expenses",
  },
};

const OwnerExpense = () => {
  return (
    <PaperLayout
      name="owner_expenses"
      queryKey={QUERY_KEYS.OWNER_EXPENSES}
      queryFn={getAllOwnerExpenses} //
      handleDeleteSelected={deleteManyOwnerExpenses} //
      paperHeaderProps={{
        header: "owner_expenses",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: ownerExpensesColumns,
      }}
      {...ownerConfig}
    />
  );
};

export default OwnerExpense;
