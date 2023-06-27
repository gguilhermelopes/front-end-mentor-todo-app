"use client";
import useTasks from "@/hooks/useTasks";
import { FilterButton, FilterButtonHighlighted } from "./styles";
import { CircularProgress } from "@mui/joy";
import { useContext, useState } from "react";
import { TasksContext } from "@/context/tasksContext";

const FilterButtons = () => {
  const { fetchTasks, loading } = useTasks();
  const [highlight, setHighlight] = useState("All");
  const { setTasks, tasks } = useContext(TasksContext);

  const filters = [
    { label: "All" },
    { label: "Active" },
    { label: "Completed" },
  ];

  const handleFilters = async (label: String) => {
    switch (label) {
      case "All":
        setHighlight("All");
        await fetchTasks();
        break;
      case "Active":
        setHighlight("Active");
        await fetchTasks();
        setTasks((prevState) => prevState.filter((task) => !task.isChecked));
        break;
      case "Completed":
        setHighlight("Completed");
        await fetchTasks();
        setTasks((prevState) => prevState.filter((task) => task.isChecked));
        break;
    }
  };

  const handleHighlight = (label: string) => {
    if (label === highlight)
      return (
        <FilterButtonHighlighted
          onClick={() => handleFilters(label)}
          key={label}
        >
          {label}
        </FilterButtonHighlighted>
      );
    else
      return (
        <FilterButton onClick={() => handleFilters(label)} key={label}>
          {label}
        </FilterButton>
      );
  };

  return (
    <>
      {filters.map((task) => handleHighlight(task.label))}
      {loading && <CircularProgress color="info" size="sm" />}
    </>
  );
};

export default FilterButtons;
