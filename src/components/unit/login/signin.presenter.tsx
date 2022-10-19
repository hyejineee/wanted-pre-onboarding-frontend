import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import { IAuthParams } from "../../../types/auth";
import { ISnackBar } from "../../../types/common";
import InputWithLabel from "../../common/inputWithLabel";
import * as S from "./signin.style";

interface ISignInUIProps {
  snackBar: ISnackBar;
  setSnackBar: React.Dispatch<React.SetStateAction<ISnackBar>>;
  handleClickSignUp: (params: IAuthParams) => () => void;
  handleClickSignIn: (params: IAuthParams) => () => void;
}

export default function SignInUI({
  snackBar,
  setSnackBar,
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

  const handleCloseSnackBar = () => {
    setSnackBar({ visible: false, message: "" });
  };

  return (
    <S.Wrapper>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackBar.visible}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>

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
