import axiosClient from "../lib/axiosClient";
import { clearSession, saveSession } from "./authStorage";

const LOGIN_ENDPOINT = "/auth/v1/login";

/**
 * POST /auth/v1/login
 * Body: { email, password }
 * Success: data.data.access_token, data.data.user
 */
export async function login({ email, password, remember = true }) {
  const { data } = await axiosClient.post(LOGIN_ENDPOINT, { email, password });

  const token = data?.data?.access_token;
  const user = data?.data?.user;

  if (!token) {
    throw { message: "Login succeeded but no token was returned by the API." };
  }

  saveSession({ token, user, remember });
  return { token, user };
}

export function logout() {
  clearSession();
}

export { getCurrentUser, isAuthenticated, getToken } from "./authStorage";
