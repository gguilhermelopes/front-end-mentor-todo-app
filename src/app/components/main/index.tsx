"use client";
import { GeneralContainer } from "@/styles/globals";
import {
  CheckedTask,
  ClearButton,
  DesktopFiltersList,
  DragAndDropInfo,
  ListContainer,
  ListElement,
  ListStatus,
  MainContent,
  MobileFiltersList,
} from "./styles";
import useMobile from "@/hooks/useMobile";
import FilterButtons from "./filter-buttons";
import { CheckboxInput } from "../general-components/styles";
import { ChangeEvent, useContext, useState } from "react";
import { TasksContext } from "@/context/tasksContext";

const Main = () => {
  const isMobile = useMobile("(max-width:768px)");
  const { tasks, setTasks } = useContext(TasksContext);

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = event.target.checked;

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];

      updatedTasks[index] = {
        ...updatedTasks[index],
        isChecked,
      };

      return updatedTasks;
    });
  };

  return (
    <MainContent>
      <GeneralContainer>
        <ListContainer>
          <ul>
            {tasks.map((task, index) => (
              <ListElement key={index}>
                <CheckboxInput
                  checked={task.isChecked}
                  onChange={(event) => handleChange(index, event)}
                />
                {task.isChecked ? (
                  <CheckedTask>{task.task}</CheckedTask>
                ) : (
                  task.task
                )}
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
