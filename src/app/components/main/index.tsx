"use client";
import { GeneralContainer } from "@/styles/globals";
import {
  ClearButton,
  DesktopFiltersList,
  DragAndDropInfo,
  ListContainer,
  ListElement,
  ListStatus,
  MainContent,
  MobileFiltersList,
} from "./styles";
import Checkbox from "../general-components/checkbox";
import useMobile from "@/hooks/useMobile";
import FilterButtons from "./filter-buttons";

const tasks = [
  {
    task: "Complete online Javascript course",
    isChecked: true,
  },
  {
    task: "Jog around the park 3x",
    isChecked: false,
  },
  {
    task: "10 minute meditation",
    isChecked: false,
  },
  {
    task: "Read for 1 hour",
    isChecked: false,
  },
  {
    task: "Pick up groceries",
    isChecked: false,
  },
  {
    task: "Complete Todo App on Frontend Mentor",
    isChecked: false,
  },
];

const Main = () => {
  const isMobile = useMobile("(max-width:768px)");
  return (
    <MainContent>
      <GeneralContainer>
        <ListContainer>
          <ul>
            {tasks.map((task) => (
              <ListElement key={task.task}>
                <Checkbox />
                {task.task}
              </ListElement>
            ))}
          </ul>
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
