import { useState } from "react";
import { deleteTodo, updateTodo } from "../../../../api/todo";
import { ITodo } from "../../../../types/todo";
import TodoItemUI from "./todoItem.presenter";

interface ITodoItemContainerProps {
  todo: ITodo;
  refresh: () => void;
}
export default function TodoItemContainer({
  todo,
  refresh,
}: ITodoItemContainerProps) {
  console.log(todo);
  const handleUpdateChecked = async (checked: boolean) => {
    try {
      await updateTodo(todo.id, todo.todo, checked);
      refresh();
    } catch (e) {
      console.log("handleUpdateCheck error", e);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.id);
      refresh();
    } catch (e) {
      console.log("handleUpdateCheck error", e);
    }
  };

  return (
    <TodoItemUI
      completed={todo.isCompleted}
      todo={todo.todo}
      handleUpdateChecked={handleUpdateChecked}
      handleDelete={handleDelete}
    />
  );
}
