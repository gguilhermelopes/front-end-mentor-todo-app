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
  border: 0.5px solid ${({ theme }) => theme.secondaryText};
  cursor: pointer;
  outline: none;
  user-select: none;

  &:checked {
    background: ${({ theme }) => theme.checkBackground};
    border: none;
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background: url("./images/icon-check.svg") no-repeat center;
    }
  }
`;
