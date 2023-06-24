"use client";

import MoonIcon from "./moon-icon";
import InputCheckbox from "./input-checkbox";
import {
  HeaderWrapper,
  Logo,
  MainHeader,
  TitleWrapper,
  ToggleThemeButton,
} from "./styles";

const Header = () => {
  return (
    <MainHeader>
      <HeaderWrapper>
        <TitleWrapper>
          <Logo>Todo</Logo>
          <ToggleThemeButton>
            <MoonIcon />
          </ToggleThemeButton>
        </TitleWrapper>
        <InputCheckbox />
      </HeaderWrapper>
    </MainHeader>
  );
};

export default Header;
