"use client";

import { ReactNode } from "react";
import { TasksProvider } from "@/context/tasksContext";
import { DarkThemeProvider } from "@/context/themeContext";

interface DefaultProvidersProps {
  children: ReactNode;
}

const DefaultProviders = ({ children }: DefaultProvidersProps) => {
  return (
    <TasksProvider>
      <DarkThemeProvider>{children}</DarkThemeProvider>
    </TasksProvider>
  );
};

export default DefaultProviders;
