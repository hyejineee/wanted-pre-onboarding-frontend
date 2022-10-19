import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../../api/auth";
import { saveToLocal } from "../../../lib/localstorage";
import { IAuthParams } from "../../../types/auth";
import { ISnackBar } from "../../../types/common";
import SignInUI from "./auth.presenter";

export default function LoginContainer() {
  const navigate = useNavigate();

  const [snackBar, setSnackBar] = useState<ISnackBar>({
    visible: false,
    message: "",
  });

  const handleClickSignUp = (params: IAuthParams) => async () => {
    try {
      const token = await signUp(params);
      saveToLocal({ key: "accessToken", value: token });

      navigate("/todo");
    } catch (e) {
      console.log("handleClickSignUp error", e);
      if (e instanceof Error) {
        setSnackBar({
          visible: true,
          message: e.message,
        });
      }
    }
  };

  const handleClickSignIn = (params: IAuthParams) => async () => {
    try {
      const token = await signIn(params);
      saveToLocal({ key: "accessToken", value: token });

      navigate("/todo");
    } catch (e) {
      console.log("handleClickSignIn error", e);
      if (e instanceof Error) {
        setSnackBar({
          visible: true,
          message: e.message,
        });
      }
    }
  };

  return (
    <SignInUI
      handleClickSignUp={handleClickSignUp}
      handleClickSignIn={handleClickSignIn}
      snackBar={snackBar}
      setSnackBar={setSnackBar}
    />
  );
}
