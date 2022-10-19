import TextField from "@mui/material/TextField/TextField";
import { ChangeEvent, useState } from "react";
import * as S from "./inputWithLabel.style";

interface IInputWithLabelProps {
  label?: string;
  name: string;
  error?: string;
  verifyRegExp: RegExp;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}
export default function InputWithLabel({
  label,
  name,
  error,
  verifyRegExp,
  setValue,
}: IInputWithLabelProps) {
  const [showError, setShowError] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShowError(!verifyRegExp.test(value));
    setValue((p: any) => {
      return {
        ...p,
        [name]: value,
        [`${name}Verified`]: verifyRegExp.test(value),
      };
    });
  };

  return (
    <S.Wrapper>
      <S.InputWrapper
        name={name}
        id="outlined-error-helper-text"
        label={label}
        helperText={showError && error}
        onChange={handleChange}
      />
    </S.Wrapper>
  );
}
