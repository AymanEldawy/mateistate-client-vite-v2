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
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {};

const categoryConfig = {
  formProps: {
    defaultValue,
    validationSchema: categoryValidationSchema,
    mutationAddFunction: () => {},
    mutationUpdateFunction: () => {},
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteAccount,
    RenderForm: (props) => <CategoryForm {...props} />,
  },
  formHeaderProps: {
    header: "category",
  },
  formPaginationProps: {
    name: "category",
    number: 1,
  },
};

const Category = () => {
  return (
    <PaperLayout
      name="category"
      queryKey={QUERY_KEYS.CATEGORY}
      queryFn={getAllAccounts} //
      handleDeleteSelected={deleteManyAccounts} //
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
