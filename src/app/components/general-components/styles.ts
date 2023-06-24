import { lightThemeColors, primaryColors } from "@/helpers/colors";
import styled from "styled-components";

export const CheckboxInput = styled.input.attrs({
  type: "checkbox",
})`
  display: flex;
  margin: 0 1rem;
  appearance: none;
  width: 1.525rem;
  height: 1.4rem;
  border-radius: 50%;
  border: 0.5px solid ${lightThemeColors.lightGrayishBlue};
  cursor: pointer;
  outline: none;

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
