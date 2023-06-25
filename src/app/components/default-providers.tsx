"use client";

import { ReactNode } from "react";

import GlobalStyle from "../../styles/globals";
import { TasksProvider } from "@/context/tasksContext";
import { DarkThemeContext, DarkThemeProvider } from "@/context/themeContext";

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
