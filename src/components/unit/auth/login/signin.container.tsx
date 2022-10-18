import { signIn, signUp } from "../../../../api/auth";
import { saveToLocal } from "../../../../lib/localstorage";
import { IAuthParams } from "../../../../types/auth";
import SignInUI from "./signin.presenter";

export default function LoginContainer() {
  const handleClickSignUp = (params: IAuthParams) => async () => {
    try {
      const token = await signUp(params);
      saveToLocal({ key: "accessToken", value: token });
    } catch (e) {
      console.log("handleClickSignUp error", e);
    }
  };

  const handleClickSignIn = (params: IAuthParams) => async () => {
    try {
      const token = await signIn(params);
      saveToLocal({ key: "accessToken", value: token });
    } catch (e) {
      console.log("handleClickSignIn error", e);
    }
  };

  return (
    <SignInUI
      handleClickSignUp={handleClickSignUp}
      handleClickSignIn={handleClickSignIn}
    />
  );
}
