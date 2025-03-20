import { createContext, useContext } from "react";
import { useState } from "react";

export const PopupFormContext = createContext();

export const PopupFormProvider = ({ children }) => {
  const [popupFormConfig, setPopupFormConfig] = useState(null);

  const handleDispatchForm = (form) => {
    setPopupFormConfig(form);
  };

  const onCloseDispatchedForm = () => setPopupFormConfig(null)

  return (
    <PopupFormContext.Provider
      value={{
        handleDispatchForm,
        popupFormConfig,
        onCloseDispatchedForm
      }}
    >
      {children}
    </PopupFormContext.Provider>
  );
};

export const usePopupForm = () => {
  return useContext(PopupFormContext);
};
