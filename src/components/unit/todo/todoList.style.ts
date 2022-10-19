import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  min-width: 800px;

  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TodoListWrapper = styled.div`
  width: 100%;
  height: 600px;
  overflow-y: scroll;
`;
