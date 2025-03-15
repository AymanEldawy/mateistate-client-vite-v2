import { useTranslation } from "react-i18next";
// import { BarLoader } from "react-spinners";

const LoadingPage = () => {
  const { t } = useTranslation()
  return (
    <div className="loading-page">
      <div className="loading-page-spinner">
        {/* <BarLoader color="#E264AD" /> */}
        <span className="loading" style={{ color: '#E264AD' }} >{t("loading")}</span>
      </div>
    </div>
  );
};

export default LoadingPage;
