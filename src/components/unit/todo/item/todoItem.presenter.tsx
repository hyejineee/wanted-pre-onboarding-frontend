import { ChangeEvent, useState } from "react";

interface ITodoItemUIProps {
  todo: string;
  completed: boolean;
  handleUpdateChecked: (checked: boolean) => void;
  handleDelete: () => void;
}
export default function TodoItemUI({
  todo,
  completed,
  handleUpdateChecked,
  handleDelete,
}: ITodoItemUIProps) {
  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    handleUpdateChecked(e.target.checked);
  };

  const handleClickDelete = () => {
    handleDelete();
  };

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={handleChangeCheck}
      />
      <span>{todo}</span>
      <button onClick={handleClickDelete}>삭제</button>
    </div>
  );
}
