"use client";

import { ChangeEvent, KeyboardEvent, useContext, useState } from "react";
import { CheckboxInput } from "../general-components/styles";
import { InputWrappers, NewTaskInput } from "./styles";
import useTasks from "@/hooks/useTasks";
import { CircularProgress } from "@mui/joy";

const InputCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");
  const { createTask, fetchTasks, loading } = useTasks();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input) {
      await createTask(input, checked);
      setInput("");
      setChecked(false);
      await fetchTasks();
    }
  };

  return (
    <InputWrappers>
      <CheckboxInput
        id="isChecked"
        onChange={handleCheckboxChange}
        checked={checked}
      />
      <NewTaskInput
        id="newTask"
        placeholder="Create a new todo and press enter..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {loading && <CircularProgress color="info" size="sm" />}
    </InputWrappers>
  );
};

export default InputCheckbox;
