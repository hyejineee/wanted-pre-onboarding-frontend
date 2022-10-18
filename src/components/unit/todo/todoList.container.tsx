import { useEffect, useState } from "react";
import { createTodo, getTodos } from "../../../api/todo";
import { ITodo } from "../../../types/todo";
import TodoListUI from "./todoList.presenter";

export default function TodoListContainer() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodos()
      .then((e: ITodo[]) => setTodos([...e]))
      .catch((error) => console.log("getTodos error", error));
  }, []);

  const handleCreateTodo = async (todo: string) => {
    try {
      const result = await createTodo(todo);
      setTodos((p: any) => [...p, result]);
    } catch (e) {
      console.log("handleCreateTodo error", e);
    }
  };

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  const refresh = () => {
    getTodos()
      .then((e: ITodo[]) => setTodos([...e]))
      .catch((error) => console.log("getTodos error", error));
  };

  return (
    <TodoListUI
      handleCreateTodo={handleCreateTodo}
      todos={todos}
      refresh={refresh}
    />
  );
}
