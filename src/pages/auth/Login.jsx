
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { loginService } from "@/services/authService";
import { RHFInput, RHFPasswordInput } from "@/components/forms/fields";
import Btn from "@/components/shared/Btn";
import LoginRememberMe from "@/components/differentPagesComponents/LoginRememberMe";
import { Link } from "react-router-dom";
import PATHS from "@/data/paths";

const loginSchema = z.object({
  email: z.string().email(z.REQUIRED_STRING),
  password: z.string().min(8, z.REQUIRED_STRING),
});

const dummydefaultValue = {
  email: "",
  password: "",
};

const Login = () => {
  const { t } = useTranslation("login");
  // const { rememberMe } = useSelector((state) => state.auth);

  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValue: dummydefaultValue,
  });

  const {
    setFocus,
    handleSubmit,
    // left to show error messages when using getFieldState
    // eslint-disable-next-line no-unused-vars
    formState: { errors, isDirty },
  } = methods;

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const { mutate, isPending } = useMutation({
    mutationFn: loginService,
    onSuccess: () => toast.success(t("loginSuccess")),
  });

  const handleSubmitFunc = async (data) => {
    // data.remember_me = rememberMe;
    data.remember_me = false;
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleSubmitFunc)} className="flex flex-col gap-2">
        <h1 className="text-2xl text-center font-semibold mb-2">{t('login')}</h1>
        <RHFInput
          type="email"
          name="email"
          label="email"
          placeholder="emailPlaceholder"
          col
        />
        <RHFPasswordInput disableCheck />
        <Link
          to={PATHS.FORGOT_PASSWORD}
          className="text-xs text-blue-500 hover:text-blue-700 flex justify-end"
        >
          {t("forgotPassword")}
        </Link>
        <LoginRememberMe />

        <Btn
          kind="primary"
          disabled={!isDirty}
          isLoading={isPending}
          containerClassName="text-center justify-center mt-4"
          type="submit"
        >
          {t("signIn")}
        </Btn>
      </form>
    </FormProvider>
  );
};

export default Login;
