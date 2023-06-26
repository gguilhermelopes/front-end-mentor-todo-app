"use client";

import { ReactNode, useContext, useMemo } from "react";
import { TasksProvider } from "@/context/tasksContext";
import { DarkThemeProvider } from "@/context/themeContext";
import GlobalStyle from "../../styles/globals";

interface DefaultProvidersProps {
  children: ReactNode;
}

const DefaultProviders = ({ children }: DefaultProvidersProps) => {
  return (
    <TasksProvider>
      <DarkThemeProvider>
        <GlobalStyle />
        {children}
      </DarkThemeProvider>
    </TasksProvider>
  );
};

export default DefaultProviders;
