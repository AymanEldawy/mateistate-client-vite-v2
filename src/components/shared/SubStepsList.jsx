import { useTranslation } from "react-i18next";

export const SubStepsList = ({ steps, activeStage, goTo }) => {
  const { t } = useTranslation();

  return (
    <div className="flex text-xs overflow-auto shadow text-left mb-4 bg-gray-200">
      {steps?.map((step, index) => (
        <button
          type="button"
          onClick={() => goTo(index)}
          key={step}
          className={`${activeStage === index
              ? "!font-medium !bg-gray-800 border-gray-300 text-white"
              : ""
            } p-2 px-4 text-gray-500 dark:text-gray-200 font-normal flex-1 capitalize whitespace-nowrap  ltr:text-left rtl:text-right transition-all duration-100`}
        >
          {t(step)}
        </button>
      ))}
    </div>
  );
};
