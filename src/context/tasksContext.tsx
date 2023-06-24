import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface Task {
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
  const [tasks, setTasks] = useState<Task[]>([
    {
      task: "Complete online Javascript course",
      isChecked: true,
    },
    {
      task: "Jog around the park 3x",
      isChecked: false,
    },
    {
      task: "10 minute meditation",
      isChecked: false,
    },
    {
      task: "Read for 1 hour",
      isChecked: false,
    },
    {
      task: "Pick up groceries",
      isChecked: false,
    },
    {
      task: "Complete Todo App on Frontend Mentor",
      isChecked: false,
    },
  ]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
