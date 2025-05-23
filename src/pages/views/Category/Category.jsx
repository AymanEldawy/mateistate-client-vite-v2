import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import {
  deleteAccount,
  deleteManyAccounts,
  getAllAccounts,
} from "@/services/accountService";
import { categoryValidationSchema } from "@/helpers/category/categoryValidationSchema";
import categoryColumns from "@/helpers/category/categoryColumns";
import CategoryForm from "@/components/forms/containers/category/CategoryForm";
import {
  createCategory,
  deleteCategory,
  deleteManyCategories,
  getAllCategories,
  getSingleCategory,
  updateCategory,
} from "@/services/categoryService";
import { get } from "react-hook-form";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {
  name: "",
  description: "", // optional
  // parent_id: "91ee94c8-83b6-4384-a77c-32b283df1818", // optional uuid parent category
  // image: "", // optional
  hex: "", // optional
  ltnname: "", // optional
};

const categoryConfig = {
  formProps: {
    defaultValue,
    validationSchema: categoryValidationSchema,
    mutationAddFunction: createCategory,
    mutationUpdateFunction: updateCategory,
    getSingleFunction: getSingleCategory,
    onSuccessAction: () => {},
    isSteps: false,
    onHandleDelete: deleteCategory,
    RenderForm: (props) => <CategoryForm {...props} />,
  },
  formHeaderProps: {
    header: "category",
  },
};

const Category = () => {
  return (
    <PaperLayout
      name="category"
      queryKey={QUERY_KEYS.CATEGORY}
      queryFn={getAllCategories} //
      handleDeleteSelected={deleteManyCategories} //
      paperHeaderProps={{
        header: "category",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: categoryColumns,
      }}
      {...categoryConfig}
    />
  );
};

export default Category;
