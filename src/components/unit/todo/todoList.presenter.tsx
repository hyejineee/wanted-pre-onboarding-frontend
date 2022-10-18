import { useState } from "react";
import TodoInput from "../../common/inputWithSubmit";

interface ITodoListUIProps {
  handleCreateTodo: (todo: string) => void;
}
export default function TodoListUI({ handleCreateTodo }: ITodoListUIProps) {
  const [inputs, setInputs] = useState({
    todo: "",
  });

  const handleClickAdd = () => {
    handleCreateTodo(inputs.todo);
  };

  return (
    <div>
      <TodoInput onClick={handleClickAdd} name="todo" setValue={setInputs} />
    </div>
  );
}
