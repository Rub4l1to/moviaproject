import { login, register } from "../components/thunks";

export const getItemLS = async (item) =>
  localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : [];

export const addItemLS = async (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const checkUser = (values, isLogin) => {
  if (!values.remember && isLogin) {
    values = { ...values, remember: false };
  }
  isLogin ? login(values) : register(values);
};

export const getUser = async (email) => {
  const users = await getItemLS("users");
  const user = users.find((element) => element.email === email);
  return user;
};

export const handleLogin = async (email, password) => {
  const users = await getItemLS("users");
  const user = users.find(
    (element) => element.email === email && element.password === password
  );
  return user ? { email } : null;
};
 