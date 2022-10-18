import axios, { AxiosError } from "axios";
import { IAuthParams } from "../types/auth";

export const signUp = async (params: IAuthParams) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_HOST}/auth/signup`,
      params
    );
    console.log("signUp api", data);
    return data.access_token;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      throw new Error(message);
    }
  }
};

export const signIn = async (params: IAuthParams) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_HOST}/auth/signin`,
      params
    );
    console.log("sign in api", data);
    return data.access_token;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      throw new Error(message);
    }
  }
};
