import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  min-width: 600px;
  height: 80%;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 60px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 100px;
`;
