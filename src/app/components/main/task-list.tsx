"use client";

import {
  DragDropContext,
  Draggable,
  Droppable,
  OnDragEndResponder,
} from "react-beautiful-dnd";
import { CheckedTask, ListElement, LoadingState } from "./styles";
import { CheckboxInput } from "../general-components/styles";
import CrossIcon from "./icon-cross";
import { ChangeEvent, useContext, useEffect } from "react";
import { TasksContext } from "@/context/tasksContext";
import useTasks from "@/hooks/useTasks";
import { CircularProgress } from "@mui/joy";

const TaskList = () => {
  const { setTasks } = useContext(TasksContext);
  const { tasks, loading, fetchTasks, deleteTask, updateTask } = useTasks();

  const handleOnDragEnd: OnDragEndResponder = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };

  const handleChange = async (
    id: number,
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
    await updateTask(id, isChecked);
  };

  const handleDeleteClick = async (id: number, index: number) => {
    setTasks((prevState) => prevState.filter((task, i) => index !== i));
    await deleteTask(id);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading)
    return (
      <LoadingState>
        <CircularProgress color="info" />
      </LoadingState>
    );

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="dropList">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {tasks &&
              tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.task + task.id}
                  index={index}
                >
                  {(provided) => (
                    <ListElement
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <CheckboxInput
                        checked={task.isChecked}
                        onChange={(event) =>
                          handleChange(task.id as number, index, event)
                        }
                      />
                      {task.isChecked ? (
                        <CheckedTask>{task.task}</CheckedTask>
                      ) : (
                        task.task
                      )}

                      <CrossIcon
                        onClick={() =>
                          handleDeleteClick(task.id as number, index)
                        }
                      />
                    </ListElement>
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
