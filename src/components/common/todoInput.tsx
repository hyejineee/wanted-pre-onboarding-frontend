import { ChangeEvent } from "react";

interface ITodoInputProps {
  name: string;
  isEdit: boolean;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  defaultValue?: string;
  onClick: () => void;
  handleEditMode?: () => void;
}

export default function TodoInput({
  name,
  isEdit,
  defaultValue,
  setValue,
  onClick,
  handleEditMode,
}: ITodoInputProps) {
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
    <div>
      <input onChange={handleChange} defaultValue={defaultValue} />
      <button onClick={onClick}>{isEdit ? "수정" : "추가"}</button>
      {isEdit && <button onClick={handleEditMode}>취소</button>}
    </div>
  );
}
