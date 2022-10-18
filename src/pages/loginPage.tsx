import { signIn } from "../api/auth";

export default function LoginPage() {
  signIn({ email: "test@com", password: "123123123" });
  return <div>로그인</div>;
}
