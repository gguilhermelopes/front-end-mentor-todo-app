import { TasksContext } from "@/context/tasksContext";
import axios from "axios";
import { useContext, useState } from "react";

const useTasks = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("api/tasks");
      setLoading(false);
      setTasks(data.tasks);
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };
  return {
    fetchTasks,
    loading,
    tasks,
    error,
  };
};

export default useTasks;
