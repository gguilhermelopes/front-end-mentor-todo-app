import { TasksContext } from "@/context/tasksContext";
import axios from "axios";
import { useContext, useState } from "react";

const useTasks = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchTasks = async (optionalURL: string = "") => {
    setLoading(true);
    try {
      const { data } = await axios.get(`api/tasks${optionalURL}`);
      setTasks(data.tasks);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(true);
    }
  };

  const fetchCompletedTasks = async () => {
    await fetchTasks("/completed");
  };

  const fetchActiveTasks = async () => {
    await fetchTasks("/active");
  };

  const deleteTask = async (id: number) => {
    setLoading(true);
    try {
      const response = await axios.delete(`api/task/${id}`);
      setLoading(false);
      return response;
    } catch (error: any) {
      setLoading(false);
      setError(true);
    }
  };

  const deletedClearTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`api/tasks`);
      setLoading(false);
      return response;
    } catch (error: any) {
      setLoading(false);
      setError(true);
    }
  };

  const createTask = async (newTask: string, isChecked: boolean) => {
    setLoading(true);
    try {
      const response = await axios.post("api/tasks", {
        newTask,
        isChecked,
      });
      setLoading(false);
      return response;
    } catch (error: any) {
      setLoading(false);
      setError(true);
    }
  };

  const updateTask = async (id: number, isChecked: boolean) => {
    setLoading(true);
    try {
      const response = await axios.patch(`api/task/${id}`, {
        isChecked,
      });
      setLoading(false);
      return response;
    } catch (error: any) {
      setLoading(false);
      setError(true);
    }
  };
  return {
    fetchTasks,
    fetchCompletedTasks,
    fetchActiveTasks,
    deleteTask,
    deletedClearTasks,
    createTask,
    updateTask,
    loading,
    tasks,
    error,
  };
};

export default useTasks;
