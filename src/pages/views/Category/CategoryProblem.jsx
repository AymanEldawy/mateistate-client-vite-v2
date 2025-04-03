import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount,
  deleteManyAccounts,
  getAllAccounts,
} from "@/services/accountService";
import { categoryProblemValidationSchema } from "@/helpers/category/categoryProblemValidationSchema";
import categoryProblemColumns from "@/helpers/category/categoryProblemColumns";
import CategoryProblemForm from "@/components/forms/containers/category/CategoryProblemForm";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {};

const categoryProblemConfig = {
  formProps: {
    defaultValue,
    validationSchema: categoryProblemValidationSchema,
    mutationAddFunction: () => {},
    mutationUpdateFunction: () => {},
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <CategoryProblemForm {...props} />,
  },
  formHeaderProps: {
    header: "category_problem",
  },
  formPaginationProps: {
    name: "category_problem",
    number: 1,
  },
};

const CategoryProblem = () => {
  return (
    <PaperLayout
      name="category_problem"
      queryKey={QUERY_KEYS.CATEGORY_PROBLEM}
      queryFn={getAllAccounts} //
      handleDeleteSelected={deleteManyAccounts} //
      paperHeaderProps={{
        header: "material_group",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: categoryProblemColumns,
      }}
      {...categoryProblemConfig}
    />
  );
};

export default CategoryProblem;
