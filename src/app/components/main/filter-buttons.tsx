"use client";
import useTasks from "@/hooks/useTasks";
import { FilterButton } from "./styles";
import { CircularProgress } from "@mui/joy";
import { useContext } from "react";
import { TasksContext } from "@/context/tasksContext";

const FilterButtons = () => {
  const { fetchCompletedTasks, fetchTasks, fetchActiveTasks, loading } =
    useTasks();
  const { tasks, setTasks } = useContext(TasksContext);

  const handleAllClick = async () => await fetchTasks();
  const handleFilterClick = async (isActive: boolean) => {
    await fetchTasks();
    setTasks((prevState) =>
      prevState.filter((task) => (isActive ? !task.isChecked : task.isChecked))
    );
  };
  const handleCompletedClick = async () => await fetchCompletedTasks();

  return (
    <>
      <FilterButton onClick={handleAllClick}>All</FilterButton>
      <FilterButton onClick={() => handleFilterClick(true)}>
        Active
      </FilterButton>
      <FilterButton onClick={() => handleFilterClick(false)}>
        Completed
      </FilterButton>
      {loading && <CircularProgress color="info" size="sm" />}
    </>
  );
};

export default FilterButtons;
