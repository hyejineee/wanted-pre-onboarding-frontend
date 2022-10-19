import { useEffect, useState } from "react";
import { IAuthParams } from "../../../types/auth";
import InputWithLabel from "../../common/inputWithLabel";
import * as S from "./signin.style";

interface ISignInUIProps {
  handleClickSignUp: (params: IAuthParams) => () => void;
  handleClickSignIn: (params: IAuthParams) => () => void;
}

export default function SignInUI({
  handleClickSignUp,
  handleClickSignIn,
}: ISignInUIProps) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    emailVerified: false,
    passwordVerified: false,
  });

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(inputs.emailVerified && inputs.passwordVerified);
  }, [inputs]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>로그인/ 회원가입</S.Title>
        <InputWithLabel
          label="email"
          name="email"
          error="@를 포함해주세요!"
          verifyRegExp={/^\w+@\w+$/}
          setValue={setInputs}
        />
        <InputWithLabel
          label="password"
          name="password"
          error="8자이상 입력해주세요!"
          verifyRegExp={/^\w{8,}$/}
          setValue={setInputs}
        />

        <button
          disabled={!isActive}
          onClick={handleClickSignIn({
            email: inputs.email,
            password: inputs.password,
          })}
        >
          로그인
        </button>
        <button
          disabled={!isActive}
          onClick={handleClickSignUp({
            email: inputs.email,
            password: inputs.password,
          })}
        >
          회원가입
        </button>
      </S.Container>
    </S.Wrapper>
  );
}
