import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  useEffect(() => {
    document.body.classList = theme;
  }, [theme]);

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
