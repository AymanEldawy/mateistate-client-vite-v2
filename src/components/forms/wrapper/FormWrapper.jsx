import ConfirmModal from "@/components/shared/ConfirmModal";
import Loading from "@/components/shared/Loading";
import SEARCH_PARAMS from "@/data/searchParamsKeys";
import useCustomSearchParams from "@/hook/useCustomSearchParams";
import useFormPagination from "@/hook/useFormPagination";
import usePathname from "@/hook/usePathname";
import { cleanObject } from "@/utils/functions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FormSingularLayout, FormStepsLayout, FormWarnModal } from ".";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

const FormWrapper = ({
  defaultValue,
  invalidateQueryKeyOnSuccess,
  onSuccessAction,
  outerClose,
  formHeaderProps,
  formFooterProps,
  formSidebarProps,
  formProps,
  onClose,
  queryKey,
  name,
  numberSearchParam,
  codeSearchParam,
  oldValues,
  refetch,
  onInsertDispatchedForm,
  handleRefetchOnChangeData,
  ...props
}) => {
  const navigate = useNavigate();
  const pathname = usePathname();
  const [searchParams] = useSearchParams();
  const searchParamsSelectedNumber = useCustomSearchParams(
    SEARCH_PARAMS.NUMBER
  );
  const searchParamsSelectedCode = useCustomSearchParams(SEARCH_PARAMS.CODE);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const queryClient = useQueryClient();
  const { t: tToast } = useTranslation("toastMessages");
  const [preventClose, setPreventClose] = useState(false);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(formSidebarProps?.list?.[0]);
  const methods = useForm({
    defaultValues: formProps?.defaultValue,
    // resolver: zodResolver(validationSchema),
    mode: "onBlur",
    resolver: zodResolver(
      typeof formProps?.validationSchema === "function"
        ? formProps?.validationSchema(tab, setTab)
        : formProps?.validationSchema
    ),
  });

  const {
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting, isLoading, isDirty, errors, dirtyFields },
  } = methods;

  const paginationForm = useFormPagination({
    name,
    number: refetch ? searchParamsSelectedNumber : numberSearchParam,
    code: refetch ? searchParamsSelectedCode : codeSearchParam,
    reset,
    defaultValue: formProps?.defaultValue,
  });

  const { data: oldData, refetch: refetchCurrent } = useQuery({
    queryKey: [queryKey, "single", paginationForm?.currentId],

    queryFn: async () => {
      if (!paginationForm?.currentId) return;
      const response = await formProps?.getSingleFunction(
        paginationForm?.currentId
      );
      if (response?.success) {
        reset(response, { keepDirty: false });
        setPreventClose(false);
        return response;
      } else {
        reset(defaultValue, { keepDirty: false });
        setPreventClose(false);
      }
    },
    enabled: !!paginationForm?.currentId,
  });

  const id =
    paginationForm?.currentId || oldData?.id || formProps?.defaultValue?.id;

  console.log(errors, "errors");

  const { mutateAsync } = useMutation({
    mutationFn: (data) => {
      if (id) {
        return formProps?.mutationUpdateFunction(id, data);
      } else {
        return formProps?.mutationAddFunction(data);
      }
    },
    onSuccess: (response) => {
      toast.success(id ? tToast("successUpdate") : tToast("successInsert"));
      queryClient.invalidateQueries();
      if (invalidateQueryKeyOnSuccess) {
        queryClient.invalidateQueries(invalidateQueryKeyOnSuccess);
      }
      onSuccessAction?.(response);
      if (onInsertDispatchedForm) {
        onInsertDispatchedForm(response);
      }

      if (handleRefetchOnChangeData) {
        handleRefetchOnChangeData();
      }
      if (outerClose) outerClose();
      onClose();
    },
  });

  const removeSearchParams = () => {
    if (!refetch) return;
    const newSearchParams = new URLSearchParams(searchParams);
    if (numberSearchParam) newSearchParams.delete(SEARCH_PARAMS.NUMBER);
    if (codeSearchParam) newSearchParams.delete(SEARCH_PARAMS.CODE);

    navigate(
      {
        pathname,
        search: newSearchParams.toString(), // Empty string if no params left
      },
      { replace: true } // Replace current history entry
    );
  };

  useEffect(() => {
    if (oldValues) {
      reset(oldValues);
    }
  }, [oldValues]);

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === "change") {
        setPreventClose(true);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // const handleSubmitErrors = useHandleSubmissionErrors({
  //   errors,
  //   selectedLangTab,
  //   onChangeLangTab,
  //   showLanguageBtns,
  // });

  const handleOnClose = () => {
    if (!preventClose) {
      if (onClose) onClose();
      if (outerClose) outerClose();
      removeSearchParams();
      return;
    }
    setOpen(true);
  };

  const handleDelete = async () => {
    try {
      const response = await formProps?.onHandleDelete(id);
      if (response?.success) {
        toast.success(tToast("successDelete"));
        if (refetch) refetch();
        onClose();
      }
    } catch (error) {
      toast.error(tToast("failedDelete"));
      console.log(error);
    }
  };

  const handleSubmitFunc = async (data) => {
    if (!isDirty) return toast.warn(tToast("formDirty"));
    try {
      await mutateAsync(cleanObject(data));
      id ? reset(data) : reset();
      setPreventClose(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(errors, "errors in form wrapper");
  console.log(watch(), "watch");

  const resetFormHandler = () => reset(defaultValue);

  return (
    <>
      {isLoading || isSubmitting ? <Loading /> : null}
      <FormWarnModal
        open={open}
        onCancel={() => setOpen(false)}
        onConfirmClose={() => {
          setOpen(false);
          if (onClose) onClose();
          if (outerClose) outerClose();
          removeSearchParams();
        }}
      />
      <ConfirmModal
        onConfirm={handleDelete}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(handleSubmitFunc)}
          noValidate
          autoComplete="off"
        >
          <FormHeader {...formHeaderProps} onClose={handleOnClose} />
          {formProps?.isSteps ? (
            <FormStepsLayout
              tab={tab}
              setTab={setTab}
              formSidebarProps={formSidebarProps}
              paginationForm={paginationForm}
              code={codeSearchParam}
              refetch={refetch}
              refetchCurrent={refetchCurrent}
              {...props}
              {...formProps}
            />
          ) : (
            <FormSingularLayout
              paginationForm={paginationForm}
              code={codeSearchParam}
              codeSearchParam={codeSearchParam}
              refetch={refetch}
              refetchCurrent={refetchCurrent}
              {...props}
              {...formProps}
            />
          )}
          <FormFooter
            resetFormHandler={resetFormHandler}
            paginationForm={paginationForm}
            isLoading={isLoading}
            setOpenConfirmation={setOpenConfirmation}
            {...formFooterProps}
          />
        </form>
      </FormProvider>
    </>
  );
};

export default FormWrapper;
