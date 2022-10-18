import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFromLocal } from "../lib/localstorage";

export default function TodoListPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getFromLocal("accessToken")) {
      return navigate("/");
    }
  }, [navigate]);
  return <div>todo 리스트</div>;
}
