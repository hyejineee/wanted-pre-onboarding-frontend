import { useState } from "react";
import { ITodo } from "../../../types/todo";
import TodoInput from "../../common/inputWithSubmit";
import TodoItemContainer from "./item/todoItem.container";

interface ITodoListUIProps {
  todos: ITodo[];
  refresh: () => void;
  handleCreateTodo: (todo: string) => void;
}

export default function TodoListUI({
  todos,
  refresh,
  handleCreateTodo,
}: ITodoListUIProps) {
  const [inputs, setInputs] = useState({
    todo: "",
  });

  const handleClickAdd = () => {
    handleCreateTodo(inputs.todo);
  };

  return (
    <div>
      <TodoInput onClick={handleClickAdd} name="todo" setValue={setInputs} />
      {todos.map((e: ITodo, i) => (
        <TodoItemContainer key={i} todo={e} refresh={refresh} />
      ))}
    </div>
  );
}
