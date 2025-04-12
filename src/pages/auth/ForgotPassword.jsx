import PATHS from "@/data/paths";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { forgotPasswordService } from "@/services/authService";
import { RHFInput } from "@/components/forms/fields";
import Btn from "@/components/shared/Btn";
import BottomNavigationMessage from "@/components/differentPagesComponents/BottomNavigationMessage";

const forgotPasswordSchema = z.object({
  email: z.string().email(z.REQUIRED_STRING),
});

const defaultValue = {
  email: "",
};

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("auth");

  const methods = useForm({
    defaultValue,
    resolver: zodResolver(forgotPasswordSchema),
  });

  const {
    setFocus,
    handleSubmit,
    // left to show error messages when using getFieldState
    // eslint-disable-next-line no-unused-vars
    formState: { errors, isDirty },
  } = methods;

  const { mutate, isPending } = useMutation({
    mutationFn: forgotPasswordService,
    onSuccess: () => {
      toast.success(t("forgotPassword"));
      navigate(PATHS.LOGIN);
    },
  });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const handleSubmitFunc = (data) => mutate(data.email);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleSubmitFunc)}>
        <h1 className="text-2xl text-center font-semibold mb-2">{t('forgetPassword')}</h1>

        <RHFInput
          type="email"
          name="email"
          label="email"
          placeholder="emailPlaceholder"
          col
        />
        <Btn
          kind="primary"
          disabled={!isDirty}
          isLoading={isPending}
          containerClassName="text-center justify-center mt-4 w-full"
        >
          {t("sendEmail")}
        </Btn>
        <BottomNavigationMessage
          link={PATHS.LOGIN}
          linkText={t("login")}
          message={t("rememberedPassword")}
        />
      </form>
    </FormProvider>
  );
};

export default ForgotPassword;
