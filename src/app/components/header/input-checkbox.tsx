"use client";

import { ChangeEvent, KeyboardEvent, useContext, useState } from "react";
import { CheckboxInput } from "../general-components/styles";
import { InputWrappers, NewTaskInput } from "./styles";
import { TasksContext } from "@/context/tasksContext";

const InputCheckbox = () => {
  const { setTasks } = useContext(TasksContext);
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input) {
      setTasks((prevState) => [
        {
          task: input,
          isChecked: checked,
        },
        ...prevState,
      ]);
      setInput("");
    }
  };

  return (
    <InputWrappers>
      <CheckboxInput onChange={handleCheckboxChange} checked={checked} />
      <NewTaskInput
        placeholder="Create a new todo..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </InputWrappers>
  );
};

export default InputCheckbox;
