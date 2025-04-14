import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import { lessorValidationSchema } from "@/helpers/lessor/lessorValidationSchema";
import LessorForm from "@/components/forms/containers/LessorForm";
import lessorColumns from "@/helpers/lessor/lessorColumns";
import { createLessor, deleteLessor, deleteManyLessor, getAllLessors, updateLessor } from "@/services/lessorService";
// import QUERY_KEYS from './../../../data/queryKeys';

const defaultValue = {};

const lessorConfig = {
  formProps: {
    defaultValue,
    validationSchema: lessorValidationSchema,
    mutationAddFunction: createLessor,
    mutationUpdateFunction: updateLessor,
    onSuccessAction: () => {},
    isSteps: true,
    onHandleDelete: deleteLessor,
    RenderForm: (props) => <LessorForm {...props} />,
  },
  formHeaderProps: {
    header: "Lessor",
  },
  formPaginationProps: {
    name: "Lessor",
    number: 1,
  },
};

const Lessor = () => {
  // if (formOnly) {
  //   return <FormWrapper {...accountConfig} outerClose={outerClose} />;
  // }
  // const navigate = useNavigate();

  return (
    <PaperLayout
      name="Lessor"
      queryKey={QUERY_KEYS.Lessor}
      queryFn={getAllLessors} //
      handleDeleteSelected={deleteManyLessor} //
      paperHeaderProps={{
        header: "Lessor",
      }}
      paperBarProps={{
        onClickPrint: true,
        onClickAdd: true,
      }}
      tableProps={{
        columns: lessorColumns,
      }}
      {...lessorConfig}
    />
  );
};

export default Lessor;
