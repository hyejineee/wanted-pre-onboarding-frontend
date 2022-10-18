import { useState } from "react";
import { IAuthParams } from "../../../../types/auth";
import InputWithLabel from "../../../common/inputWithLabel";

interface ISignInUIProps {
  handleClickSignUp: (params: IAuthParams) => () => void;
  handleClickSignIn: (params: IAuthParams) => () => void;
}

export default function SignInUI({
  handleClickSignUp,
  handleClickSignIn,
}: ISignInUIProps) {
  const [inputs, setInputs] = useState<IAuthParams>({
    email: "",
    password: "",
  });

  return (
    <div>
      <InputWithLabel
        label="email"
        name="email"
        error="@를 포함해주세요!"
        setValue={setInputs}
      />
      <InputWithLabel
        label="password"
        name="password"
        error="8자이상 입력해주세요!"
        setValue={setInputs}
      />

      <button onClick={handleClickSignIn(inputs)}>로그인</button>
      <button onClick={handleClickSignUp(inputs)}>회원가입</button>
    </div>
  );
}
