import { ChangeEvent, useRef } from "react";
import * as S from "./todoInput.style";

interface ITodoInputProps {
  name: string;
  isEdit: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  defaultValue?: string;
  onClick: () => void;
  handleEditMode?: () => void;
}

export default function TodoInput({
  name,
  isEdit,
  defaultValue,
  value,
  setValue,
  onClick,
  handleEditMode,
}: ITodoInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue((p: any) => {
      return {
        ...p,
        [name]: value,
      };
    });
  };

  return (
    <S.Wrapper>
      <S.InputWrapper
        onChange={handleChange}
        defaultValue={defaultValue}
        value={value}
        ref={inputRef}
      />
      {isEdit || <S.AddButton onClick={onClick}>추가</S.AddButton>}
      {isEdit && (
        <S.MiniButtonWrapper>
          <S.MiniButton onClick={onClick}>수정</S.MiniButton>
          <S.MiniButton onClick={handleEditMode}>취소</S.MiniButton>
        </S.MiniButtonWrapper>
      )}
    </S.Wrapper>
  );
}
