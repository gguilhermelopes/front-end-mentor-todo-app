import { lightThemeColors } from "@/helpers/colors";
import styled from "styled-components";

export const MainContent = styled.main`
  background-color: ${lightThemeColors.veryLightGrayishBlue};
  flex: 1;
  padding: 0 1rem;
`;

export const ListContainer = styled.div`
  background-color: ${lightThemeColors.veryLightGray};
  margin-top: -1.825rem;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 20px 0px rgba(72, 75, 106, 0.05);
`;

export const ListElement = styled.li`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0 1rem 1rem;
  font-size: 0.825rem;
  font-weight: 500;
  border-bottom: 1px solid ${lightThemeColors.veryLightGrayishBlue};
`;

export const ListStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: 0.825rem;
  color: ${lightThemeColors.darkGrayishBlue};
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  color: inherit;
  cursor: pointer;
`;
