import themes from "@/themes";
import { ReactNode, createContext, useMemo, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const DarkThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});

const DarkThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <DarkThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export { DarkThemeContext, DarkThemeProvider };
