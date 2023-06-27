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
import { useContext } from "react";
import { TasksContext } from "@/context/tasksContext";
import useTasks from "@/hooks/useTasks";
import { CircularProgress } from "@mui/joy";

const Main = () => {
  const isMobile = useMobile("(max-width:768px)");
  const { tasks } = useContext(TasksContext);
  const { deleteClearTasks, fetchTasks } = useTasks();
  const { error, loading } = useTasks();

  const handleClearCompletedClick = async () => {
    await deleteClearTasks();
    await fetchTasks();
  };

  const itemsLeft = tasks.filter((task) => !task.isChecked).length;

  return (
    <MainContent>
      <GeneralContainer>
        <ListContainer>
          <TaskList />
          <ListStatus>
            <p>
              {itemsLeft} item{itemsLeft !== 1 && "s"} left
            </p>
            {!isMobile && (
              <DesktopFiltersList>
                <FilterButtons />
              </DesktopFiltersList>
            )}
            <ClearButton onClick={handleClearCompletedClick}>
              {loading ? (
                <CircularProgress color="info" size="sm" />
              ) : (
                "Clear completed"
              )}
            </ClearButton>
          </ListStatus>
        </ListContainer>
        {isMobile && (
          <MobileFiltersList>
            <FilterButtons />
          </MobileFiltersList>
        )}
        <DragAndDropInfo>
          <p>
            {error
              ? "An error ocurred, please try again later."
              : "Drag and drop to reorder list"}
          </p>
        </DragAndDropInfo>
      </GeneralContainer>
    </MainContent>
  );
};

export default Main;
