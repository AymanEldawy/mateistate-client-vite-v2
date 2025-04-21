

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
  queryKey,
  findAll,
  name
}) => {
  const { popupFormConfig, onCloseDispatchedForm } = usePopupForm()
  const [tab, setTab] = useState(formSidebarProps?.list?.[0]);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const queryClient = useQueryClient();
  const { t: tToast } = useTranslation("toastMessages");
  const paginationForm = useFormPagination(findAll, formProps?.getSingleFunction, name)
  const [open, setOpen] = useState(false)
  const isUpdate = true
  const id = paginationForm?.currentId || ''

  const { data: oldData } = useQuery({
    queryKey: [queryKey, 'single', id],
    queryFn: async () => {
      const response = await formProps?.getSingleFunction(id)
      if (response?.success) {
        // reset(response?.data)
        reset(response)
        return response
      } else {
        reset(defaultValue)
      }
    },
    enabled: !!id,
  })


  const methods = useForm({
    defaultValues: defaultValue,
    // resolver: zodResolver(validationSchema),
    mode: "onBlur",
    resolver: zodResolver(typeof formProps?.validationSchema === 'function' ? formProps?.validationSchema(tab, setTab) : formProps?.validationSchema),
  });

  const {
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting, isLoading, isDirty, errors, dirtyFields },
  } = methods;

  console.log(watch(), 'watch');
  console.log(errors, 'errors');


  const { mutateAsync } = useMutation({
    mutationFn: (data) => {
      console.log("🚀 ~ call update:", oldData)
      if (oldData?.id) {
        return formProps?.mutationUpdateFunction(oldData?.id, data)
      } else {
        return formProps?.mutationAddFunction(data)
      }
    },
    onSuccess: (response) => {
      toast.success(isUpdate ? tToast('successUpdate') : tToast('successInsert'));
      queryClient.invalidateQueries();
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

  const handleSubmitFunc = async (data) => {
    console.log("🚀 ~ handleSubmitFunc ~ data:", data)
    // if (!isDirty) return toast.warn(tToast('formDirty'))
    try {

      const dataToSubmit = onHandlingDataBeforeSubmit
        ? onHandlingDataBeforeSubmit({ ...data })
        : data;
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

  const handleDelete = async () => {
    try {
      const response = await formProps?.onHandleDelete(oldData?.id)
      if (response?.success) {
        toast.success(tToast('successDelete'))
        queryClient.invalidateQueries();
        if (invalidateQueryKeyOnSuccess) {
          queryClient.invalidateQueries(invalidateQueryKeyOnSuccess);
        }
        onSuccessAction?.(response?.data);
        onClose()
      }
    } catch (error) {
      console.log(error);
    }
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
        onConfirm={handleDelete}
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
