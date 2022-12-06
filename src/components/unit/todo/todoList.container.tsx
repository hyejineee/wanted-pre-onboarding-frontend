import { Fragment, useEffect, useState } from "react";
import { createTodo, getTodos } from "../../../api/todo";
import { ITodo } from "../../../types/todo";
import TodoListUI from "./todoList.presenter";
import { message } from "antd";

export default function TodoListContainer() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [messageAPI, contextHolder] = message.useMessage();

  useEffect(() => {
    getTodos()
      .then((e: ITodo[]) => setTodos([...e.reverse()]))
      .catch((error) => {
        messageAPI.open({
          type: "error",
          content: error.message,
        });
      });
  }, []);

  const handleCreateTodo = async (todo: string) => {
    try {
      const result = await createTodo(todo);

      if (!result) throw Error("로그인 먼저 해주세요.");

      setTodos((p: any) => {
        console.log(p);
        return [result, ...p];
      });
    } catch (e) {
      console.log("handleCreateTodo error", e);
      if (e instanceof Error) {
        messageAPI.open({
          type: "error",
          content: e.message,
        });
      }
    }
  };

  const refresh = () => {
    getTodos()
      .then((e: ITodo[]) => setTodos([...e.reverse()]))
      .catch((error) => {
        messageAPI.open({
          type: "error",
          content: error,
        });
      });
  };

  return (
    <Fragment>
      {contextHolder}
      <TodoListUI handleCreateTodo={handleCreateTodo} todos={todos} refresh={refresh} />;
    </Fragment>
  );
}
