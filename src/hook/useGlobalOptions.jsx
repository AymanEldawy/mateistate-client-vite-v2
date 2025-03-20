import { createContext, useContext, useEffect, useState } from "react";

export const GlobalOptions = createContext(null);

export const GlobalOptionsProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("dark");
  const [open, setOpen] = useState(false);

  let resize = () => {
    if (window.innerWidth > 1024 && open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // const { get } = useCurd();
  // const { data: currencies } = useQuery({
  //   queryKey: ['list', 'currency'],
  //   queryFn: async () => {
  //     const res = await get('currency');
  //     return res?.result
  //   }
  // })

  return (
    <GlobalOptions.Provider
      value={{
        user,
        setUser,
        mode,
        setMode,
        open,
        setOpen,
        // currencies
      }}
    >
      {children}
    </GlobalOptions.Provider>
  );
};

const useGlobalOptions = () => useContext(GlobalOptions);

export default useGlobalOptions;
