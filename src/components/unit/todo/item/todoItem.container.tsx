import { useState } from "react";
import { deleteTodo, updateTodo } from "../../../../api/todo";
import { ITodo } from "../../../../types/todo";
import TodoInput from "../../../common/todoInput";
import TodoItemUI from "./todoItem.presenter";
import * as S from "./todoItem.style";

interface ITodoItemContainerProps {
  todo: ITodo;
  refresh: () => void;
}
export default function TodoItemContainer({
  todo,
  refresh,
}: ITodoItemContainerProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({ todo: todo.todo });

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

  const handleEditMode = () => {
    setIsEdit((p) => !p);
  };

  const handleUpdateTodo = async () => {
    try {
      await updateTodo(todo.id, updatedTodo.todo, todo.isCompleted);
      refresh();
      setIsEdit(false);
    } catch (e) {
      console.log("handleUpdateTodo error", e);
    }
  };

  return (
    <S.Wrapper>
      {isEdit ? (
        <TodoInput
          value={updatedTodo.todo}
          name="todo"
          defaultValue={todo.todo}
          isEdit={true}
          setValue={setUpdatedTodo}
          onClick={handleUpdateTodo}
          handleEditMode={handleEditMode}
        />
      ) : (
        <TodoItemUI
          completed={todo.isCompleted}
          todo={todo.todo}
          handleUpdateChecked={handleUpdateChecked}
          handleDelete={handleDelete}
          handleEditMode={handleEditMode}
        />
      )}
    </S.Wrapper>
  );
}
