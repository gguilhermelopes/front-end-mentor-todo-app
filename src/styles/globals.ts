import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
}

body {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  min-height: 100vh;
}

img {
  max-width: 100%;
  display: block;
}
`;

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopBreakpoint}) {
    max-width: 35rem;
    margin: 0 auto;
  }
`;
