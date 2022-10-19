import { useEffect, useState } from "react";
import { createTodo, getTodos } from "../../../api/todo";
import { ISnackBar } from "../../../types/common";
import { ITodo } from "../../../types/todo";
import TodoListUI from "./todoList.presenter";

export default function TodoListContainer() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [snackBar, setSnackBar] = useState<ISnackBar>({
    visible: false,
    message: "",
  });

  useEffect(() => {
    getTodos()
      .then((e: ITodo[]) => setTodos([...e.reverse()]))
      .catch((error) => {
        setSnackBar({
          visible: true,
          message: error,
        });
      });
  }, []);

  const handleCreateTodo = async (todo: string) => {
    try {
      const result = await createTodo(todo);
      setTodos((p: any) => [result, ...p]);
    } catch (e) {
      console.log("handleCreateTodo error", e);
      if (e instanceof Error) {
        setSnackBar({
          visible: true,
          message: e.message,
        });
      }
    }
  };

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  const refresh = () => {
    getTodos()
      .then((e: ITodo[]) => setTodos([...e.reverse()]))
      .catch((error) => {
        setSnackBar({
          visible: true,
          message: error,
        });
      });
  };

  return (
    <TodoListUI
      handleCreateTodo={handleCreateTodo}
      todos={todos}
      refresh={refresh}
      snackBar={snackBar}
    />
  );
}
