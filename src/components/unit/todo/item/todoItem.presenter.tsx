import { ChangeEvent } from "react";

interface ITodoItemUIProps {
  todo: string;
  completed: boolean;
  handleUpdateChecked: (checked: boolean) => void;
  handleDelete: () => void;
  handleEditMode: () => void;
}
export default function TodoItemUI({
  todo,
  completed,
  handleUpdateChecked,
  handleDelete,
  handleEditMode,
}: ITodoItemUIProps) {
  const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    handleUpdateChecked(e.target.checked);
  };

  const handleClickDelete = () => {
    handleDelete();
  };

  const handleClickUpdate = () => {
    handleEditMode();
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
      <button onClick={handleClickUpdate}>수정</button>
    </div>
  );
}
