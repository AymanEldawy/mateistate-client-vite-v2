import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import { categoryProblemValidationSchema } from "@/helpers/category/categoryProblemValidationSchema";
import categoryProblemColumns from "@/helpers/category/categoryProblemColumns";
import CategoryProblemForm from "@/components/forms/containers/category/CategoryProblemForm";
import { createCategoryProblem, deleteCategoryProblem, deleteManyCategoryProblems, getAllCategoryProblems, getSingleCategoryProblem, updateCategoryProblem } from "@/services/categoryProblemService";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {
  description: "",
  ltndescription: "",
  isAvailable: true,
  minutes: 0,
  price: 0,
  categoryId: "",
};

const categoryProblemConfig = {
  formProps: {
    defaultValue,
    validationSchema: categoryProblemValidationSchema,
    mutationAddFunction: createCategoryProblem,
    mutationUpdateFunction: updateCategoryProblem,
    getSingleFunction: getSingleCategoryProblem,
    onSuccessAction: () => {},
    isSteps: false,
    onHandleDelete: deleteCategoryProblem,
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
      queryFn={getAllCategoryProblems} //
      handleDeleteSelected={deleteManyCategoryProblems} //
      paperHeaderProps={{
        header: "category_problem",
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
