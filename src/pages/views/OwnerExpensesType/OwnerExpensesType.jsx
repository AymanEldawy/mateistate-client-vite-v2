
// import QUERY_KEYS from './../../../data/queryKeys';

import PaperLayout from "@/components/layout/paper/PaperLayout";
import QUERY_KEYS from "@/data/queryKeys";
import ownerExpensesTypesColumns from "@/helpers/owner/ownerExpensesTypesColumns";
import { ownerExpensesTypesDefaultValues, ownerExpensesTypesValidationSchema, ownerExpensesValidationSchema } from "@/helpers/owner/ownerExpensesTypesValidationSchema";
import { createOwnerExpensesTypes, deleteManyOwnerExpensesTypes, deleteOwnerExpensesTypes, getAllOwnerExpensesTypes, getSingleOwnerExpensesTypes, updateOwnerExpensesTypes } from "@/services/ownerExpensesTypesService";
import { lazy } from "react";
const OwnerExpensesTypeForm = lazy(() => import('@/components/forms/containers/owner/OwnerExpensesTypeForm'));

const ownerConfig = {
  formProps: {
    defaultValue: ownerExpensesTypesDefaultValues,
    validationSchema: ownerExpensesTypesValidationSchema,
    mutationAddFunction: createOwnerExpensesTypes,
    mutationUpdateFunction: updateOwnerExpensesTypes,
    getSingleFunction: getSingleOwnerExpensesTypes,
    onSuccessAction: () => {},
    isSteps: false,
    onHandleDelete: deleteOwnerExpensesTypes,
    RenderForm: (props) => <OwnerExpensesTypeForm {...props} />,
  },
  formHeaderProps: {
    header: "owner_expenses_types",
  },
};

const OwnerExpensesType = () => {
  return (
    <PaperLayout
      name="owner_expenses_types"
      queryKey={QUERY_KEYS.OWNER_EXPENSES_TYPES}
      queryFn={getAllOwnerExpensesTypes} //
      handleDeleteSelected={deleteManyOwnerExpensesTypes} //
      paperHeaderProps={{
        header: "owner_expenses_types",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: ownerExpensesTypesColumns,
      }}
      {...ownerConfig}
    />
  );
};

export default OwnerExpensesType;
