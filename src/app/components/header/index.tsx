"use client";

import MoonIcon from "./moon-icon";
import InputCheckbox from "./input-checkbox";
import { Logo, MainHeader, TitleWrapper, ToggleThemeButton } from "./styles";

const Header = () => {
  return (
    <MainHeader>
      <TitleWrapper>
        <Logo>Todo</Logo>
        <ToggleThemeButton>
          <MoonIcon />
        </ToggleThemeButton>
      </TitleWrapper>
      <InputCheckbox />
    </MainHeader>
  );
};

export default Header;
