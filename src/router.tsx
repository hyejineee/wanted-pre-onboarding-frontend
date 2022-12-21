import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import TodoListPage from "./pages/todoListPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/todo",
      element: <TodoListPage />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);
