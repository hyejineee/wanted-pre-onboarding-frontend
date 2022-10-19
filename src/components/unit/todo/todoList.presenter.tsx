import { useState } from "react";
import { ISnackBar } from "../../../types/common";
import { ITodo } from "../../../types/todo";
import TodoInput from "../../common/todoInput";
import { Title } from "../auth/auth.style";
import TodoItemContainer from "./item/todoItem.container";
import * as S from "./todoList.style";

interface ITodoListUIProps {
  todos: ITodo[];
  snackBar: ISnackBar;
  refresh: () => void;
  handleCreateTodo: (todo: string) => void;
}

export default function TodoListUI({
  todos,
  snackBar,
  refresh,
  handleCreateTodo,
}: ITodoListUIProps) {
  const [inputs, setInputs] = useState({
    todo: "",
  });

  const handleClickAdd = () => {
    handleCreateTodo(inputs.todo);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <Title>TO DO LIST</Title>
        <TodoInput
          onClick={handleClickAdd}
          name="todo"
          setValue={setInputs}
          isEdit={false}
        />

        <S.TodoListWrapper>
          {todos.map((e: ITodo, i) => (
            <TodoItemContainer key={i} todo={e} refresh={refresh} />
          ))}
        </S.TodoListWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
