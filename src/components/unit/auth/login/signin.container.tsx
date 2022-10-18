import { signUp } from "../../../../api/auth";
import { IAuthParams } from "../../../../types/auth";
import SignInUI from "./signin.presenter";

export default function LoginContainer() {
  const handleClickSignUp = (params: IAuthParams) => () => {
    signUp(params);
  };

  return <SignInUI handleClickSignUp={handleClickSignUp} />;
}
