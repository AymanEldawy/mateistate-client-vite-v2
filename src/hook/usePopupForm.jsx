import { createContext, useContext, useState } from "react";

export const PopupFormContext = createContext();

export const PopupFormProvider = ({ children }) => {
  const [stack, setStack] = useState({})
  const [open, setOpen] = useState(false);

  const handleDispatchForm = (form) => {    
    setStack({
      [form.table]: form
    })
    setOpen(true);
  };

  const onCloseDispatchedForm = (item) => {    
    const newStack = stack;
    delete newStack[item];
    setStack(newStack)
    if(!Object.keys(newStack).length) {
      setOpen(false);
    }
  }
  
  return (
    <PopupFormContext.Provider
      value={{
        handleDispatchForm,
        onCloseDispatchedForm,
        stack,
        open
      }}
    >
      {children}
    </PopupFormContext.Provider>
  );
};

export const usePopupForm = () => {
  return useContext(PopupFormContext);
};
