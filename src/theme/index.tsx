import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import THEMES from './theme.json';

type ThemeType = 'dark' | 'light';

interface Theme {
  primary: string;
  secondary: string;
  background: string;
}

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'light',
  theme: THEMES.light,
  setCurrentTheme: () => {},
});

ThemeContext.displayName = 'ThemeProvider';

const ThemeProvider = ({children}: any) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
