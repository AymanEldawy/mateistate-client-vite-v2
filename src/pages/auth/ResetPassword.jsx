import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ERROR_MESSAGES from "@/helpers/FORM_ERROR_MESSAGES";
import { zodResolver } from "@hookform/resolvers/zod";
import useCustomSearchParams from "@/hook/useCustomSearchParams";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { resetPasswordService } from "@/services/authService";
import { RHFPasswordInput } from "@/components/forms/fields";
import Btn from "@/components/shared/Btn";

const resetPasswordSchema = z.object({
  new_password: z.string().min(8, z.REQUIRED_STRING),
  confirm_new_password: z.string().min(8, z.REQUIRED_STRING),
});

const defaultValue = {
  new_password: "",
  confirm_new_password: "",
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("toastMessages");
  const resetToken = useCustomSearchParams("resetToken");

  const methods = useForm({
    defaultValue,
    resolver: zodResolver(resetPasswordSchema),
  });

  const {
    setFocus,
    handleSubmit,
    // left to show error messages when using getFieldState
    // eslint-disable-next-line no-unused-vars
    formState: { errors, isDirty },
  } = methods;

  const { mutate, isPending } = useMutation({
    mutationFn: resetPasswordService,
    onSuccess: () => {
      toast.success(t("passwordUpdate"));
      navigate("/login");
    },
  });

  useEffect(() => {
    setFocus("password");
  }, [setFocus]);

  const handleSubmitFunc = (data) => {
    mutate({
      ...data,
      reset_token: resetToken,
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleSubmitFunc)}>
        <h1 className="text-2xl text-center font-semibold mb-2">{t('resetPassword')}</h1>
        <RHFPasswordInput
          isPassword
          label="newPassword"
          name="new_password"
          extraMessage={ERROR_MESSAGES.PASSWORD}
        />
        <RHFPasswordInput
          label="confirmPassword"
          name="confirm_new_password"
          extraMessage={ERROR_MESSAGES.INVALID_CONFIRM_PASSWORD}
        />
        <Btn
          kind="primary"
          disabled={!isDirty}
          isLoading={isPending}
          containerClassName="text-center justify-center mt-4"
          type="submit"
        >
          {t("updatePassword")}
        </Btn>
      </form>
    </FormProvider>
  );
};

export default ResetPassword;
