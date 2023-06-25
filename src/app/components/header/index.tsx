"use client";

import MoonIcon from "./moon-icon";
import InputCheckbox from "./input-checkbox";
import { Logo, MainHeader, TitleWrapper, ToggleThemeButton } from "./styles";
import { GeneralContainer } from "@/styles/globals";
import { useContext } from "react";
import { DarkThemeContext } from "@/context/themeContext";
import SunIcon from "./sun-icon";

const Header = () => {
  const { toggleTheme, theme } = useContext(DarkThemeContext);

  return (
    <MainHeader>
      <GeneralContainer>
        <TitleWrapper>
          <Logo>Todo</Logo>
          <ToggleThemeButton onClick={toggleTheme}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </ToggleThemeButton>
        </TitleWrapper>
        <InputCheckbox />
      </GeneralContainer>
    </MainHeader>
  );
};

export default Header;
