import Radio from "@mui/material/Radio";
import { MouseEvent } from "react";
import { MiniButton, MiniButtonWrapper } from "../../../common/todoInput.style";
import * as S from "./todoItem.style";

interface ITodoItemUIProps {
  todo: string;
  completed: boolean;
  handleUpdateChecked: (checked: boolean) => void;
  handleDelete: () => void;
  handleEditMode: () => void;
}

export default function TodoItemUI({ todo, completed, handleUpdateChecked, handleDelete, handleEditMode }: ITodoItemUIProps) {
  const handleChangeCheck = (e: MouseEvent<any>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    handleUpdateChecked(!completed);
  };

  const handleClickDelete = () => {
    handleDelete();
  };

  const handleClickUpdate = () => {
    handleEditMode();
  };

  return (
    <S.ItemWrapper>
      <Radio
        onClick={handleChangeCheck}
        checked={completed}
        sx={{
          color: "#787ff6",
          "&.Mui-checked": {
            color: "#787ff6",
          },
        }}
      />

      <S.Todo>{completed ? <del>{todo}</del> : todo}</S.Todo>
      <MiniButtonWrapper>
        <MiniButton onClick={handleClickDelete}>삭제</MiniButton>
        <MiniButton onClick={handleClickUpdate}>수정</MiniButton>
      </MiniButtonWrapper>
    </S.ItemWrapper>
  );
}
