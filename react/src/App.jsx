import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import RoleShell from "./layout/RoleShell.jsx";

import TeacherOverview from "./pages/teacher/TeacherOverview.jsx";
import LessonPlanGenerator from "./pages/teacher/LessonPlanGenerator.jsx";
import QuestionPaperGenerator from "./pages/teacher/QuestionPaperGenerator.jsx";
import AnswerKeyGenerator from "./pages/teacher/AnswerKeyGenerator.jsx";
import CopyChecking from "./pages/teacher/CopyChecking.jsx";
import ExamResultFinalization from "./pages/teacher/ExamResultFinalization.jsx";
import HomeworkGenerator from "./pages/teacher/HomeworkGenerator.jsx";
import WeakTopicHeatmap from "./pages/teacher/WeakTopicHeatmap.jsx";
import AttendanceManagement from "./pages/teacher/AttendanceManagement.jsx";

import SchoolPerformanceAnalytics from "./pages/principal/SchoolPerformanceAnalytics.jsx";
import ClassWisePerformanceReport from "./pages/principal/ClassWisePerformanceReport.jsx";
import WeakStudentIdentification from "./pages/principal/WeakStudentIdentification.jsx";
import TeacherProductivityReport from "./pages/principal/TeacherProductivityReport.jsx";
import ReportCardGenerator from "./pages/principal/ReportCardGenerator.jsx";
import TermComparisonDashboard from "./pages/principal/TermComparisonDashboard.jsx";
import AcademicCalendarManagement from "./pages/principal/AcademicCalendarManagement.jsx";

import ParentOverview from "./pages/parent/ParentOverview.jsx";
import SubjectWiseMarksReport from "./pages/parent/SubjectWiseMarksReport.jsx";
import ParentWeakAreaReport from "./pages/parent/ParentWeakAreaReport.jsx";
import ParentAttendanceOverview from "./pages/parent/ParentAttendanceOverview.jsx";
import HomeworkTracker from "./pages/parent/HomeworkTracker.jsx";
import TeacherFeedbackViewer from "./pages/parent/TeacherFeedbackViewer.jsx";
import PTMNotifications from "./pages/parent/PTMNotifications.jsx";
import SchoolAnnouncements from "./pages/parent/SchoolAnnouncements.jsx";
import FeeReminderNotifications from "./pages/parent/FeeReminderNotifications.jsx";
import ParentReportCardDownload from "./pages/parent/ParentReportCardDownload.jsx";

import StudentOverview from "./pages/student/StudentOverview.jsx";
import SubjectProgressGraph from "./pages/student/SubjectProgressGraph.jsx";
import AIMistakeAnalyzer from "./pages/student/AIMistakeAnalyzer.jsx";
import PersonalizedPracticeGenerator from "./pages/student/PersonalizedPracticeGenerator.jsx";
import TopicBasedQuizSystem from "./pages/student/TopicBasedQuizSystem.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route path="/teacher" element={<RoleShell roleKey="teacher" />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<TeacherOverview />} />
        <Route path="lesson-plan" element={<LessonPlanGenerator />} />
        <Route path="question-paper" element={<QuestionPaperGenerator />} />
        <Route path="answer-key" element={<AnswerKeyGenerator />} />
        <Route path="copy-checking" element={<CopyChecking />} />
        <Route path="result-finalization" element={<ExamResultFinalization />} />
        <Route path="homework" element={<HomeworkGenerator />} />
        <Route path="weak-topics" element={<WeakTopicHeatmap />} />
        <Route path="attendance" element={<AttendanceManagement />} />
      </Route>

      <Route path="/principal" element={<RoleShell roleKey="principal" />}>
        <Route index element={<Navigate to="analytics" replace />} />
        <Route path="analytics" element={<SchoolPerformanceAnalytics />} />
        <Route path="class-report" element={<ClassWisePerformanceReport />} />
        <Route path="weak-students" element={<WeakStudentIdentification />} />
        <Route path="teacher-productivity" element={<TeacherProductivityReport />} />
        <Route path="report-card" element={<ReportCardGenerator />} />
        <Route path="term-compare" element={<TermComparisonDashboard />} />
        <Route path="calendar" element={<AcademicCalendarManagement />} />
      </Route>

      <Route path="/parent" element={<RoleShell roleKey="parent" />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<ParentOverview />} />
        <Route path="marks" element={<SubjectWiseMarksReport />} />
        <Route path="weak-areas" element={<ParentWeakAreaReport />} />
        <Route path="attendance" element={<ParentAttendanceOverview />} />
        <Route path="homework" element={<HomeworkTracker />} />
        <Route path="feedback" element={<TeacherFeedbackViewer />} />
        <Route path="ptm" element={<PTMNotifications />} />
        <Route path="announcements" element={<SchoolAnnouncements />} />
        <Route path="fees" element={<FeeReminderNotifications />} />
        <Route path="report-card" element={<ParentReportCardDownload />} />
      </Route>

      <Route path="/student" element={<RoleShell roleKey="student" />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<StudentOverview />} />
        <Route path="progress" element={<SubjectProgressGraph />} />
        <Route path="mistake" element={<AIMistakeAnalyzer />} />
        <Route path="practice" element={<PersonalizedPracticeGenerator />} />
        <Route path="quiz" element={<TopicBasedQuizSystem />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
