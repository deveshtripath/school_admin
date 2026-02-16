const ROLE_KEY = "schoolAdmin.role";

export function loadRole() {
  const value = String(localStorage.getItem(ROLE_KEY) || "").trim();
  return value || null;
}

export function saveRole(roleKey) {
  localStorage.setItem(ROLE_KEY, roleKey);
}

export function clearRole() {
  localStorage.removeItem(ROLE_KEY);
}

