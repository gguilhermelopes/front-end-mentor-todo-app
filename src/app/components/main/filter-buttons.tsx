"use client";
import useTasks from "@/hooks/useTasks";
import { FilterButton } from "./styles";
import { CircularProgress } from "@mui/joy";

const FilterButtons = () => {
  const { fetchCompletedTasks, fetchTasks, fetchActiveTasks, loading } =
    useTasks();

  const handleAllClick = async () => await fetchTasks();
  const handleActiveClick = async () => await fetchActiveTasks();
  const handleCompletedClick = async () => await fetchCompletedTasks();

  return (
    <>
      <FilterButton onClick={handleAllClick}>All</FilterButton>
      <FilterButton onClick={handleActiveClick}>Active</FilterButton>
      <FilterButton onClick={handleCompletedClick}>Completed</FilterButton>
      {loading && <CircularProgress color="info" size="sm" />}
    </>
  );
};

export default FilterButtons;
