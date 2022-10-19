import axios, { AxiosError } from "axios";
import { getFromLocal } from "../lib/localstorage";
import { ITodo } from "../types/todo";

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

    return data;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      throw new Error(message);
    }
  }
};

export const getTodos = async () => {
  const token = getFromLocal("accessToken");
  if (!token) return;

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_HOST}/todos`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.map((e: ITodo) => e);
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      throw new Error(message);
    }
  }
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  const token = getFromLocal("accessToken");
  if (!token) return;

  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_HOST}/todos/${id}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      throw new Error(message);
    }
  }
};

export const deleteTodo = async (id: number) => {
  const token = getFromLocal("accessToken");
  if (!token) return;

  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_HOST}/todos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;
      throw new Error(message);
    }
  }
};

