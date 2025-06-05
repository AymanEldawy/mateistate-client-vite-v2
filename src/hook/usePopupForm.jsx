import { createContext, useContext, useState } from "react";

export const PopupFormContext = createContext();

export const PopupFormProvider = ({ children }) => {
  const [stack, setStack] = useState({})
  const [popupFormConfig, setPopupFormConfig] = useState(null);

  const handleDispatchForm = (form) => {
    setStack({
      [form.table]: form
    })
    setPopupFormConfig(form);
  };

  console.log(stack,'stack');

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
