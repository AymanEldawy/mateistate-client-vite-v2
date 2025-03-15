import usFlag from "../assets/flags/us.svg";
import trFlag from "../assets/flags/tr.svg";
// import aeFlag from "../assets/flags/ae.svg";

export const WEBSITE_LANGUAGES_CODES = {
  ENGLISH: "en",
  // TURKISH: "tr",
  // ARABIC: "ar",
};

export const WEBSITE_LANGUAGES_ARRAY = [
  WEBSITE_LANGUAGES_CODES.ENGLISH,
  // WEBSITE_LANGUAGES_CODES.TURKISH,
  // WEBSITE_LANGUAGES_CODES.ARABIC,
];

export const WEBSITE_LANGUAGES = {
  [WEBSITE_LANGUAGES_CODES.ENGLISH]: {
    flag: usFlag,
    name: "english",
  },
  // [WEBSITE_LANGUAGES_CODES.TURKISH]: {
  //   flag: trFlag,
  //   name: "turkish",
  // },
  // [WEBSITE_LANGUAGES_CODES.ARABIC]: {
  //   flag: aeFlag,
  //   name: "arabic",
  // },
};

export const DATA_LANGUAGE_FILTER_OPTIONS = [
  {
    value: "",
    label: "all",
  },
  {
    value: "en",
    label: "English",
  },
  // {
  //   value: "tr",
  //   label: "Turkish",
  // },
  // {
  //   value: "ar",
  //   label: "Arabic",
  // },
];
