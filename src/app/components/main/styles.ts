import styled from "styled-components";

export const MainContent = styled.main`
  background-color: ${({ theme }) => theme.primaryBackground};
  flex: 1;
  padding: 0 1rem;
`;

export const ListContainer = styled.div`
  background-color: ${({ theme }) => theme.secondaryBackground};
  margin-top: -1.825rem;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 20px 0px rgba(72, 75, 106, 0.05);
`;

export const ListElement = styled.li`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  font-size: 0.825rem;
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryHover};
  cursor: pointer;
  color: ${({ theme }) => theme.primaryText};

  svg {
    display: block;
    margin-left: auto;
    transition: 0.3s;
  }

  @media (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    padding: 1.25rem;
    font-size: 1rem;
    > svg {
      opacity: 0;
    }

    &:hover {
      svg {
        opacity: 1;
      }
    }
  }
`;

export const CheckedTask = styled.p`
  text-decoration: line-through;
  opacity: 0.3;
`;

export const ListStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: 0.825rem;
  color: ${({ theme }) => theme.secondaryText};
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

export const DesktopFiltersList = styled.nav`
  display: flex;
  gap: 0.75rem;
`;

export const MobileFiltersList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;
  padding: 1rem 0;
  margin-top: 1rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.secondaryBackground};
  box-shadow: 0px 0px 20px 0px rgba(72, 75, 106, 0.05);
`;

export const FilterButton = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryText};

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

export const DragAndDropInfo = styled.div`
  margin: 3rem 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.secondaryText};
`;

export const LoadingState = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
