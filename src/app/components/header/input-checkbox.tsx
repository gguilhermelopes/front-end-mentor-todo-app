import Checkbox from "../general-components/checkbox";
import { InputWrappers, NewTaskInput } from "./styles";

const InputCheckbox = () => {
  return (
    <InputWrappers>
      <Checkbox />
      <NewTaskInput placeholder="Create a new todo..." />
    </InputWrappers>
  );
};

export default InputCheckbox;
