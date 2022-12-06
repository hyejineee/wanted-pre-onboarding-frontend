import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoListContainer from "../components/unit/todo/todoList.container";
import { getFromLocal } from "../lib/localstorage";

export default function TodoListPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getFromLocal("accessToken")) {
      return navigate("/todo");
    }
  }, [navigate]);
  return <TodoListContainer />;
}
