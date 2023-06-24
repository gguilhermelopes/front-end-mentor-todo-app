import { lightThemeColors, primaryColors } from "@/helpers/colors";
import styled from "styled-components";

export const CheckboxInput = styled.input.attrs({
  type: "checkbox",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  border: 0.5px solid ${lightThemeColors.lightGrayishBlue};
  cursor: pointer;
  outline: none;
  user-select: none;

  &:checked {
    background: ${primaryColors.checkBackground};
    border-color: ${lightThemeColors.veryLightGray};
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background: url("./images/icon-check.svg") no-repeat center;
    }
  }
`;
