import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const InputWrapper = styled(TextField)`
  font-size: 14px;
  flex: 4;
`;

export const AddButton = styled.button`
  cursor: pointer;
  width: 100%;
  flex: 1;
  padding: 20px 10px;
  border: none;
  background-color: #787ff6;
  border-radius: 10px;
  margin-bottom: 16px;
  color: white;
  :disabled {
    background-color: lightgray;
  }
`;

export const MiniButtonWrapper = styled.div`
  width: 100%;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const MiniButton = styled.button`
  cursor: pointer;
  border: none;
  width: 50%;
  line-height: 50px;
  background-color: #787ff6;
  color: white;
  border-radius: 10px;
`;
