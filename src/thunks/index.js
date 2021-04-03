import { navigate } from "hookrouter";
import { getItemLS, addItemLS, handleLogin } from "../hooks/LocalStorage";
import { userExists } from "../middleware/UserExists";

export const login = async (data) => {
  const { email, password } = data;

  // Check if users exists
  const exists = await userExists(data, true);

  if (exists) {
    // Add user
    const user = await handleLogin(email, password);

    if (user) {
      addItemLS("user", user);
    }
  }
};

export const register = async (data) => {
  // Load users
  const users = await getItemLS("users");

  // Check if users exists
  const exists = !userExists(data);

  if (!exists) {
    // Add user
    addItemLS("users", [...users, data]);
    navigate("/");
  }
};
