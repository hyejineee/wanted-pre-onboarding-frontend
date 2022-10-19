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
  min-width: 600px;
  height: auto;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  width: 50%;
  padding: 20px 10px;
  border: none;
  background-color: #787ff6;
  border-radius: 26px;
  margin-bottom: 16px;
  color: white;
  :disabled {
    background-color: lightgray;
  }
`;

