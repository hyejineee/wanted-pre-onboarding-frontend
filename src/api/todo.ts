import axios, { AxiosError } from "axios";
import { getFromLocal } from "../lib/localstorage";

export const createTodo = async (todo: string) => {
  const token = getFromLocal("accessToken");
  if (!token) return;
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_HOST}/todos`,
      { todo },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("createTodo api", data);
    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      throw new Error(message);
    }
  }
};
