"use client";

import MoonIcon from "./moon-icon";
import InputCheckbox from "./input-checkbox";
import { Logo, MainHeader, TitleWrapper, ToggleThemeButton } from "./styles";
import { GeneralContainer } from "@/styles/globals";

const Header = () => {
  return (
    <MainHeader>
      <GeneralContainer>
        <TitleWrapper>
          <Logo>Todo</Logo>
          <ToggleThemeButton>
            <MoonIcon />
          </ToggleThemeButton>
        </TitleWrapper>
        <InputCheckbox />
      </GeneralContainer>
    </MainHeader>
  );
};

export default Header;
