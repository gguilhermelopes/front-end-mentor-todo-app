"use client";
import { GeneralContainer } from "@/styles/globals";
import {
  ClearButton,
  DesktopFiltersList,
  DragAndDropInfo,
  ListContainer,
  ListStatus,
  MainContent,
  MobileFiltersList,
} from "./styles";
import useMobile from "@/hooks/useMobile";
import FilterButtons from "./filter-buttons";
import TaskList from "./task-list";

const Main = () => {
  const isMobile = useMobile("(max-width:768px)");

  return (
    <MainContent>
      <GeneralContainer>
        <ListContainer>
          <TaskList />
          <ListStatus>
            <p>5 items left</p>
            {!isMobile && (
              <DesktopFiltersList>
                <FilterButtons />
              </DesktopFiltersList>
            )}
            <ClearButton>Clear Completed</ClearButton>
          </ListStatus>
        </ListContainer>
        {isMobile && (
          <MobileFiltersList>
            <FilterButtons />
          </MobileFiltersList>
        )}
        <DragAndDropInfo>
          <p>Drag and drop to reorder list</p>
        </DragAndDropInfo>
      </GeneralContainer>
    </MainContent>
  );
};

export default Main;
