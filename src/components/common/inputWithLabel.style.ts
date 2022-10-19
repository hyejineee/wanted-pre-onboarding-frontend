import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const Wrapper = styled.div`
  width: 100%;
`;

export const InputWrapper = styled(TextField)({
  width: "100%",
  marginBottom: "20px",
  fontSize: "13px",
  "& label.Mui-focused": {
    color: "#787ff6",
  },

  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#787ff6",
    },
  },
  "#outlined-error-helper-text-helper-text": {
    color: "red",
  },
});

 