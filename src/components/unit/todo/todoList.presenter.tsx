import { useState } from "react";
import { ITodo } from "../../../types/todo";
import TodoInput from "../../common/todoInput";
import { Title } from "../auth/auth.style";
import TodoItemContainer from "./item/todoItem.container";

import * as S from "./todoList.style";

interface ITodoListUIProps {
  todos: ITodo[];
  refresh: () => void;
  handleCreateTodo: (todo: string) => void;
}

export default function TodoListUI({ todos, refresh, handleCreateTodo }: ITodoListUIProps) {
  const [inputs, setInputs] = useState({
    todo: "",
  });

  const handleClickAdd = () => {
    handleCreateTodo(inputs.todo);
    setInputs({ todo: "" });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <Title>TO DO LIST</Title>
        <TodoInput onClick={handleClickAdd} name="todo" value={inputs.todo} setValue={setInputs} isEdit={false} />

        <S.TodoListWrapper>
          {(todos || []).map((e: ITodo, i) => (
            <TodoItemContainer key={e.id} todo={e} refresh={refresh} />
          ))}
        </S.TodoListWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
