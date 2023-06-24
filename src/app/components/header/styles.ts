import { lightThemeColors } from "@/helpers/colors";
import styled from "styled-components";

export const MainHeader = styled.header`
  padding: 3rem 1rem;
  background: url("./images/bg-mobile-light.jpg") no-repeat center;
  background-size: cover;

  @media (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    padding: 4rem 0 5rem 0;
  }
  @media (min-width: ${({ theme }) => theme.backgroundBreakpoint}) {
    background-image: url("./images/bg-desktop-light.jpg");
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    max-width: 35rem;
    margin: 0 auto;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

export const Logo = styled.h1`
  font-size: 1.375rem;
  font-weight: 700;
  color: ${lightThemeColors.veryLightGray};
  letter-spacing: 0.5rem;
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 2rem;
  }
`;

export const ToggleThemeButton = styled.button`
  fill: ${lightThemeColors.veryLightGray};
  display: block;
  border: none;
  background: none;
  cursor: pointer;
`;

export const InputWrappers = styled.div`
  display: flex;
  align-items: center;
  background-color: ${lightThemeColors.veryLightGray};
  border-radius: 0.25rem;
  overflow: hidden;
`;

export const NewTaskInput = styled.input`
  width: 100%;
  padding: 1rem 0;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 0.825rem;
  font-weight: 500;
  color: ${lightThemeColors.veryDarkGrayishBlue};

  &::placeholder {
    color: ${lightThemeColors.darkGrayishBlue};
  }
  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    padding: 1.25rem 0;
    font-size: 1rem;
  }
`;
