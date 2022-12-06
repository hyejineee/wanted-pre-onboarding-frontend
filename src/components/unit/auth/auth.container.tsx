import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../../api/auth";
import { saveToLocal } from "../../../lib/localstorage";
import { IAuthParams } from "../../../types/auth";
import SignInUI from "./auth.presenter";
import { message } from "antd";
import { Fragment } from "react";

export default function LoginContainer() {
  const navigate = useNavigate();

  const [messageAPI, contextHolder] = message.useMessage();

  const handleClickSignUp = (params: IAuthParams) => async () => {
    try {
      const token = await signUp(params);
      saveToLocal({ key: "accessToken", value: token });

      messageAPI.open({
        type: "success",
        content: "회원가입 성공. 로그인해 주세요.",
      });
    } catch (e) {
      console.log("handleClickSignUp error", e);
      if (e instanceof Error) {
        messageAPI.open({
          type: "error",
          content: e.message,
        });
      }
    }
  };

  const handleClickSignIn = (params: IAuthParams) => async () => {
    try {
      const token = await signIn(params);
      saveToLocal({ key: "accessToken", value: token });

      messageAPI.open({
        type: "success",
        content: "로그인 성공",
      });

      navigate("/todo");
    } catch (e) {
      console.log("handleClickSignIn error", e);
      if (e instanceof Error) {
        messageAPI.open({
          type: "error",
          content: e.message,
        });
      }
    }
  };

  return (
    <Fragment>
      {contextHolder}
      <SignInUI handleClickSignUp={handleClickSignUp} handleClickSignIn={handleClickSignIn} />;
    </Fragment>
  );
}
