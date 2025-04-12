import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@/components/Icons";
import { RHFInput } from ".";

const RHFPasswordInput = ({
  watch,
  disabled,
  register,
  isPassword,
  extraMessage,
  disableCheck,
  getFieldState,
  name = "password",
  label = "password",
  containerClassName,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibilityHandler = () =>
    setIsPasswordVisible((prev) => !prev);

  const showPasswordIndicator = !disableCheck && isPassword;

  const passwordValue = watch?.(name);

  return (
    <div className="relative">
      <RHFInput
        name={name}
        label={label}
        disabled={disabled}
        register={register}
        value={passwordValue}
        extraMessage={extraMessage}
        getFieldState={getFieldState}
        placeholder="passwordPlaceholder"
        containerClassName={containerClassName}
        showPasswordIndicator={showPasswordIndicator}
        type={isPasswordVisible ? "text" : "password"}
        alwaysShowExtraMessage={showPasswordIndicator}
        col
      />
      <button
        type="button"
        className="right-2 top-[26px] absolute w-fit bg-transparent border-none outline-none"
        onClick={togglePasswordVisibilityHandler}
      >
        {isPasswordVisible ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon color="#878a99" className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default RHFPasswordInput;
