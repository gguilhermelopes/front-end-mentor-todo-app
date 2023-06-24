"use client";
import { GeneralContainer } from "@/styles/globals";
import {
  ClearButton,
  ListContainer,
  ListElement,
  ListStatus,
  MainContent,
} from "./styles";
import Checkbox from "../general-components/checkbox";

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
            <ClearButton>Clear Completed</ClearButton>
          </ListStatus>
        </ListContainer>
      </GeneralContainer>
    </MainContent>
  );
};

export default Main;
