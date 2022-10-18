import axios from "axios";
import { IAuthParams } from "../types/auth";

export const signUp = async (params: IAuthParams) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_HOST}/auth/signup`,
      params
    );
    console.log("signUp api", data);
  } catch (e) {
    console.log("signUp error", e);
  }
};

export const signIn = async (params: IAuthParams) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_HOST}/auth/signin`,
      params
    );
    console.log("sign in api", data);
  } catch (e) {
    console.log("signIn error", e);
  }
};



