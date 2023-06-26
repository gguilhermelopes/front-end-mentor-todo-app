"use client";
import useTasks from "@/hooks/useTasks";
import { FilterButton, FilterButtonHighlighted } from "./styles";
import { CircularProgress } from "@mui/joy";
import { useContext, useState } from "react";
import { TasksContext } from "@/context/tasksContext";

const FilterButtons = () => {
  const { fetchTasks, loading } = useTasks();
  const { setTasks } = useContext(TasksContext);
  const [highlight, setHighlight] = useState("All");

  const handleAllClick = async () => {
    await fetchTasks();
    setHighlight("All");
  };
  const handleFilterClick = async (isActive: boolean) => {
    await fetchTasks();
    setTasks((prevState) =>
      prevState.filter((task) => (isActive ? !task.isChecked : task.isChecked))
    );
    isActive ? setHighlight("Active") : setHighlight("Completed");
  };
  const filters = [
    { label: "All", onClick: handleAllClick },
    { label: "Active", onClick: () => handleFilterClick(true) },
    { label: "Completed", onClick: () => handleFilterClick(false) },
  ];

  const handleHighlight = (label: string, onClick: () => void) => {
    if (label === highlight)
      return (
        <FilterButtonHighlighted onClick={onClick}>
          {label}
        </FilterButtonHighlighted>
      );
    else return <FilterButton onClick={onClick}>{label}</FilterButton>;
  };

  return (
    <>
      {filters.map((task) => handleHighlight(task.label, task.onClick))}
      {loading && <CircularProgress color="info" size="sm" />}
    </>
  );
};

export default FilterButtons;
