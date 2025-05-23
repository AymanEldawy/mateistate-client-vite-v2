
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { loginService } from "@/services/authService";
import { RHFInput, RHFPasswordInput } from "@/components/forms/fields";
import Btn from "@/components/shared/Btn";
import { Link } from "react-router-dom";
import PATHS from "@/data/paths";
import Checkbox from "@/components/shared/Checkbox";
import Cookies from "js-cookie";
import { MATEI_ACCESS_TOKEN, MATEI_REFRESH_TOKEN, MATEI_LOCAL_STORAGE_USER_KEY } from "@/data/constants";
import useGlobalOptions from "@/hook/useGlobalOptions";

const loginSchema = z.object({
  email: z.string().email({ message: 'invalidEmail' }).min(1, { message: 'requiredEmail' }),
  password: z.string().min(5, { message: 'requiredPassword' }),
});

const loginDefaultValue = {
  email: "",
  password: "",
};

const Login = () => {
  const { t } = useTranslation("login");
  const { setUser } = useGlobalOptions()
  const [rememberMe, setRememberMe] = useState(false);

  const methods = useForm({
    resolver: zodResolver(loginSchema),
    defaultValue: loginDefaultValue,
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
    onSuccess: (data) => {
      Cookies.set(MATEI_ACCESS_TOKEN, data?.accessToken, { expires: 7 })
      Cookies.set(MATEI_REFRESH_TOKEN, data?.refreshToken, { expires: 7 });
      localStorage.setItem(MATEI_LOCAL_STORAGE_USER_KEY, JSON.stringify(data?.profile));
      setUser(data?.profile)
      toast.success(t("loginSuccess"))
    },
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
          className="text-sm text-blue-500 hover:text-blue-700 flex justify-end"
        >
          {t("forgotPassword")}
        </Link>
        <Checkbox
          containerClassName="text-sm -mt-6 gap-[6px] !p-0"
          text={t("rememberMe")}
          onChange={(e) => setRememberMe(e.target.checked)}
          value={rememberMe}
        />

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
