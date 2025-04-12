import { useTranslation } from "react-i18next";

const CopyRight = ({ className }) => {
  const { t } = useTranslation("footer");

  return (
    <p className={`${className ?? ""} mb-0 text-muted copyright`}>
      {t("copyright")} &copy; {new Date().getFullYear()}{" "}
      <span className="company">{t("company")}</span> {t("createdBy")}{" "}
      <a
        target="_blank"
        className="wnt-link"
        rel="noopener noreferrer"
        href="https://whynot-tech.com"
      >
        whynot-tech.com
      </a>
    </p>
  );
};

export default CopyRight;
