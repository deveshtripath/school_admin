export const ROLE = {
  teacher: "Teacher (Admin)",
  principal: "Principal / Management",
  parent: "Parent",
  student: "Student"
};

export const ROLE_KEYS = /** @type {const} */ (Object.keys(ROLE));

export const DEFAULT_ROUTE = {
  teacher: "/teacher/overview",
  principal: "/principal/analytics",
  parent: "/parent/overview",
  student: "/student/overview"
};

