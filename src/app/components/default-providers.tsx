"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../../styles/globals";

interface DefaultProvidersProps {
  children: ReactNode;
}

const theme = {
  desktopBreakpoint: "768px",
  backgroundBreakpoint: "600px",
};

const DefaultProviders = ({ children }: DefaultProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default DefaultProviders;
