import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import SignupPage2 from "./pages/SignupPage2";
import CreatePwdPage from "./pages/CreatePwdPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import SignInPage from "./pages/SignInPage";
import ResetPwdPage from './pages/ResetPwdPage';
import ResetPwdPage2 from './pages/ResetPwdPage2';
import CreateNewPwdPage from "./pages/CreateNewPwdPage";
import ResetConfirmationPage from "./pages/ResetConfirmationPage";
import DashboardPage from "./pages/DashboardPage";
import CourseRegPage from "./pages/CourseRegPage";
import CoursesPage from "./pages/CoursesPage";
import TimetablePage from "./pages/TimetablePage";
import SignInLecturerPage from "./pages/SignInLecturerPage";
import LecturerDashboardPage from "./pages/LecturerDashboardPage";
import SignUpLecturerPage from "./pages/SignUpLecturerPage";
import SignUpLecturerPage2 from "./pages/SignUpLecturerPage2";
import LecturerCoursesPage from "./pages/LecturerCoursesPage";
import LecturerTimetablePage from "./pages/LecturerTimetablePage";

function App() {
    return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/signup2" element={<SignupPage2 />} />
                <Route path="/password" element={<CreatePwdPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/reset-password" element={<ResetPwdPage />} />
                <Route path="/reset-password2" element={<ResetPwdPage2 />} />
                <Route path="/create-new-password" element={<CreateNewPwdPage />} />
                <Route path="/reset-confirmation" element={<ResetConfirmationPage />} />
                <Route path="/student-dashboard" element={<DashboardPage />} />
                <Route path="/course-reg" element={<CourseRegPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/timetable" element={<TimetablePage />} />
                <Route path="/sign-in-lecturer" element={<SignInLecturerPage />} />
                <Route path="/lecturer-dashboard" element={<LecturerDashboardPage />} />
                <Route path="/signup-lecturer" element={<SignUpLecturerPage />} />
                <Route path="/signup-lecturer2" element={<SignUpLecturerPage2 />} />
                <Route path="/lecturer-courses" element={<LecturerCoursesPage />} />
                <Route path="/lecturer-timetable" element={<LecturerTimetablePage />} />
            </Routes>
        </Router>
    </>
    );
}

export default App;
