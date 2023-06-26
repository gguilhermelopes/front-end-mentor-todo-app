"use client";

import { useContext, useMemo } from "react";
import Header from "./components/header";
import Main from "./components/main";
import { DarkThemeContext } from "@/context/themeContext";
import { ThemeProvider } from "styled-components";
import themes from "@/themes";
import DefaultProviders from "./components/default-providers";

export default function Home() {
  const { theme } = useContext(DarkThemeContext);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.light;
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <DefaultProviders>
        <Header />
        <Main />
      </DefaultProviders>
    </ThemeProvider>
  );
}
