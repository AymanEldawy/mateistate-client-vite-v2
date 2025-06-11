import { createContext, useContext, useState } from "react";

export const PopupFormContext = createContext();

export const PopupFormProvider = ({ children }) => {
  const [stack, setStack] = useState({})

  const handleDispatchForm = (form) => {
    setStack({
      [form.table]: form
    })
  };

  const onCloseDispatchedForm = (item) => {
    console.log(item, 'item');
    
    const newStack = stack;
    delete newStack[item];
    console.log(stack, 'stack', newStack, 'newStack');
    
    setStack(newStack)
  }

  console.log(stack,'---');
  

  return (
    <PopupFormContext.Provider
      value={{
        handleDispatchForm,
        onCloseDispatchedForm,
        stack,
      }}
    >
      {children}
    </PopupFormContext.Provider>
  );
};

export const usePopupForm = () => {
  return useContext(PopupFormContext);
};
