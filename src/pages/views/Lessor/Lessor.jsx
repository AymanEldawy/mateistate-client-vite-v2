import QUERY_KEYS from "@/data/queryKeys";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
import { lessorDefaultValue, lessorValidationSchema } from "@/helpers/lessor/lessorValidationSchema";
import LessorForm from "@/components/forms/containers/LessorForm";
import lessorColumns from "@/helpers/lessor/lessorColumns";
import {
  createLessor,
  deleteLessor,
  deleteManyLessor,
  getAllLessors,
  getSingleLessor,
  updateLessor,
} from "@/services/lessorService";
import FormWrapper from "@/components/forms/wrapper/FormWrapper";


const lessorConfig = {
  formProps: {
    defaultValue: lessorDefaultValue,
    validationSchema: lessorValidationSchema,
    mutationAddFunction: createLessor,
    mutationUpdateFunction: updateLessor,
    getSingleFunction: getSingleLessor,
    onSuccessAction: () => { },
    isSteps: false,
    onHandleDelete: deleteLessor,
    RenderForm: (props) => <LessorForm {...props} />,
  },
  formHeaderProps: {
    header: "Lessor",
  },
};

const Lessor = ({ formOnly, outerClose, defaultNumber }) => {

  if (formOnly) {
    return <FormWrapper
      {...lessorConfig}
      outerClose={outerClose}
      numberSearchParam={defaultNumber}
    />;
  }

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
