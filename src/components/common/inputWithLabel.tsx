import { ChangeEvent } from "react";
import * as S from "./inputWithLabel.style";

interface IInputWithLabelProps {
  label?: string;
  name: string;
  error?: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}
export default function InputWithLabel({
  label,
  name,
  error,
  setValue,
}: IInputWithLabelProps) {
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
      <span>{label}</span>
      <input name={name} onChange={handleChange} />
      <span>{error}</span>
    </div>
  );
}
