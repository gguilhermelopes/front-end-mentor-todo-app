"use client";
import useTasks from "@/hooks/useTasks";
import { FilterButton } from "./styles";

const FilterButtons = () => {
  const { fetchCompletedTasks, fetchTasks, fetchActiveTasks } = useTasks();

  const handleClick = async () => fetchTasks();

  return (
    <>
      <FilterButton onClick={handleClick}>All</FilterButton>
      <FilterButton onClick={fetchActiveTasks}>Active</FilterButton>
      <FilterButton onClick={fetchCompletedTasks}>Completed</FilterButton>
    </>
  );
};

export default FilterButtons;
