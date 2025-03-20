
import { useEffect } from "react";
import spain from "@/assets/Flags/spain.svg";
import china from "@/assets/Flags/china.svg";
import french from "@/assets/Flags/french.svg";
import italy from "@/assets/Flags/italy.svg";
import germany from "@/assets/Flags/germany.svg";
import us from "@/assets/Flags/us.svg";
import russia from "@/assets/Flags/russia.svg";
import arabic from "@/assets/Flags/arabic.webp";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = {
  en: { lang: "en", flag: us, name: "English" },
  ar: { lang: "ar", flag: arabic, name: "Arabic" },
  sp: { lang: "sp", flag: spain, name: "Española" },
  fr: { lang: "fr", flag: french, name: "français" },
  de: { lang: "de", flag: germany, name: "Deutsche" },
  ru: { lang: "ru", flag: russia, name: "русский" },
  ch: { lang: "ch", flag: china, name: "中国人" },
  it: { lang: "it", flag: italy, name: "Italian" },
};
const LanguageBar = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (i18n?.language) setSelectedLang(languages?.[i18n?.language]);
  }, [i18n?.language]);

  useEffect(() => {
    if (selectedLang?.lang === "ar") document.body.dir = "rtl";
    else document.body.dir = "ltr";
  }, [selectedLang]);

  const changeLanguage = (lang) => {
    // setSelectedLang(languages?.[lang]);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="relative">
      <div
        className="rounded-full flex items-center justify-center hover:bg-[#0002] relative h-10 w-10"
        onClick={() => setOpen(p => !p)}
      >
        <img
          src={selectedLang?.flag}
          alt={selectedLang?.name}
          className="w-7 h-7 block object-cover rounded-full"
        />
       
      </div>

      {open ? (
        <ul className="absolute bg-white left-0 p-3 px-6 min-w-[200px] dark:bg-dark-bg shadow rounded-md top-12 z-50 text-gray-500 text-sm flex flex-col gap-3">
          {Object.values(languages)
            ?.sort((a, b) => a?.lang.localeCompare(b?.lang))
            ?.map((language) => (
              <li
                key={language?.name}
                onClick={() => {
                  changeLanguage(language?.lang);
                  setOpen(false);
                }}
                className="flex items-center gap-4 cursor-pointer font-medium hover:text-gray-900 dark:hover:text-gray-200"
              >
                <img
                  className="w-4 h-4"
                  src={language?.flag}
                  alt={language?.name}
                />
                {language?.name}
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
};

export default LanguageBar;
