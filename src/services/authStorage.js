const TOKEN_KEY = "baazi_auth_token";
const USER_KEY = "baazi_auth_user";

function read(key) {
  return localStorage.getItem(key) ?? sessionStorage.getItem(key);
}

function write(key, value, remember) {
  const store = remember ? localStorage : sessionStorage;
  const other = remember ? sessionStorage : localStorage;
  other.removeItem(key);
  store.setItem(key, value);
}

export function getToken() {
  return read(TOKEN_KEY);
}

export function getCurrentUser() {
  const raw = read(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return Boolean(getToken());
}

export function saveSession({ token, user, remember = true }) {
  write(TOKEN_KEY, token, remember);
  if (user) write(USER_KEY, JSON.stringify(user), remember);
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);
}
