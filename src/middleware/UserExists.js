import { getUser } from "../hooks/LocalStorage";

export const userExists = async (user) => {
  let data = await getUser(user["email"]);
  return data === undefined ? false : true;
};
