

import { FormProvider, set, useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import useFormPagination from "@/hook/useFormPagination";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import { FormSingularLayout, FormStepsLayout, FormWarnModal } from ".";
import Loading from "@/components/shared/Loading";
import ConfirmModal from "@/components/shared/ConfirmModal";
import { usePopupForm } from "@/hook/usePopupForm";

const FormWrapper = ({
  // 
  defaultValue,
  validationSchema,
  mutationAddFunction,
  mutationUpdateFunction,
  onHandlingDataBeforeSubmit,
  invalidateQueryKeyOnSuccess,
  onSuccessAction,
  outerClose,
  formHeaderProps,
  formFooterProps,
  formSidebarProps,
  formProps,
  formPaginationProps,
  onClose,
  queryKey
}) => {
  const { popupFormConfig, onCloseDispatchedForm } = usePopupForm()
  const [tab, setTab] = useState(formSidebarProps?.list?.[0]);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const queryClient = useQueryClient();
  const { t: tToast } = useTranslation("toastMessages");
  const paginationForm = useFormPagination(formPaginationProps)
  const [open, setOpen] = useState(false)
  const isUpdate = true

  useQuery({
    queryKey: [queryKey, 'single', paginationForm?.currentId],
    queryFn: async () => {
      const response = formProps?.getSingleFunction(paginationForm?.currentId)
      if (response?.success) {
        reset(response?.data)
      } else {
        reset(defaultValue)
      }
    },
    enabled: !!paginationForm?.currentId,
  })


  const methods = useForm({
    defaultValues: defaultValue,
    // resolver: zodResolver(validationSchema),
    mode: "onBlur",
    // resolver: zodResolver(typeof formProps?.validationSchema === 'function' ? formProps?.validationSchema(tab, setTab): formProps?.validationSchema),
  });

  console.log('validationSchema', formProps);


  const {
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting, isLoading, isDirty, errors },
  } = methods;


  const { mutateAsync } = useMutation({
    mutationFn: (data) => {
      if (data?.id) {
        return formProps?.mutationUpdateFunction(data?.id, data)
      } else {
        return formProps?.mutationAddFunction(data)
      }
    },
    onSuccess: (response) => {
      console.log('called onSuccess');

      toast.success(isUpdate ? tToast('successUpdate') : tToast('successInsert'));
      if (invalidateQueryKeyOnSuccess) {
        queryClient.invalidateQueries(invalidateQueryKeyOnSuccess);
      }
      onSuccessAction?.(response?.data);
      if (popupFormConfig) {
        popupFormConfig?.setDefaultOption(response?.data)
        onCloseDispatchedForm()
      }
      // if(!isUpdate)
      onClose()
    },
  });


  // const handleSubmitErrors = useHandleSubmissionErrors({
  //   errors,
  //   selectedLangTab,
  //   onChangeLangTab,
  //   showLanguageBtns,
  // });

  console.log(watch(), 'watch');
  console.log(errors, 'errors');


  const handleSubmitFunc = async (data) => {
    console.log(data, 'called');
    // if (!isDirty) return toast.warn(tToast('formDirty'))
    try {

      const dataToSubmit = onHandlingDataBeforeSubmit
        ? onHandlingDataBeforeSubmit({ ...data })
        : data;
      console.log("🚀 ~ handleSubmitFunc ~ dataToSubmit:", dataToSubmit)
      // if (typeof dataToSubmit === "string") return toast.warn(t(dataToSubmit));
      await mutateAsync(dataToSubmit);
      isUpdate ? reset(data) : reset();
    } catch (error) {
      console.log(error);
    }
  };

  const resetFormHandler = () => reset(defaultValue);

  const handleOnClose = () => {
    setOpen(true)
  }

  return (
    <>
      {isLoading || isSubmitting ? <Loading /> : null}
      <FormWarnModal
        open={open}
        onCancel={() => setOpen(false)}
        onConfirmClose={() => {
          setOpen(false)
          if (onClose)
            onClose()
          if (outerClose) outerClose()
        }}
      />
      <ConfirmModal
        onConfirm={formProps?.onHandleDelete}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
      <FormProvider
        {...methods}
      >
        <form
          onSubmit={handleSubmit(handleSubmitFunc)}
          noValidate
          autoComplete="off"
        >
          <FormHeader {...formHeaderProps} onClose={handleOnClose} />
          {formProps?.isSteps ?
            <FormStepsLayout tab={tab} setTab={setTab} formSidebarProps={formSidebarProps}  {...formProps} /> : <FormSingularLayout {...formProps} />
          }
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
