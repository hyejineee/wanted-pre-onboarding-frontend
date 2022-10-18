import { useEffect, useState } from "react";
import { createTodo } from "../../../api/todo";
import TodoListUI from "./todoList.presenter";

export default function TodoListContainer() {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = async (todo: string) => {
    try {
      const result = await createTodo(todo);
    } catch (e) {
      console.log("handleCreateTodo error", e);
    }
  };
  return <TodoListUI handleCreateTodo={handleCreateTodo} />;
}
