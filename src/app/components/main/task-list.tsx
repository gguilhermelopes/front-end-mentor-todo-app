"use client";

import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { CheckedTask, ListElement } from "./styles";
import { CheckboxInput } from "../general-components/styles";
import CrossIcon from "./icon-cross";
import { ChangeEvent, useContext } from "react";
import { TasksContext } from "@/context/tasksContext";

const TaskList = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleOnDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };

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

  const handleDeleteClick = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => index !== i));
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="dropList">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.task} draggableId={task.task} index={index}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <ListElement>
                      <CheckboxInput
                        checked={task.isChecked}
                        onChange={(event) => handleChange(index, event)}
                      />
                      {task.isChecked ? (
                        <CheckedTask>{task.task}</CheckedTask>
                      ) : (
                        task.task
                      )}
                      <CrossIcon onClick={() => handleDeleteClick(index)} />
                    </ListElement>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
