export const teacherNav = [
  { key: "overview", label: "Dashboard Overview", to: "/teacher/overview", icon: "home" },
  { key: "lesson-plan", label: "Lesson Plan Generator", to: "/teacher/lesson-plan", icon: "spark" },
  { key: "question-paper", label: "Question Paper Generator", to: "/teacher/question-paper", icon: "doc" },
  { key: "answer-key", label: "Answer Key Generator", to: "/teacher/answer-key", icon: "check" },
  { key: "copy-checking", label: "AI Copy Checking", to: "/teacher/copy-checking", icon: "upload" },
  { key: "result-finalization", label: "Exam Result Finalization", to: "/teacher/result-finalization", icon: "users" },
  { key: "homework", label: "Homework Generator", to: "/teacher/homework", icon: "doc" },
  { key: "weak-topics", label: "Weak Topic Heatmap", to: "/teacher/weak-topics", icon: "chart" },
  { key: "attendance", label: "Attendance Management", to: "/teacher/attendance", icon: "users" }
];

export const principalNav = [
  { key: "analytics", label: "School Performance Analytics", to: "/principal/analytics", icon: "chart" },
  { key: "class-report", label: "Class-Wise Performance Report", to: "/principal/class-report", icon: "doc" },
  { key: "weak-students", label: "Weak Student Identification", to: "/principal/weak-students", icon: "flag" },
  { key: "teacher-productivity", label: "Teacher Productivity Report", to: "/principal/teacher-productivity", icon: "users" },
  { key: "report-card", label: "Report Card Generator", to: "/principal/report-card", icon: "doc" },
  { key: "term-compare", label: "Term Comparison Dashboard", to: "/principal/term-compare", icon: "chart" },
  { key: "calendar", label: "Academic Calendar Management", to: "/principal/calendar", icon: "calendar" }
];

export const parentNav = [
  { key: "overview", label: "Child Performance Overview", to: "/parent/overview", icon: "home" },
  { key: "marks", label: "Subject-Wise Marks Report", to: "/parent/marks", icon: "doc" },
  { key: "weak-areas", label: "Weak Area Report", to: "/parent/weak-areas", icon: "flag" },
  { key: "attendance", label: "Attendance Overview", to: "/parent/attendance", icon: "chart" },
  { key: "homework", label: "Homework Tracker", to: "/parent/homework", icon: "doc" },
  { key: "feedback", label: "Teacher Feedback Viewer", to: "/parent/feedback", icon: "check" },
  { key: "ptm", label: "PTM Notifications", to: "/parent/ptm", icon: "bell" },
  { key: "announcements", label: "School Announcements", to: "/parent/announcements", icon: "bell" },
  { key: "fees", label: "Fee Reminder Notifications", to: "/parent/fees", icon: "bell" },
  { key: "report-card", label: "Report Card Download", to: "/parent/report-card", icon: "download" }
];

export const studentNav = [
  { key: "overview", label: "Personal Performance Dashboard", to: "/student/overview", icon: "home" },
  { key: "progress", label: "Subject Progress Graph", to: "/student/progress", icon: "chart" },
  { key: "mistake", label: "AI Mistake Analyzer", to: "/student/mistake", icon: "spark" },
  { key: "practice", label: "Personalized Practice Generator", to: "/student/practice", icon: "doc" },
  { key: "quiz", label: "Topic-Based Quiz System", to: "/student/quiz", icon: "check" }
];

export function navForRole(roleKey) {
  if (roleKey === "teacher") return teacherNav;
  if (roleKey === "principal") return principalNav;
  if (roleKey === "parent") return parentNav;
  if (roleKey === "student") return studentNav;
  return [];
}

