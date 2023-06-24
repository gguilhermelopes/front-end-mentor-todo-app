import { lightThemeColors } from "@/helpers/colors";
import styled from "styled-components";

export const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
  background: url("./images/bg-mobile-light.jpg") no-repeat center;
  background-size: cover;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

export const Logo = styled.h1`
  font-size: 1.375rem;
  font-weight: 600;
  color: ${lightThemeColors.veryLightGray};
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;

export const ToggleThemeButton = styled.button`
  fill: ${lightThemeColors.veryLightGray};
  display: block;
  border: none;
  background: none;
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
  padding: 1rem 0rem;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 0.825rem;
  font-weight: 500;
  color: ${lightThemeColors.veryDarkGrayishBlue};

  &::placeholder {
    color: ${lightThemeColors.darkGrayishBlue};
  }
`;
