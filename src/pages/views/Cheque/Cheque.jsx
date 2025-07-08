import { FormHeaderSearchBar } from "@/components/forms/wrapper";
import FormWrapper from "@/components/forms/wrapper/FormWrapper";
import BtnGroups from "@/components/shared/BtnGroups";
import EntryBar from "@/components/shared/EntryBar";
import Modal from "@/components/shared/Modal";
import QUERY_KEYS from "@/data/queryKeys";
import SEARCH_PARAMS from "@/data/searchParamsKeys";
import chequeColumns from "@/helpers/cheque/chequeColumns";
import {
  chequeDefaultValue,
  chequeValidationSchema,
} from "@/helpers/cheque/ChequeValidationSchema";
import useCustomSearchParams from "@/hook/useCustomSearchParams";
import {
  getAllChequePatterns,
  getChequePatternByCode,
} from "@/services/chequePatternsService";
import {
  createCheque,
  deleteCheque,
  getAllCheques,
  getSearchCheque,
  getSingleCheque,
  updateCheque,
} from "@/services/chequeService";
import { useQuery } from "@tanstack/react-query";
import { lazy, useMemo, useState } from "react";
import PaperLayout from "../../../components/layout/paper/PaperLayout";
const ChequeForm = lazy(() =>
  import("@/components/forms/containers/cheque/ChequeForm")
);

const Cheque = ({
  formOnly,
  outerClose,
  defaultNumber,
  defaultCode,
  popupFormConfig,
  handleRefetchOnChangeData,
}) => {
  console.log(defaultCode, handleRefetchOnChangeData, "teck");

  const searchParamsSelectedCode = useCustomSearchParams(SEARCH_PARAMS.CODE);
  const code =
    popupFormConfig?.oldValues?.code || defaultCode || searchParamsSelectedCode;
  const [openFormType, setOpenFormType] = useState(false);

  const { data: pattern } = useQuery({
    queryKey: ["pattern", "cheque", code],
    queryFn: async () => {
      const response = await getChequePatternByCode(code);
      return response;
    },
    enabled: !!code,
  });

  const chequeConfig = useMemo(
    () => ({
      name: "cheque",
      formProps: {
        defaultValue: chequeDefaultValue,
        validationSchema: chequeValidationSchema,
        mutationAddFunction: createCheque,
        mutationUpdateFunction: updateCheque,
        getSingleFunction: getSingleCheque,
        onSuccessAction: () => {},
        isSteps: false,
        onHandleDelete: deleteCheque,
        RenderForm: (props) => (
          <ChequeForm {...props} pattern={pattern} code={code} />
        ),
      },
      formHeaderProps: {
        header: pattern?.name || "Cheque",
        ExtraContentBar: ({ values }) => (
          <>
            <FormHeaderSearchBar
              getOptionLabel={(option) => option?.name}
              getOptionValue={(option) => option?.id}
              getSearch={getSearchCheque}
              queryKey={QUERY_KEYS.CHEQUE}
            />
            <EntryBar entryId={values?.id} />
          </>
        ),
      },
    }),
    [code, pattern]
  );

  if (formOnly) {
    return (
      <FormWrapper
        {...chequeConfig}
        outerClose={outerClose}
        code={code}
        numberSearchParam={defaultNumber}
        codeSearchParam={defaultCode}
        oldValues={popupFormConfig?.oldValues}
        pattern={pattern}
        handleRefetchOnChangeData={handleRefetchOnChangeData}
      />
    );
  }

  return (
    <>
      <Modal
        containerClassName="!z-[100]"
        open={openFormType}
        onClose={() => setOpenFormType(false)}
      >
        <BtnGroups
          queryFn={getAllChequePatterns}
          queryKey={QUERY_KEYS.CHEQUE_PATTERN}
          onClose={() => setOpenFormType(false)}
        />
      </Modal>
      <PaperLayout
        name="cheque"
        queryKey={QUERY_KEYS.CHEQUE}
        queryFn={getAllCheques}
        // handleDeleteSelected={deleteManyCheques}
        paperHeaderProps={{
          header: pattern?.name,
        }}
        paperBarProps={{
          onClickPrint: true,
          customAdd: () => setOpenFormType(true),
        }}
        tableProps={{
          columns: chequeColumns,
        }}
        {...chequeConfig}
      />
    </>
  );
};

export default Cheque;
