import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled(TextField)({
  width: "75%",
  marginBottom: "20px",
  marginTop: "17px",
  fontSize: "13px",
  "& label.Mui-focused": {
    color: "#787ff6",
  },

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#787ff6",
    },
  },
});

export const AddButton = styled.button`
  cursor: pointer;
  width: 20%;
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

export const MiniButtonWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MiniButton = styled.button`
  cursor: pointer;
  border: none;
  width: 50%;
  margin-right: 10px;
  line-height: 50px;
  background-color: #787ff6;
  color: white;
  border-radius: 10px;
`;
