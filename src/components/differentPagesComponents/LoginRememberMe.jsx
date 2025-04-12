import { useTranslation } from "react-i18next";
import { Label } from "../forms/fields/Label";

const LoginRememberMe = () => {
  const { t } = useTranslation("login");

  const inputChangeHandler = ({ target: { checked } }) => {
    // dispatch(setRememberMe(checked));
  }

  return (
    <div className="flex items-center gap-2 -mt-6 w-fit">
      <input
        type="checkbox"
        id="login-remember-check"
        className="checkbox-input"
        onChange={inputChangeHandler}
      />
      <Label htmlFor="login-remember-check" label={t("rememberMe")} />
    </div>
  );
};

export default LoginRememberMe;
