import axios from "axios";
import { IAuthParams } from "../types/auth";

export const signUp = async (params: IAuthParams) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_HOST}/auth/signup`,
      params
    );
    console.log("sign in api", data);
  } catch (e) {
    console.log("signIn error", e);
  }
};
