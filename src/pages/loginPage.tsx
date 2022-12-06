import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginContainer from "../components/unit/auth/auth.container";
import { getFromLocal } from "../lib/localstorage";

export default function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (getFromLocal("accessToken")) {
      return navigate("/");
    }
  }, [navigate]);
  return <LoginContainer />;
}
