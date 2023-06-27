import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface Task {
  id?: number;
  task: string;
  isChecked: boolean;
}

interface TasksContextProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  setTasks: () => {},
});

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
