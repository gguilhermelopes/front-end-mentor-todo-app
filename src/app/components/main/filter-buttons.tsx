"use client";
import useTasks from "@/hooks/useTasks";
import { FilterButton } from "./styles";
import { CircularProgress } from "@mui/joy";

const FilterButtons = () => {
  const { fetchCompletedTasks, fetchTasks, fetchActiveTasks, loading } =
    useTasks();

  const handleClick = async () => fetchTasks();

  return (
    <>
      <FilterButton onClick={handleClick}>All</FilterButton>
      <FilterButton onClick={fetchActiveTasks}>Active</FilterButton>
      <FilterButton onClick={fetchCompletedTasks}>Completed</FilterButton>
      {loading && <CircularProgress color="info" size="sm" />}
    </>
  );
};

export default FilterButtons;
