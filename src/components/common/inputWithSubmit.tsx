import { ChangeEvent } from "react";

interface IInputWithSubmitProps {
  name: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  onClick: () => void;
}

export default function TodoInput({
  name,
  setValue,
  onClick,
}: IInputWithSubmitProps) {
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
      <input onChange={handleChange} />
      <button onClick={onClick}>클릭</button>
    </div>
  );
}
